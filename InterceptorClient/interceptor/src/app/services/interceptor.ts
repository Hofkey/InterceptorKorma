import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse, HttpResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/empty' ;
import 'rxjs/add/operator/do';
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { ErrorModel } from './error-dialog/errorModel';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {

  error: ErrorModel;

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        if (event.url.includes('.asmx')) {
          const data = JSON.parse(event.body.d);
          if (data.IsError) {
            this.showErrorDialog(data, true);
            return null;
          } else {
            return data;
          }
        }
      }
    }, (err: any) => {
      if (err instanceof HttpErrorResponse) {
        return this.handleReqError(err);
      }
    });
  }

  private handleReqError(err: HttpErrorResponse): Observable<any> {
    this.showErrorDialog(err, false);

    return Observable.empty();
  }
  private showErrorDialog(err: any, isAsmx: boolean) {
    if (!isAsmx) {
      switch (err.status) {
        case 404:
          this.error.Message = 'De volgende pagina bestaat niet:\n' + err.url;
          this.error.Title = err.statusText;
          break;
        default:
          this.fillContents(this.error);
          break;
      }
    } else {
      this.error = err;
    }

    const config = {
      width: '500px',
      data: {'error': this.error}
    };

    const dialogRef = this.dialog.open(ErrorDialogComponent, config);

    dialogRef.afterClosed().subscribe(res => {
      return Observable.empty();
    });
  }

  private fillContents(err: any): void {
    this.error.Title = err.status;
    if (err.statusText === 'OK') {
      if (err.status !== 200) {
        this.error.Title = 'FOUT';
      }
      this.error.Message = err.error.Message;
    } else {
      this.error.Title = err.statusText;
      this.error.Message = err.message;
    }
  }
}

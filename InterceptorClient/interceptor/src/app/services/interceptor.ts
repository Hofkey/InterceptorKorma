import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/empty' ;
import { MatDialog } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor(private dialog: MatDialog) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(catchError((error, caught) => {
        return this.handleReqError(error);
    }) as any);
  }

  private handleReqError(err: HttpErrorResponse): Observable<any> {
    const config = {
      width: '500px',
      data: {'error': err}
    };

    const dialogRef = this.dialog.open(ErrorDialogComponent, config);

    dialogRef.afterClosed().subscribe(res => {
      return Observable.empty();
    });

    return Observable.empty();
  }
}

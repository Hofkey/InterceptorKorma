import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  error: HttpErrorResponse;
  errorTitle: string;
  errorMsg: string;

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public _error: any) {
                this.error = _error['error'];
              }

  ngOnInit() {
    switch (this.error.status) {
      case 404:
        this.errorMsg = 'De volgende pagina bestaat niet:\n' + this.error.url;
        this.errorTitle = this.error.statusText;
        break;
      default:
        this.fillContents(this.error);
        break;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

  fillContents(error: any) {
    if (this.error.statusText === 'OK') {
      if (this.error.status !== 200) {
        this.errorTitle = 'FOUT';
      }
      this.errorMsg = this.error.error.Message;
    } else {
      this.errorTitle = this.error.statusText;
      this.errorMsg = this.error.message;
    }
  }

}

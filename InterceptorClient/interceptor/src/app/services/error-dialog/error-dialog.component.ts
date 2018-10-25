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
  errorMsg: string;

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public _error: any) {
                this.error = _error['error'];
              }

  ngOnInit() {
    switch (this.error.status) {
      case 404:
        this.errorMsg = 'De volgende pagina bestaat niet:\n' + this.error.url;
        break;
      default:
        this.errorMsg = this.error.message;
        break;
    }
  }

  onClose() {
    this.dialogRef.close();
  }

}

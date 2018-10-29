import { Component, OnInit, Inject } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ThrowStmt } from '@angular/compiler';
import { ErrorModel } from './errorModel';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html',
  styleUrls: ['./error-dialog.component.css']
})
export class ErrorDialogComponent implements OnInit {

  error: ErrorModel;

  constructor(public dialogRef: MatDialogRef<ErrorDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public _error: any) {
                this.error = _error['error'];
              }

  ngOnInit() {
  }

  onClose() {
    this.dialogRef.close();
  }

}

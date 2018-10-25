import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { MatDialogModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent, httpInterceptorProviders } from './app.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './services/interceptor';
import { GenericService } from './services/generic.service';
import { ErrorDialogComponent } from './services/error-dialog/error-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [
    GenericService,
    { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
  ],
  entryComponents: [
    ErrorDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

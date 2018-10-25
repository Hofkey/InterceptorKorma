import { Component } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

import { Interceptor } from './services/interceptor';
import { GenericService } from './services/generic.service';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: Interceptor, multi: true }
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private genericService: GenericService) { 
    }

  ngOnInit() { 
    this.genericService.get().then((data) => { console.log('went through'); });
  }
}

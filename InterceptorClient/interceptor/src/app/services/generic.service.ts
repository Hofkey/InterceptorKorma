import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GenericService {

  constructor(private http: HttpClient) {
  }

  get(): Promise<any[]> {
    return this.http.get<any[]>('http://localhost:4200/wwww', { responseType: 'json' })
                    .toPromise()
                    .then(data => data);
  }
  getById(id: number): Promise<any> { return null; }
  post(model: any): void {}
  put(id: number, model: any): void {}
  delete(id: number): void {}
}

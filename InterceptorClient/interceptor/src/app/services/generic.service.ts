import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GenericService {

  constructor(private http: HttpClient) {
  }

  get(): Promise<any[]> {
    //const headers = new HttpHeaders({'conent-type' : 'application/json', 'Access-Control-Allow-Origin' : '*'});

    return this.http.get<any[]>('http://localhost:50040/api/values', { responseType: 'json'})
                    .toPromise()
                    .then(data => data);
  }
  getById(id: number): Promise<any> { return null; }
  post(model: any): void {}
  put(id: number, model: any): void {}
  delete(id: number): void {}
}

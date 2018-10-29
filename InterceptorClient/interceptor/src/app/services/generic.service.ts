import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class GenericService {

  constructor(private http: HttpClient) {
  }

  get(): Promise<any[]> {
    const headers = new HttpHeaders({'conent-type' : 'application/json'});


    return this.http.post<any[]>('http://localhost:61973/InterceptorService.asmx/HelloWorld', { headers: headers})
                    .toPromise()
                    .then(data => data);
  }
  getById(id: number): Promise<any> { return null; }
  post(model: any): void {}
  put(id: number, model: any): void {}
  delete(id: number): void {}
}

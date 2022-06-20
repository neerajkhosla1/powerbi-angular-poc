import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) { }

  readFile() {
    debugger
    let url = 'http://powerbi.customerdemourl.com/acesstoken.json';
    //let url = 'http://localhost:4200/assets/acesstoken.json';

    return this.http.get(url);
  }
}

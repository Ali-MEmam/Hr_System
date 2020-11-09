import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HrTestService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient,) { }

  postFirstContactTest(obj): Observable<any> {
    return this.http.post(this.baseUrl+"tests",obj);
   }
  postHrTest(obj): Observable<any> {
    return this.http.post(this.baseUrl+"tests",obj);
   }
  postTechnicalTest(obj): Observable<any> {
    return this.http.post(this.baseUrl+"tests",obj);
   }

}

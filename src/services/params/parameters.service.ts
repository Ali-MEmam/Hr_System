import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParametersService {

  constructor(private http:HttpClient) { }
  baseUrl =environment.baseURl;



  setParams(obj): Observable<any> {
    return this.http.put(this.baseUrl+'params',obj);
   }

  getParams(): Observable<any> {
    return this.http.get(this.baseUrl+'params');
   }
   
}

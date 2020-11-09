import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobScreeningDetailsService {

  baseUrl =environment.baseURl;
  constructor(private http:HttpClient) { }
  getjobDetails(id: any): Observable<any> {
    return this.http.get(this.baseUrl+'jobDeatils'+ '/' + id);
  }
}

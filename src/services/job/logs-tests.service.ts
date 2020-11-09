import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class logsTestsService {
  baseUrl =environment.baseURl;
  
  constructor(private http:HttpClient) { }
  id

  getAlltests(): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl+'tests/');
  }
  addtest(JobObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.post(this.baseUrl+'tests/',JobObj);
  }
  Edittest(JobObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.put(this.baseUrl+'tests/'+JobObj.id, JobObj);
  }
  deletetest(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.delete(this.baseUrl+'tests/'+id);
  }

}

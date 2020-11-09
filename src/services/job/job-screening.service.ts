import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobScreeningService {
  baseUrl =environment.baseURl;
  constructor(private http:HttpClient) { }
  getAllJobScreening(): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl+'screening/');
  }

  deleteJobScreening(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.delete(this.baseUrl+'screening/'+id);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListOfMeetingService {
  baseUrl =environment.baseURl;

  constructor(private http:HttpClient) { }
  
  getAllTestForCandidate(): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl+'tests');
  }
 
} 

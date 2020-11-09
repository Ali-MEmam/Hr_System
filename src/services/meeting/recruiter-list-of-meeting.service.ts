import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable({
  providedIn: 'root'
})
export class RecruiterListOfMeetingService {


  baseUrl =environment.baseURl;
  constructor(private http:HttpClient) { }
  
  getAllTestForRecruiter(): Observable<any> {
    // Real End Point => tests/find/recruiter
    return this.http.get(this.baseUrl+'recruiterListOfMeeting');
  }

}

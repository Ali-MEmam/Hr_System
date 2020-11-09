import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResruiterAssessmentService {

  baseUrl =environment.baseURl;
  constructor(private http:HttpClient) { }
  
  getAllAssessmentForRecruiter(): Observable<any> {
    // Real End Point => tests/find/recruiter
    return this.http.get(this.baseUrl+'recruiterAssessments/');
  }

}

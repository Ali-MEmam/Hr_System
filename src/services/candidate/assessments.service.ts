import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AssessmentsService {

  baseUrl = environment.baseURl;


  /*  not the real id_candidate */
  id_candidate= 30;

  

  constructor(private http:HttpClient,) { }

  /* post info of candidte in register to get  candidate info and id_candidate  as :  _id */
 /*  getCandidate(candidateInfo){
    return this.http.post(this.baseUrl+'candidates/register', candidateInfo);
  } */

  getCandidateTestAssessments(){
    return this.http.get("http://localhost:3000/assessments");
    "this.baseUrl+'tests/recruiter/candidate/passed/{id_candidate}"
    //get candidates tests assessments
   }

   getUser(){
    return this.http.get("http://localhost:3000/users/" + this.id_candidate);
    "this.baseUrl+'tests/findall/candidate/passed'"
   }

   getFirtContactTest(){
    return this.http.get("http://localhost:3000/passedTests/1");
   }

   getTecnical(){
    return this.http.get("http://localhost:3000/passedTests/2");
   }
}

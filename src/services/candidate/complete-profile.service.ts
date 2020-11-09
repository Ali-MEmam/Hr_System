import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class CompleteProfileService {
  baseUrl = environment.baseURl;
  FormData;
  id = 1;

  constructor(private http: HttpClient) {}
  public sidebarChart = new BehaviorSubject(0);
  updatedSidebarChart = this.sidebarChart.asObservable();

  updatedProfileCandidate(FormInfo): Observable<any> {
    return this.http.patch(this.baseUrl + "candidate/" + this.id, FormInfo);
  }

/* -------------------------------------------------------------------------- */
/*                      Compelete User Information Step 1                     */
/* -------------------------------------------------------------------------- */
  CompeleteCandidateInformation(CandidateInfo ,id): Observable<any>{
    return this.http.patch(this.baseUrl + "users/" + id,CandidateInfo)
  }
  getCandidateInformation(id): Observable<any>{
    
    return this.http.get(this.baseUrl + "users/" + id);
  }
  
  getProfileCandidate(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl + "users/" + id);

    // return this.http.get(this.baseUrl + "candidate/" + id);
  }

  addProfileCandidate(createdData): Observable<any> {
    console.log(createdData);

    return this.http.post(
      this.baseUrl + "candidate/" + createdData.id,
      createdData
    );
  }
  // getCandidateById(id: any): Observable<any> {
  //   console.log(this.http.get(this.baseUrl+'candidate'+ '/' + id));

  //   return this.http.get(this.baseUrl+'candidate'+ '/' + id);
  // }
  editProfileCandidate(FormInfo , id): Observable<any> {
    return this.http.patch(this.baseUrl + "users/" + id, FormInfo);
  }
}

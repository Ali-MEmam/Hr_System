
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class ProfileService {
  baseUrl = environment.baseURl;
  FormData;

  // profileInfo: number;
  public sidebarChart = new BehaviorSubject(0);
  updatedSidebarChart = this.sidebarChart.asObservable();
  constructor(private http: HttpClient) { }


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
  editProfileCandidate(FormInfo): Observable<any> {
    return this.http.patch(this.baseUrl + "users/" + FormInfo.id, FormInfo);
  }

}

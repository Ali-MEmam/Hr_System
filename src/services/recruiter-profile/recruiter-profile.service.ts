import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable, BehaviorSubject } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: "root",
})
export class RecruiterProfileService {
  baseUrl = environment.baseURl;
  FormData;
  id = 1;

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  public sidebarChart = new BehaviorSubject(0);
  updatedSidebarChart = this.sidebarChart.asObservable();

  updatedProfileCandidate(FormInfo): Observable<any> {
    return this.http.patch("http://localhost:3000/" + "candidate/" + this.id, FormInfo);
  }

  /* -------------------------------------------------------------------------- */
  /*                      Compelete User Information Step 1                     */
  /* -------------------------------------------------------------------------- */
  CompeleteCandidateInformation(CandidateInfo, id): Observable<any> {
    return this.http.patch("http://localhost:3000/" + "users/" + id, CandidateInfo)
  }
  getCandidateInformation(id): Observable<any> {

    return this.http.get("http://localhost:3000/" + "users/" + id);
  }

  getProfileCandidate(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get("http://localhost:3000/" + "users/" + id);

    // return this.http.get("http://localhost:3000/" + "candidate/" + id);
  }

  addProfileCandidate(createdData): Observable<any> {
    console.log(createdData);

    return this.http.post(
      "http://localhost:3000/" + "candidate/" + createdData.id,
      createdData
    );
  }

  // editProfileCandidate(FormInfo, id): Observable<any> {
  //   return this.http.patch("http://localhost:3000/" + "users/" + id, FormInfo);
  // }

  /* -------------------------------------------------------------------------- */
  /*                      Compelete User Information Step 1                     */
  /* -------------------------------------------------------------------------- */


  getProfileCompany(id): Observable<any> {
    return this.http.get(this.baseUrl + '/Company/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  editProfileCompany(FormInfo): Observable<any> {
    return this.http.put(this.baseUrl + '/Company/update', FormInfo ,
      { headers: this.createAuthorizationHeader()})
      .pipe(
        catchError(this.auth.handleError),
      );
  }
  /* -------------------------------------------------------------------------- */
  /*                            profile image                                   */
  /* -------------------------------------------------------------------------- */

  AddProdfileImage(FormInfo): Observable<any> {
    return this.http.post(this.baseUrl + '/image/add', FormInfo ,
      { headers: this.createAuthorizationHeader()})
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getProdfileImage(id): Observable<any> {
    return this.http.get(this.baseUrl + '/image/find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  private createAuthorizationHeader() {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("token"));
    return headers;
  }

}


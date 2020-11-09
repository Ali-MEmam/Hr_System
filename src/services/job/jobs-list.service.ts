import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";
@Injectable({
  providedIn: 'root'
})
export class JobListService {
  baseUrl = environment.baseURl+"/jobs/" ;

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) {
    this.getCompanyId();
  }
  id
  companyId;
  getCompanyId() {
    this.companyId = window.sessionStorage.getItem("CompanyId")
    console.log(this.companyId)
  }
  getAllJobs(): Observable<any> {
    console.log(this.companyId)
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl + 'findall',
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  addJob(JobObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.post(this.baseUrl + 'add', JobObj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  EditJob(id,JobObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.put(this.baseUrl + "change" + "/" + id, JobObj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteJob(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.delete(this.baseUrl + 'remove/' + id,
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
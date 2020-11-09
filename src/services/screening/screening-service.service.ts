import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ScreeningServiceService {

  baseUrl =environment.baseURl;

  // baseUrl = "http://vmi288821.contaboserver.net:8184/screenings/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getTestsList(): Observable<any> {
    return this.http.get(this.baseUrl + 'tests');
  }

  getJobCriteria(): Observable<any> {
    return this.http.get(this.baseUrl + 'jobCriteria');
  }

  getJobCriteriaData(): Observable<any> {
    return this.http.get(this.baseUrl + 'criteria');
  }

  addScreening(screenObj): Observable<any> {
    return this.http.post(this.baseUrl + 'screening/', screenObj);
  }

  // addScreening(screenObj): Observable<any> {
  //   return this.http.post(this.baseUrl + "add",
  //     { headers: this.createAuthorizationHeader() })
  //     .pipe(
  //       catchError(this.auth.handleError),
  //     );
  // }

  private createAuthorizationHeader() {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("token"));
    return headers;
  }


}



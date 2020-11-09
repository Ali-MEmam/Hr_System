import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";


@Injectable({
  providedIn: 'root'
})


export class LogsService {
  // baseUrl = environment.baseURl;
  baseUrl = environment.baseURl + "/activity/";


  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAllLogs(type): Observable<any> {
    return this.http.get(this.baseUrl + 'findall/' + type,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getLogById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'findall/id/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getLogByUser(): Observable<any> {
    return this.http.get(this.baseUrl + 'find/user',
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  addLogs(logsObj): Observable<any> {
    return this.http.post(this.baseUrl + 'logs/', logsObj);
  }

  deleteLog(id): Observable<any> {
    return this.http.delete(this.baseUrl + "logs/" + id);
  }

  private createAuthorizationHeader() {
    const headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("token"));
    return headers;
  }

}

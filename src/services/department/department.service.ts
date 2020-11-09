import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})


export class DepartmentService {

  baseUrl = environment.baseURl + '/departments/';

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getDepartment(): Observable<any> {
    return this.http.get(this.baseUrl + 'findall',
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getDepartmentId(id): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  addDepartment(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'add', obj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  editDepartment(obj): Observable<any> {
    return this.http.put(this.baseUrl + 'change/' + obj.id, obj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteDepartment(id): Observable<any> {
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

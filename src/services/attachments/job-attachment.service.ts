import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class JobAttachmentService {
  baseUrl =environment.baseURl + "/attachment/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAttachment(id): Observable<any> {
    return this.http.get(this.baseUrl + 'findall/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  addAttachment(id, obj): Observable<any> {
    return this.http.post(this.baseUrl + 'add/' + id, obj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteAttachment(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.delete(this.baseUrl + 'remove/' + id ,
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

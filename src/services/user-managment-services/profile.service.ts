import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class ProfileService {

  baseUrl = environment.baseURl + "/profiles/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getProfiles(): Observable<any> {
    return this.http.get(this.baseUrl + 'findall',
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getProfileById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  createProfile(profile): Observable<any> {
    return this.http.post(this.baseUrl + 'add', profile,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  updateProfile(profileId,profile): Observable<any> {
    return this.http.put(this.baseUrl + 'update/' + profileId, profile,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteProfile(id: number) {
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

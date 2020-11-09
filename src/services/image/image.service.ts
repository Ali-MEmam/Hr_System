import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  baseUrl = environment.baseURl + '/image/';

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  addImage(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'add', obj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }


  getImage(typeId): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + typeId,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteImage(typeId): Observable<any> {
    return this.http.delete(this.baseUrl + 'remove/' + typeId,
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

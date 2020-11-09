import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment.test';
import { Observable } from "rxjs";
import { AuthService } from 'services/core-services/authentication-services/auth.service';
import { catchError, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})

export class JobNotesService {
  baseUrl = environment.baseURl+"/notes/" ;

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAllNotes(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.get(this.baseUrl + 'findall/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getNotesId(id): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  addNote(id,noteObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.post(this.baseUrl + "add/" + id, noteObj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteNote(id): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.delete(this.baseUrl + 'remove/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  editNote(id,noteObj): Observable<any> {
    // Real End Point => tests/find/candidate
    return this.http.put(this.baseUrl + 'change/' + id, noteObj,
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

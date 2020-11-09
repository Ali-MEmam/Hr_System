import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.test';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  baseUrl = environment.baseURl + "/tasks/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getTasks(username): Observable<any> {
    return this.http.get(this.baseUrl + 'findall/' + username,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getTaskById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  createTask(Task): Observable<any> {
    return this.http.post(this.baseUrl + 'add', Task,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  updateTask(id, Task): Observable<any> {
    return this.http.put(this.baseUrl + 'change/' + id, Task,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteTask(id: number) {
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

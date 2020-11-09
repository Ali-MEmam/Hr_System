import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../../environments/environment.test';
import { BehaviorSubject } from "rxjs"
import { Observable } from "rxjs";
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

@Injectable({
  providedIn: "root",
})

export class CriteriaService {
  private jobId = new BehaviorSubject<any>("");
  currentJobId = this.jobId.asObservable();
  currentJob;

  sendJobId(id) {
    console.log("system");
    console.log(id);
    this.jobId.next(id);
  }

  baseUrl = environment.baseURl+"/job_criteria/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getAllCriteria(): Observable<any> {
    return this.http.get(this.baseUrl + 'criteria');
  }

  addCriteria(obj): Observable<any> {
    return this.http.post(this.baseUrl + 'add', obj,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getcriteriaDetails(id: any): Observable<any> {
    return this.http.get(this.baseUrl + "find/" + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  editcriteriaDetails(id: any, editObj): Observable<any> {
    return this.http.put(this.baseUrl + "change/" + id, editObj,
    { headers: this.createAuthorizationHeader() })
    .pipe(
      catchError(this.auth.handleError),
    );
  }

  deleteCriteria(id): Observable<any> {
    return this.http.delete(this.baseUrl + "remove/" + id,
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

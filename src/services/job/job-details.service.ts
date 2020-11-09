import { log } from 'util';
import { id } from '@swimlane/ngx-datatable';
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
export class JobDetailsService {
  private jobId = new BehaviorSubject<any>("");
  currentJobId = this.jobId.asObservable();

  sendJobId(id) {
    console.log("system");
    console.log(id);
    this.jobId.next(id);
  }

  baseUrl =  environment.baseURl+"/jobs/";

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }

  getjobDetails(id: any): Observable<any> {
    return this.http.get(this.baseUrl + "find" + "/" + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  editjobDetails(id: any, editObj): Observable<any> {
    return this.http.put(this.baseUrl + "change" + "/" + id, editObj,
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

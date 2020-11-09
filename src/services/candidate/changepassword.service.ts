
import {User} from '../../models/user-managment-models/UserRequest';
import {environment} from '../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";


@Injectable({
  providedIn: 'root' 
})
export class ChangepasswordService {
  users: User[] = new Array<User>();
  baseUrl = "http://vmi288821.contaboserver.net:8184";
    source = [];

    constructor(private http: HttpClient,
      private auth: AuthService,
    ) {
      this.getCompanyId();
    }
    id
    companyId;
    getCompanyId() {
      this.companyId = window.sessionStorage.getItem("CompanyId")
      console.log(this.companyId)
    }

   changePassword(changedPswd){
    console.log(changedPswd)
    return this.http.put(this.baseUrl + '/password/change', changedPswd,
    { headers: this.createAuthorizationHeader() })
    .pipe(
      catchError(this.auth.handleError),
    )
  }
  getOldPassword(){
   return this.http.get(this.baseUrl + 'changepswd')
 }

 private createAuthorizationHeader() {
  const headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("token"));
  return headers;
}
}
 
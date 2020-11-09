import { Injectable, Input, PipeTransform } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { User } from '../../models/user-managment-models/UserRequest';
import { debounceTime, delay, switchMap } from 'rxjs/operators';
import { DecimalPipe } from '@angular/common';
import { environment } from '../../environments/environment.test';
import { catchError, tap } from "rxjs/operators";
import { AuthService } from "services/core-services/authentication-services/auth.service";

// import {USERS} from '../../app/business-components/user-managment-components/components/list-users/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // users: User[] = new Array<User>();
  // source = [];

  baseUrl = environment.baseURl + "/users/";

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private http: HttpClient,
    private auth: AuthService,
  ) { }


  //Members
  getMembers(): Observable<any> {
    return this.http.get(this.baseUrl + 'findall',
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  getMemberById(id: any): Observable<any> {
    return this.http.get(this.baseUrl + 'find/' + id,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  createMember(member) {
    return this.http.post(this.baseUrl + 'add', member,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  inviteMember(member) {
    return this.http.post(this.baseUrl + 'invite', member,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  updateMember(id, member): Observable<any> {
    return this.http.put(this.baseUrl + 'update/' + id, member,
      { headers: this.createAuthorizationHeader() })
      .pipe(
        catchError(this.auth.handleError),
      );
  }

  deleteMember(id) {
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


  // //Users
  // getUsers(): Observable<any> {
  //   return this.http.get(this.baseUrl + 'users');
  // }


  // login(loginPayload) {
  //   const headers = {
  //     'Authorization': 'Basic ' + btoa('devglan-client:devglan-secret'),
  //     'Content-type': 'application/x-www-form-urlencoded',
  //   }
  //   // return this.http.post('http://localhost:3000/login' + 'oauth/token', loginPayload, {headers});
  // }

  // getUserById(id: any): Observable<any> {
  //   return this.http.get(this.baseUrl + 'users' + '/' + id);
  // }

  // createUser(user) {
  //   return this.http.post(this.baseUrl + 'users', user);
  // }

  // updateUser(user): Observable<any> {
  //   console.log(user)
  //   return this.http.put(this.baseUrl + 'users/' + user.id, user);
  // }

  // deleteUser(id) {
  //   return this.http.delete(this.baseUrl + 'users' + '/' + id);
  // }

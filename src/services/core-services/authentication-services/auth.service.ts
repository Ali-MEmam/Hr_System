import { Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject } from "rxjs";
import { userToken } from "app/shared/models/userToken";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from '../../../environments/environment.test';



@Injectable({ providedIn: "root" })
export class AuthService {
  user = new BehaviorSubject<userToken>(null);
  token: any;
  baseUrl = environment.baseURl;
  helper = new JwtHelperService();
  private tokenExpirationTimer: any;
  constructor(private http: HttpClient, private router: Router) {
    this.autoLogin();
    this.autologout();
   }
  /* -------------------------------------------------------------------------- */
  /*                   Register Function And Return The Token                   */
  /* -------------------------------------------------------------------------- */

  signupUserAsCandiate(
    username: string,
    password: string,
    confirmPassword: string,
    domin: string,
    phoneNumber: number,
    email: string,
  ) {
    //your code for signing up the new user
    return this.http
      .post(`${this.baseUrl}users`, {
        "username": username,
        "password": password,
        "confirmPassword": confirmPassword,
        "domin": domin,
        "phoneNumber": phoneNumber,
        "email": email,
        "about": "",
        "first_name": "",
        "last_name": "",
        "job_title": "",
        "birth_date": "",
        "experience": "",
        "current_salary": "",
        "expected_salary_max": "",
        "expected_salary_min": "",
        "education_level": "",
        "language": "",
        'description': "",
        "country": "",
        "city": "",
        "address": '',
        "website": "",
        "profile_image": "",
        "social_networks": {
          "facebook": "",
          "linkedin": ""
        }
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthcation(resData["access_token"]);
        })
      );
  }
  signupUserRecruiter(
    company: string,
    password: string,
    confirmPassword: string,
    // domin: string,
    // phoneNumber: number,
    email: string
  ) {
    var obj = {
      "email": email,
      "company_name": company,
      "password": password,
      "repeat_password": confirmPassword,
      "phone_number": "0630971199",
    }
    console.log(obj);
    //your code for signing up the new user
    return this.http
      .post(this.baseUrl + '/Company/register',
        // .post(`${this.baseUrl}users`,
        {
          "email": email,
          "company_name": company,
          "password": password,
          "repeat_password": confirmPassword,
          "phone_number": "0630971199",
        })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          this.handleAuthcation(resData["access_token"]);
        })
      );
  }

  /* -------------------------------------------------------------------------- */
  /*                     Login Function And Return The Token                    */
  /* -------------------------------------------------------------------------- */

  signinUserAsCandiate(username: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    return this.http
      .post(this.baseUrl + `/auth/login`, {
        username: username,
        password: password
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log(resData["access_token"])
          this.handleAuthcation(resData["access_token"]);
        })
      );
  }
  signinUserAsRecruiter(username: string, password: string) {
    //your code for checking credentials and getting tokens for for signing in user
    return this.http
      .post(this.baseUrl + `/auth/login`, {
        username: username,
        password: password
      })
      .pipe(
        catchError(this.handleError),
        tap((resData) => {
          console.log(resData["access_token"])
          this.handleAuthcation(resData["access_token"]);
        })
      );
  }

  autoLogin() {    
    // setTimeout(() => {
      //  let username = sessionStorage.getItem("username");
      //  let password = sessionStorage.getItem("password");
      //   this.http.post(this.baseUrl + `/auth/login`, {
      //   username: username,
      //   password: password
    // }, 6000);
    // const userData: {
    //   _token: string;
    //   _tokenExpirationDate: string;
    // } = JSON.parse(sessionStorage.getItem("token"));
    // if (!userData) {
    //   return;
    // }
    // const loadedUser = new userToken(
    //   userData._token,
    //   new Date(userData._tokenExpirationDate)
    // );
    // if (loadedUser.token) {
    //   console.log(
    //     (new Date(userData._tokenExpirationDate).getTime() -
    //       new Date().getTime()) /
    //     60000
    //   );
    //   this.user.next(loadedUser);
    //   this.autoLogout(
    //     new Date(userData._tokenExpirationDate).getTime() - new Date().getTime()
    //   );
    // }
  }
  autologout(){
    setTimeout(() => {
      const token = sessionStorage.getItem("token");
      if(!this.helper.isTokenExpired(token)){

      }else{
        this.router.navigate([""]);
        sessionStorage.removeItem("token");
      }
    }, 6000);
  }
  /* -------------------------------------------------------------------------- */
  /*                     Logout Function TO remove The Token                    */
  /* -------------------------------------------------------------------------- */

  logout() {
    this.user.next(null);
    return this.http.delete(this.baseUrl + `/auth/logout`,
      { headers: this.Headerlogout() })
      .pipe(
        catchError(this.handleError)
      );
  }
  removelogoutToken() {
    return this.http.delete(this.baseUrl + `/auth/refresh_revoke`,
      { headers: this.HeaderremovelogoutToken() })
      .pipe(
        catchError(this.handleError)
      );
  }
  autoLogout() {
    setTimeout(() => {
      this.logout();
      this.removelogoutToken();
    }, 1800000);
  }
  // autoLogout(expirationDate: number) {
  //   this.tokenExpirationTimer = setTimeout(() => {
  //     this.logout();
  //   }, expirationDate);
  // }
  

  /* -------------------------------------------------------------------------- */
  /*                             send headers with token                        */
  /* -------------------------------------------------------------------------- */

  private HeaderremovelogoutToken() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("refresh_token"));
    return headers;
  }
  private Headerlogout() {
    let headers = new HttpHeaders().set("Authorization", "Bearer " + window.sessionStorage.getItem("token"));
    return headers;
  }

  /* -------------------------------------------------------------------------- */
  /*         IsAuthenticated Function For Guard To return True Or false         */
  /* -------------------------------------------------------------------------- */

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    if (window.sessionStorage.getItem("token")) {
      return true;
    }
    return false;
  }

  /* -------------------------------------------------------------------------- */
  /*         Because Json Server Auth Not Responsed With Id And Email           */
  /* -------------------------------------------------------------------------- */

  handleAuthcation(token) {
    let oldTime = new Date();
    let tokenExpirationDate = new Date(oldTime.getTime() + 60 * 60000);
    const userTokenAndTime = new userToken(token, tokenExpirationDate);
    this.user.next(userTokenAndTime);
    // this.autoLogout(tokenExpirationDate.getTime() - new Date().getTime());
    // sessionStorage.setItem("token", JSON.stringify(userTokenAndTime));
    sessionStorage.setItem("token", token);
  }

  /* -------------------------------------------------------------------------- */
  /*             Handling The Responsed Error In login And Register             */
  /* -------------------------------------------------------------------------- */

  handleError(errorRes: HttpErrorResponse) {
    let ErrorMessage = "An unkown error occurred!";
    if (!errorRes.error) {
      return throwError(ErrorMessage);
    }
    switch (errorRes.error) {
      case "Email format is invalid":
        ErrorMessage = "This email is exists";
        break;
      case "Cannot find user":
        ErrorMessage = "Can't find User Please Try Again";
        break;
      case "Incorrect password":
        ErrorMessage = "Wrong Password";
        break;
    }
    return throwError(ErrorMessage);
  }
}

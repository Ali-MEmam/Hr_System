import { log } from 'util';
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "services/core-services/authentication-services/auth.service";
import { ToastrService } from "ngx-toastr";
import { RecruiterProfileService } from 'services/recruiter-profile/recruiter-profile.service';
import { Subscription } from "rxjs";


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  isAuthenticated = false;
  loginForm: FormGroup;
  invalidLogin: boolean = false;
  isLoading = false;
  stateInputUsername: Object;
  stateInputPassword: Object;
  userType = "candidate";
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  registerUserName;
  companyId;
  profileData;
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private router: Router,
    private RecruiterProfileService: RecruiterProfileService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private http: HttpClient,
    private auth: AuthService,
    private toaster: ToastrService
  ) {
  }

  /* -------------------------------------------------------------------------- */
  /*                      Get Usernamr  &&Company ID                            */
  /* -------------------------------------------------------------------------- */

  getUserNameFirstTime() {
    this.registerUserName = sessionStorage.getItem("UserName");
  }

  getCompanyId() {
    this.companyId = sessionStorage.getItem("CompanyId");
  }

  /* -------------------------------------------------------------------------- */
  /*                              NgOnint LifeCycle                             */
  /* -------------------------------------------------------------------------- */
  employerId = document.getElementById("employer");
  candiateId = document.getElementById("candidate");

  ngOnInit() {
    this.getUserNameFirstTime();
    this.getCompanyId();

    // window.sessionStorage.removeItem('token')
    this.userSub = this.auth.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });

    // if (this.isAuthenticated) {
    //   this.router.navigate(["pages/recruiter"], { relativeTo: this.route.parent });
    // }
    //  if(window.sessionStorage.getItem('token')){
    //   this.router.navigate(['pages/recruiter'], {relativeTo: this.route.parent});
    // }
    /* -------------------------- loginForm Validation -------------------------- */

    this.loginForm = this.formBuilder.group({
      username: ["", Validators.compose([Validators.required])],
      password: ["", Validators.required],
      userType: [null],
    });
    if(sessionStorage.getItem("usertype") === "recruiter"){
      this.employerId.classList.add("active");
      this.candiateId.classList.remove("active");
    }
    // On Forgot password link click
    /*onForgotPassword() {
      this.router.navigate(['forgotpassword'], { relativeTo: this.route.parent });
    }
    // On registration link click
    onRegister() {
      this.router.navigate(['register'], { relativeTo: this.route.parent });
    }*/
  }


  /* -------------------------------------------------------------------------- */
  /*                               Submit TO Login                              */
  /* -------------------------------------------------------------------------- */

  onSubmit(login) {
    const username = login.value.username;
    const password = login.value.password;
    const user = this.loginForm.value.userType;
    // this.userType = user;
    if (username === "") {
      this.stateInputUsername = { "border-color": "red" };
    }
    if (this.loginForm.invalid) {
      return;
    }
    this.isLoading = true;

    /* ------------------------ Checking For Type Of User ----------------------- */

    if (this.userType === "candidate") {
      //Sign In As Candiate
      this.auth.signinUserAsCandiate(username, password).subscribe(
        (data) => {
          this.router.navigate(["candidate/pages/" + this.tokenTransform() + "/dashboard"], {
            relativeTo: this.route.parent,
          });
          this.isLoading = false;
        },
        (errorMessage) => {
          this.toaster.error(errorMessage, "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          this.isLoading = false;
        }
      );
    } else {
      //Sing In As Recuriter
      this.auth.signinUserAsRecruiter(username, password).subscribe(
        (data) => {
          console.log(data);
          sessionStorage.setItem("username", username);
          sessionStorage.setItem("token", data["access_token"]);
          sessionStorage.setItem("refresh_token", data["refresh_token"]);
          sessionStorage.setItem("id", data["id"]);
          sessionStorage.setItem("CompanyId", data["id_company"]);

          // get data from api
          this.RecruiterProfileService.getProfileCompany(this.companyId).subscribe(response => {
            this.profileData = response;
            //      this.router.navigate(["complete-Register", 'step1', this.companyId], {
            //     relativeTo: this.route.parent
            //   });
            if (!response.address) {
              this.router.navigate(["complete-Register", 'step1', this.companyId], {
                relativeTo: this.route.parent
              });
            }else if (response.address){
              this.router.navigate(["pages", 'recruiter' , 'mydashboard']);
            }
          }, error => {
            this.router.navigate(["pages", 'recruiter' , 'mydashboard']);
          })

          this.isLoading = false;

        },
        (errorMessage) => {
          this.toaster.error(errorMessage, "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          this.isLoading = false;
        }
      );
      this.auth.autoLogin();
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                                  User Types                                */
  /* -------------------------------------------------------------------------- */

  userCandiate(candiate, empolyer) {
    candiate.classList.add("active");
    empolyer.classList.remove("active");
    this.userType = "candidate";
  }
  userEmployer(empolyer, candiate) {
    empolyer.classList.add("active");
    candiate.classList.remove("active");
    this.userType = "employer";
  }

  /* -------------------------------------------------------------------------- */
  /*                              Token Transformer                             */
  /* -------------------------------------------------------------------------- */
  tokenTransform() {
    return window.sessionStorage.getItem("token")
  }
  /* -------------------------------------------------------------------------- */
  /*                             NgDestroy LifeCycle                            */
  /* -------------------------------------------------------------------------- */

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
}

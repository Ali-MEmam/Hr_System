import { Component, OnInit, OnDestroy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "services/core-services/authentication-services/auth.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { MustMatch } from '../../../../services/helpers.service';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { log } from 'util';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { UserService } from 'services/user-managment-services/user.service';

// import { ConfirmPasswordValidator } from './confirm-password.validator'; 

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit, OnDestroy {
  private userSub: Subscription;
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  recruiterFieldTextType: boolean;
  recruiterRepeatFieldTextType: boolean;
  registerForm: FormGroup;
  registerFormRecruiter: FormGroup;
  isLoading = false;
  isAuthenticated = false;
  type: string = "candidate";
  userId;
  userEmail;
  /////////phone formate/////
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Morocco, CountryISO.Morocco];
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Morocco, CountryISO.Morocco];
  }

  /* -------------------------------------------------------------------------- */
  /*                            Constructor Function                            */
  /* -------------------------------------------------------------------------- */

  constructor(
    public http: HttpClient,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private route: ActivatedRoute,
    private router: Router,
    private UserService: UserService
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                             NgOnInit LifeCycle                             */
  /* -------------------------------------------------------------------------- */

  ngOnInit() {
    this.type = "candidate"
    console.log(this.type);


    /*     console.log(this.route.snapshot.params["type"]);
    
        if (this.route.snapshot.params["type"] !== "Candidate" && this.route.snapshot.params["type"] !== "Recruiter"){
          this.router.navigate(["/notFound"]);
        }else if(this.route.snapshot.params["type"] === "Candidate"){
          console.log("hello")
          if(!this.route.snapshot.params["id"]){
            this.router.navigate(["/notFound"]);
          }
        } */
    this.registerForm = this.formBuilder.group(
      {
        username: ["", Validators.compose([Validators.required])],
        password: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: ["", Validators.compose([Validators.required])],
        email: ["", Validators.required],
        phoneNumber: null,
        userType: ["candiate"],
      },
      {
        validators: this.password.bind(this),
        validator: MustMatch('password', 'confirmPassword'),

      }
    );
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    // if (this.isAuthenticated) {
    //   this.router.navigate(["pages/recruiter"], { relativeTo: this.route.parent });
    // }
    this.registerFormRecruiter = this.formBuilder.group(
      {
        company: ["", Validators.compose([Validators.required])],
        password: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: ["", Validators.compose([Validators.required])],
        email: ["", Validators.required],
        // phoneNumber: ["", Validators.required],
        // address: [""],
        // website: [""],
        userType: ["recrutier"],
      },
      {
        validators: this.password.bind(this),
        validator: MustMatch('password', 'confirmPassword')

      }
    );
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    // if (this.isAuthenticated) {
    //   this.router.navigate(["pages/recruiter"], { relativeTo: this.route.parent });
    // }
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Form Submit                                */
  /* -------------------------------------------------------------------------- */

  onSubmit(form) {
    console.log(form.value);
    const username = form.value.username;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    const domin = "testing";
    const phoneNumber = form.value.phoneNumber.internationalNumber;
    const email = form.value.email;
    const userType = this.type;

    if (!this.registerForm.valid) {
      return;
    }
    if (this.type === "candidate") {
      this.authService
        .signupUserAsCandiate(
          username,
          password,
          confirmPassword,
          domin,
          phoneNumber,
          email
        )
        .subscribe(
          (data) => {
            console.log(data);
            this.userId = this.tokenTransform()
            this.router.navigate(["complete-profile/step1/", this.tokenTransform()], {
              relativeTo: this.route.parent,
            });
            this.isLoading = false;
          },
          (errorMessage) => {
            console.log(errorMessage);

            this.toaster.error(errorMessage, "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
            this.isLoading = false;
          }
        );
    }
  }


  onSubmitRecruiter(form) {
    const company = form.value.company;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    // const website = "testing";
    // const phoneNumber = form.value.phoneNumber;
    const email = form.value.email;
    const userType = this.type;

    // if (!this.registerForm.valid) {
    //   return;
    // }
    if (this.type == "recruiter") {
      this.authService
        .signupUserRecruiter(
          company,
          password,
          confirmPassword,
          email
        )
        .subscribe(
          (data) => {
            this.userId = this.tokenTransform()
            sessionStorage.setItem("UserName", data["username"]);
            sessionStorage.setItem("CompanyId", data["company_id"]);
            sessionStorage.setItem("usertype","recruiter");
            this.router.navigate([""]);
            // this.router.navigate(["complete-Register",'step1', this.userId], {
            //   relativeTo: this.route.parent,
            // });
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
    }

  }

  /* -------------------------------------------------------------------------- */
  /*                             Check Current User                             */
  /* -------------------------------------------------------------------------- */

  userCandiate(candiate, empolyer) {
    candiate.classList.add("active");
    empolyer.classList.remove("active");
    this.registerForm.value.userType = "candiate";
    this.type = "candidate"
  }
  userEmployer(empolyer, candiate) {
    empolyer.classList.add("active");
    candiate.classList.remove("active");
    this.registerForm.value.userType = "employer";
    this.type = "recruiter"

  }

  /* -------------------------------------------------------------------------- */
  /*                             Password Validation                            */
  /* -------------------------------------------------------------------------- */

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get("password");
    const { value: confirmPassword } = formGroup.get("confirmPassword");
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

  /* -------------------------------------------------------------------------- */
  /*                           Ng OnDestroy lifeCycle                           */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                                 Dummy Move                                 */
  /* -------------------------------------------------------------------------- */

  tokenTransform() {
    // return window.sessionStorage.getItem("token")
    return window.sessionStorage.getItem("token")
  }
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  toggleRepeatFieldTextType() {
    this.repeatFieldTextType = !this.repeatFieldTextType;
  }
  recruiterToggleFieldTextType() {
    this.recruiterFieldTextType = !this.recruiterFieldTextType;
  }

  recruiterToggleRepeatFieldTextType() {
    this.recruiterRepeatFieldTextType = !this.recruiterRepeatFieldTextType;
  }

  // navigateLogin(){
  //   this.router.navigate([""]);
  //   }
  checkEmail(event) {
  //   console.log(event.target.value);
  //   console.log(event)
  //   this.UserService.getUsers().subscribe(user => {
  //     console.log(user);
  //     let checkedEmail = user.filter(user => user.email == event.target.value);
  //     console.log(checkedEmail);
  //     this.userEmail = checkedEmail[0].email;
  //     console.log(this.userEmail);
  //     if (event.target.value == this.userEmail){
  //       console.log("is equal");
  //       console.log(event.target.name); 
  //       if (event.target.name == "registerFormEmail") {
  //         return this.registerForm.invalid;
  //       } else {
  //         return this.registerFormRecruiter.invalid;
  //       }
  //     }
  //   });
  }
}

import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "services/core-services/authentication-services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ChangepasswordService } from "services/candidate/changepassword.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { MustMatch } from '../../../services/helpers.service';

@Component({
  selector: "app-change-password",
  templateUrl: "./change-password.component.html",
  styleUrls: ["./change-password.component.scss"],
})
export class ChangePasswordComponent implements OnInit {
  private userSub: Subscription;

  changePasswordForm: FormGroup;
  isLoading = false;
  isAuthenticated = false;
  changedPswd = {};

  constructor(
    public http: HttpClient,
    public authService: AuthService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private changePasswordService: ChangepasswordService,
    private router: Router,
    private toster: ToastrService,
    private _location: Location
  ) {}

  /* -------------------------------------------------------------------------- */
  /*                               Submit TO ChangePassword                     */
  /* -------------------------------------------------------------------------- */
  onSubmit(changePassword) {
    const newPassword = changePassword.value.newPassword;
    const confirmPassword = changePassword.value.confirmPassword;
    const oldPassword = changePassword.value.oldPassword;

    this.changedPswd = {
      newPassword,
      confirmPassword,
      oldPassword,
    };
    this.changePasswordService.changePassword(this.changedPswd).subscribe(
      (data) => {
        console.log(data);
        this.toster.success("Password changed successfully",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          }) 
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.goback();
      }
    );
  }
  ngOnInit(): void {
    /* -------------------------- loginForm Validation -------------------------- */
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: ["", [Validators.required, Validators.minLength(4)]],
        confirmPassword: ["",Validators.compose([Validators.required])],
        userType: ["candiate"],
      },{
        validators: this.password.bind(this),
        validator: MustMatch('newPassword', 'confirmPassword'),}
    
    );
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    if (this.isAuthenticated) {
      // this.router.navigate(['pages/recruiter'], {relativeTo: this.route.parent});
    }
  }

  /* --------------------------checkif Password match confirmPassword -------------------------- */

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('newPassword').value !== c.get('confirmPassword').value) {
        return {invalid: true};
    }
}
password(formGroup: FormGroup) {
  const { value: password } = formGroup.get("newPassword");
  const { value: confirmPassword } = formGroup.get("confirmPassword");
  return password === confirmPassword ? null : { passwordNotMatch: true };
}
  goback() {
    this._location.back();
  }
}

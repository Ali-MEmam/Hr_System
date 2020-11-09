import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "services/core-services/authentication-services/auth.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ChangepasswordService } from "services/candidate/changepassword.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss']
})
export class UserChangePasswordComponent implements OnInit {

  private userSub: Subscription;
  oldPassword;
  newPassword;
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

  ngOnInit(): void {    
    this.getOldPassword()

    /* -------------------------- loginForm Validation -------------------------- */
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.compose([Validators.required])],
        userType: ["recruiter"],
      },
      {
        /* validators:this.password */
      }
    );
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    if (this.isAuthenticated) {
      // this.router.navigate(['pages/recruiter'], {relativeTo: this.route.parent});
    }
  }


getOldPassword(){
  this.changePasswordService.getOldPassword().subscribe(
    (data) => {
      this.oldPassword=data
      JSON.stringify(this.oldPassword);
      // console.log(data);
      this.oldPassword=this.oldPassword.oldPassword;
      // console.log("old  password"+this.oldPassword);
    }
  );
}



  /* -------------------------------------------------------------------------- */
  /*                               Submit TO ChangePassword                     */
  /* -------------------------------------------------------------------------- */
  onSubmit(changePassword) {
    this.getOldPassword()
    const newPassword = changePassword.value.newPassword;
    const confirmPassword = changePassword.value.confirmPassword;
    const oldPassword = changePassword.value.oldPassword;

    // compare btween old password and new password
    if(oldPassword===newPassword){
      console.log('New Password Matches the Old Password');
      this.toster.error("New Password Matches the Old Password", "", {
        timeOut: 3000,
        positionClass: "toast-top-full-width",
        closeButton: true,
      });
      
    }else if(confirmPassword!==newPassword){
      console.log();
      this.toster.error("New Password and Confirm Password not Matching", "", {
        timeOut: 3000,
        positionClass: "toast-top-full-width",
        closeButton: true,
      });
    }
    else{
      // oldPassword=changePassword.value.newPassword
      this.changedPswd = {
        newPassword,
        confirmPassword,
        oldPassword,
      };
      this.changePasswordService.changePassword(this.changedPswd).subscribe(
        (data) => {
          console.log(data);
          this.changePasswordForm.reset()
          this.changePasswordForm.reset()
          this.toster.success("The New Password has been Set Successfully", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
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
    
    }
    
  

  /* --------------------------checkif Password match confirmPassword -------------------------- */

  /*  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }  */

  goback() {
    this._location.back();
  }



  onSeePasswordClick(event){
    // console.log(event.target);
    // console.log(event);
    if(event.srcElement.className==="ft-eye" && event.srcElement.previousSibling.getAttribute("type")==="password"){
      // console.log('yes');

      event.srcElement.previousSibling.setAttribute("type" , "text")
      event.srcElement.className="ft-eye-off"
    }else{
      // console.log('no');
      event.srcElement.previousSibling.setAttribute("type" , "password")
      event.srcElement.className="ft-eye"
    }
    
  }
}

import { data } from './../data/smart-data-table';
import { Component, Output, EventEmitter, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { FormBuilder, FormGroup, Validators, AbstractControl } from "@angular/forms";
import { LayoutService } from "../services/layout.service";
import { ConfigService } from "../services/config.service";
import { AuthService } from "services/core-services/authentication-services/auth.service";
import { NgbModal, ModalDismissReasons, NgbActiveModal, } from "@ng-bootstrap/ng-bootstrap";
import { Router, ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ChangepasswordService } from "services/candidate/changepassword.service";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import Swal from 'sweetalert2';
import { CompleteProfileService } from '../../../services/candidate/complete-profile.service';
import { log } from 'util';
import { ImageService } from 'services/image/image.service';

@Component({
  selector: "app-register-recruiter-navbar",
  templateUrl: "./navbar-register-recruitercomponent.html",
  styleUrls: ["./navbar-register-recruitercomponent.scss"]
})

export class NavbarRegisterRecruiterComponent implements OnInit, AfterViewInit {
  currentLang = "en";
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  public isCollapsed = true;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();
  public show: boolean = false;
  public buttonName: any = "Show";
  @ViewChild('closebutton') closebutton;

  public config: any = {};
  private userSub: Subscription;

  changePasswordForm: FormGroup;
  isLoading = false;
  isAuthenticated = false;
  changedPswd = {};
  companyId;
  profile_image;
  
  constructor(
    public translate: TranslateService,
    private auth: AuthService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private toster: ToastrService,
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private changePasswordService: ChangepasswordService,
    private router: Router,
    private _location: Location,
    public authService: AuthService,
    private candidateUpdateProfileService: CompleteProfileService,
    private ImageService: ImageService,
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "fr");
    this.getCompanyId();
  }

  ngOnInit() {
    this.config = this.configService.templateConf;
    /* -------------------------- loginForm Validation -------------------------- */
    this.changePasswordForm = this.formBuilder.group(
      {
        oldPassword: ["", Validators.required],
        newPassword: ["", Validators.required],
        confirmPassword: ["", Validators.required],
        userType: ["candiate"],
      }, { validator: this.passwordConfirming }

    );
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
    if (this.isAuthenticated) {
      // this.router.navigate(['pages/recruiter'], {relativeTo: this.route.parent});
    }
  }

  ngAfterViewInit() {
    if (this.config.layout.dir) {
      const dir = this.config.layout.dir;
      if (dir === "rtl") {
        this.placement = "bottom-left";
      } else if (dir === "ltr") {
        this.placement = "bottom-right";
      }
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                         Get compony id && Image                            */
  /* -------------------------------------------------------------------------- */

  getCompanyId() {
    this.companyId = window.sessionStorage.getItem("CompanyId");
    console.log(this.companyId);
    this.getImage();
  }

  getImage() {
    this.ImageService.getImage(this.companyId).subscribe(data => {
      this.profile_image = data.file;
      console.log(this.profile_image);
    });
  }

  ChangeLanguage(language: string) {
    this.translate.use(language);

    this.show = !this.show;
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else {
      this.toggleClass = "ft-maximize";
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName("app-sidebar")[0];
    if (appSidebar.classList.contains("hide-sidebar")) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }
  onLogout() {
    this.auth.logout().subscribe(
      (data) => {
        console.log(data);
        console.log("----------logout-------");
        this.auth.removelogoutToken().subscribe(
          (data) => {
            console.log("---------logout-refreeeeeeeesh-Token---------");
            // window.sessionStorage.removeItem("token");
            // window.sessionStorage.removeItem("refresh_token");
            // window.sessionStorage.removeItem("id");
            // window.sessionStorage.removeItem("UserName");
            // window.sessionStorage.removeItem("CompanyId");
            this.router.navigate([""]);
            console.log(data);
          }, (error) => {
            console.log(error);
          })
      }, (error) => {
        console.log(error);
      })
  }

  closeResult: string;

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */
  open(content) {
    this.modalService.open(content, { size: "md" }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation end                            */
  /* -------------------------------------------------------------------------- */


  onSubmit(changePassword) {
    const newPassword = changePassword.value.newPassword;
    const confirmPassword = changePassword.value.confirmPassword;
    const oldPassword = changePassword.value.oldPassword;

    this.changedPswd = {
      "repeat_new_password": confirmPassword,
      "new_password": newPassword,
      "password": oldPassword,
    };
    this.changePasswordService.changePassword(this.changedPswd).subscribe(
      (data) => {
        console.log(data);
        Swal.fire({
          // position: 'top-end',
          icon: 'success',
          title: 'Your password has been changed successfuly',
          showConfirmButton: false,
          timer: 1500
        })
        this.closebutton.nativeElement.click();

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
  /* --------------------------checkif Password match confirmPassword -------------------------- */

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('newPassword').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

  goback() {
    this._location.back();
  }
}

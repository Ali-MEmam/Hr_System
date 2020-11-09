import { value } from './../../../../shared/data/dropdowns';
import { log } from 'util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { Location } from '@angular/common';
import { ImageCroppedEvent } from "ngx-image-cropper";
import { UserService } from 'services/user-managment-services/user.service';
import { User } from '../../../../../models/user-managment-models/UserRequest';
import { ToastrService } from 'ngx-toastr';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { ProfileService } from 'services/user-managment-services/profile.service';
import { Router, ActivatedRoute } from "@angular/router";
import { ImageService } from 'services/image/image.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;
  isSelected = 'type';
  gender = "Gender"
  isLoading = false;
  profiles;
  companyId;
  closeResult: string;
  type;
  /////croped image///
  url;
  imageUrl;
  uploadedImage;
  imagesCount;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  newProfilePicture;
  cropper = {
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300
  };

  /////////phone formate/////
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Morocco, CountryISO.Morocco];
  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Morocco, CountryISO.Morocco];
  }
  /////password
  fieldTextType: boolean;
  repeatFieldTextType: boolean;
  recruiterFieldTextType: boolean;
  recruiterRepeatFieldTextType: boolean;

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private _location: Location,
    private userService: UserService,
    private toster: ToastrService,
    private profileService: ProfileService,
    private modalService: NgbModal,
    private router: Router,
    private ImageService: ImageService,
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                             NgOninit LifeCycle                             */
  /* -------------------------------------------------------------------------- */

  ngOnInit() {
    this.companyId = window.sessionStorage.getItem('CompanyId');
    this.regularForm = new FormGroup({
      'firstName': new FormControl(null, [Validators.required]),
      'lastName': new FormControl(null, [Validators.required]),
      // 'userName': new FormControl(null,[Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phone': new FormControl(null, [Validators.required]),
      "status": new FormControl(null, [Validators.required]),
      'about': new FormControl(null),
      'password': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'confirmPassword': new FormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
      'profil': new FormControl(null, [Validators.required]),
      "profile_image": new FormControl(null),

    }, { validators: this.password.bind(this) });

    this.profileService.getProfiles().subscribe(profiles => {
      this.profiles = profiles;
      console.log(profiles);
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                               Create New User                              */
  /* -------------------------------------------------------------------------- */

  AddMember(form) {
    console.log(form);
    console.log("yes here")
    if (this.regularForm.valid) {
      this.isLoading = true;
      let profileId = (this.profiles.find(data => {
        return data.title === this.regularForm.value.profil
      }))._id
      console.log(profileId);
      // const newUser = new User(
      //   this.regularForm.value.firstName, 
      //   this.regularForm.value.lastName, 
      //   this.regularForm.value.userName, 
      //   this.regularForm.value.email, 
      // this.regularForm.value.phone,
      //   this.regularForm.value.gender,
      //   this.regularForm.value.description,
      //   this.regularForm.value.password,
      //   this.regularForm.value.confirmPassword,
      //   true,
      //   profileId);
      // var today = new Date();
      // var dd = String(today.getDate()).padStart(2, "0");
      // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      // var yyyy = today.getFullYear();
      // var date = mm + "-" + dd + "-" + yyyy;
      // console.log(date);

      var objAddedMember = {
        'first_name': form.value.firstName,
        'last_name': form.value.lastName,
        'email': form.value.email,
        'phone_number': form.value.phone.internationalNumber,
        'description': form.value.about,
        'password': form.value.password,
        'repeat_password': form.value.confirmPassword,
        'profile_title': form.value.profil,
        "status": form.value.status,
        "profile_image": this.croppedImage,
        "username": form.value.firstName + form.value.lastName,
        "id_company": this.companyId,
        "profile_id": profileId
      };
      console.log(objAddedMember);
      this.userService.createMember(objAddedMember).subscribe(data => {
        this.type = data['id_user'];
        console.log( this.type)

        let imageObj = {
          "file": objAddedMember.profile_image,
          "type_id": this.type
        }
        console.log(imageObj);

        this.ImageService.addImage(imageObj).subscribe(data=>{
          console.log(data)
        })

  
        this.isLoading = false;
        this.toster.success("user Added", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.router.navigate(["pages/recruiter/user-managment/list-users"]);
        // this.regularForm.reset();
      }, err => {
        this.isLoading = false;
        this.toster.error("User Error", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
      })
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                       selected image                          */
  /* -------------------------------------------------------------------------- */
  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
    this.uploadedImage = event.target.files[0].name;
    this.imagesCount = event.target.files.length;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(this.croppedImage);

  }
  selectedUserInfo;
  getSelectedUserProfilePicture(info) {
    this.selectedUserInfo = info;
    this.url = this.selectedUserInfo.profile_image;
    console.log(this.url);

  }

  imageLoaded() {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  /* -------------------------------------------------------------------------- */
  /*                                   backaction                               */
  /* -------------------------------------------------------------------------- */
  backClicked() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                           Check Password Matching                          */
  /* -------------------------------------------------------------------------- */

  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
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

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */

  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

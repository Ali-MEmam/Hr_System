import { log } from 'util';
import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { FormGroup, FormBuilder, FormArray, Validators, NgForm } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RecruiterProfileService } from 'services/recruiter-profile/recruiter-profile.service';
import { Observable, Subscription } from 'rxjs';
import { CountriesService } from 'services/candidate/countries.service';
import { HttpClient } from '@angular/common/http';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { SearchCountryField, TooltipLabel, CountryISO } from 'ngx-intl-tel-input';
import { ImageService } from 'services/image/image.service';

@Component({
  selector: 'app-register-profile-form',
  templateUrl: './register-profile-form.component.html',
  styleUrls: ['./register-profile-form.component.scss']
})

export class RegisterProfileFormComponent implements OnInit {
  userId;
  updatedInfo;
  selectedUserInfo;
  url;
  imageUrl;
  uploadedImage;
  imagesCount;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  newProfilePicture;
  contactForm: FormGroup;
  subscription: Subscription;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryName;
  stateName;
  selectValue;
  type;
  cropper = {
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300
  };
  closeResult: string;
  myProfileForm: FormGroup;
  addPersonalInfoEditMode = true;
  editProfileError = false;
  editProfileErrorMsg;
  editForm = true;
  updatedFormData;
  profileData;
  candidateId; //we will get it from login
  editProfileForm = true;
  userCompelete = 0
  companyId;

  /////////phone formate/////
  separateDialCode = true;
  SearchCountryField = SearchCountryField;
  TooltipLabel = TooltipLabel;
  CountryISO = CountryISO;
  preferredCountries: CountryISO[] = [CountryISO.Morocco, CountryISO.Morocco];

  constructor(
    private fb: FormBuilder,
    private RecruiterProfileService: RecruiterProfileService,
    private currentRoute: ActivatedRoute,
    private toast: ToastrService,
    private modaalService: NgbModal,
    private country: CountriesService,
    private http: HttpClient,
    private router: Router,
    private ImageService: ImageService,
  ) {
    this.getCompanyId()
    this.displayPersonalInfo();
    this.getCountries();
  }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Morocco, CountryISO.Morocco];
  }

  /* -------------------------------------------------------------------------- */
  /*                          NGON INit LifeCycle Hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {

    // this.tokenTransform()
    // my profile form
    this.myProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      website: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      facebook: [''],
      linkedin: [''],
      profile_image: ['']
    });
  }
  /* -------------------------------------------------------------------------- */
  /*                         Get Personal Info Function                         */
  /* -------------------------------------------------------------------------- */
  staticId = "1";

  getCompanyId() {
    this.companyId = window.sessionStorage.getItem("CompanyId")
  }
  displayPersonalInfo() {
    // get data from api
    this.RecruiterProfileService.getProfileCompany(this.companyId).subscribe(response => {
      this.profileData = response;
      localStorage.setItem("userId", response._id);
      this.userId = localStorage.getItem("userId");
      this.setValues();
    }, error => {
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                        Display UserName && EMail                           */
  /* -------------------------------------------------------------------------- */

  setValues() {
    this.myProfileForm.patchValue({
      username: this.profileData.company_name,
      email: this.profileData.email
    })
  }
  /* -------------------------------------------------------------------------- */
  /*                     Form My Profile Information                            */
  /* -------------------------------------------------------------------------- */

  onSubmitCompliteProfile() {
    let compliteProfForm = {
      id: this.userId,
      username: this.myProfileForm.value.username,
      email: this.myProfileForm.value.email,
      company_email: this.myProfileForm.value.website,
      address: this.myProfileForm.value.address,
      phone_number: this.myProfileForm.value.phoneNumber.internationalNumber,
      city: this.stateName,
      country: this.countryName,
      "social_networks": {
        facebook: this.myProfileForm.value.facebook,
        linkedin: this.myProfileForm.value.linkedin,
      },
      profile_image: this.croppedImage,
    }
    this.RecruiterProfileService.editProfileCompany(compliteProfForm).subscribe(data => {
      console.log(data);

      let imageObj = {
        "file": compliteProfForm.profile_image,
        "type_id": this.companyId
      }
      console.log(imageObj);
      this.ImageService.addImage(imageObj).subscribe(data => {
        console.log(data)
      })
      this.onCancelMyProfile();
      this.displayPersonalInfo();
      //to listen in sidebar chart
      this.router.navigate(["pages/recruiter/mydashboard"]);
      // this.toast.success("profile Updated successfully", '', {
      //   timeOut: 3000,
      //   positionClass: 'toast-top-full-width',
      //   closeButton: true
      // })
      this.RecruiterProfileService.sidebarChart.next(0)
    }, error => {
      this.toast.error("please try again", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Cancel MyProfile                           */
  /* -------------------------------------------------------------------------- */


  onCancelMyProfile() {
    this.editProfileForm = true;
    this.displayPersonalInfo();
  }

  startEditMyProfile() {
    this.editProfileForm = false;
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Upload Image                              */
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

  getSelectedUserProfilePicture(info) {
    this.selectedUserInfo = info;
    this.url = this.selectedUserInfo.profile_image;
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
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */

  open(content) {
    this.modaalService.open(content, { size: 'lg' }).result.then((result) => {
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

  /* -------------------------------------------------------------------------- */
  /*                            Get All Countires                               */
  /* -------------------------------------------------------------------------- */

  countryUrl: string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  allCountries(): Observable<any> {
    return this.http.get(this.countryUrl);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  getCountries() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo = data2.Countries;
        },
        err => console.log(err),
        () => console.log('complete')
      )
  }

  onChangeCountry(countryValue, selectedValue) {
    this.countryName = this.countryInfo[countryValue].CountryName
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    this.stateName = this.stateInfo[stateValue].StateName
  }
}

import { log } from 'util';
import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { FormGroup, FormBuilder, FormArray, Validators, NgForm } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
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
  selector: 'app-recruiter-profile',
  templateUrl: './recruiter-profile.component.html',
  styleUrls: ['./recruiter-profile.component.scss']
})
export class RecruiterProfileComponent implements OnInit {
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
  selectedProfieData;
  filteredCountry;
  filteredCity;
  editId;
  closeResult: string;
  profile_image;

  cropper = {
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300
  };

  myProfileForm: FormGroup;
  companyId;
  addPersonalInfoEditMode = true; editProfileError = false;
  editProfileErrorMsg;
  editForm = true;
  updatedFormData;
  profileData;
  candidateId; //we will get it from login
  editProfileForm = true;
  userCompelete = 0

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
    private modalService: NgbModal,
    private country: CountriesService,
    private http: HttpClient,
    private ImageService: ImageService,
  ) { this.getCompanyId(); }

  changePreferredCountries() {
    this.preferredCountries = [CountryISO.Morocco, CountryISO.Morocco];
  }

  /* -------------------------------------------------------------------------- */
  /*                          NGON INit LifeCycle Hook                          */
  /* -------------------------------------------------------------------------- */
  profileImge;
  ngOnInit(): void {

    // my profile form
    this.myProfileForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      website: [''],
      address: ['', Validators.required],
      city: [''],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      facebook: [''],
      linkedin: [''],
      profile_image: ['']
    });
    // display personal data
    this.getCountries();
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
      this.croppedImage = data.file;
      this.profile_image = data.file;
      this.displayPersonalInfo();
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                          Display Profile Details                           */
  /* -------------------------------------------------------------------------- */

  displayPersonalInfo() {
    // get data from api
    this.RecruiterProfileService.getProfileCompany(this.companyId).subscribe(response => {
      this.profileData = response;
      this.profileData.profile_image = this.croppedImage;
      console.log(this.profileData);
        localStorage.setItem("userId", response._id);
      this.userId = localStorage.getItem("userId");
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                       Submit My Profile Information                        */
  /* -------------------------------------------------------------------------- */
  onSubmitEditMyProfile() {
    // console.log(this.myProfileForm.value.phoneNumber.internationalNumber);
    let editMyProfileForm = {
      // username: this.myProfileForm.value.username,
      // email: this.myProfileForm.value.email,
      company_email: this.myProfileForm.value.website,
      address: this.myProfileForm.value.address,
      phone_number: this.myProfileForm.value.phoneNumber.internationalNumber,
      city: this.stateName,
      country: this.countryName,
      "social_networks": {
        facebook: this.myProfileForm.value.facebook,
        linkedin: this.myProfileForm.value.linkedin,
      },
      profile_image:this.croppedImage
    }
    
    // console.log(editMyProfileForm)
    this.RecruiterProfileService.editProfileCompany(editMyProfileForm).subscribe(data => {
      console.log(data);
      let imageObj = {
        "file": editMyProfileForm.profile_image,
        "type_id": this.companyId
      }
      console.log(imageObj);
      this.ImageService.addImage(imageObj).subscribe(data => {
        console.log(data)
      })
      this.onCancelMyProfile();
      this.modalService.dismissAll();
      this.displayPersonalInfo();
      //to listen in sidebar chart
      this.RecruiterProfileService.sidebarChart.next(0)
    }, error => {
      this.toast.error(error, '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
    })
  }


  onCancelMyProfile() {
    this.editProfileForm = true;
    this.displayPersonalInfo();
  }

  startEditMyProfile() {
    this.editProfileForm = false;
  }

  /* -------------------------------------------------------------------------- */
  /*                                Edit Profile                                */
  /* -------------------------------------------------------------------------- */

  EditProfileVal(profileData) {
    this.myProfileForm.patchValue({
      username: profileData.company_name,
      city: profileData.city,
      country: profileData.country,
      phoneNumber: profileData.phone_number,
      address: profileData.address,
      website: profileData.company_email,
      email: profileData.email,
      facebook: profileData.social_networks.facebook,
      linkedin: profileData.social_networks.linkedin,
      profile_image: this.croppedImage,
    });
  }
  /* -------------------------------------------------------------------------- */
  /*                             Upload Image Profile                           */
  /* -------------------------------------------------------------------------- */

  fileChangeEvent(event: any) {
    this.imageChangedEvent = event;
    this.uploadedImage = event.target.files[0].name;
    this.imagesCount = event.target.files.length;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;

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

  /* -------------------------------------------------------------------------- */
  /*                               Get All Countries                            */
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

  onChangeCountry(countryValue) {
    this.countryName = this.countryInfo[countryValue].CountryName
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    this.stateName = this.stateInfo[stateValue].StateName
  }
}

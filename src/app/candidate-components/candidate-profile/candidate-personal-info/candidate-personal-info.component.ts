import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageCroppedEvent } from "ngx-image-cropper";
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators,
  NgForm,
} from "@angular/forms";
import { ProfileService } from "../../../../services/candidate/profile.service";
import { ActivatedRoute } from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleteProfileService } from 'services/candidate/complete-profile.service';

@Component({
  selector: 'app-candidate-personal-info',
  templateUrl: './candidate-personal-info.component.html',
  styleUrls: ['./candidate-personal-info.component.scss']
})
export class CandidatePersonalInfoComponent implements OnInit {
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
  
  cropper = {
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300
  };

  myProfileForm: FormGroup;

  addPersonalInfoEditMode = true;
  constructor(
    private fb: FormBuilder,
    private candidateUpdateProfileService: CompleteProfileService,
    private currentRoute: ActivatedRoute,
    private toast:ToastrService,
    private modalService: NgbModal,
  ) {

  }
 
  editProfileError = false;
  editProfileErrorMsg;
  editForm = true;
  updatedFormData;
  profileData;
  candidateId; //we will get it from login
  editProfileForm = true;
  userCompelete = 0
  /* -------------------------------------------------------------------------- */
  /*                          NGON INit LifeCycle Hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.tokenTransform()
    // my profile form
    this.myProfileForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      birth_date: ['', Validators.required],
      job_title: ['', Validators.required],
      // domain: ['', Validators.required],
      // current_salary: ['', Validators.required],
      expected_salary_max: ['', Validators.required],
      expected_salary_min: ['', Validators.required],
      education_level: ['', Validators.required],
      // language: [''],
      experience: ['', Validators.required],
      about: ['', Validators.required],
      profile_image:['']
    });
    // display personal data
    this.displayPersonalInfo();
  }
  /* -------------------------------------------------------------------------- */
  /*                         Get Personal Info Function                         */
  /* -------------------------------------------------------------------------- */

  displayPersonalInfo() {
    // get data from api
    this.candidateUpdateProfileService.getProfileCandidate(this.currentUserId).subscribe(response => {
      // console.log(response);
      this.profileData = response;
      // console.log(this.profileData);
      localStorage.setItem("userId", response.id);
      this.userId = localStorage.getItem("userId");
    }, error => { 
      // console.log(error + 'this is error')
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                     Form My Profile Information                            */
  /* -------------------------------------------------------------------------- */

  onSubmitEditMyProfile() {
    let editMyProfileForm = {
      id: this.userId,
      first_name: this.myProfileForm.value.first_name,
      last_name: this.myProfileForm.value.last_name,
      birth_date: this.myProfileForm.value.birth_date,
      job_title: this.myProfileForm.value.job_title,
      // domain: this.myProfileForm.value.domain,
      // current_salary: this.myProfileForm.value.current_salary,
      expected_salary_max: this.myProfileForm.value.expected_salary_max,
      expected_salary_min: this.myProfileForm.value.expected_salary_min,
      education_level: this.myProfileForm.value.education_level,
      language: this.myProfileForm.value.language,
      experience: this.myProfileForm.value.experience,
      about: this.myProfileForm.value.about,
      profile_image:this.croppedImage,
    }
    // console.log(editMyProfileForm)
    this.candidateUpdateProfileService.editProfileCandidate(editMyProfileForm ,this.currentUserId).subscribe(data => {
      console.log("success");
      this.onCancelMyProfile();
      this.displayPersonalInfo();
      //to listen in sidebar chart
      this.toast.success("profile Updated successfully",'', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton:true
        })
        this.candidateUpdateProfileService.sidebarChart.next(0)
    }, error => {
      // console.log("there is error");
      this.toast.error("please try again",'', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton:true
        })
    })
  }

  currentUserId;
  tokenTransform(){
    this.currentUserId =  window.sessionStorage.getItem("token")
  }
  
  onCancelMyProfile() {
    this.editProfileForm = true;
    this.displayPersonalInfo();
  }

  startEditMyProfile() {
    this.editProfileForm = false;
  }

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


  closeResult: string;


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
  /*                           modal Inviteation end                            */
  /* -------------------------------------------------------------------------- */


}

import { Component, OnInit, ViewChild } from "@angular/core";
import { ImageCroppedEvent } from 'ngx-image-cropper';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { ProfileService } from "../../../../services/candidate/profile.service";
import { ActivatedRoute } from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleteProfileService } from 'services/candidate/complete-profile.service';
import { CountriesService } from 'services/candidate/countries.service';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-candidate-contact',
  templateUrl: './candidate-contact.component.html',
  styleUrls: ['./candidate-contact.component.scss']
})
export class CandidateContactComponent implements OnInit {
  userId;
  updatedInfo;
  countryName;
  stateName ;
  selectedUserInfo;
  subscription: Subscription;

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  contactForm: FormGroup;
  constructor(
    private country:CountriesService,
    private fb: FormBuilder,
    private candidateUpdateProfileService: CompleteProfileService,
    private currentRoute: ActivatedRoute,
    private toast:ToastrService,
    private modalService: NgbModal,
    
    private http: HttpClient,
  ) {

  }
 
  editForm = true;
  updatedFormData;
  profileData;
  candidateId; //we will get it from login
  userCompelete = 0
  /* -------------------------------------------------------------------------- */
  /*                          NGON INit LifeCycle Hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.getCountries();

    this.tokenTransform()
    this.candidateId = this.currentRoute.parent.parent.snapshot.params["id"]
    // my profile form
   
    // contact form
    this.contactForm = this.fb.group({
      phone_number: ['', Validators.required],
      email: ['', Validators.required],
      // website: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
    })
    // display personal data
    this.displayPersonalInfo();
  }
  /* -------------------------------------------------------------------------- */
  /*                         Get Personal Info Function                         */
  /* -------------------------------------------------------------------------- */

  currentUserId;
  tokenTransform(){
    this.currentUserId =  window.sessionStorage.getItem("token")
  }
  displayPersonalInfo() {
    // get data from api
    this.candidateUpdateProfileService.getProfileCandidate(this.candidateId).subscribe(response => {
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
  /*                     Form contact Information                       */
  /* -------------------------------------------------------------------------- */

  addContactInfoEditMode = true;


  onSubmitContact(form) {
    console.log(this.contactForm.value.country);
    console.log(this.contactForm.value);
    
    let editContact = {
      id: this.userId,
      phone_number: this.contactForm.value.phone_number,
      email: this.contactForm.value.email,
      // website: this.contactForm.value.website,
      address: this.contactForm.value.address,
      city: this.stateName,
      country: this.countryName,
    }
    this.candidateUpdateProfileService.editProfileCandidate(editContact ,this.currentUserId).subscribe(data => {
      // console.log("success social");
      this.displayPersonalInfo();
      this.onCancelContact();
      this.toast.success("Contact Information updated successfully",'', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton:true
        })
        this.candidateUpdateProfileService.sidebarChart.next(0)
    }, error => {
      // console.log("there is error in social");
      this.toast.error("Error , Please try again",'', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton:true
        })
    })
    // social Networks form

  }
  onCancelContact() {
    this.addContactInfoEditMode = true;
    this.displayPersonalInfo();
  }
  startEditContact() {
    this.addContactInfoEditMode = false;
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




  


  // start select countries and city
  countryUrl :string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  
  allCountries(): Observable<any>{
    return this.http.get(this.countryUrl);
  }

  ngOnDestroy() {
      if (this.subscription) {
          this.subscription.unsubscribe();
      }
  }


  getCountries(){
      this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo=data2.Countries;
          console.log('Data:', this.countryInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )
    }
  
    onChangeCountry(countryValue) {
      console.log(countryValue);
      console.log(this.countryInfo[countryValue].CountryName);
      this.countryName =this.countryInfo[countryValue].CountryName    
      
      this.stateInfo=this.countryInfo[countryValue].States;
      this.cityInfo=this.stateInfo[0].Cities;
      console.log(this.stateInfo);
    }
  
    onChangeState(stateValue) {
      this.cityInfo=this.stateInfo[stateValue].Cities;
      console.log(this.stateInfo[stateValue]);
      
      this.stateName =this.stateInfo[stateValue].StateName    
      console.log(this.cityInfo);
    }
      

}

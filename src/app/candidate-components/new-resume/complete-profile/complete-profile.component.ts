import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgForm,
  FormBuilder,
  FormGroup,
  FormArray,
  Validators,
  FormControl,
} from "@angular/forms";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { CompleteProfileService } from "services/candidate/complete-profile.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Route } from "@angular/compiler/src/core";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
import { ToastrService } from "ngx-toastr";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { Subscription, Observable } from "rxjs";

import { CountriesService } from "../../../../../src/services/candidate/countries.service";
@Component({
  selector: "app-complete-profile",
  templateUrl: "./complete-profile.component.html",
  styleUrls: ["./complete-profile.component.scss"],
})
export class CompleteProfileComponent implements OnInit {
  activeFormType = "info";
  activeTab = "info";
  urlLink;

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  candidateData;
  resumeUrl = "candidate/new-resume";
  subscription: Subscription;
  updatedInfo;
  personalLinksForm: FormGroup;
  contactForm: FormGroup;
  personalInfo: FormGroup;
  socialNetworksForm: FormGroup;
  selectedUserInfo;
  url;
  imageUrl;
  uploadedImage;
  imagesCount;
  imageChangedEvent: any = "";
  croppedImage: any = "";
  newProfilePicture;
  selectedValue = "Experience";
  editPersonalForm;
  languagesArray: Array<string> = [
    "chinese",
    "spanish",
    "english",
    "hindi",
    "french",
    "arabic",
    "portuguese",
    "bengali",
    "russian",
    "japanese",
    "lahnda",
    "german",
    "korean",
    "turkish",
  ];
  cropper = {
    x1: 0,
    y1: 0,
    x2: 300,
    y2: 300,
  };

  constructor(
    private candidateUpdateProfileService: CompleteProfileService,
    private currentRoute: ActivatedRoute,
    private router: Router,
    private country: CountriesService,
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.tokenTransform();
    this.getCountries();

    // for (let i of this.languagesArray) console.log(i);
    this.personalLinksForm = this.fb.group({
      personalLinks: this.fb.array([this.createPersonalLinksForm()]),
    });
    this.contactForm = this.fb.group({
      country: [""],
      city: [""],
      phone_number: [""],
      address: [""],
      email: ["", Validators.required],
    });
    this.personalInfo = this.fb.group({
      profile_image: "",
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      jobTitle: ["", Validators.required],
      birthDate: ["", Validators.required],
      about: ["", Validators.required],
      educationLevel: ["", Validators.required],
      experience: ["", Validators.required],
      expected_salary_min: "",
      expected_salary_max: "",
    });
    this.socialNetworksForm = this.fb.group({
      facebook: [""],
      linkedin: [""],
      behance: [""],
      github: [""],
    });
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

  /* -------------------------------------------------------------------------- */
  /*                                 Dummy Move                                 */
  /* -------------------------------------------------------------------------- */
  currentUserId;
  tokenTransform() {
    this.currentUserId = JSON.parse(
      atob(window.sessionStorage.getItem("token").split(".")[1])
    ).sub;
    this.candidateUpdateProfileService
      .getCandidateInformation(this.currentUserId)
      .subscribe((result) => {
        this.candidateData = result;
        console.log(this.candidateData);
      });
  }

  /**************            Cycle of AddEducation            **************/
  /* to create new form for user to add more education */
  createPersonalLinksForm() {
    return this.fb.group({
      link: ["", Validators.required],
      website: ["", Validators.required],
    });
  }
  addNewPersonal() {
    const addPersonalInfo = this.personalLinksForm.get(
      "personalLinks"
    ) as FormArray;
    addPersonalInfo.push(this.createPersonalLinksForm());
  }

  /* Submit new Education From */

  onSubmitPersonalLinks(form) {
    for (let i = 0; i < form.value.personalLinks.length; i++) {
      let addedPersonalLinksObj = {
        website: form.value.personalLinks[i].website,
        link: form.value.personalLinks[i].link,
      };

      // this.addEducation(addedEducationObj).subscribe(data => {
      //   console.log(data);
      //   if ((i + 1) === form.value.personalLinks.length) {
      //     this.update()
      //   }
      //   this.toast.success("profile Updated successfully", '', {
      //     timeOut: 3000,
      //     positionClass: 'toast-top-full-width',
      //     closeButton: true
      //   })
      // })
      this.candidateUpdateProfileService
        .CompeleteCandidateInformation(
          addedPersonalLinksObj,
          this.currentUserId
        )
        .subscribe(
          (data) => {
            console.log(data);
            // this.update()

            this.toast.success("profile Updated successfully", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
            this.candidateUpdateProfileService.sidebarChart.next(0);
            this.activeFormType = "contact";
          },
          (err) => {
            this.toast.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
          }
        );
    }

    this.personalLinksForm = this.fb.group({
      personalLinks: this.fb.array([this.createPersonalLinksForm()]),
    });

    // this.educationClicked = false;
  }

  /* post for each object in personalLinks formArray */

  addPersonalLinks(eduObj) {
    return this.http.post("http://localhost:3000/education", eduObj);
  }

  CancelAddPersonalLinks() {
    this.personalLinksForm = this.fb.group({
      personalLinks: this.fb.array([this.createPersonalLinksForm()]),
    });

    // this.educationClicked = false;
  }
  // deleteEducationFormArray(i) {

  //   var deletePersonalLinks = <FormArray>this.personalLinksForm.controls["personalLinks"];
  //   deletePersonalLinks.removeAt(i);

  //   // if (this.personalLinksForm.value.personalLinks.length == 0) {
  //   //   // this.educationClicked = false;
  //   // }
  // }

  onSubmitSocialNetworks(form) {
    let editSocailNetworks = {
      social_networks: {
        facebook: this.socialNetworksForm.value.facebook,
        linkedin: this.socialNetworksForm.value.linkedin,
        behance: this.socialNetworksForm.value.behance,
        github: this.socialNetworksForm.value.github,
      },
    };
    this.candidateUpdateProfileService
      .CompeleteCandidateInformation(editSocailNetworks, this.currentUserId)
      .subscribe(
        (data) => {
          this.toast.success("profile Updated successfully", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          this.candidateUpdateProfileService.sidebarChart.next(0);
          this.activeFormType = "contact";
        },
        (error) => {
          this.toast.error("Error , Please try again", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          // console.log("there is error in social");
        }
      );
    // social Networks form
  }

  // start contact
  get f() {
    return this.personalInfo.controls;
  }

  onSubmitContact(form) {
    let contactObject = {
      city: form.value.city,
      country: form.value.country,
      phone_number: form.value.phone_number,
      email: form.value.email,
      address: form.value.address,
    };

    this.candidateUpdateProfileService
      .CompeleteCandidateInformation(contactObject, this.currentUserId)
      .subscribe(
        (data) => {
          console.log(data);
          // this.update()

          this.toast.success("profile Updated successfully", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          this.candidateUpdateProfileService.sidebarChart.next(0);
        },
        (err) => {
          this.toast.error("We Have Problem Please Try Again", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
        }
      );
  }

  onSubmitPersonalInfo(form) {
    let personalInfoObject = {
      profile_image: this.croppedImage,
      first_name: form.value.firstName,
      last_name: form.value.lastName,
      job_title: form.value.jobTitle,
      birth_date: form.value.birthDate,
      about: form.value.about,
      education_level: form.value.educationLevel,
      experience: form.value.experience,
      expected_salary_min: form.value.expected_salary_min,
      expected_salary_max: form.value.expected_salary_max,
    };

    this.candidateUpdateProfileService
      .CompeleteCandidateInformation(personalInfoObject, this.currentUserId)
      .subscribe(
        (data) => {
          console.log(data);
          // this.update()

          this.toast.success("profile Updated successfully", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });

          this.candidateUpdateProfileService.sidebarChart.next(0);
          this.activeFormType = "social";
        },
        (err) => {
          this.toast.error("We Have Problem Please Try Again", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
        }
      );
  }

  /*  tabs functions */

  info(activeTab) {
    this.activeTab = activeTab;
  }

  social(activeTab) {
    this.activeTab = activeTab;
  }
  contact(activeTab) {
    this.activeTab = activeTab;
  }

  tabSelector(active) {
    this.activeTab = active;
  }

  toggleActiveForm(formtype) {
    this.activeFormType = formtype;
  }
  nextToSecondForm() {
    switch (this.activeFormType) {
      case "info":
        this.activeFormType = "info";
        break;
      case "social":
        this.activeFormType = "social";
      case "contact":
        this.activeFormType = "contact";
    }
  }

  // start select countries and city
  countryUrl: string =
    "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";

  allCountries(): Observable<any> {
    return this.http.get(this.countryUrl);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCountries() {
    this.country.allCountries().subscribe(
      (data2) => {
        this.countryInfo = data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      (err) => console.log(err),
      () => console.log("complete")
    );
  }

  onChangeCountry(countryValue) {
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    console.log(this.cityInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    //console.log(this.cityInfo);
  }
}

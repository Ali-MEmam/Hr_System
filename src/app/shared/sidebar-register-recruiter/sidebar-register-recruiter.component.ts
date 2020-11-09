import { value } from './../data/dropdowns';
import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from "@angular/core";
import { ROUTES } from './sidebar-routes.config';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../animations/custom-animations";
import { CandidateConfig } from '../services/Candidateconfig.service';
import { HttpClient } from '@angular/common/http';
import { CompleteProfileService } from 'services/candidate/complete-profile.service';
import { RecruiterProfileService } from 'services/recruiter-profile/recruiter-profile.service';

@Component({
  selector: "app-sidebar-register-recruiter",
  templateUrl: "./sidebar-register-recruiter.component.html",
  animations: customAnimations
})
export class SidebarRegisterRecruiterComponent implements OnInit, AfterViewInit {
  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  profileCompleteInfoPercentage = 100;
  profileCompleteInfoCounter = 0;
  companyDataObj = {
    username: "",
    email: "",
    website: "",
    address: "",
    phoneNumber: "",
    city: "",
    country: "",
    facebook: "",
    linkedin: "",
    profile_image: "",
  };

  profileAndResumeInputs;
  completedInfoPercentage;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  candidateId: number = 1; //we will get it from login
  currentUserId;
  companyId;

  constructor(
    private candidateUpdateProfileService: CompleteProfileService,
    private http: HttpClient,
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: CandidateConfig,
    private RecruiterProfileService: RecruiterProfileService,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
    this.tokenTransform();
    this.getCompanyId()

  }

  getCompanyId() {
    this.companyId = window.sessionStorage.getItem("CompanyId")
    console.log(this.companyId)
  }


  tokenTransform() {
    this.currentUserId = window.sessionStorage.getItem("token")
  }

  ngOnInit() {
    this.tokenTransform()
    this.updateChart()
    this.config = this.configService.templateConf;
    this.menuItems = ROUTES;

    // this.currentUserId = this.route.snapshot.params["id"]
    // console.log(this.route.snapshot.params)

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }


  }

  ngAfterViewInit() {

    setTimeout(() => {
      if (this.config.layout.sidebar.collapsed != undefined) {
        if (this.config.layout.sidebar.collapsed === true) {
          this.expanded = false;
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-arrow-left');
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-arrow-right');
          this.nav_collapsed_open = true;
        }
        else if (this.config.layout.sidebar.collapsed === false) {
          this.expanded = true;
          this.renderer.removeClass(this.toggleIcon.nativeElement, 'ft-arrow-left');
          this.renderer.addClass(this.toggleIcon.nativeElement, 'ft-arrow-right');
          this.nav_collapsed_open = false;
        }
      }
    }, 0);


  }

  toggleSlideInOut() {
    this.expanded = !this.expanded;
  }

  handleToggle(titles) {
    this.activeTitles = titles;
  }

  // NGX Wizard - skip url change
  ngxWizardFunction(path: string) {
    if (path.indexOf("forms/ngx") !== -1)
      this.router.navigate(["forms/ngx/wizard"], { skipLocationChange: false });
  }



  personalData: any;


//   this.RecruiterProfileService.getProfileCompany(this.companyId).subscribe(response => {
//     console.log(response);
//     this.profileData = response;
//     localStorage.setItem("userId", response._id);
//     this.userId = localStorage.getItem("userId");
//     this.setValues();
//   }, error => {
//     console.log(error + 'this is error')
//   })
// }
  getCompletedProfile() {
    this.RecruiterProfileService.getProfileCompany(this.companyId).subscribe(response => {
      console.log("==================")
      console.log(response)
      this.companyDataObj.username = response.username;
      this.companyDataObj.email = response.email;
      this.companyDataObj.website = response.website;
      this.companyDataObj.address = response.address;
      this.companyDataObj.city = response.city;
      this.companyDataObj.country = response.country;
      this.companyDataObj.phoneNumber = response.phoneNumber;
      this.companyDataObj.facebook = response.facebook;
      this.companyDataObj.linkedin = response.linkedin;
      this.companyDataObj.profile_image = response.profile_image;
      console.log(this.companyDataObj);

      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                sidebar chart                               */
  /* -------------------------------------------------------------------------- */

  sidebarChart() {
    this.profileAndResumeInputs = Object.assign(this.companyDataObj);
    const loopingOnresponseArray = this.profileAndResumeInputs;
    const values = Object.values(loopingOnresponseArray);

    console.log(this.profileCompleteInfoPercentage);
    for (let i = 0; i < values.length; i++) {
      if (value[i] !== undefined) {

        this.profileCompleteInfoCounter++
        console.log(this.profileCompleteInfoCounter);

      } else if (values[i] === "" || value[i] === undefined) {
        console.log('counter ' + this.profileCompleteInfoCounter);
      }
    }
    this.profileCompleteInfoPercentage = (this.profileCompleteInfoCounter / values.length) * 100
    this.profileCompleteInfoCounter = 0
  }


  updateChart() {
    this.RecruiterProfileService.updatedSidebarChart.subscribe(data => {
      // console.log('this is profiiile');
      this.getCompletedProfile();
    })
  }
}
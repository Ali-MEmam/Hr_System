import { Component, OnInit, ViewChild, ElementRef, Renderer2, AfterViewInit } from "@angular/core";

import { ROUTES } from './sidebar-routes.config';
import { Router, ActivatedRoute } from "@angular/router";
import { TranslateService } from '@ngx-translate/core';
import { customAnimations } from "../../animations/custom-animations";
import { CandidateConfig } from '../../services/Candidateconfig.service' ;
import { EducationService } from 'services/candidate/education.service';
import { ExperienceService } from 'services/candidate/experience.service';
import { SkillsService } from 'services/candidate/skills.service';
import { CompleteProfileService } from 'services/candidate/complete-profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-candidate-new-sidebar',
  templateUrl: './candidate-new-sidebar.component.html',
  styleUrls: ['./candidate-new-sidebar.component.scss'],
  animations: customAnimations
})
export class CandidateNewSidebarComponent implements OnInit {

  @ViewChild('toggleIcon') toggleIcon: ElementRef;
  public menuItems: any[];
  depth: number;
  activeTitle: string;
  activeTitles: string[] = [];
  expanded: boolean;
  nav_collapsed_open = false;
  logoUrl = 'assets/img/logo.png';
  public config: any = {};
  candidateId: number = 1; //we will get it from login
  currentUserId;

  profileCompleteInfoPercentage = 100;
  profileCompleteInfoCounter = 0;
  personalDataObj = {
    profile_image: '',
    first_name: '',
    last_name: '',
    job_title: '',
    birth_date: '',
    about: '',
    education_level: '',
    experience: '',
    expected_salary_min: '',
    expected_salary_max: '',
    city: '',
    country: '',
    phone_number: '',
    address: '',
    website: '',
    link: ''
  };

  eduDataObj = {
    'institute': ''
  };
  skillsDataObj = {
    'skill': ''
  };
  workExperinceDataObj = {
    'company_name': ''
  };

  profileAndResumeInputs;
  completedInfoPercentage;
  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private educationService:EducationService,
    private skillService:SkillsService,
    private experienceService:ExperienceService,
    private candidateUpdateProfileService: CompleteProfileService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    public translate: TranslateService,
    private configService: CandidateConfig,
  ) {
    if (this.depth === undefined) {
      this.depth = 0;
      this.expanded = true;
    }
    this.tokenTransform();
  }


  ngOnInit() {
    this.tokenTransform()
    this.updateChart()
    this.config = this.configService.templateConf;
    this.menuItems = ROUTES;

    this.currentUserId = this.route.snapshot.params["id"]
    console.log(this.route.snapshot.params["id"])

    if (this.config.layout.sidebar.backgroundColor === 'white') {
      this.logoUrl = 'assets/img/logo-dark.png';
    }
    else {
      this.logoUrl = 'assets/img/logo.png';
    }


  }

  tokenTransform() {
    this.currentUserId = window.sessionStorage.getItem("token")
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




  // start sidebar chart
  updateChart() {
    this.candidateUpdateProfileService.updatedSidebarChart.subscribe(data => {
      // console.log('this is profiiile');
      this.getCompletedProfile();
    })
    this.experienceService.updatedSidebarChart.subscribe(data => {
      // console.log('this is exxxxxxx');
      this.getAllWorkExperience();
    })
    this.educationService.updatedSidebarChart.subscribe(data => {
      // console.log('this is education');
      this.getAllEducation();
    })
    this.skillService.updatedSidebarChart.subscribe(data => {
      // console.log('this is skilllls');
      this.getAllSkill();
    })
 
  }
  personalData: any;
  getCompletedProfile() {
    this.candidateUpdateProfileService.getCandidateInformation(this.currentUserId).subscribe(response => {
      this.personalDataObj.first_name = response.first_name;
      this.personalDataObj.last_name = response.last_name;
      this.personalDataObj.profile_image = response.profile_image;
      this.personalDataObj.job_title = response.job_title;
      this.personalDataObj.birth_date = response.birth_date;
      this.personalDataObj.about = response.about;
      this.personalDataObj.education_level = response.education_level;
      this.personalDataObj.experience = response.experience;
      this.personalDataObj.expected_salary_min = response.expected_salary_min;
      this.personalDataObj.expected_salary_max = response.expected_salary_max;
      this.personalDataObj.city = response.city;
      this.personalDataObj.country = response.country;
      this.personalDataObj.phone_number = response.phone_number;
      this.personalDataObj.address = response.address;
      this.personalDataObj.website = response.website;
      this.personalDataObj.link = response.link;
      console.log(this.personalDataObj);

      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }
  educationData: any;
 /* -------------------------------------------------------------------------- */
  /*                                education                              */
  /* -------------------------------------------------------------------------- */
  getAllEducation() {
    this.http.get('http://localhost:3000/education').subscribe(response => {
      // console.log('education'+response);
      this.educationData = response;
      if (this.educationData.length < 1) {
        this.educationData = {
          "institute": ""
        }
      } else {

        this.eduDataObj.institute = this.educationData[0]
      }
      // console.log(this.eduData[0]+ this.eduDataObj);
      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }
  /* -------------------------------------------------------------------------- */
  /*                                experience                              */
  /* -------------------------------------------------------------------------- */
  workExperienceData: any;

  getAllWorkExperience() {
    this.http.get('http://localhost:3000/experience').subscribe(response => {
      // console.log('experience'+response);
      this.workExperienceData = response;
      if (this.workExperienceData.length < 1) {
        this.workExperinceDataObj = {
          "company_name": ""
        }
      } else {

        this.workExperinceDataObj.company_name = this.workExperienceData[0]
      }
    }, error => {
      // console.log(error + 'this is error')
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                               volunteer experience                         */
  /* -------------------------------------------------------------------------- */
  // volExperienceData: any;

  // getAllVolonteerExperience() {
  //   this.http.get('http://localhost:3000/volunteer').subscribe(response => {
  //     // console.log('experience'+response);
  //     this.volExperienceData = response;
  //     if (this.volExperienceData.length < 1) {
  //       this.volExperinceDataObj = {
  //         "organization_name": ""
  //       }
  //     } else {

  //       this.volExperinceDataObj.organization_name = this.volExperinceDataObj[0]
  //     }
  //   }, error => {
  //     // console.log(error + 'this is error')
  //   })
  // }

  /* -------------------------------------------------------------------------- */
  /*                                Skills                              */
  /* -------------------------------------------------------------------------- */
  skillData :any;
  getAllSkill() {
    this.http.get('http://localhost:3000/skills').subscribe(response => {
      // console.log('skills'+response);
      this.skillData = response;
      if (this.skillData.length < 1) {
        this.skillsDataObj = {
          "skill": ""
        }
      } else {

        this.skillsDataObj.skill = this.skillData[0]
      }
      // console.log(this.skillData[0]);
      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                                sidebar chart                               */
  /* -------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------- */
  /*                                sidebar chart                               */
  /* -------------------------------------------------------------------------- */

  sidebarChart() {
    this.profileAndResumeInputs = Object.assign(this.personalDataObj, this.eduDataObj, this.skillsDataObj, this.workExperinceDataObj);

    // console.log('siiiiiiiidebar function'+this.profileAndResumeInputs);
    const loopingOnresponseArray = this.profileAndResumeInputs;
    const values = Object.values(loopingOnresponseArray);
    // console.log("length" + " " + values.length);
    // console.log(values);
    // console.log(this.profileAndResumeInputs);

    // console.log(this.profileCompleteInfoPercentage);
    for (let i = 0; i < values.length; i++) {
      if (values[i] !== "") {

        this.profileCompleteInfoCounter++
        // console.log(this.profileCompleteInfoCounter);

      } else if (values[i] === "") {
        // console.log('counter ' + this.profileCompleteInfoCounter);
      }
    }
    this.profileCompleteInfoPercentage = (this.profileCompleteInfoCounter / values.length) * 100
    this.profileCompleteInfoCounter = 0
  }

}

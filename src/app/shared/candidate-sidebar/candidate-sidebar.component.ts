import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../../services/candidate/profile.service'
import { ExperienceService } from '../../../services/candidate/experience.service'
import { EducationService } from '../../../services/candidate/education.service'
import { SkillsService } from '../../../services/candidate/skills.service'
import { PortfolioService } from '../../../services/candidate/portfolio.service'
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: "app-candidate-sidebar",
  templateUrl: "./candidate-sidebar.component.html",
  styleUrls: ["./candidate-sidebar.component.scss"],
})
export class CandidateSidebarComponent implements OnInit {
  userId: string;
  constructor(
    private candidateProfileService: ProfileService,
    private candidateEducationService: EducationService, 
    private candidateExperienceService: ExperienceService,
    private candidateSkillsService: SkillsService,
    private candidatePortfolioService: PortfolioService,
    private http: HttpClient,
    private router:ActivatedRoute
  ) { }

  eduData: any;
  expData: any;
  portData: any;
  skillData: any;
  profileCompleteInfoPercentage = 100;
  profileCompleteInfoCounter = 0;
  personalDataObj = {};
  eduDataObj = {
    'institute': ''
  };
  skillsDataObj = {
    'skill': ''
  };
  experinceDataObj = {
    'company_name': ''
  };
  portfolioDataObj = {
    'file': ''
  };
  profileAndResumeInputs;
  completedInfoPercentage;
  candidateId: number = 1; //we will get it from login
  currentUserId;
  ngOnInit(): void {
    // this.getAllEducation()
    // this.getAllExperience()
    // this.getAllPortfolio()
    // this.getAllSkill()
    this.updateChart()
    this.currentUserId = this.router.snapshot.params["id"]
    console.log(this.router.snapshot.params["id"])
    // this.candidateProfileService.updatedSidebarChart.subscribe((data) => {
    //   console.log("hello from service");
    //   this.getAllPersonalInfo();
    // });
  }
  updateChart() {
    this.candidateProfileService.updatedSidebarChart.subscribe(data => {
      // console.log('this is profiiile');
      this.getAllPersonalInfo();
    })
    this.candidateExperienceService.updatedSidebarChart.subscribe(data => {
      // console.log('this is exxxxxxx');
      this.getAllExperience();
    })
    this.candidateEducationService.updatedSidebarChart.subscribe(data => {
      // console.log('this is education');
      this.getAllEducation();
    })
    this.candidateSkillsService.updatedSidebarChart.subscribe(data => {
      // console.log('this is skilllls');
      this.getAllSkill();
    })
    this.candidatePortfolioService.updatedSidebarChart.subscribe(data => {
      // console.log('this is portfoliooo');
      this.getAllPortfolio();
    })
  }
  sidebarCollapse(event, sidebar) {
    // console.log(event, sidebar.style);
    sidebar.style.left = "0%";
  }
  sidebarColse($event, sidebar) {
    // console.log(event, sidebar.style);
    sidebar.style.left = "-50%";
  }

  getAllPersonalInfo() {
    // get data from api
    this.candidateProfileService.getProfileCandidate(this.candidateId).subscribe(response => {
      // console.log(response);
      this.personalDataObj = response;
      // console.log(this.personalDataObj);
      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                education                              */
  /* -------------------------------------------------------------------------- */
  getAllEducation() {
    this.http.get('http://localhost:3000/education').subscribe(response => {
      // console.log('education'+response);
      this.eduData = response;
      if (this.eduData.length < 1) {
        this.eduDataObj = {
          "institute": ""
        }
      } else {

        this.eduDataObj.institute = this.eduData[0]
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

  getAllExperience() {
    this.http.get('http://localhost:3000/experience').subscribe(response => {
      // console.log('experience'+response);
      this.expData = response;
      if (this.expData.length < 1) {
        this.experinceDataObj = {
          "company_name": ""
        }
      } else {

        this.experinceDataObj.company_name = this.expData[0]
      }
      // console.log(this.experinceDataObj.company_name);
      // console.log('ssssss length'+this.expData.length);
      // console.log('respooonse exxxx'+ this.expData[0]);
      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }
  /* -------------------------------------------------------------------------- */
  /*                                portfolio                              */
  /* -------------------------------------------------------------------------- */
  getAllPortfolio() {
    this.http.get('http://localhost:3000/portfolio').subscribe(response => {
      // console.log('portfolio'+response);
      this.portData = response;
      // console.log(response);
      if (this.portData.length < 1) {
        this.portfolioDataObj = {
          "file": ""
        }
      } else {

        this.portfolioDataObj.file = this.portData[0]
      }
      // console.log(this.portData[0]);
      // console.log('portdata'+this.portfolioDataObj);
      this.sidebarChart()
    }, error => {
      // console.log(error + 'this is error')
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                portfolio                              */
  /* -------------------------------------------------------------------------- */
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

  sidebarChart() {
    this.profileAndResumeInputs = Object.assign(this.personalDataObj, this.eduDataObj, this.skillsDataObj, this.experinceDataObj);

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

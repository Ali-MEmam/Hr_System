import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NavigationMode } from 'angular-archwizard'
import { ScreeningServiceService } from 'services/screening/screening-service.service';
import { CriteriaService } from "services/job/job-criteria-details";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from 'services/user-managment-services/user.service';
import { LogsService } from 'services/job/logs.service';
import { ToastrService } from "ngx-toastr";
import { JobDetailsService } from "../../../../services/job/job-details.service";

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';


// export interface skills {
//   name: string;
// }

@Component({
  selector: 'app-job-criteria',
  templateUrl: './job-criteria.component.html',
  styleUrls: ['./job-criteria.component.scss']
})
export class JobCriteriaComponent implements OnInit {


  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills = [];
  jobCriteriaForm: FormGroup;
  criteriaEditForm: FormGroup;
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
  screeningObj;
  tests = [];
  currentJob;
  closeResult: string;
  newCriteria;
  currentUserId;
  userName;
  jobName;
  selectedSkill;
  skillData = [];
  resultOfScreening = false;
  criteriaId;
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toster: ToastrService,
    private testService: ScreeningServiceService,
    private CriteriaService: CriteriaService,
    private modalService: NgbModal,
    private UserService: UserService,
    private logs: LogsService,
    private JobDetailsService: JobDetailsService,

  ) { }

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.getJobname();
    this.getUserId();
    // this.getUserName();
    this.getCriteria();

    // this.jobCriteriaForm = this.fb.group({
    //   education: ['', Validators.required],
    //   experience: ['', Validators.required],
    //   language: ['', Validators.required],
    //   skill: ['', Validators.required],
    //   id_job: this.currentJob,
    //   job_name: this.jobName
    // })


    this.criteriaEditForm = this.fb.group({
      education: ['', Validators.required],
      experience: ['', Validators.required],
      language: ['', Validators.required],
      skill: ['', Validators.required],
      id_job: this.currentJob,
      job_name: this.jobName
    });

  }

  /* -------------------------------------------------------------------------- */
  /*                   Get JobId - RecuriterId - RecuriterName                  */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = window.sessionStorage.getItem("jobId");
  }

  getUserId() {
    this.currentUserId = window.sessionStorage.getItem("token");
  }

  // getUserName() {
  //   this.UserService.getUsers().subscribe(user => {
  //     let userName = user.filter(user => user.id == this.currentUserId);
  //     this.userName = userName[0].username;
  //   })
  // }

  getJobname() {
    this.JobDetailsService.getjobDetails(this.currentJob).subscribe((response) => {
      this.jobName = response.Jobname;
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Get Criteria                               */
  /* -------------------------------------------------------------------------- */

  getCriteria() {
    this.CriteriaService.getcriteriaDetails(this.currentJob).subscribe((data) => {
      this.screeningObj = data;
      this.criteriaId = data._id;
      this.skills = this.screeningObj.skill;
      this.EditJobVal();
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Edit Criteria                              */
  /* -------------------------------------------------------------------------- */

  EditJobVal() {
    this.criteriaEditForm.patchValue({
      education: this.screeningObj.education,
      experience: this.screeningObj.experience,
      language: this.screeningObj.language,
      skill: this.screeningObj.skill,
      id_job: this.currentJob,
      job_name: this.jobName
    });
  }

  onSubmitEdit(form) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var date = mm + "-" + dd + "-" + yyyy;
    let createdDate = new Date();
    let createdHour = createdDate.getHours();
    let CreatedMin = createdDate.getUTCMinutes();
    let createdTime = createdHour + ":" + CreatedMin;

    var objCriteriaEdit = {
      education: form.value.education,
      experience: form.value.experience,
      language: form.value.language,
      skill: this.skills,
      id_job: this.currentJob,
      // job_name: this.jobName
    };

    // /* add logs */
    // let logsObj = {
    //   full_name: this.userName,
    //   username: this.userName,
    //   type_user: "recruiter",
    //   description: "Edit Criteria",
    //   time: createdTime,
    //   created: date,
    //   type_activity: "Edit Criteria",
    //   id_job: this.currentJob,
    //   user_id: this.currentUserId,
    //   job_name: this.jobName
    // };
    // this.logs.addLogs(logsObj).subscribe();

    this.CriteriaService.editcriteriaDetails(this.criteriaId, objCriteriaEdit).subscribe(
      (data) => {
        this.getCriteria();
        this.toster.success(" Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        // this.logs.addLogs(logsObj).subscribe();
        this.criteriaEditForm.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error(err.message, "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                    Add Skills                              */
  /* -------------------------------------------------------------------------- */

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
  }

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

}


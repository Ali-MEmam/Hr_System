import { data } from './../../../shared/data/smart-data-table';
import { log } from 'util';
import { Component, OnInit } from "@angular/core";
import { JobDetailsService } from "../../../../services/job/job-details.service";
import { JobListService } from "../../../../services/job/jobs-list.service";
import { UserService } from 'services/user-managment-services/user.service';
import { LogsService } from 'services/job/logs.service';
import { DepartmentService } from 'services/department/department.service';
import { ToastrService } from "ngx-toastr";
import { NgbModal, ModalDismissReasons, NgbActiveModal, } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable, Subscription } from 'rxjs';
import { CountriesService } from 'services/candidate/countries.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HistoryService } from "../../../../services/job/history-service";

@Component({
  selector: "app-job-details",
  templateUrl: "./job-details.component.html",
  styleUrls: ["./job-details.component.scss"],
})

export class JobDetailsComponent implements OnInit {
  CurrentJobIdResevd;
  constructor(
    private modalService: NgbModal,
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService,
    private jobService: JobDetailsService,
    private formBuilder: FormBuilder,
    private toster: ToastrService,
    private jobListService: JobListService,
    private country: CountriesService,
    private departmenService: DepartmentService,
    private UserService: UserService,
    private logs: LogsService,
    private Router: Router,
    private HistoryService: HistoryService
  ) {
    this.jobService.currentJobId.subscribe(data => this.CurrentJobIdResevd = data);
  }

  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryName;
  stateName;
  closeResult: string;
  jobEditForm: FormGroup;
  jobDetails;
  subscription: Subscription;
  currentUserId;
  userName;
  departmentList;
  currentJob;
  selectedjobData;
  filteredCountry;
  filteredCity;
  departmentId;

  ngOnInit(): void {
    this.getUserId();
    this.getUserName();
    this.CurrentSelectedJob();
    this.getDepartments();
    this.displayJobDetails();
    this.getCountries();
    // modal form group
    this.jobEditForm = this.formBuilder.group({
      description: ["", Validators.required],
      contract_type: ["", Validators.required],
      // contractTypeTime: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      salaryTo: ["", Validators.required],
      salaryFrom: ["", Validators.required],
      // salaryPer: ["", Validators.required],
      // userType: ["candiate"],
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

  getUserName() {
    // this.UserService.getUsers().subscribe(user => {
    //   // let userName = user.filter(user => user.id == this.currentUserId);
    //   // this.userName = userName[0].username;
    //   // console.log("user_name = " + this.userName);
    // })
  }

  /* -------------------------------------------------------------------------- */
  /*                                Get Department                              */
  /* -------------------------------------------------------------------------- */

  getDepartments() {
    this.departmenService.getDepartment().subscribe(
      (data) => {
        this.departmentList = data;
      },
      (err) => {
        this.toster.error(err, "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                            Display All job Details                         */
  /* -------------------------------------------------------------------------- */

  displayJobDetails() {
    this.jobService.getjobDetails(this.currentJob).subscribe((response) => {
      this.jobDetails = response;
      this.EditJobVal();
      this.departmenService.getDepartment().subscribe(data =>{
        let depOfJob = data.filter(data => data.name == this.jobDetails.department_name);
        this.departmentId = depOfJob[0]._id;
      })

    }, (error) => {
      // console.log(error);

    });
  }


  /* -------------------------------------------------------------------------- */
  /*                              Edit Job Details                             */
  /* -------------------------------------------------------------------------- */

  EditJobVal() {
    // this.filteredCountry = this.countryInfo.find(x => {
    //   return x.CountryName == this.jobDetails.country
    // });
    // this.filteredCity = this.filteredCountry.States.find(x => {
    //   return x.StateName == this.jobDetails.city
    // });
    // console.log(this.filteredCountry.States.indexOf(this.filteredCity));
    this.jobEditForm.patchValue({
      contract_type: this.jobDetails.contract_type,
      city: this.jobDetails.city,
      country: this.jobDetails.country,
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

    var objJobEdit = {
      description: form.value.description,
      contract_type: form.value.contract_type,
      city: this.stateName,
      country: this.countryName,
      salary_to: form.value.salaryTo,
      salary_from: form.value.salaryFrom,
      id_department: this.departmentId

      // contractTypeTime: form.value.contractTypeTime,
      // salary_per: form.value.salaryPer,
    };

    // /* add logs */
    let logsObj = {
      full_name: this.userName,
      username: this.userName,
      type_user: "recruiter",
      description: "Edit Job Details " + this.jobDetails.Jobname,
      time: createdTime,
      created: date,
      type_activity: "Edit Job Details",
      job_id: this.currentJob,
      user_id: this.currentUserId
    };

    this.jobService.editjobDetails(this.currentJob, objJobEdit).subscribe(
      (data) => {
        this.toster.success(" Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.displayJobDetails();
        this.HistoryService.addHistory(logsObj).subscribe();
        this.jobEditForm.reset();
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
  /*                              Get Countires                             */
  /* -------------------------------------------------------------------------- */

  // start select countries and city
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
          // console.log('Data:', this.countryInfo);
        },
        err => console.log(err),
        () => console.log('complete')
      )
  }

  onChangeCountry(countryValue) {
    // console.log(countryValue);
    // console.log(this.countryInfo[countryValue].CountryName);
    this.countryName = this.countryInfo[countryValue].CountryName;
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
    // console.log(this.stateInfo);
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    // console.log(this.stateInfo[stateValue]);

    this.stateName = this.stateInfo[stateValue].StateName
    // console.log(this.cityInfo);
  }

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */
  
  open(content) {
    this.modalService.open(content, { size: "lg" }).result.then(
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

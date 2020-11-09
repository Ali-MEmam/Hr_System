import { log } from 'util';
import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { data } from "app/shared/data/smart-data-table";
import { JobListService } from "../../../../services/job/jobs-list.service";
import { JobDetailsService } from "../../../../services/job/job-details.service";
import { DepartmentService } from 'services/department/department.service';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CountriesService } from 'services/candidate/countries.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
// import { TagInputModule } from 'ngx-chips';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { LogsService } from 'services/job/logs.service';
import { UserService } from 'services/user-managment-services/user.service';
import { CriteriaService } from "services/job/job-criteria-details";
import { HistoryService } from "../../../../services/job/history-service";

declare let swal: any;

import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';

// export interface skills {
//   name: string;
// }

@Component({
  selector: "app-job-list",
  templateUrl: "./job-list.component.html",
  styleUrls: ["./job-list.component.scss"],
})
export class JobListComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills = [];

  JobForm: FormGroup;
  jobEditForm: FormGroup;
  departmentList = [];
  closeResult: string;
  Joblist = [];
  rows = [];
  newJob;
  subscription: Subscription;
  newCriteria;
  temp = [];
  resetRows = [];
  editId;
  // Table Column Titles
  columns = [
   { prop: "Job Title" },
    { prop: "Department" },
    {prop: "Location" },
    {prop: "Salary" },
    {prop: "Date" },
    /* { prop: "Compatibilty of Matching" }, */
  ];

  // FilterOptionLabel = 'Filter Option';
  FilterPlaceHolder = 'Type to Filter ';
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryName;
  stateName;
  currentUserId;
  userName;
  // CurrentJobIdResevd;
  isLoading = false;
  id;
  jobName;
  jobEditName;
  jobDeleteName;
  jobCriteriaForm: FormGroup;
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
  selectedjobData;
  filteredCountry;
  filteredCity;
  depID;
  selectedrow;
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toster: ToastrService,
    private _location: Location,
    private departmenService: DepartmentService,
    private jobListService: JobListService,
    private router: Router,
    private logs: LogsService,
    private country: CountriesService,
    private http: HttpClient,
    private jobDetailsService: JobDetailsService,
    private UserService: UserService,
    private CriteriaService: CriteriaService,
    private HistoryService: HistoryService
  ) {
  }

  ngOnInit(): void {
    this.getDepartments();
    this.getJobs();
    this.getCountries();
    this.getUserId();
    // this.getUserName();


    this.JobForm = this.formBuilder.group({
      description: ["", Validators.required],
      Jobname: ["", Validators.required],
      contract_type: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      salary_from: ["", Validators.required],
      salary_to: ["", Validators.required],
      department: ["", Validators.required],
    });

    this.jobCriteriaForm = this.formBuilder.group({
      education: ['', Validators.required],
      experience: ['', Validators.required],
      language: ['', Validators.required],
      skill: ['', Validators.required],
    })

    this.jobEditForm = this.formBuilder.group({
      description: ["", Validators.required],
      Jobname: ["", Validators.required],
      contract_type: ["", Validators.required],
      city: ["", Validators.required],
      country: ["", Validators.required],
      salary_from: ["", Validators.required],
      salary_to: ["", Validators.required],
      department: ["", Validators.required],
    });
  }

  // getUserId() {
  //   this.currentUserId = window.sessionStorage.getItem("token");
  //   console.log("user_id = " + this.currentUserId);
  // }

  getUserName() {
    // this.UserService.getUsers().subscribe(user => {
    //   let userName = user.filter(user => user.id == this.currentUserId);
    //   this.userName = userName[0].username;
    //   // console.log(userName[0]);
    //   console.log("user_name = " + this.userName);
    // })
  }
  getUserId() {
    this.userName = window.sessionStorage.getItem("CompanyId")
  }

  updateFilter(event) {
    const val = event.target.value;
    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["Jobname"].toUpperCase().includes(val.toUpperCase()) || e["Jobname"].toLowerCase().includes(val.toLowerCase());
      // return e["department"].includes(val) || e["Jobname"].includes(val);
    });

    // update the rows
    this.rows = temp;
    if (val == "") {
      this.rows = this.resetRows;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                                Submit Modal Form                           */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                               start get jobs                         */
  /* -------------------------------------------------------------------------- */
  jobfilteddata;
  getJobs() {
    this.jobListService.getAllJobs().subscribe(
      (data) => {
        this.Joblist = data;
        this.rows = this.Joblist;
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["Job Title"] = this.rows[i] ["name"]  ,
          this.rows[i]["Department"] = this.rows[i]["name_department"] ,
          this.rows[i]["Salary"] = this.rows[i]["salary_to"] + " - " + this.rows[i]["salary_from"];
          this.rows[i]["Date"] = this.rows[i]["created"].slice(0,10);
          this.rows[i]["Location"] = this.rows[i]["city"] + " - " + this.rows[i]["country"];
          }
          this.isLoading =false
        this.resetRows = this.rows;
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.isLoading =false

      }
    );
  }
  /* -------------------------------------------------------------------------- */
  /*                                end get jobs                           */
  /* -------------------------------------------------------------------------- */
  departmentId;
  onSubmit(form) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var date = mm + "-" + dd + "-" + yyyy;
    let createdDate = new Date();
    let createdHour = createdDate.getHours();
    let CreatedMin = createdDate.getUTCMinutes();
    let createdTime = createdHour + ":" + CreatedMin;

    // console.log(date);

    // this.Joblist.push(form.value)
    //this.modalService.dismissAll();

    this.departmentId = this.departmentList.filter(data => data.id == form.value.department);
    this.newJob = {
      name: form.value.Jobname,
      city: this.stateName,
      country: this.countryName,
      contract_type: form.value.contract_type,
      salary_by: "2000",
      salary_to: form.value.salary_to,
      salary_from: form.value.salary_from,
      id_department: form.value.department,
      description: form.value.description
    };

    this.jobName = this.newJob.Jobname;

    this.jobListService.addJob(this.newJob).subscribe(
      (data) => {
        this.id = data.id;
        // this.userName = window.sessionStorage.setItem("jobId", this.id);

        // /* add logs */
        let logsObj = {
          full_name: this.userName,
          username: this.userName,
          type_user: "recruiter",
          description: "Added Job " + this.jobName,
          time: createdTime,
          created: date,
          type_activity: "Create job",
          id_job: this.id,
          user_id: this.currentUserId
        };
        this.logs.addLogs(logsObj).subscribe();
        this.rows = data;
        this.resetRows = this.rows;

        this.getJobs();
        // this.toster.success(" added successfully", "", {
        //   timeOut: 3000,
        //   positionClass: "toast-top-full-width",
        //   closeButton: true,
        // });
        this.JobForm.reset();
        //this.modalService.dismissAll();
      },
      (err) => {
        // this.toster.error("We Have Problem Please Try Again", "", {
        //   timeOut: 3000,
        //   positionClass: "toast-top-full-width",
        //   closeButton: true,
        // });
      }
    );

  }

  clearData() {
    this.jobCriteriaForm.reset();
    this.skills = [];
    this.jobCriteriaForm.patchValue({
      skill: "",
    });
  }

  onSubmitJobCriteriaForm(form) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var date = mm + "-" + dd + "-" + yyyy;
    let createdDate = new Date();
    let createdHour = createdDate.getHours();
    let CreatedMin = createdDate.getUTCMinutes();
    let createdTime = createdHour + ":" + CreatedMin;

    this.newCriteria = {
      education: form.value.education,
      experience: form.value.experience,
      language: form.value.language,
      skill: this.skills,
      id_job: this.id,
      // job_name: this.jobName
    };
    this.CriteriaService.addCriteria(this.newCriteria).subscribe(
      (data) => {
        // // /* add logs */
        // let logsObj = {
        //   full_name: this.userName,
        //   username: this.userName,
        //   type_user: "recruiter",
        //   description: "Added Criteria",
        //   time: createdTime,
        //   created: date,
        //   type_activity: "Create Criteria",
        //   id_job: this.id,
        //   user_id: this.currentUserId,
        //   job_name: this.jobName
        // };
        // this.logs.addLogs(logsObj).subscribe();
        // console.log(logsObj);

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.getJobs();
        // this.getAllCriteria();
        this.skills=[];
        this.jobCriteriaForm.reset();
        this.clearData();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }


  goback() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                      Submit TO modal create job form                      */
  /* -------------------------------------------------------------------------- */

  removeJob(value) {
    // console.log(data);
    // this.jobListService.getAllJobs().subscribe(data => {
    //   let deleteJob = data.filter(data => data.id == value);
    //   console.log(deleteJob);
    //   this.jobDeleteName = deleteJob[0].Jobname;
    // })
    //  /* add logs */
    //  var today = new Date();
    //  var dd = String(today.getDate()).padStart(2, "0");
    //  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    //  var yyyy = today.getFullYear();
    //  var date = mm + "-" + dd + "-" + yyyy;
    //  let createdDate = new Date();
    //  let createdHour = createdDate.getHours();
    //  let CreatedMin = createdDate.getUTCMinutes();
    //  let createdTime = createdHour + ":" + CreatedMin;

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "Job has been deleted.", "success");
        // let logsObj = {
        //   full_name: this.userName,
        //   username: this.userName,
        //   type_user: "recruiter",
        //   description: "Delete Job  " + this.jobDeleteName,
        //   time: createdTime,
        //   created: date,
        //   type_activity: "Delete job",
        //   id_job: value,
        //   user_id: this.currentUserId
        // };
        // this.logs.addLogs(logsObj).subscribe();
        // console.log(logsObj);
        this.jobListService.deleteJob(value._id).subscribe(
          (data) => {
            //delete log of this job
            // this.logs.getAllLogs().subscribe(data => {
            //   data.filter(data => data.id_job == value).map(data => {
            //     this.logs.deleteLog(data.id).subscribe(data => {
            //     })
            //   })
            // })

            //delete criteria of this job
            // this.CriteriaService.getAllCriteria().subscribe(data => {
            //   data.filter(data => data.id_job == value).map(data => {
            //     this.CriteriaService.deleteCriteria(data.id).subscribe(data => {
            //     })
            //   })
            // })

            this.getJobs();
            // this.rows = data;
            // this.getJobs();
          },
          (err) => {
            this.toster.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
          }
        );
      }
    });


    //delete attachments of this job
    //delete notes of this job
    //delete screening of this job



  }
  /* -------------------------------------------------------------------------- */
  /*                      Submit TO modal create job form                      */
  /* -------------------------------------------------------------------------- */
 
  EditJobVal(selectedrow) {
    this.filteredCountry = this.countryInfo.find(x => {
      return x.CountryName == selectedrow.country
    });
    this.filteredCity = this.filteredCountry.States.find(x => {
      return x.StateName == selectedrow.city
    });

    this.editId = selectedrow._id;

this.depID= selectedrow.id_department;
    this.selectedjobData = selectedrow;
    this.jobEditForm.patchValue({
      department: selectedrow.name_department,
      city: this.filteredCountry.States.indexOf(this.filteredCity),
      country: this.countryInfo.indexOf(this.filteredCountry),
      description: selectedrow.description,
      Jobname: selectedrow.name,
      contract_type: selectedrow.contract_type,
      salary_to: selectedrow.salary_to,
      salary_from: selectedrow.salary_from,
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
      // id: this.editId,
      description: form.value.description,
      name: form.value.Jobname,
      contract_type: form.value.contract_type,
      city: this.stateName,
      country: this.countryName,
      salary_to: form.value.salary_to,
      salary_from: form.value.salary_from,
      department_name: form.value.department,
      id_department:this.depID
      // date: date,
      // time: createdTime
    };
    this.jobEditName = objJobEdit.name;

    this.jobListService.EditJob(this.editId,objJobEdit).subscribe(
      (data) => {
        this.rows = data;
        this.resetRows = data;
        this.Joblist = data;

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        let logsObj = {
          full_name: this.userName,
          username: this.userName,
          type_user: "recruiter",
          description: "Edit Job " + this.jobEditName,
          time: createdTime,
          created: date,
          type_activity: "Edit job",
          id_job: this.editId,
          user_id: this.currentUserId
        };
        this.HistoryService.addHistory(logsObj).subscribe();
        this.getJobs();
        this.JobForm.reset();
        //this.modalService.dismissAll();
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

  getDepartments() {
    this.departmenService.getDepartment().subscribe(
      (data) => {
        this.departmentList = data;
        // this.rows = data;
        // this.resetRows = this.rows;
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

  viewJobDetails(value) {
    // this.setJobId(value);
    this.jobListService.id = value._id;
    this.jobDetailsService.sendJobId(this.jobListService.id);
    sessionStorage.setItem('jobId', this.jobListService.id);
    this.router.navigate(["pages", "recruiter", "jobs", "info", value._id, "details"])
  }

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
    }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    // console.log(this.stateInfo[stateValue]);
    this.stateName = this.stateInfo[stateValue].StateName
  }

  redirectFunction() {
    this.router.navigate(["pages/recruiter/department"])
  }

  /* -------------------------------------------------------------------------- */
  /*                           Modal Functions start                          */
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
    }  }




}

import { log } from 'util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ScreeningServiceService } from 'services/screening/screening-service.service';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { CriteriaService } from "services/job/job-criteria-details";
import { JobListService } from "services/job/jobs-list.service";
import { UserService } from 'services/user-managment-services/user.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';


@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss']
})
export class ScreeningComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  descriptionForm: FormGroup;
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

  /*              ----------------------              */
  /*              ----- Declaration ----              */
  /*              ----------------------              */

  screeningObj = {}
  selectedTest = [];
  selectJobCriteria;
  selectedJob = [];
  tests = []
  FilterPlaceHolder = 'Type to Filter ';
  rows = [];
  temp = [];
  resetRows = [];
  closeResult: string;
  columns = [
    { prop: "id", name: "Id" },
    { prop: "test", name: "Name" },
    { prop: "type", name: "Type" },
  ];
  resultOfScreening = false;
  currentUserId;
  userName;
  currentJob;


  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private modalService: NgbModal,
    private ScreeningServiceService: ScreeningServiceService,
    private CriteriaService: CriteriaService,
    private JobListService: JobListService,
    private UserService: UserService
  ) { }
  // navigationMode = new CustomNavigationMode();

  ngOnInit(): void {
    this.getUserId();
    // this.getUserName();
    this.getJobCriteria();
    this.getJobCriteriaData();
    for (let i of this.languagesArray)
      // console.log(i);
      this.getTests()
    this.ScreeningServiceService.getTestsList().subscribe(data => {
      this.tests = data
      // console.log(this.tests);
    })
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    
    /*              ----------------------              */
    /*              Description Form start              */
    /*              ----------------------              */

    this.descriptionForm = this.fb.group({
      screeningName: ['', Validators.required],
      description: ['', Validators.required],
    })

    this.jobCriteriaForm = this.fb.group({
      job: ['', Validators.required],
    })
  }

  getUserId() {
    this.currentUserId = window.sessionStorage.getItem("token");
    console.log("user_id = " + this.currentUserId);
  }

  // getUserName() {
  //   this.UserService.getUsers().subscribe(user => {
  //     let userName = user.filter(user => user.id == this.currentUserId);
  //     this.userName = userName[0].username;
  //     console.log("user_name = " + this.userName);
  //   })
  // }


  /*              ----------------------              */
  /*              Description Form start              */
  /*              ----------------------              */

  onSubmitDescriptionForm(form) {
    // console.log(form.value);
    this.screeningObj["name"] = form.value.screeningName
    this.screeningObj["description"] = form.value.description
  }

  onSubmitJobCriteriaForm(form) {
    // console.log(form);
    this.screeningObj["job_name"] = form.value.job;
    this.screeningObj["username"] = this.userName;
    this.screeningObj["job_id"] = this.currentJob;
    console.log(this.screeningObj);
    this.ScreeningServiceService.addScreening(this.screeningObj).subscribe(data => {
      console.log(data);
    })
    // this.displayJob();
  }

  /*              ----------------------              */
  /*                   get-tests-list                 */
  /*              ----------------------              */

  getTests() {
    this.ScreeningServiceService.getTestsList().subscribe(data => {
      this.tests = data
      this.rows = data;
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i][i + 1] = this.rows[i][i + 1];
        this.rows[i]["test"] = this.rows[i]["test"];
        this.rows[i]["type"] = this.rows[i]["type"];
      }
      this.resetRows = this.rows;
    })
  }

  getJobCriteria() {
    this.JobListService.getAllJobs().subscribe(data => {
      let selectJob = data.map(data => data.Jobname);
      console.log(selectJob);
      this.selectJobCriteria = selectJob;
      console.log(this.selectJobCriteria);
      this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
    })
  }

  getJobCriteriaData() {
    this.CriteriaService.getAllCriteria().subscribe(data => {
      console.log(data);
    })
  }

  showResultOfScreeing() {
    this.resultOfScreening = true;
  }

  /*              ----------------------              */
  /*                 filter-test Data                 */
  /*              ----------------------              */

  updateFilter(event) {
    const val = event.target.value;
    // console.log(val);
    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["test"].toUpperCase().includes(val.toUpperCase()) || e["test"].toLowerCase().includes(val.toLowerCase());
    });
    // console.log(temp);
    // console.log(this.rows);

    // update the rows
    this.rows = temp;
    if (val == "") {
      this.rows = this.resetRows;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /*              ----------------------              */
  /*                 Display-Test-Data                */
  /*              ----------------------              */

  displayTestVal(selectedrow) {
    this.selectedTest = selectedrow;
    // console.log(this.selectedTest);
  }

  displayJob(value) {
    console.log(value.target.value);
    this.CriteriaService.getAllCriteria().subscribe(data => {
      console.log(data);
      let selectJob = data.filter(job => job.job_name == value.target.value);
      console.log(selectJob);
      this.currentJob = selectJob[0].job_id;
      this.selectedJob = selectJob;
    })
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.selectJobCriteria.filter(option => option.toLowerCase().includes(filterValue));
  }


  /*              ----------------------              */
  /*              open-popup-to-viewData              */
  /*              ----------------------              */


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

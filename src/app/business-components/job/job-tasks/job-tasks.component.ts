import { Component, OnInit } from '@angular/core';
import { JobListService } from 'services/job/jobs-list.service';
import { JobDetailsService } from 'services/job/job-details.service';
import { UserService } from 'services/user-managment-services/user.service';
import { LogsService } from 'services/job/logs.service';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-job-tasks',
  templateUrl: './job-tasks.component.html',
  styleUrls: ['./job-tasks.component.scss']
})
export class JobTasksComponent implements OnInit {
  tasks;
  logDetails;
  closeResult: string;
  CurrentJobIdResevd;
  rows = [];
  temp = [];
  resetRows = [];
  currentJob;
  username;
  columns = [
    { prop: "Member" },
    { prop: "Description" },
    { prop: "Date" },
    { prop: "Time" },
  ];

  constructor(

    private LogsService: LogsService,
    private jobListService: JobListService,
    private JobDetailsService: JobDetailsService,
    private modalService: NgbModal,
  ) {
    this.JobDetailsService.currentJobId.subscribe(data => this.CurrentJobIdResevd = data);
  }


  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.getUserName()
    this.getTasks();
  }

  /* -------------------------------------------------------------------------- */
  /*                          Get JobId  - RecuriterName                        */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = window.sessionStorage.getItem("jobId");
  }

  getUserName() {
    this.username = window.sessionStorage.getItem("username");
  }

  /* -------------------------------------------------------------------------- */
  /*                                   Get Tasks                                */
  /* -------------------------------------------------------------------------- */

  getTasks() {
    this.LogsService.getLogById(this.currentJob).subscribe(data =>{
      this.tasks = data;
        this.rows = data;
        console.log(this.rows);
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["Member"] = this.rows[i]["username"];
          this.rows[i]["Description"] = this.rows[i]["description"];
          this.rows[i]["Date"] = this.rows[i]["created"].slice(0, 10);
          this.rows[i]["Time"] = this.rows[i]["created"].slice(11.16);
        }
        this.resetRows = this.rows;
    })
    // this.LogsService.getLogByUser().subscribe(data => {
    //   console.log(data)
    //   let logjob = data.filter(data => data.type_activity == "job")
    //   console.log(logjob);
    //   this.tasks = logjob;
    //   this.rows = logjob;
    //   console.log(this.rows);
    //   for (let i = 0; i < this.rows.length; i++) {
    //     this.rows[i]["Member"] = this.rows[i]["username"];
    //     this.rows[i]["Description"] = this.rows[i]["description"];
    //     this.rows[i]["Date"] = this.rows[i]["created"].slice(0, 10);
    //     this.rows[i]["Time"] = this.rows[i]["created"].slice(11.16);
    //   }
    //   this.resetRows = this.rows;
    // })
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Task  Details                             */
  /* -------------------------------------------------------------------------- */

  showLogeDetails(row) {
    this.LogsService.getLogById(row._id).subscribe(data => {
      this.logDetails = data;
    })
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
}

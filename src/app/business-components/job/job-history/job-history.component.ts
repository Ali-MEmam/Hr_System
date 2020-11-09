import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { JobDetailsService } from "../../../../services/job/job-details.service";
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { Location } from "@angular/common";
import { HistoryService } from "../../../../services/job/history-service";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-job-history',
  templateUrl: './job-history.component.html',
  styleUrls: ['./job-history.component.scss']
})
export class JobHistoryComponent implements OnInit {

  constructor(
    private jobService: JobDetailsService,
    private _location: Location,
    private HistoryService: HistoryService,
    private modalService: NgbModal,
  ) {
    this.jobName;
  }
  @ViewChild(DatatableComponent) table: DatatableComponent;
  history;
  jobName;
  currentJob;
  histDetails;
  closeResult: string;
  rows = [];
  temp = [];
  resetRows = [];
  columns = [
    { prop: "description", name: "Action" },
    { prop: "username", name: "Recruiter" },
    { prop: "created", name: "Date" },
  ];

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.getHistory();
    this.jobService.getjobDetails(this.currentJob).subscribe((response) => {
      this.jobName = response.Jobname;
    });
  }

  CurrentSelectedJob() {
    this.currentJob = JSON.parse(window.sessionStorage.getItem("jobId"))
  }

  /* -------------------------------------------------------------------------- */
  /*                                Get All History                             */
  /* -------------------------------------------------------------------------- */

  getHistory() {
    this.HistoryService.getAllHistory().subscribe(data => {
      let dataJobId = data.filter(data => data.job_id == this.currentJob);
      this.history = dataJobId;
      this.rows = dataJobId;

      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i]["description"].includes('Added')) {
          this.rows[i]["description"] = "Added";
        } else if (this.rows[i]["description"].includes('Edit')) {
          this.rows[i]["description"] = "Edit";
        } else if (this.rows[i]["description"].includes('Delete')) {
          this.rows[i]["description"] = "Delete";
        }
        this.rows[i]["description"] = this.rows[i]["description"];
        this.rows[i]["username"] = this.rows[i]["username"];
        this.rows[i]["created"] = this.rows[i]["created"];
      }
      this.resetRows = this.rows;
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                                Filter History                              */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    this.rows = this.resetRows
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["username"].toUpperCase().includes(val.toUpperCase()) || e["username"].toLowerCase().includes(val.toLowerCase());
    });

    // update the rows
    this.rows = temp
    if (val == "") {
      this.rows = this.resetRows
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  goback() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                          display History  Details                          */
  /* -------------------------------------------------------------------------- */

  showHistoryeDetails(selectedId) {
    this.HistoryService.getHistoryById(selectedId).subscribe(data => {
      this.histDetails = data;
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

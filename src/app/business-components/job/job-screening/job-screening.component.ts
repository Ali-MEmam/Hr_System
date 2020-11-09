import { Component, OnInit, ViewChild } from "@angular/core";
import { JobScreeningService } from "../../../../services/job/job-screening.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { Location } from "@angular/common";
import { LogsService } from "services/job/logs.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";

@Component({
  selector: "app-job-screening",
  templateUrl: "./job-screening.component.html",
  styleUrls: ["./job-screening.component.scss"],
})
export class JobScreeningComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  rows = [];
  temp = [];
  ScreeningDetails;
  currentJob;

  resetRows = [];
  closeResult: string;
  columns = [
    { prop: "username", name: "Screening ID" },
    { prop: "job_name", name: "Screening Label" },
  ];
  jobScreeningData = [];

  constructor(
    private toster: ToastrService,
    private jobScreeningService: JobScreeningService,
    private modalService: NgbModal,
  ) { }

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.displayJobScreening();
  }

  /* -------------------------------------------------------------------------- */
  /*                                Get JobId                                   */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = JSON.parse(window.sessionStorage.getItem("jobId"))
  }

  /* -------------------------------------------------------------------------- */
  /*                              Display All job screening                     */
  /* -------------------------------------------------------------------------- */

  displayJobScreening() {
    this.jobScreeningService.getAllJobScreening().subscribe(data => {
      this.jobScreeningData = data.filter(data => data.job_id == this.currentJob);
      this.rows = this.jobScreeningData;
      console.log(this.jobScreeningData)
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i]["username"] = this.rows[i]["username"];
        this.rows[i]["job_name"] = this.rows[i]["job_name"];
      }
      this.resetRows = this.rows;
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                           View Screening Details                           */
  /* -------------------------------------------------------------------------- */

  showJobScreening(selectedRow) {
    this.ScreeningDetails = selectedRow;
    console.log(this.ScreeningDetails)
  }

  /* -------------------------------------------------------------------------- */
  /*                              Remove  Screening                             */
  /* -------------------------------------------------------------------------- */

  // removeJobScreening(id) {
  //   this.jobScreeningService.deleteJobScreening(id).subscribe(
  //     (data) => {
  //       console.log(data);

  //       this.toster.success("screening Removed Successfully", "", {
  //         timeOut: 3000,
  //         positionClass: "toast-top-full-width",
  //         closeButton: true,
  //       });
  //       this.displayJobScreening();
  //     },
  //     (err) => {
  //       this.toster.error("There is Error Please Try Again", "", {
  //         timeOut: 3000,
  //         positionClass: "toast-top-full-width",
  //         closeButton: true,
  //       });
  //     }
  //   );
  // }

  /* -------------------------------------------------------------------------- */
  /*                              Fillter Screenings                            */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["job_name"].toUpperCase().includes(val.toUpperCase()) || e["job_name"].toLowerCase().includes(val.toLowerCase());
    });
    console.log(temp);
    console.log(this.rows);

    // update the rows
    this.rows = temp;
    if (val == "") {
      this.rows = this.resetRows;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
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

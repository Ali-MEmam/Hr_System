import { Component, OnInit, ViewChild } from "@angular/core";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { TranslateService } from "@ngx-translate/core";
import { ResultOfPreselectingService } from "services/screening/result-of-preselecting.service";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { ScreeningServiceService } from 'services/screening/screening-service.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: "app-result-of-preselecting",
  templateUrl: "./result-of-preselecting.component.html",
  styleUrls: ["./result-of-preselecting.component.scss"],
})
export class ResultOfPreselectingComponent implements OnInit {
  FilterOptionLabel = "Filter Option";
  FilterPlaceHolder = "Type to filter the name column...";

  rows = [];
  temp = [];

  // Table Column Titles
  columns = [
    { prop: "fullName" },
    { prop: "Job" },
    { prop: "Phone" },
    { prop: "Email" },
    /* { prop: "Compatibilty of Matching" }, */
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;


  tests = [];
  closeResult: string;
  assignTasks: FormGroup
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private modalService: NgbModal,
    public translate: TranslateService,
    private resultOfPreselectingService: ResultOfPreselectingService,
    private route: Router,
    private toster: ToastrService,
    private testService: ScreeningServiceService,
    private formBuilder: FormBuilder

  ) {
    this.temp = [];
    this.rows = this.temp;
    this.getTests()
  }

  

  /* -------------------------------------------------------------------------- */
  /*                              NgInit LifeCycle                              */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.assignTasks = this.formBuilder.group(
      {
        "test.type": ["", Validators.required],
      },

    );

    this.displayProfiles();
    this.testService.getTestsList().subscribe(data => {
      this.tests = data
      console.log(this.tests);

    })
  }

  /* -------------------------------------------------------------------------- */
  /*                          Navigate TO Another Pages                         */
  /* -------------------------------------------------------------------------- */

  sendInvitaion(id) {
    console.log(id);

  }

  seeDetails(id) {
    this.route.navigate([
      "/pages",
      "login",
      "pre-selecting",
      "statistic-matching",
      id,
    ]);
  }

  /* -------------------------------------------------------------------------- */
  /*                              display Profiles                              */
  /* -------------------------------------------------------------------------- */
  displayProfiles() {
    this.resultOfPreselectingService.getPreselectingList().subscribe((data) => {
      let Roles = [];
      data.map((fixing) => {
        let roleWithNewName = {};
        roleWithNewName["fullName"] =
          fixing.first_name + " " + fixing.last_name;
        roleWithNewName["Job"] = fixing.job_title;
        roleWithNewName["Email"] = fixing.email;
        roleWithNewName["percentage"] = '80%';
        roleWithNewName["id"] = fixing.id;
        roleWithNewName["Phone"] = fixing.phone_number;
        Roles.push(roleWithNewName);
      });
      this.rows = Roles;
      console.log(this.rows)
    });
  }



  getTests() {
    this.testService.getTestsList().subscribe(data => {
      this.tests = data
      console.log(this.tests);

    })
  }




  /* -------------------------------------------------------------------------- */
  /*                               Submit TO modal form                         */
  /* -------------------------------------------------------------------------- */
  onAssignSubmit(assignTasks, type,) {
    console.log(assignTasks);
    // console.log(type);
    this.assignTasks.reset();
    this.modalService.dismissAll()

    this.toster.success(" sending invitation success", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

  }





  /*           ---------------------        */
  /*           Modal functions Start        */
  /*           ---------------------        */
  open(test) {
    this.modalService.open(test, { size: "md" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

  }


  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  /*           -------------------          */
  /*           Modal functions End          */
  /*           -------------------          */

// updateFilter(event) {
  //   const val = event.target.value.toLowerCase();
  //   console.log(val);
  //   // filter our data
  //   const temp = this.temp.filter(function (d) {
  //     console.log(d);
  //     return d.Profile.toLowerCase().indexOf(val) !== -1 || !val;
  //   });

  //   // update the rows
  //   this.rows = temp;
  //   // Whenever the filter changes, always go back to the first page
  //   this.table.offset = 0;
  // }

}


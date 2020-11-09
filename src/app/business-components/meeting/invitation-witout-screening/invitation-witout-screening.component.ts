import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { InvitatioinWithoutScreeningService } from 'services/meeting-services/invitatioin-without-screening.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { TestMangmentService } from 'services/test-mangment/test-mangment.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';


@Component({
  selector: 'app-invitation-witout-screening',
  templateUrl: './invitation-witout-screening.component.html',
  styleUrls: ['./invitation-witout-screening.component.scss']
})
export class InvitationWitoutScreeningComponent implements OnInit {

  assignTasksObj;
  rows = [];
  resetRows = [];
  addCandidate = {}
  assignedTaskData = {}
  temp = [];
  selected = [];
  SelectionType = SelectionType;
  restTestsRows = []
  // Displayed DataTable Vars Start
  displayTestsRows = [];
  closeResult: string;
  // Table Column Titles
  columns = [

    { prop: 'full name' },
    { prop: 'job title' },
    { prop: 'email' },

  ];

  // Table Column Titles
  columnsTestsTable = [
    { prop: 'test' },
    { prop: 'created' },
    { prop: 'type' },
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild(DatatableComponent) testsTable: DatatableComponent;

  constructor(private modalService: NgbModal,
    private _location: Location,
    private toster: ToastrService,
    private invService: InvitatioinWithoutScreeningService,
    private formBuilder: FormBuilder,
    private testMangmentService: TestMangmentService,) { }
  assignTasks: FormGroup
  addPerson: FormGroup;
  ngOnInit(): void {
    this.displayPreselectedtests()
    this.getTests()
    this.displayCandidates()
    this.assignTasks = this.formBuilder.group(
      {
        test_type: ["", Validators.required],
      }
    );

    // modal form group
    this.addPerson = this.formBuilder.group(
      {
        first_name: ["", Validators.required],
        last_name: ["", Validators.required],
        job_title: ["", Validators.required],
        email: ["", Validators.required],
        // userType: ["candiate"],
      },

    );
  }

  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["full name"].includes(val)
    });
    console.log(temp);
    console.log(this.rows);


    // update the rows
    this.rows = temp
    if (val == "") {
      this.rows = this.resetRows
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }


  sendInv(value) {
    console.log(value);

  }

  /* -------------------------------------------------------------------------- */
  /*                              Display All Candidates                        */
  /* -------------------------------------------------------------------------- */

  displayCandidates() {
    this.invService.getInvitationWithoutSreeningCandidates().subscribe(data => {

      this.rows = data
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i]["full name"] = this.rows[i].first_name + " " + this.rows[i].last_name
        this.rows[i]["email"] = this.rows[i]["email"]
        this.rows[i]["job title"] = this.rows[i]["job_title"]
      }
      this.resetRows = this.rows
    }
    )
  }


  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */
  open(content) {
    this.modalService.open(content, { size: 'lg' }).result.then((result) => {
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
  

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation end                            */
  /* -------------------------------------------------------------------------- */







  /* -------------------------------------------------------------------------- */
  /*                      Submit TO modal Inviteation form                      */
  /* -------------------------------------------------------------------------- */
  onSubmit(addPerson) {
    this.addCandidate = {
      first_name: addPerson.value.first_name,
      last_name: addPerson.value.last_name,
      job_title: addPerson.value.job_title,
      email: addPerson.value.email,
    };
    this.invService.addInvitationWithoutSreeningCandidates(this.addCandidate).subscribe(
      (data) => {
        console.log(data);
        this.toster.success("candidate added successfully", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.displayCandidates()
        addPerson.reset()
       this.modalService.dismissAll()
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.goback();
      }
    );
  }
  goback() {
    this._location.back();
  }


  // get test
  testsInfo = []
  getTests() {
    this.invService.getAllTest().subscribe((data) => {
      this.testsInfo = data
      console.log(this.testsInfo);

    })
  }






  /* -------------------------------------------------------------------------- */
  /*                               Submit to modal form                         */
  /* -------------------------------------------------------------------------- */
  onAssignSubmit(assignTasks) {
    console.log('hii');
    this.assignTasksObj = {
      test_type: assignTasks.value.test_type,
    };
    console.log(this.assignTasksObj);
    if (this.assignTasksObj.test_type === true) {
      this.toster.success("Test Assigned successfully", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
      assignTasks.reset()
    }

  }


  // remove candidate
  removetest(id) {
    console.log(id);

    this.invService.deleteInvitationWithoutSreeningCandidates(id).subscribe(data => {
      this.toster.success("Candidate Removed", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
      this.displayCandidates()
    }, err => {
      this.toster.error("There is Error Please Try Again", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
    })

  }




  /* -------------------------------------------------------------------------- */
  /*                              Display Selected tests                        */
  /* -------------------------------------------------------------------------- */

  displayPreselectedtests() {
    this.testMangmentService.gettests().subscribe(data => {
      console.log(data);

      this.displayTestsRows = data
      for (let i = 0; i < this.displayTestsRows.length; i++) {
        this.displayTestsRows[i]["test"] = this.displayTestsRows[i].test,
          this.displayTestsRows[i]["type"] = this.displayTestsRows[i].type,
          this.displayTestsRows[i]["created"] = this.displayTestsRows[i].created
      }
      console.log(this.displayTestsRows);
      this.restTestsRows = this.displayTestsRows
    }
    )
  }



  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }


  /* -------------------------------------------------------------------------- */
  /*                                Checkbox Display                            */
  /* -------------------------------------------------------------------------- */
  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
  
  /* -------------------------------------------------------------------------- */
  /*                            Tests Table Filtration                          */
  /* -------------------------------------------------------------------------- */
  updateTestsFilter(event) {
    const val = event.target.value;
    this.displayTestsRows = this.restTestsRows
    // filter our data
    let temp = this.displayTestsRows.filter(function (e) {
      return e["test"].includes(val)
    });

    // update the rows
    this.displayTestsRows = temp
    if (val == "") {
      this.displayTestsRows = this.restTestsRows
    }
    // Whenever the filter changes, always go back to the first page
    this.testsTable.offset = 0;
  }



  /* -------------------------------------------------------------------------- */
  /*                              Confirm Assign Tests                          */
  /* -------------------------------------------------------------------------- */
  confirmAssignTasks(event) {
    this.toster.success("Tests Assigned Successfully", '', {
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
    this.selected = []
    this.modalService.dismissAll()
  }
}




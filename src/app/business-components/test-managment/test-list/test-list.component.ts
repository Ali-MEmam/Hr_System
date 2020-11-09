import { Component, OnInit, ViewEncapsulation, Input, ViewChild } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TestMangmentService } from '../../../../services/test-mangment/test-mangment.service';
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {
  // Displayed DataTable Vars Start



  rows = [];
  resetRows = [];
  temp = [];
  testData = [];
  testDetails;

  // Table Column Titles
  columns = [

    { prop: 'Test Title' },
    { prop: 'Type' },
    { prop: 'Created Date' },
  ];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  closeResult: string;

  constructor(private modalService: NgbModal,
    private testMangmentService: TestMangmentService,
    private route: Router
    , private toster: ToastrService) { }

  /* -------------------------------------------------------------------------- */
  /*                              NgInit LifeCycle                              */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.displayTests()
  }


  /* -------------------------------------------------------------------------- */
  /*                              display Test                              */
  /* -------------------------------------------------------------------------- */

  displayTests() {
    this.testMangmentService.gettests().subscribe(data => {
      this.testData = data;
      this.rows = data;
      console.log(this.rows);
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i]["Test Title"] = this.rows[i]["test"];
        this.rows[i]["Type"] = this.rows[i]["type"];
        this.rows[i]["Created Date"] = this.rows[i]["created"];
      }
      this.resetRows = this.rows;
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                                 Delete Test                                */
  /* -------------------------------------------------------------------------- */

  deleteTest(id) {
    console.log(id)
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
        Swal.fire("Deleted!", "Member has been deleted.", "success");
        this.testMangmentService.deleteTest(id).subscribe(data => {
          this.toster.success("Profile Deleted", '', {
            timeOut: 3000,
            positionClass: 'toast-top-full-width',
            closeButton: true
          })
          this.displayTests();

        }, err => {
          this.toster.error("Wrong Move", '', {
            timeOut: 3000,
            positionClass: 'toast-top-full-width',
            closeButton: true
          })
        })
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                          display test Details                           */
  /* -------------------------------------------------------------------------- */

  showTestDetails(selectedRow) {
    this.testDetails = selectedRow;
    console.log(this.testDetails)
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Edit Test                              */
  /* -------------------------------------------------------------------------- */

  EditTestVal(row) {
    console.log(row);
    sessionStorage.setItem("testInfo", row.id);
  }

  /* -------------------------------------------------------------------------- */
  /*                              filter Tests                               */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["Test Title"].toUpperCase().includes(val.toUpperCase()) || e["Test Title"].toLowerCase().includes(val.toLowerCase());
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

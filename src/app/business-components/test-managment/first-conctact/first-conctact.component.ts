import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { HrTestService } from 'services/test-services/hr-test.service';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TestMangmentService } from '../../../../services/test-mangment/test-mangment.service';
import { ToastrService } from 'ngx-toastr';
import Swal from "sweetalert2";

@Component({
  selector: 'app-first-conctact',
  templateUrl: './first-conctact.component.html',
  styleUrls: ['./first-conctact.component.scss']
})

export class FirstConctactComponent implements OnInit {

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
    private route: Router,
    private toster: ToastrService
  ) { }

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
      let firstContactTest = data.filter(test => test.type == "FirstContent");
      console.log(firstContactTest);
      this.testData = firstContactTest;
      this.rows = firstContactTest;
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

//  editMode = false
//  editId;

//  columns = [

//   { prop: 'questions' },

// ];

//   questionsForm: FormGroup;

//   listOfQuestions=[]
//   rows=[]
//   id=0;
//   testObject={}


//   constructor(
//     private fb: FormBuilder,
//     private http:HttpClient,
//     private _location: Location,
//     private testService:HrTestService,
//     private toast:ToastrService,
//     private tests:HrTestService

//   ) { }

//   ngOnInit(): void {
//     this.questionsForm = this.fb.group({
//       testName:['',Validators.required],
//       question: ['',Validators.required],
//     });
//     this.displayTests()
//     console.log(this.listOfQuestions.length);

//   }



//   onSubmitQuestionsForm(form){
//     this.testObject["test_name"] = form.value.testName
//     var obj:any= {
//      questions:form.value.question,
//      id:this.id
//     }
//     this.listOfQuestions.push(obj)

//     this.displayTests()
//     this.id++

//     form.reset()
//     form.get('testName').patchValue(this.testObject["test_name"])

//     this.toast.success("Question Added",'', {
//       timeOut: 2000,
//       positionClass: 'toast-top-full-width',
//       closeButton:true
//       })
//   }

//   onSave(){
//     var obj={}
//     var objQuestions={}
//     console.log(this.listOfQuestions);
//     obj["test"] = this.testObject["test_name"]
//     obj["type"] = "First contact"
//     obj["created"] = "20-20-2020"
//     obj["recrutier_name"] = "Mohamed Ahmed"
//     obj["questions"] =[]
//     for(let i =0 ; i <= this.listOfQuestions.length-1; i++ ){
//       objQuestions=
//       {
//         question: this.listOfQuestions[i]["questions"] ,
//       }
//       obj["questions"].push(objQuestions)
//     }

//     console.log(obj);
//     this.tests.postFirstContactTest(obj).subscribe()
//     this.toast.success("Test Created Successfully",'', {
//       timeOut: 2000,
//       positionClass: 'toast-top-full-width',
//       closeButton:true
//       })
//   }


//   editQuestion(i){
//   console.log("edit" + i);
//   var filtered= this.listOfQuestions.filter(x => {
//     return x.id == i;
//   })
//   console.log(filtered[0]);
//   this.questionsForm.get("question").patchValue(filtered[0]["questions"])
//   this.editMode=true
//   this.editId = filtered[0].id
//   }



//   saveEdit(form){

//   console.log(this.listOfQuestions);

//    for(var i=0 ; i <= this.listOfQuestions.length-1 ;i++){

//      if(this.listOfQuestions[i].id == this.editId){
//        console.log(this.listOfQuestions[i]["id"], "hiiiiiiiiiii this is the id ");

//       this.listOfQuestions[i].questions = form.value.question
//       console.log(this.listOfQuestions[i].questions ,  form.value.question);

//      }
//    }
//    form.reset()
//    form.get('testName').patchValue(this.testObject["test_name"])

//    this.toast.success("Edited Successfully",'', {
//      timeOut: 2000,
//      positionClass: 'toast-top-full-width',
//      closeButton:true
//      })

//    this.displayTests()
//     this.editMode=false
//   }


//   cancelEdit(form){
//     form.reset()
//     form.get('testName').patchValue(this.testObject["test_name"])
//     this.editMode=false
//   }

//   deleteQuestion(i){
//   console.log("delete"+i);
//   var filtered= this.listOfQuestions.filter(x => {
//     return x.id != i;
//   })
//   this.listOfQuestions = filtered
//   this.displayTests()
//   this.toast.error("Question Deleted",'', {
//   timeOut: 2000,
//   positionClass: 'toast-top-full-width',
//   closeButton:true
//   })
//   }


// /* -------------------------------------------------------------------------- */
// /*                              Display All Candidates                        */
// /* -------------------------------------------------------------------------- */

// displayTests() {
// this.rows = [...this.listOfQuestions]
// }




// /****************  Back Button ****************/
//   backClicked() {
//     this._location.back();
//   }

// }

import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencyCode, Location } from '@angular/common';
import { TestMangmentService } from '../../../../../services/test-mangment/test-mangment.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { HrTestService } from '../../../../../services/test-services/hr-test.service';


import Swal from 'sweetalert2';
declare let swal: any;
@Component({
  selector: 'app-create-first-content',
  templateUrl: './create-first-content.component.html',
  styleUrls: ['./create-first-content.component.scss']
})
export class CreateFirstContentComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  skills = [];
  questionsHRForm: FormGroup;
  questionsFirstForm: FormGroup;
  questionsTecnicalForm: FormGroup;
  addCategoryform: FormGroup;
  // correctAnswer = new FormGroup({
  //   items: new FormArray([])
  // })
  allcorrectAnswer = [];
  listOfHRQuestions = [];
  FirstContentTestrows = [];
  listOfFirstContentQuestions = [];
  tecnicallistOfQuestions = [];
  ansSelect = []
  allCategory = [];
  allCategoryWidth;
  categoryArr = [];

  HrTestrows = [];
  id = 1;
  testObject = {}
  editMode = false
  editId;
  test_Name;
  rows = [];
  columns = [

    { prop: 'questions' },

  ];
  FirstContentrows = [];
  CorrectAnswersLabels = [
    { name: 'One', check: false, group: 'ans1' },
    { name: 'Two', check: false, group: 'ans2' },
    { name: 'Three', check: false, group: 'ans3' },
    { name: 'Four', check: false, group: 'ans4' },
  ]
  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _location: Location,
    private toast: ToastrService,
    private modalService: NgbModal,
    private testMangmentService: TestMangmentService,
    private tests: HrTestService,

  ) { }
  testdetails;
  ngOnInit(): void {
    this.questionsFirstForm = this.fb.group({
      testName: ['', Validators.required],
      question: ['', Validators.required],
    });
    this.displayFirstContent();
    this.testdetails = sessionStorage.getItem("testInfo");
    // if (this.testdetails) {
    //   this.getTestById();
    // }
  }

  // getTestById(){
  //   this.testMangmentService.gettestById(this.testdetails).subscribe(data =>{
  //     this.listOfFirstContentQuestions.push(data);
  //     this.editQuestionFirstContent(data.id);
  //   })
  // }
  /* -------------------------------------------------------------------------- */
  /*                             First Content-TEST                             */
  /* -------------------------------------------------------------------------- */

  onSubmitFirstContentQuestionsForm(form) {
    this.testObject["test_name"] = form.value.testName;
    this.test_Name = "First Contact Test"
    var obj: any = {
      questions: form.value.question,
      id: this.id
    }
    this.listOfFirstContentQuestions.push(obj);
    this.displayFirstContent()
    this.id++
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])
    this.toast.success("Question Added", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

  }

  onSaveFirstContent() {
    var obj = {}
    var objQuestions = {}
    console.log(this.listOfFirstContentQuestions);
    obj["test"] = this.testObject["test_name"]
    obj["type"] = "HR-Test"
    obj["created"] = "20-20-2020"
    obj["recrutier_name"] = "Mohamed Ahmed"
    obj["questions"] = []
    for (let i = 0; i <= this.listOfFirstContentQuestions.length - 1; i++) {
      objQuestions =
      {
        question: this.listOfFirstContentQuestions[i]["questions"],
        // answer: [this.listOfFirstContentQuestions[i]["answers"]]
      }
      obj["questions"].push(objQuestions)
    }

    this.tests.postFirstContactTest(obj).subscribe()
    this.toast.success("Test Created Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
  }


  editQuestionFirstContent(item) {
    var filtered = this.listOfFirstContentQuestions.filter(x => {
      return x.id == item;
    })
    console.log(filtered[0]);
    this.questionsFirstForm.get("question").patchValue(filtered[0]["questions"])
    // this.questionsFirstForm .get("answer").patchValue(filtered[0]["answers"])
    this.editMode = true
    this.editId = filtered[0].id
  }

  saveEditFirstContent(form) {

    console.log(this.listOfFirstContentQuestions);

    for (var i = 0; i <= this.listOfFirstContentQuestions.length - 1; i++) {

      if (this.listOfFirstContentQuestions[i].id == this.editId) {
        console.log(this.listOfFirstContentQuestions[i]["id"], "hiiiiiiiiiii this is the id ");

        this.listOfFirstContentQuestions[i].questions = form.value.question
        console.log(this.listOfFirstContentQuestions[i].questions, form.value.question);

      }
    }
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])

    this.toast.success("Edited Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

    this.displayFirstContent()
    this.editMode = false
  }


  cancelEditFirstContent(form) {
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])
    this.editMode = false
  }


  deleteQuestionFirstContent(item) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'task has been deleted.',
          'success'
        )
        var filtered = this.listOfFirstContentQuestions.filter(x => {
          return x.id != item;
        })
        this.listOfFirstContentQuestions = filtered;
        this.testObject["test_name"] = '';
        this.displayFirstContent()
      }
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Display  hr Tests                             */
  /* -------------------------------------------------------------------------- */

  displayFirstContent() {
    this.FirstContentTestrows = this.listOfFirstContentQuestions;
    this.FirstContentrows = [...this.listOfFirstContentQuestions]
  }

  /****************  Back Button ****************/
  goback() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */
  closeResult
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
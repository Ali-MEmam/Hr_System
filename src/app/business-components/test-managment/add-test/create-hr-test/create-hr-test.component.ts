import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencyCode, Location } from '@angular/common';
import { HrTestService } from '../../../../../services/test-services/hr-test.service';
import { TestMangmentService } from '../../../../../services/test-mangment/test-mangment.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

import Swal from 'sweetalert2';
declare let swal: any;


@Component({
  selector: 'app-create-hr-test',
  templateUrl: './create-hr-test.component.html',
  styleUrls: ['./create-hr-test.component.scss']
})
export class CreateHrTestComponent implements OnInit {
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
    { prop: 'answers' },

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
    private testService: HrTestService,
    private toast: ToastrService,
    private tests: HrTestService,
    private modalService: NgbModal,
    private testMangmentService: TestMangmentService
  ) { }

  ngOnInit(): void {
    this.questionsHRForm = this.fb.group({
      testName: ['', Validators.required],
      question: ['', Validators.required],
      answer: ['', Validators.required],
    });

  }


  /* -------------------------------------------------------------------------- */
  /*                                   HR-TEST                                  */
  /* -------------------------------------------------------------------------- */

  onSubmitHRQuestionsForm(form) {
    this.testObject["test_name"] = form.value.testName;
    this.test_Name = "HR Test"
    var obj: any = {
      questions: form.value.question,
      answers: form.value.answer,
      id: this.id
    }
    this.listOfHRQuestions.push(obj);
    this.displayHRTests()
    this.id++
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])
    this.toast.success("Question Added", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

  }

  onSaveHR() {
    var obj = {}
    var objQuestions = {}
    console.log(this.listOfHRQuestions);
    obj["test"] = this.testObject["test_name"]
    obj["type"] = "HR-Test"
    obj["created"] = "20-20-2020"
    obj["recrutier_name"] = "Mohamed Ahmed"
    obj["questions"] = []
    for (let i = 0; i <= this.listOfHRQuestions.length - 1; i++) {
      objQuestions =
      {
        question: this.listOfHRQuestions[i]["questions"],
        answer: [this.listOfHRQuestions[i]["answers"]]
      }
      obj["questions"].push(objQuestions)
    }

    this.tests.postHrTest(obj).subscribe()
    this.toast.success("Test Created Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
  }


  editQuestionHR(item) {
    var filtered = this.listOfHRQuestions.filter(x => {
      return x.id == item;
    })
    console.log(filtered[0]);
    this.questionsHRForm.get("question").patchValue(filtered[0]["questions"])
    this.questionsHRForm.get("answer").patchValue(filtered[0]["answers"])
    this.editMode = true
    this.editId = filtered[0].id
  }

  saveEditHR(form) {
    for (var i = 0; i <= this.listOfHRQuestions.length - 1; i++) {

      if (this.listOfHRQuestions[i].id == this.editId) {
        console.log(this.listOfHRQuestions[i]["id"], "hiiiiiiiiiii this is the id ");

        this.listOfHRQuestions[i].questions = form.value.question
        this.listOfHRQuestions[i].answers = form.value.answer
        console.log(this.listOfHRQuestions[i].questions, form.value.question);

      }
    }
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])

    this.toast.success("Edited Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

    this.displayHRTests()
    this.editMode = false
  }


  cancelEditHR(form) {
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])
    this.editMode = false
  }


  deleteQuestionHR(item) {
    console.log("delete" + item.id);

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
        var filtered = this.listOfHRQuestions.filter(x => {
          return x.id != item;
        })
        this.listOfHRQuestions = filtered;
        this.testObject["test_name"] = '';
        this.displayHRTests()
      }
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Display  hr Tests                             */
  /* -------------------------------------------------------------------------- */

  displayHRTests() {
  console.log(this.HrTestrows)
    this.HrTestrows = this.listOfHRQuestions;
    this.HrTestrows = [...this.listOfHRQuestions]
  }

  /****************  Back Button ****************/
  goback() {
    this._location.back();
  }
 
}
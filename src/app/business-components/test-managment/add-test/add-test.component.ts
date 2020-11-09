import { Component, OnInit, ViewChild, VERSION } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { getLocaleCurrencyCode, Location } from '@angular/common';
import { HrTestService } from '../../../../services/test-services/hr-test.service';
import { TestMangmentService } from '../../../../services/test-mangment/test-mangment.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';


import Swal from 'sweetalert2';
declare let swal: any;

@Component({
  selector: 'app-add-test',
  templateUrl: './add-test.component.html',
  styleUrls: ['./add-test.component.scss']
})

export class AddTestComponent implements OnInit {
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
    this.questionsFirstForm = this.fb.group({
      testName: ['', Validators.required],
      question: ['', Validators.required],
    });

    this.questionsTecnicalForm = new FormGroup({
      'testName': new FormControl(null, [Validators.required]),
      'question': new FormControl(null, [Validators.required]),
      'category': new FormControl(null, [Validators.required]),
      'ans1': new FormControl(null, [Validators.required]),
      'ans2': new FormControl(null, [Validators.required]),
      'ans3': new FormControl(null, [Validators.required]),
      'ans4': new FormControl(null, [Validators.required]),
      'correct': this.createCorrectAnswer(this.CorrectAnswersLabels)
    });

    this.addCategoryform = this.fb.group({
      name: ['', Validators.required],
      skill: ['', Validators.required],
    });
    // this.CorrectAnswersLabels.forEach(e => {
    //   this.control.push(new FormControl(false));
    // })
    this.displayHRTests();
    this.displayFirstContent();
  }


  // get control() {
  //   return this.correctAnswer.get('CorrectAnswersLabels') as FormArray;
  // }

  /* -------------------------------------------------------------------------- */
  /*                          Display  tecnical Tests                           */
  /* -------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------- */
  /*                              Get Correct Answers                           */
  /* -------------------------------------------------------------------------- */

  createCorrectAnswer(ansInputs) {
    const arr = ansInputs.map(ans => {
      return new FormControl(ans.selected || false);
    });
    return new FormArray(arr);
  }

  getCorrectAns(value, name) {
    // console.log(value);
    // console.log(name);
    if (value == true) {
      switch (name) {
        case "ans1":
          this.ansSelect.push(name);
          break;
        case "ans2":
          this.ansSelect.push(name);
          break;
        case "ans3":
          this.ansSelect.push(name);
          break;
        case "ans4":
          this.ansSelect.push(name);
          break;
      }
    } else {
      // console.log(value);
      // console.log(name);
      this.ansSelect = this.ansSelect.filter(item => item !== name);
    }
    console.log(this.ansSelect)
  }
  colorArr = [
    "#af4bcf",
    "#03A9F4",
    "#f9b537",
    "#009688",
    "#cf4b6c",
    "#f9b537",
    "#6ccf4b",
    "#009688",
  ];

  /* -------------------------------------------------------------------------- */
  /*                               Submit Technical Tet                         */
  /* -------------------------------------------------------------------------- */

  onSubmitQuestionsForm(form) {
    console.log(form);
    this.testObject["test_name"] = form.value.testName;

    for (let ans of this.ansSelect) {
      // console.log(this.ansSelect);
      for (let i in this.CorrectAnswersLabels) {
        if (this.CorrectAnswersLabels[i].group == ans) {
          // console.log(ans);
          // console.log(form.value[ans]);
          this.allcorrectAnswer.push(form.value[ans]);
        }
      }
    }
    console.log(this.allcorrectAnswer);

    var obj: any = {
      questions: form.value.question,
      // Answers: '(' + form.value.ans1 + ', ' + '  ' + form.value.ans2 + ', ' + '  ' + form.value.ans3 + ', ' + '  ' + form.value.ans4 + ' )',
      answers: [form.value.ans1, form.value.ans2, form.value.ans3, form.value.ans4],
      id: this.id,
      correctAnswer: this.allcorrectAnswer,
      category: form.value.category
    }
    this.tecnicallistOfQuestions.push(obj)
    /* -------------------------------------------------------------------------- */
    /*                               Calculate Category                           */
    /* -------------------------------------------------------------------------- */

    this.allCategory = this.tecnicallistOfQuestions.map(data => data.category);
    console.log(this.allCategory)
    this.allCategoryWidth = (100 / this.allCategory.length);
    console.log(this.allCategoryWidth)
    this.categoryArr = [];

    for (let Category of this.allCategory) {
      // console.log(this.allCategory)
      var x = this.allCategory.filter(value => value === Category);
      if (x.length == 1) {
        this.categoryArr.push({ "name": Category, "width": Math.ceil(x.length * this.allCategoryWidth) + '%' })
      } else if (x.length > 1) {
        console.log(x.length);
        console.log(Category);
        this.categoryArr.push({ "name": Category, "width": Math.ceil(x.length * this.allCategoryWidth) + '%' })
      }
      // console.log(this.categoryArr)
    }
    let categObj = {}
    this.categoryArr.map((item) => categObj[item.name] = item)
    this.categoryArr = Object.values(categObj);
    for (let i in this.categoryArr) {
      for (let j = 0; this.colorArr.length > j ; j++) {
        console.log(j)
        this.categoryArr[i].color = this.colorArr[i][j];
      }
    }
    console.log(this.categoryArr)

    this.displayTests()
    this.id++;
    form.reset();
    this.allcorrectAnswer = [];
    this.ansSelect = [];
    form.get('testName').patchValue(this.testObject["test_name"])

    this.toast.success("Question Added", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
    console.log(this.tecnicallistOfQuestions);

  }

  /* -------------------------------------------------------------------------- */
  /*                               Save TECHNICAL TEST                          */
  /* -------------------------------------------------------------------------- */

  onSave() {
    var obj = {}
    var objQuestions = {}
    console.log(this.tecnicallistOfQuestions);
    obj["test"] = this.testObject["test_name"]
    obj["type"] = "Technical"
    obj["created"] = "20-20-2020"
    obj["recrutier_name"] = "Mohamed Ahmed"
    obj["questions"] = []
    for (let i = 0; i <= this.tecnicallistOfQuestions.length - 1; i++) {
      objQuestions =
      {
        question: this.tecnicallistOfQuestions[i]["questions"],
        answer: this.tecnicallistOfQuestions[i]["answers"]
      }
      obj["questions"].push(objQuestions)
    }

    console.log(obj);
    this.tests.postTechnicalTest(obj).subscribe()
    this.toast.success("Test Created Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                               EDIT TES=CHNICAL TEST                        */
  /* -------------------------------------------------------------------------- */

  editQuestion(i) {
    console.log("edit" + i);
    var filtered = this.tecnicallistOfQuestions.filter(x => {
      return x.id == i;
    })
    console.log(filtered[0]);
    this.questionsTecnicalForm.get("question").patchValue(filtered[0]["questions"])
    this.questionsTecnicalForm.get("ans1").patchValue(filtered[0]["answers"][0])
    this.questionsTecnicalForm.get("ans2").patchValue(filtered[0]["answers"][1])
    this.questionsTecnicalForm.get("ans3").patchValue(filtered[0]["answers"][2])
    this.questionsTecnicalForm.get("ans4").patchValue(filtered[0]["answers"][3])

    this.editMode = true
    this.editId = filtered[0].id
  }

  /* -------------------------------------------------------------------------- */
  /*                               SAVE EDIT TECHNICAL TEST                     */
  /* -------------------------------------------------------------------------- */

  saveEdit(form) {
    console.log(this.tecnicallistOfQuestions);

    for (var i = 0; i <= this.tecnicallistOfQuestions.length - 1; i++) {

      if (this.tecnicallistOfQuestions[i].id == this.editId) {
        console.log(this.tecnicallistOfQuestions[i]["id"], "hiiiiiiiiiii this is the id ");

        this.tecnicallistOfQuestions[i].questions = form.value.question
        this.tecnicallistOfQuestions[i].answers[0] = form.value.ans1
        this.tecnicallistOfQuestions[i].answers[1] = form.value.ans2
        this.tecnicallistOfQuestions[i].answers[2] = form.value.ans3
        this.tecnicallistOfQuestions[i].Answers = '(' + form.value.ans1 + ', ' + '  ' + form.value.ans2 + ', ' + '  ' + form.value.ans3 + ', ' + '  ' + form.value.ans4 + ' )'

        console.log(this.tecnicallistOfQuestions[i].questions, form.value.question);

      }
    }
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])

    this.toast.success("Edited Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })

    this.displayTests()
    this.editMode = false
  }


  cancelEdit(form) {
    form.reset()
    form.get('testName').patchValue(this.testObject["test_name"])
    this.editMode = false
  }

  /* -------------------------------------------------------------------------- */
  /*                               DELETE TECHNICAL TEST                           */
  /* -------------------------------------------------------------------------- */

  deleteQuestion(i) {
    console.log("delete" + i);
    var filtered = this.tecnicallistOfQuestions.filter(x => {
      return x.id != i;
    })
    this.tecnicallistOfQuestions = filtered
    this.displayTests()
    this.toast.error("Question Deleted", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                          Display All tecnical questions                    */
  /* -------------------------------------------------------------------------- */

  displayTests() {
    this.rows = [...this.tecnicallistOfQuestions]
  }


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
    console.log(">>>>>>>>>>SUBMIT>>>>>>>>>>>");
    console.log(obj);
    console.log(this.listOfHRQuestions);
    console.log(">>>>>>>>>>SUBMIT>>>>>>>>>>>");
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
    console.log(">>>>>>>>>>saveeee>>>>>>>>>>>");
    console.log(obj);
    console.log(">>>>>>>>>>saveeee>>>>>>>>>>>");

    this.tests.postHrTest(obj).subscribe()
    this.toast.success("Test Created Successfully", '', {
      timeOut: 2000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
  }


  editQuestionHR(item) {
    console.log(">>>>>>>>>>EDIT>>>>>>>>>>>");
    console.log(item);
    console.log("edit" + item.id);
    console.log(">>>>>>>>>>EDIT>>>>>>>>>>>");

    var filtered = this.listOfHRQuestions.filter(x => {
      return x.id == item.id;
    })
    console.log(filtered[0]);
    this.questionsHRForm.get("question").patchValue(filtered[0]["questions"])
    this.questionsHRForm.get("answer").patchValue(filtered[0]["answers"])
    this.editMode = true
    this.editId = filtered[0].id
  }

  saveEditHR(form) {
    console.log(">>>>>>>>>>SAVE--EDIT>>>>>>>>>>>");
    console.log(this.listOfHRQuestions);
    console.log(">>>>>>>>>>SAVE--EDIT>>>>>>>>>>>");

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
    console.log(">>>>>>>>>>DELETE>>>>>>>>>>>");
    console.log(item);
    console.log(">>>>>>>>>>DELETE>>>>>>>>>>>");
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
          return x.id != item.id;
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
    this.HrTestrows = this.listOfHRQuestions;
  }

  /****************  Back Button ****************/
  goback() {
    this._location.back();
  }
  hrtestlist = false;
  tecnicaltestlist = false;
  firsttestlist = true;
  changeTabs(link) {
    if (link == "HR Test") {
      this.hrtestlist = true;
      this.tecnicaltestlist = false;
      this.firsttestlist = false;
    } else if (link == "Technical Test") {
      this.hrtestlist = false;
      this.tecnicaltestlist = true;
      this.firsttestlist = false;
    } else if (link == "First Contact") {
      this.hrtestlist = false;
      this.tecnicaltestlist = false;
      this.firsttestlist = true;
    }
  }
  getCategories() {

  }

  // add categories

  createCategory(form) {
    var objDepartment = {
      name: form.value.name,
      skill: this.skills,
    }
    console.log(objDepartment);
    this.testMangmentService.addCategory(objDepartment).subscribe(
      (data) => {
        this.toast.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.getCategories();
        this.addCategoryform.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toast.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }
  /* -------------------------------------------------------------------------- */
  /*                                    Add Skills                              */
  /* -------------------------------------------------------------------------- */


  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our skill
    if ((value || '').trim()) {
      this.skills.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(skill): void {
    const index = this.skills.indexOf(skill);

    if (index >= 0) {
      this.skills.splice(index, 1);
    }
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
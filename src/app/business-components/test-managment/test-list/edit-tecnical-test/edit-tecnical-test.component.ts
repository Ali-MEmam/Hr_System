import { Component, OnInit } from "@angular/core";

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { Location } from "@angular/common";
import { TestMangmentService } from "../../../../../services/test-mangment/test-mangment.service";

@Component({
  selector: 'app-edit-tecnical-test',
  templateUrl: './edit-tecnical-test.component.html',
  styleUrls: ['./edit-tecnical-test.component.scss']
})
export class EditTecnicalTestComponent implements OnInit {
  questionsForm: FormGroup;
  id = "1";
  data;
  questionsData = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _location: Location,
    private testMangmentService: TestMangmentService
  ) {}

  ngOnInit(): void {
    this.questionsForm = this.fb.group({
      questions: this.fb.array([this.createQuestion()]),
    });
    this.getTestData();
  }
  getTestData() {
    this.testMangmentService.gettestById(this.id).subscribe(
      (data) => {
        console.log(data);
        this.data = data;
        this.questionsData = this.data.questions;
        console.log(this.questionsData);

        // for (let i = 0; i < data.question.length && i < data.answer.length; i++) {
        //     var obj = {};
        //     var answerobj = {}
        //     obj["question"] = data.question[i];
        //     this.data.answer[i].push(answerobj);
        //     obj["answers"] = answerobj;
        //     this.questionsData.push(obj);
        // }
      },
      (err) => {
        console.log("not comming");
      }
    );
  }
  // editTest(data){
  //   this.questionsForm.patchValue({
  //     question: data.question,
  //     correctAnswers:[data.correct_answer],
  //     wrongAnswers:[data.answer]
  //   })
  // }
  deleteQuestionEditView(index) {
    if (index !== -1) {
      this.questionsData.splice(index, 1);
    }
    this.testMangmentService.updatetest(this.data).subscribe(
      (data) => {
        console.log(data);
     
      },
      (err) => {
        console.log("not comming");
      }
    );
  }
  createQuestion() {
    return this.fb.group({
      question: ["", Validators.required],
      correctAnswers: this.fb.array([this.createCorrectAnswer()]),
      wrongAnswers: this.fb.array([this.createWrongAns()]),
    });
  }
  createCorrectAnswer() {
    return this.fb.group({
      correctAns: ["", Validators.required],
    });
  }
  createWrongAns() {
    return this.fb.group({
      wrongAns: ["", Validators.required],
    });
  }

  addNewQuestion() {
    const addQuestion = this.questionsForm.controls["questions"] as FormArray;
    addQuestion.push(this.createQuestion());
  }

  addNewCorrectAns(index) {
    const addCorrectAns = (<FormArray>this.questionsForm.controls["questions"])
      .at(index)
      .get("correctAnswers") as FormArray;
    addCorrectAns.push(this.createCorrectAnswer());
  }
  addNewWrongAns(index) {
    const addWrongAns = (<FormArray>this.questionsForm.controls["questions"])
      .at(index)
      .get("wrongAnswers") as FormArray;
    addWrongAns.push(this.createWrongAns());
  }

  deleteQuestion(i) {
    var deleteQuestion = <FormArray>this.questionsForm.controls["questions"];
    deleteQuestion.removeAt(i);
    console.log(this.questionsForm.value.skills.length);
  }
  deleteCorrectAns(i) {
    console.log("delete Correcta ns of " + i);
  }
  deleteWrongAns(i) {
    console.log("delete wrong ans of " + i);
  }

  onSubmitQuestionsForm(form) {
    console.log(form.value);
  }
  // deleteExpFormArray(i){
  //   var deleteFormArry= <FormArray>this.resumeForm.controls["experinceForm"];
  //   deleteFormArry.removeAt(i)
  //   console.log(this.resumeForm.value.experinceForm.length);
  // }
  /****************  Back Button ****************/
  backClicked() {
    this._location.back();
  }
}

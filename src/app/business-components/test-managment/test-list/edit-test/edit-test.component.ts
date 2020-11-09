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
import { HrTestService } from '../../../../../services/test-services/hr-test.service';
import { TestMangmentService } from "../../../../../services/test-mangment/test-mangment.service";

@Component({
  selector: "app-edit-test",
  templateUrl: "./edit-test.component.html",
  styleUrls: ["./edit-test.component.scss"],
})
export class EditTestComponent implements OnInit {
  questionsForm: FormGroup;
  id = "1";
  data;
  questionsData = [];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private _location: Location,
    private testService:HrTestService,
    private testMangmentService: TestMangmentService
  ) {}

  ngOnInit(): void {
    this.questionsForm = this.fb.group({
      testName:['',Validators.required],
      questions: this.fb.array([this.createQuestion()])
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

  createQuestion(){
    return this.fb.group({
      question: ['',Validators.required],
      answer: ['',Validators.required],
    })
  }



  addNewQuestion(){
    const addQuestion = this.questionsForm.controls['questions'] as FormArray;
    addQuestion.push(this.createQuestion())
  }




  deleteQuestion(i){
    var deleteQuestion = <FormArray>this.questionsForm.controls["questions"];
    deleteQuestion.removeAt(i);
  }

  onSubmitQuestionsForm(form){
    var obj = {};
    console.log(form.value.questions);
    for(let i =0; i<form.value.questions.length; i++){
       obj={
        test_name: form.value.testName,
        questions:[
          {
          "question":form.value.questions[i].question,
          "answer":[form.value.questions[i].answer],
          "correct_answer":[form.value.questions[i].answer]
        }
        ],
        type:"Hr",
        created:"20-9-2010",
        recrutier_name:"mohamed"
      }
      console.log(obj);
    }
    // for (let i = 0; i < data.question.length && i < data.answer.length; i++) {
        //     var obj = {};
        //     var answerobj = {}
        //     obj["question"] = data.question[i];
        //     this.data.answer[i].push(answerobj);
        //     obj["answers"] = answerobj;
        //     this.questionsForm.push(obj);
        // }
    console.log(obj);
    this.testService.postHrTest(obj).subscribe(data =>{
      console.log(data);
      this.questionsForm.reset()
      this.questionsForm = this.fb.group({
        testName:['',Validators.required],
        questions: this.fb.array([this.createQuestion()])
      });
    })
  }









/****************  Back Button ****************/
  backClicked() {
    this._location.back();
  }
}

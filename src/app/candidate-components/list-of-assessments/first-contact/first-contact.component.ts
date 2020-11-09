import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from 'services/candidate/assessments.service';
import {Location} from '@angular/common'
@Component({
  selector: 'app-first-contact',
  templateUrl: './first-contact.component.html',
  styleUrls: ['./first-contact.component.scss']
})
export class FirstContactComponent implements OnInit {

  constructor(private assessmentsService:AssessmentsService , private _location:Location) { }
  id_candidate:any;
  firstContact={
    "id":"1",
      "test":"first-contact",
      "id_candidate":"30",
      "question":"Question here",
      "answer":"Answer string Here",
      "recruiter":"Ahmed Mohamed",
      "company":"ZIEN-IT",
      "result":"Score 80"
  }
  tecnical:{}={}
  ngOnInit(): void {
    this.id_candidate = this.assessmentsService.id_candidate
    this.assessmentsService.getFirtContactTest().subscribe(data=>{
      console.log(data); 
    })
  }
  goback(){
    this._location.back()
  }

}

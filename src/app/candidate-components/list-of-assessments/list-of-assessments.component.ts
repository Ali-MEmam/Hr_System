import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from 'services/candidate/assessments.service';
import {  Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-of-assessments',
  templateUrl: './list-of-assessments.component.html',
  styleUrls: ['./list-of-assessments.component.scss']
})
export class ListOfAssessmentsComponent implements OnInit {

  constructor(
    private assessmentService:AssessmentsService,
    private router:Router,
    private route:ActivatedRoute) { }
  idCandidate:any;
  startedTests:any=[]
  candidate={}
  firstContact={}

  ngOnInit(): void {
    
    /* fake id from service */
    this.idCandidate = this.assessmentService.id_candidate;

    this.assessmentService.getCandidateTestAssessments().subscribe(tests =>{
      console.log(tests);
      this.startedTests = tests
    })

    this.assessmentService.getUser().subscribe(candidate =>
      this.candidate = candidate)

    this.assessmentService.getFirtContactTest().subscribe(firstcontact=>
      this.firstContact=firstcontact)
  }





  
}

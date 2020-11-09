import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ResruiterAssessmentService } from '../../../../services/recruiter-assessment/resruiter-assessment.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assessment-by-type',
  templateUrl: './assessment-by-type.component.html',
  styleUrls: ['./assessment-by-type.component.scss']
})
export class AssessmentByTypeComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('select') select :ElementRef; // select default select option value in html to show it onInit
  @ViewChild('ScoreLinkTemplate') ScoreLinkTemplate:ElementRef; // select default select option value in html to show it onInit

  ngOnInit(): void {
    
  }
 


  /* -------------------------------------------------------------------------- */
  /*                              Variables                                     */
  /* -------------------------------------------------------------------------- */
  FilterOptionLabel = 'Filter Option';
  FilterPlaceHolder = 'Type to by name ...';
  tempDataArr = [];
  rows = [];
  selectOptionValue;
  selectOptionDefaultValue;
  resetRows = [];
  assessments = []
  temp = [];
  assessmentsLength: any;
  candidateData = [];
  defaulSelectOptionValue;
  candidateId;

  /* -------------------------------------------------------------------------- */
  /*                    Table Column Titles and properiteis                     */
  /* -------------------------------------------------------------------------- */
  columns = [
    { prop: 'candidate_full_name', name: 'Full Name' },
    { prop: 'candidate_job', name: 'Job Title' },
    { prop: 'meeting_date', name: 'Meeting Date' },
    { prop: 'candidate_score', name: 'Score' },

  ];


  constructor(private resruiterAssessmentService: ResruiterAssessmentService,private router:Router) { }
  //when view child load call html element
  ngAfterViewInit() {
    console.log(this.select.nativeElement.value);
    this.defaulSelectOptionValue =this.select.nativeElement.value
    this.displayAllTests(this.defaulSelectOptionValue)
  }



  /* -------------------------------------------------------------------------- */
  /*                        Filter Data By Candidate Name                       */
  /* -------------------------------------------------------------------------- */
  updateFilter(event) {
    const val = event.target.value;
    console.log(val);
    this.rows = this.resetRows
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["candidate_full_name"].includes(val)
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


  /* -------------------------------------------------------------------------- */
  /*                              Display All Tests                             */
  /* -------------------------------------------------------------------------- */

  displayAllTests(value) {
    this.resruiterAssessmentService.getAllAssessmentForRecruiter().subscribe(data => {
      if (value) {
        this.tempDataArr = data //put data in temprary array
        console.log(this.tempDataArr);
        
        // Filter Data depends on test type
        const filterdArray = this.tempDataArr.filter(arr => arr.type == value)
        console.log(filterdArray);
        
        this.assessments = (filterdArray[0].assessments)
        console.log(this.assessments);
        
        // looping on assessments in selected test object
        for (let i = 0; i < this.assessments.length; i++) {
          // this.candidateId=this.assessments[i].report_id;
          let testDataObj = {
            "meeting_date": this.assessments[i].meeting_date,
            "candidate_full_name": this.assessments[i].candidate_first_name + ' ' + this.assessments[i].candidate_last_name,
            "candidate_job": this.assessments[i].candidate_job,
            "candidate_score": this.assessments[i].candidate_score,
            "report_id":this.assessments[i].report_id
          }
          this.candidateData.push(testDataObj)
        }
        this.rows = this.candidateData
        this.resetRows = this.rows //to filter data
        this.candidateData = [] 
      }
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                              on select option value                        */
  /* -------------------------------------------------------------------------- */
  onSelectOption(event, value) {
    this.selectOptionValue = value
    this.displayAllTests(value)
  }

  viewReport(value){
 this.router.navigate(["pages","login","assessments","report",value])
  
  }
}

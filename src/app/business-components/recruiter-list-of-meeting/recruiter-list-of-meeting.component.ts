import { Component, OnInit, ViewChild, ViewChildren, ElementRef } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { RecruiterListOfMeetingService } from 'services/meeting/recruiter-list-of-meeting.service';
import { type } from 'os';


@Component({
  selector: 'app-recruiter-list-of-meeting',
  templateUrl: './recruiter-list-of-meeting.component.html',
  styleUrls: ['./recruiter-list-of-meeting.component.scss']
})
export class RecruiterListOfMeetingComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild('select') select :ElementRef; // select default select option value in html to show it onInit


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
  candidates = []
  temp = [];
  candidatesLength: any;
  candidateData = [];
  defaulSelectOptionValue;


  /* -------------------------------------------------------------------------- */
  /*                    Table Column Titles and properiteis                     */
  /* -------------------------------------------------------------------------- */
  columns = [
    { prop: 'candidate_full_name', name: 'Full Name' },
    { prop: 'candidate_job', name: 'Job Title' },
    { prop: 'candidate_email', name: 'Email' },
    { prop: 'meeting_date', name: 'Meeting Date' },
    { prop: 'acceptance_invitation_date', name: 'Acceptance Invitation Date' },
    { prop: 'status', name: 'Status' },

  ];


  constructor(private recruiterListOfMeetingService: RecruiterListOfMeetingService) { }
  //when view child load call html element
  ngAfterViewInit() {
    console.log(this.select.nativeElement.value);
    this.defaulSelectOptionValue =this.select.nativeElement.value
    this.displayAllTests(this.defaulSelectOptionValue)
  }
  ngOnInit(): void {
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
    this.recruiterListOfMeetingService.getAllTestForRecruiter().subscribe(data => {
      if (value) {
        this.tempDataArr = data //put data in temprary array
        console.log(this.tempDataArr)
        // Filter Data depends on test type
        const filterdArray = this.tempDataArr.filter(arr => arr.type === value)
        console.log(filterdArray)
        this.candidates = (filterdArray[0].candidates)
        console.log(this.candidates);
        
        // looping on candidates in selected test object
        for (let i = 0; i < this.candidates.length; i++) {
          let testDataObj = {
            "meeting_date": filterdArray[0].meeting_date,
            "status": this.candidates[i].status,
            "candidate_full_name": this.candidates[i].candidate_first_name + ' ' + this.candidates[i].candidate_last_name,
            "candidate_job": this.candidates[i].candidate_job,
            "acceptance_invitation_date": this.candidates[i].acceptance_invitation_date,
            "candidate_email": this.candidates[i].candidate_email,
            "report_id": this.candidates[i].report_id
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
    console.log(value);
    
    }
  
}

import { Component, OnInit } from '@angular/core';
import { ListOfMeetingService } from 'services/candidate/list-of-meeting.service';

@Component({
  selector: 'app-candidate-list-of-meeting',
  templateUrl: './candidate-list-of-meeting.component.html',
  styleUrls: ['./candidate-list-of-meeting.component.scss']
})
export class CandidateListOfMeetingComponent implements OnInit {

  constructor( private lisfOfMeetingService:ListOfMeetingService) { }
  tests=[];
  
  ngOnInit(): void {
    
    this.lisfOfMeetingService.getAllTestForCandidate().subscribe(response=>{
      console.log(response);
      this.tests = response;
      console.log(this.tests);
    },error=>{
      console.log(error +'this is error')
    })
    
  }
  chat(){
    console.log("hoiiiiiiiiiiiii");
window.open("https://www.w3schools.com");  }
}

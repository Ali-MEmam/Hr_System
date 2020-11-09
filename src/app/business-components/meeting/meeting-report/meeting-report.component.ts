import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef, ChangeDetectionStrategy, Renderer2 } from '@angular/core';
import {  MeetingReportService} from '../../../../services/meeting-services/meeting-report.service';
@Component({
  selector: 'app-meeting-report',
  templateUrl: './meeting-report.component.html',
  styleUrls: ['./meeting-report.component.scss']
})
export class MeetingReportComponent implements OnInit {

  constructor(private reportService:MeetingReportService) { }
  meetingId=1;
  meetingData;
  status;
  conversation =[];
  ngOnInit(): void {
    this.getMeetingReportForCandidate()
  }
  getMeetingReportForCandidate(){
    this.reportService.getMeetingConversationForCandidate(this.meetingId).subscribe(data=>{
      console.log(data);
      this.meetingData=data
      this.conversation =this.meetingData.message
      this.status =this.meetingData.status
    })
  }
}

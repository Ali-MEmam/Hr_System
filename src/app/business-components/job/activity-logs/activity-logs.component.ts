import { Component, OnInit } from '@angular/core';
import { LogsService } from 'services/job/logs.service';

@Component({
  selector: 'app-activity-logs',
  templateUrl: './activity-logs.component.html',
  styleUrls: ['./activity-logs.component.scss']
})
export class ActivityLogsComponent implements OnInit {
  
  logsList=[]

  constructor(private logs:LogsService) {
    this.getAllLogs()
   }

  ngOnInit(): void {

  }

  getAllLogs(){
    this.logs.getAllLogs().subscribe(data=>{
      this.logsList = data 
      console.log(this.logsList);
    })
  }



}

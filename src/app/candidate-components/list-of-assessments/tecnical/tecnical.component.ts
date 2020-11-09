import { Component, OnInit } from '@angular/core';
import { AssessmentsService } from 'services/candidate/assessments.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-tecnical',
  templateUrl: './tecnical.component.html',
  styleUrls: ['./tecnical.component.scss']
})
export class TecnicalComponent implements OnInit {
tecnical:{}={}
  constructor(
    private assessmentsService:AssessmentsService,
    private _location:Location
    
  ) { }

  ngOnInit(): void {
    this.assessmentsService.getTecnical().subscribe(data=>
      this.tecnical=data
      )
  }
  goback(){
    this._location.back()
  }
}

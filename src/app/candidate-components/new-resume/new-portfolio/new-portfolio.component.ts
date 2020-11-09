import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-new-portfolio',
  templateUrl: './new-portfolio.component.html',
  styleUrls: ['./new-portfolio.component.scss']
})
export class NewPortfolioComponent implements OnInit {
  portfiloForm:FormGroup
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.portfiloForm = this.fb.group({
      name:['', Validators.compose([Validators.required])],
      file:['']
    })
  }
  addNewPortfilo(){
    console.log(this.portfiloForm)
  }
}

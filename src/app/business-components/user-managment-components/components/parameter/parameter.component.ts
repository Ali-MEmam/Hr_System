import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {ToastrService} from 'ngx-toastr';

import {Location} from '@angular/common';


@Component({
  selector: 'app-parameter',
  templateUrl: './parameter.component.html',
  styleUrls: ['./parameter.component.scss']
})
export class ParameterComponent implements OnInit {
  parameterForm: FormGroup;

  constructor(
    private toster:ToastrService,
    private _location: Location) { }

  ngOnInit(): void {
    this.parameterForm = new FormGroup({
      'notification': new FormControl(null,[Validators.required]),
      'message': new FormControl(null,[Validators.required]),
      'invDays': new FormControl(null,[Validators.required, Validators.minLength(1)]),
      'passDays': new FormControl(null, [Validators.required, Validators.minLength(1)]),
      /* number of Questions */
      'firstContactNum':new FormControl(null,[Validators.required, Validators.minLength(1)]),
      "technicalNum": new FormControl(null,[Validators.required, Validators.minLength(1)]),
      'hrNum': new FormControl(null, [Validators.required, Validators.minLength(1)]),
    });
  }
  backClicked() {
    this._location.back();
  }

  onParameterFormSubmit(){
    console.log(this.parameterForm.value);
  }
}

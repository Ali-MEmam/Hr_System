import { Component, OnInit, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import {ToastrService} from 'ngx-toastr';
import {Location} from '@angular/common';
import { LayoutService } from '../services/layout.service';
import { Subscription } from 'rxjs';
import { ParametersService } from 'services/params/parameters.service';

@Component({
  selector: 'app-notification-sidebar',
  templateUrl: './notification-sidebar.component.html',
  styleUrls: ['./notification-sidebar.component.scss']
})
export class NotificationSidebarComponent implements OnInit, OnDestroy {
  objParams={}
  layoutSub: Subscription;
  isOpen = false;
  parameterForm: FormGroup;
  @ViewChild('sidebar') sidebar: ElementRef;


  constructor(
    private fb: FormBuilder,
    private http:HttpClient,
    private elRef: ElementRef,
    private renderer: Renderer2,
    private layoutService: LayoutService,
    private toster:ToastrService,
    private _location: Location,
    private params:ParametersService) {




    this.layoutSub = layoutService.changeEmitted$.subscribe(
      value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'open');
          this.isOpen = true;
        }
      });
  }




  ngOnInit(): void {
    this.parameterForm = this.fb.group({
      notification:['',Validators.required],
      message: ['',Validators.required],
      invDays: ['',[Validators.required, Validators.minLength(1)]],
      passDays: ['',[Validators.required, Validators.minLength(1)]],
      firstContactNum: ['',[Validators.required, Validators.minLength(1)]],
      technicalNum: ['',[Validators.required, Validators.minLength(1)]],
      hrNum: ['',[Validators.required, Validators.minLength(1)]],
    });
    
    this.params.getParams().subscribe(data=>{
      this.objParams = data;
      this.parameterForm.patchValue({
        notification:this.objParams['notification'],
        message:this.objParams['message'],
        invDays:this.objParams['invDays'],
        passDays:this.objParams['passDays'],
        firstContactNum:this.objParams['firstContactNum'],
        technicalNum:this.objParams['technicalNum'],
        hrNum:this.objParams['hrNum'],
    })
    })

  }


  onParameterFormSubmit(form){
    console.log(form);
    console.log("hiiii");
    this.objParams = {
      notification:form.value.notification,
      message:form.value.message,
      invDays:form.value.invDays,
      passDays:form.value.passDays,
      firstContactNum:form.value.firstContactNum,
      technicalNum:form.value.technicalNum,
      hrNum:form.value.hrNum,
    }
    this.params.setParams(this.objParams).subscribe()
  }

  submit(form){
   
    
  }

  ngOnDestroy() {
    if(this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }




  onClose() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'open');
    this.isOpen = false;
  }

}

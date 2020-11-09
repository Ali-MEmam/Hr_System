import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import {EducationService} from './../../../../services/candidate/education.service'
@Component({
  selector: 'app-new-education',
  templateUrl: './new-education.component.html',
  styleUrls: ['./new-education.component.scss']
})
export class NewEducationComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService,
    private educationService:EducationService
  ) { }

  educationForm: FormGroup;
  ngOnInit(): void {
    this.educationForm = this.fb.group({
      title: [''],
      fromDate: [''],
      toDate: [''],
      institute: [''],
      description: ['', Validators.required],
      
    });
  }


  
  onSubmitEducation(form) {
    let educationObject = {
      title: form.value.title,
      from_date: form.value.fromDate,
      to_date: form.value.toDate,
      institute: form.value.institute,
      description: form.value.description,
    }

    this.educationService.addEducation(educationObject).subscribe(data => {
      console.log(data);
        // this.update()
      
      this.toast.success("resume Updated successfully", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
      this.educationService.sidebarChart.next(0)
    }, (err) => {
      this.toast.error("We Have Problem Please Try Again", "", {
        timeOut: 3000,
        positionClass: "toast-top-full-width",
        closeButton: true,
      });
    }
    );
  }

}

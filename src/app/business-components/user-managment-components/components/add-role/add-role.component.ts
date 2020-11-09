import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {Location} from '@angular/common';
import { RoleService } from 'services/user-managment-services/role.service';
import {Toast, ToastrService} from 'ngx-toastr';
import {Role} from '../../../../../models/user-managment-models/RoleRequest'
@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  isLoading = false;
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;

/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */

constructor(private _location:Location,private roleService:RoleService,private toast:ToastrService) { }

/* -------------------------------------------------------------------------- */
/*                             NgOninit LifeCycle                             */
/* -------------------------------------------------------------------------- */

  ngOnInit() {
    this.regularForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null,[Validators.required])
    });
  }

/* -------------------------------------------------------------------------- */
/*                               Create New Role                              */
/* -------------------------------------------------------------------------- */

  addRole() {
    if(this.regularForm.valid){
      const newRole = new Role(this.regularForm.value.title,this.regularForm.value.description)
      this.isLoading =true
      this.roleService.createrole(newRole).subscribe(data =>{
        this.toast.success("Role Added",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
          this.goback()
      },err =>{
        this.isLoading = false;
        this.toast.error("Role Error",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
      })
    }
  }


/* ------------------------- To Return To last page ------------------------- */

  goback(){
    this._location.back()
  }

}

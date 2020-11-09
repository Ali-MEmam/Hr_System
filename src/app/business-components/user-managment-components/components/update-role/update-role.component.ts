import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import {Location} from "@angular/common";
import { RoleService } from 'services/user-managment-services/role.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-role',
  templateUrl: './update-role.component.html',
  styleUrls: ['./update-role.component.scss']
})
export class UpdateRoleComponent implements OnInit {

  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  regularForm: FormGroup;

/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */


constructor(private route:ActivatedRoute,private roleService:RoleService, private _location: Location,private toster:ToastrService) { }

/* -------------------------------------------------------------------------- */
/*                           NgOnint Life Cycle Hook                          */
/* -------------------------------------------------------------------------- */

  ngOnInit() {
    this.regularForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
    }, {updateOn: 'blur'});
    this.roleService.getroleById(this.route.snapshot.params['id']).subscribe(
      data => {
        this.regularForm.setValue({title:data.title,description:data.description})
      });
  }

/* -------------------------------------------------------------------------- */
/*                                 Update Role                                */
/* -------------------------------------------------------------------------- */

  updateRole() {
    if(this.regularForm.valid){
      const newRole = {
        title:this.regularForm.value.title,
        description:this.regularForm.value.description,
        id:this.route.snapshot.params['id']
      }
      this.roleService.updaterole(newRole).subscribe(data =>{
        this.toster.success("Role Updated",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
        this.goback()
      },err =>{
        this.toster.error("Something Wrong Happen",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
      })
    }
  }

/* -------------------------------------------------------------------------- */
/*                            Go Back To Last Page                            */
/* -------------------------------------------------------------------------- */

  goback(){
    this._location.back()
  }


}

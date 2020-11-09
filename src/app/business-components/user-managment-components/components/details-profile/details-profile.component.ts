import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'services/user-managment-services/profile.service';
import {flatMap} from 'rxjs/operators';
import {Location} from "@angular/common";
import { RoleService } from 'services/user-managment-services/role.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-details-profile',
  templateUrl: './details-profile.component.html',
  styleUrls: ['./details-profile.component.scss']
})
export class DetailsProfileComponent implements OnInit {
data;
allRoles = []

/* -------------------------------------------------------------------------- */
/*                                 Constructor                                */
/* -------------------------------------------------------------------------- */

  constructor(private route:ActivatedRoute,private profileService:ProfileService,private rolesServerice:RoleService,private _location:Location,private toster:ToastrService) { }

/* -------------------------------------------------------------------------- */
/*                             ngOnInit LifeCycle                             */
/* -------------------------------------------------------------------------- */

  ngOnInit(): void { 
    this.profileService.getProfileById(this.route.snapshot.params['id']).pipe(
    flatMap(data =>{
      let selectedRoles= data.roles
      return selectedRoles
    })
    ).subscribe(data =>{
      this.rolesServerice.getroleById(data).subscribe(data=>{
        this.allRoles.push(data)
      })
      this.data = this.allRoles
    },err =>{
      this.toster.error("Problem To Get Data Please Try Again Later",'', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton:true
        })
    })  
  }

/* -------------------------------------------------------------------------- */
/*                            Go Back To last Page                            */
/* -------------------------------------------------------------------------- */

  goback(){
    this._location.back()
  }
}

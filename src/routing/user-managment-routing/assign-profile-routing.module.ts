import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AssignProfileComponent} from "../../app/business-components/user-managment-components/components/assign-profile/assign-profile.component";


const routes: Routes = [
  {
    path:'',
    component:AssignProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignProfileRoutingModule { }

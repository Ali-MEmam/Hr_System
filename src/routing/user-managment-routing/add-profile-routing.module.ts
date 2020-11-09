import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddProfileComponent} from "../../app/business-components/user-managment-components/components/add-profile/add-profile.component";


const routes: Routes = [
  {
    path:'',
    component:AddProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddProfileRoutingModule { }

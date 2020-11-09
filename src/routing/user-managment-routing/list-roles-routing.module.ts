import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListRolesComponent} from "../../app/business-components/user-managment-components/components/list-roles/list-roles.component";
import {AddRoleComponent} from "../../app/business-components/user-managment-components/components/add-role/add-role.component";
import {UpdateRoleComponent} from "../../app/business-components/user-managment-components/components/update-role/update-role.component";


const routes: Routes = [
  {
    path: '',
    component: ListRolesComponent,
  },
  {
    path: 'add-role',
    component: AddRoleComponent
  },
  {
    path: 'update-role/:id',
    component: UpdateRoleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRolesRoutingModule { }

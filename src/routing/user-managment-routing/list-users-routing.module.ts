import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListUsersComponent} from '../../app/business-components/user-managment-components/components/list-users/list-users.component';
import {AddUserComponent} from "../../app/business-components/user-managment-components/components/add-user/add-user.component";
import {UpdateCommand} from "@angular/cli/commands/update-impl";
import {UpdateUserComponent} from "../../app/business-components/user-managment-components/components/update-user/update-user.component";
import {UserProfileDetailsComponent} from "../../app/business-components/user-managment-components/components/user-profile-details/user-profile-details.component";

const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
  },
  {
    path: 'list-users',
    component: ListUsersComponent,
  },
  {
    path: 'add-user',
    component: AddUserComponent,
  },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
  },
  {
    path: 'list-users/:id',
    component: UpdateUserComponent,
  },
  {
    path:'userProfile/:id',
    component:UserProfileDetailsComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListUsersRoutingModule { }

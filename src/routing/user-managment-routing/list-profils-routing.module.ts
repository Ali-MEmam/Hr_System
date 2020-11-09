import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListProfilsComponent} from "../../app/business-components/user-managment-components/components/list-profils/list-profils.component";
import {ListUsersComponent} from "../../app/business-components/user-managment-components/components/list-users/list-users.component";
import {AddUserComponent} from "../../app/business-components/user-managment-components/components/add-user/add-user.component";
import {UpdateUserComponent} from "../../app/business-components/user-managment-components/components/update-user/update-user.component";
import {AddProfileComponent} from "../../app/business-components/user-managment-components/components/add-profile/add-profile.component";
import {UpdateProfileComponent} from "../../app/business-components/user-managment-components/components/update-profile/update-profile.component";
import {DetailsProfileComponent} from "../../app/business-components/user-managment-components/components/details-profile/details-profile.component";


const routes: Routes = [
  {
    path: '',
    component: ListProfilsComponent,
  },
  {
    path: 'add-profile',
    component: AddProfileComponent,
  },
  {
    path: 'update-profile/:id',
    component: UpdateProfileComponent,
  },
  {
    path: 'details-profile/:id',
    component: DetailsProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListProfilsRoutingModule { }

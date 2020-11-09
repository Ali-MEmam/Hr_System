import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListUsersComponent } from "../../../app/business-components/user-managment-components/components/list-users/list-users.component";
import { CommonUserManagmentComponent } from "../../../app/business-components/user-managment-components/components/common-user-managment/common-user-managment.component";
// import {candid} from "./common-user-managment.routes";
import { AuthGuard } from "../../../app/core/guards/auth-guard.service";
import { LoginModule } from "../../../modules/core/authentication/login.module";
import { LoginComponent } from "../../../app/core/authentication/login/login.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from '../../../routing/core-routing/authentication-routing/login-routing.module';
import {LoginComponent} from "../../../app/core/authentication/login/login.component";
import {UserService} from "../../../services/user-managment-services/user.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NgbModule,
      FormsModule
  ],
  providers: [
    UserService,
  ]
})
export class LoginModule { }

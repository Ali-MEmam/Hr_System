import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ChangePasswordRoutingModuel } from "../../../routing/candidate-routing/change-password-routing.module";
import { ChangePasswordComponent } from "../../../app/candidate-components/change-password/change-password.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [
    CommonModule,
    ChangePasswordRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class ChangePasswordModuel {}

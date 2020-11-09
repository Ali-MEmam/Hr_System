import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ParameterComponent } from "../../app/business-components/user-managment-components/components/parameter/parameter.component";

const routes: Routes = [
  {
    path: "",
    component: ParameterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParameterRoutingModule {}

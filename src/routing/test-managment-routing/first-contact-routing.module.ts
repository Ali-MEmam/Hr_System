import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstConctactComponent } from "../../app/business-components/test-managment/first-conctact/first-conctact.component";

const routes: Routes = [
  {
    path: "",
    component: FirstConctactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstConctactRoutingModule {}

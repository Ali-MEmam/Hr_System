import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HrTestComponent } from "../../app/business-components/test-managment/hr-test/hr-test.component";

const routes: Routes = [
  {
    path: "",
    component: HrTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HrTestRoutingModule {}

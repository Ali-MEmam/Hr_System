import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TecnicalTestComponent } from "../../app/business-components/test-managment/tecnical-test/tecnical-test.component";

const routes: Routes = [
  {
    path: "",
    component: TecnicalTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TecnicalTestRoutingModule {}

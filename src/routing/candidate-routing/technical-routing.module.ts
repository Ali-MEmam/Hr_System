import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TecnicalComponent } from "../../app/candidate-components/list-of-assessments/tecnical/tecnical.component";

const routes: Routes = [
  {
    path: "",
    component: TecnicalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TechnicalInterviewRoutingModuel {}

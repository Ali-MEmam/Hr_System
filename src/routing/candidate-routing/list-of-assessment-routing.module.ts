import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListOfAssessmentsComponent } from "../../app/candidate-components/list-of-assessments/list-of-assessments.component";

const routes: Routes = [
  {
    path: "",
    component: ListOfAssessmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfAssessmentsRoutingModuel {}

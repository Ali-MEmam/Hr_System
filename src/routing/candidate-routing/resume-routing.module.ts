import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ViewResumeComponent } from "../../app/candidate-components/view-resume/view-resume.component";

const routes: Routes = [
  {
    path: "",
    component: ViewResumeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewResumeRoutingModuel {}

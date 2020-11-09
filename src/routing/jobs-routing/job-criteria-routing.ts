import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobCriteriaComponent } from 'app/business-components/job/job-criteria/job-criteria.component';

const routes: Routes = [
  {
    path: "",
    component: JobCriteriaComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jobCriteriaRoutingModuel {}
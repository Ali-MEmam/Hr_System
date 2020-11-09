import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobDetailsComponent } from 'app/business-components/job/job-details/job-details.component';

const routes: Routes = [
  {
    path: "",
    component: JobDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jobDetailsRoutingModuel {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobScreeningComponent } from 'app/business-components/job/job-screening/job-screening.component';

const routes: Routes = [
  {
    path: "",
    component: JobScreeningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jobScreeningRoutingModuel {}
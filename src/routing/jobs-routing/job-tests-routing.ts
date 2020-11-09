import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobTestsComponent } from "app/business-components/job/job-tests/job-tests.component";

const routes: Routes = [
  {
    path: "",
    component: JobTestsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobTestsRoutingModuel {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobTasksComponent } from "app/business-components/job/job-tasks/job-tasks.component";

const routes: Routes = [
  {
    path: "",
    component: JobTasksComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobTasksRoutingModuel {}
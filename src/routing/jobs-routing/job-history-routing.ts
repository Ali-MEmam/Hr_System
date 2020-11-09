import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobHistoryComponent } from "app/business-components/job/job-history/job-history.component";

const routes: Routes = [
  {
    path: "",
    component: JobHistoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JobHistoryRoutingModuel {}
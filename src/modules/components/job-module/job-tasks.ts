import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobTasksRoutingModuel } from "routing/jobs-routing/job-tasks-routing";
import { JobTasksComponent } from "app/business-components/job/job-tasks/job-tasks.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [JobTasksComponent],
  imports: [
    CommonModule,
    JobTasksRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class JobTasksModuel {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobTasksRoutingModuel } from "routing/jobs-routing/job-tasks-routing";
import { JobTestsComponent } from "app/business-components/job/job-tests/job-tests.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { JobTestsRoutingModuel } from 'routing/jobs-routing/job-tests-routing';

@NgModule({
  declarations: [JobTestsComponent],
  imports: [
    CommonModule,
    JobTestsRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class JobTestsModuel {}

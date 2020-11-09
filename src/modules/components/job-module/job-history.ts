import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { JobHistoryRoutingModuel } from "routing/jobs-routing/job-history-routing";
import { JobHistoryComponent } from "app/business-components/job/job-history/job-history.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [JobHistoryComponent],
  imports: [
    CommonModule,
    JobHistoryRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class JobHistoryModuel {}

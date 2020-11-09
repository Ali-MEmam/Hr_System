import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { jobAttachmentRoutingModuel } from "routing/jobs-routing/job-attachment-routing-module";
import { JobAttachmentsComponent } from "app/business-components/job/job-attachments/job-attachments.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [JobAttachmentsComponent],
  imports: [
    CommonModule,
    jobAttachmentRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class jobAttachmentModuel {}

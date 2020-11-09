import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { jobNoteListRoutingModuel } from "routing/jobs-routing/job-notes-routing";
import { JobNoteListComponent } from "app/business-components/job/job-note-list/job-note-list.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [JobNoteListComponent],
  imports: [
    CommonModule,
    jobNoteListRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class jobNoteListModuel {}

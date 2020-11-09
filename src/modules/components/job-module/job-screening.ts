import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { jobScreeningRoutingModuel } from "routing/jobs-routing/job-screening-routing";
import { JobScreeningComponent } from "app/business-components/job/job-screening/job-screening.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ToastrModule } from "ngx-toastr";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";

@NgModule({
  declarations: [JobScreeningComponent],
  imports: [
    CommonModule,
    jobScreeningRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    NgxDatatableModule,
  ],
})
export class jobScreeningModuel {}

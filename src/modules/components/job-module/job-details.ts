import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { jobDetailsRoutingModuel } from 'routing/jobs-routing/job-details-routing';
import { JobDetailsComponent } from 'app/business-components/job/job-details/job-details.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [JobDetailsComponent],
    imports: [
      CommonModule,
      jobDetailsRoutingModuel,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      NgbModule,
      ToastrModule

    ],
  })
  export class jobDetailsModuel {}


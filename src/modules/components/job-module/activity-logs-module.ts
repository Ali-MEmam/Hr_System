import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivityLogsRoutingModuel } from 'routing/jobs-routing/job-activity-logs-routing';
import { ActivityLogsComponent } from 'app/business-components/job/activity-logs/activity-logs.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
    declarations: [ActivityLogsComponent],
    imports: [
      CommonModule,
      ActivityLogsRoutingModuel,
      RouterModule,
      ReactiveFormsModule,
      FormsModule,
      NgbModule,
      ToastrModule

    ],
  })
  export class activityLogsModuel {}


import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { meetingRoutingModuel } from 'routing/candidate-routing/metting-history-routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { MeetingDetailsComponent } from 'app/candidate-components/candidate-list-of-meeting/meeting-details/meeting-details.component';

@NgModule({
  declarations: [MeetingDetailsComponent],
  imports: [
    CommonModule,
    meetingRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FlexLayoutModule,
  ],
})
export class meetingHistoryModuel {}
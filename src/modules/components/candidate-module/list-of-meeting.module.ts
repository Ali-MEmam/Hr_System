import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListOfMeetingRoutingModuel } from "../../../routing/candidate-routing/list-of-meeting-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListUsersRoutingModule } from "routing/user-managment-routing/list-users-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CandidateListOfMeetingComponent } from "app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component";

@NgModule({
  declarations: [CandidateListOfMeetingComponent],
  imports: [
    CommonModule,
    ListOfMeetingRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ListUsersRoutingModule,
    FlexLayoutModule,
  ],
})
export class ListOfMeetingModuel {}

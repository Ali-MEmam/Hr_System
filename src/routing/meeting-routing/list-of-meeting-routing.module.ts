import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecruiterListOfMeetingComponent } from "../../app/business-components/recruiter-list-of-meeting/recruiter-list-of-meeting.component";

const routes: Routes = [
  {
    path: "",
    component: RecruiterListOfMeetingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfMeetingRoutingModule {}

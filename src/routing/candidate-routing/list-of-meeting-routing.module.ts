import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateListOfMeetingComponent } from "../../app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component";

const routes: Routes = [
  {
    path: "",
    component: CandidateListOfMeetingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListOfMeetingRoutingModuel {}

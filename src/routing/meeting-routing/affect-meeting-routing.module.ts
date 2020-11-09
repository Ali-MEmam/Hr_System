import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AffectMeetingComponent } from "../../app/business-components/meeting/affect-meeting/affect-meeting.component";

const routes: Routes = [
  {
    path: "",
    component: AffectMeetingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffectMeetingRoutingModule {}

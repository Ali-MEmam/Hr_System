import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvitationWitoutScreeningComponent } from "../../app/business-components/meeting/invitation-witout-screening/invitation-witout-screening.component";

const routes: Routes = [
  {
    path: "",
    component: InvitationWitoutScreeningComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvitationWithoutScreeningRoutingModule {}

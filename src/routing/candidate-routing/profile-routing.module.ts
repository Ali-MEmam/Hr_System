import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CandidateProfileComponent } from "../../app/candidate-components/candidate-profile/candidate-profile.component";

const routes: Routes = [
  {
    path: "",
    component: CandidateProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CandidateProfileRoutingModuel {}

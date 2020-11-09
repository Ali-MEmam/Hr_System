import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FirstContactComponent } from "../../app/candidate-components/list-of-assessments/first-contact/first-contact.component";

const routes: Routes = [
  {
    path: "",
    component: FirstContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FirstContactRoutingModuel {}

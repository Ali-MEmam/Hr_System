import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddTestComponent } from '../../app/business-components/test-managment/add-test/add-test.component';

const routes: Routes = [
  {
    path: "",
    component: AddTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddTestRoutingModule {}

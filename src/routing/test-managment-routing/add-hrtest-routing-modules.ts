import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateHrTestComponent } from '../../app/business-components/test-managment/add-test/create-hr-test/create-hr-test.component';

const routes: Routes = [
  {
    path: "",
    component: CreateHrTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddHrRoutingModule {}

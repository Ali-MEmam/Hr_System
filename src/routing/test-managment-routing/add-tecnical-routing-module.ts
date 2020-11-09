import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateTecnicalTestComponent } from '../../app/business-components/test-managment/add-test/create-tecnical-test/create-tecnical-test.component';

const routes: Routes = [
  {
    path: "",
    component: CreateTecnicalTestComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtecnicalRoutingModule {}

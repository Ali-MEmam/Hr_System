import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateFirstContentComponent } from '../../app/business-components/test-managment/add-test/create-first-content/create-first-content.component';

const routes: Routes = [
  {
    path: "",
    component: CreateFirstContentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFirstContactRoutingModule {}

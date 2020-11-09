import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ChatBootComponent } from 'app/candidate-components/chat-boot/chat-boot.component';

const routes: Routes = [
  {
    path: "",
    component: ChatBootComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class chatBootRoutingModuel {}
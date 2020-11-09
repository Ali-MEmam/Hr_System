import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobAttachmentsComponent } from 'app/business-components/job/job-attachments/job-attachments.component';

const routes: Routes = [
  {
    path: "",
    component: JobAttachmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jobAttachmentRoutingModuel {}
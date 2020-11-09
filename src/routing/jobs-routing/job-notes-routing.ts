import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { JobNoteListComponent } from 'app/business-components/job/job-note-list/job-note-list.component';

const routes: Routes = [
  {
    path: "",
    component: JobNoteListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class jobNoteListRoutingModuel {}
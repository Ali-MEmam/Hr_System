import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { jobCriteriaRoutingModuel } from 'routing/jobs-routing/job-criteria-routing';
import { JobCriteriaComponent } from 'app/business-components/job/job-criteria/job-criteria.component';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { TagInputModule } from 'ngx-chips';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [JobCriteriaComponent],
  imports: [
    CommonModule,
    jobCriteriaRoutingModuel,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule,
    ToastrModule,
    TagInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule
  ],
  exports: [  ]

})
export class jobCriteriaModuel { }
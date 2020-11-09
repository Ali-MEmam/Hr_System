import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddHrRoutingModule } from '../../../routing/test-managment-routing/add-hrtest-routing-modules';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from "@angular/material/icon";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatTabsModule } from '@angular/material/tabs';
import { CreateHrTestComponent } from '../../../app/business-components/test-managment/add-test/create-hr-test/create-hr-test.component';
import {MatChipsModule} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@NgModule({
  declarations: [CreateHrTestComponent],
  imports: [
    CommonModule,
    AddHrRoutingModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    FlexLayoutModule,
    MatIconModule,
    NgxDatatableModule,
    MatTabsModule,
    MatChipsModule
  ]
})
export class createHRTestModule { }

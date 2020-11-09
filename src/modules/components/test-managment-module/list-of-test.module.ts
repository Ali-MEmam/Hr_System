import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TestListComponent} from '../../../app/business-components/test-managment/test-list/test-list.component';
import { TestListRoutingModule } from '../../../routing/test-managment-routing/list-of-tests-routing.module';
import {TranslateModule} from '@ngx-translate/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from '@angular/material/input';
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatIconModule} from "@angular/material/icon";
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [TestListComponent],
  imports: [
    CommonModule,
    TestListRoutingModule,
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
    NgxDatatableModule
  ]
})
export class TestListModule { }

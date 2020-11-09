import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTestComponent } from '../../../app/business-components/test-managment/add-test/add-test.component';
import { AddTestRoutingModule } from '../../../routing/test-managment-routing/add-test-routing.modules';
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
// import { CreateFirstContentComponent } from '../../../app/business-components/test-managment/add-test/create-first-content/create-first-content.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [AddTestComponent],
  imports: [
    CommonModule,
    AddTestRoutingModule,
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
export class AddTestModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InvitationWitoutScreeningComponent} from '../../../app/business-components/meeting/invitation-witout-screening/invitation-witout-screening.component';
import {InvitationWithoutScreeningRoutingModule} from '../../../routing/meeting-routing/meeting-without-screen-routing.module';
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
  declarations: [InvitationWitoutScreeningComponent],
  imports: [
    CommonModule,
    InvitationWithoutScreeningRoutingModule,
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
export class InvitationWithoutScreeningModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AffectMeetingComponent} from '../../../app/business-components/meeting/affect-meeting/affect-meeting.component';
import { AffectMeetingRoutingModule } from '../../../routing/meeting-routing/affect-meeting-routing.module';
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
  declarations: [AffectMeetingComponent],
  imports: [
    CommonModule,
    AffectMeetingRoutingModule,
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
export class AffectMeetingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListOfMeetingRoutingModule } from '../../../routing/meeting-routing/list-of-meeting-routing.module';
import {RecruiterListOfMeetingComponent} from '../../../app/business-components/recruiter-list-of-meeting/recruiter-list-of-meeting.component';
import {TranslateModule} from '@ngx-translate/core';
import {UserService} from '../../../services/user-managment-services/user.service';
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
  declarations: [RecruiterListOfMeetingComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ListOfMeetingRoutingModule,
        TranslateModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatIconModule,
        NgxDatatableModule,
    ],
    providers: [
        UserService,
    ]
})
export class ListOfMeetingModule { }

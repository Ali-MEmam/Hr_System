import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersRoutingModule } from '../../../routing/user-managment-routing/list-users-routing.module';
import {ListUsersComponent} from '../../../app/business-components/user-managment-components/components/list-users/list-users.component';
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
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import {Ng2TelInputModule} from 'ng2-tel-input';

@NgModule({
  declarations: [],
    imports: [
        Ng2TelInputModule,
        NgxDatatableModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ListUsersRoutingModule,
        TranslateModule,
        MatTableModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        FlexLayoutModule,
        MatIconModule,
    ],
    providers: [
        UserService,
    ]
})
export class ListUsersModule { }

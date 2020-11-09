import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParameterRoutingModule } from '../../../routing/user-managment-routing/parameter-routing.module';
import {ParameterComponent} from '../../../app/business-components/user-managment-components/components/parameter/parameter.component';
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


@NgModule({
  declarations: [ParameterComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule,
        ParameterRoutingModule,
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
export class ParameterModule { }

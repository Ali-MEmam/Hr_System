import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CandidateProfileRoutingModuel } from "../../../routing/candidate-routing/profile-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListUsersRoutingModule } from "routing/user-managment-routing/list-users-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ImageCropperModule } from "ngx-image-cropper";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { CandidateProfileComponent } from "app/candidate-components/candidate-profile/candidate-profile.component";
import{CandidateContactComponent} from './../../../app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component'
import{CandidatePersonalInfoComponent} from './../../../app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component'
import{CandidateSocialNetworksComponent} from './../../../app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component'
 
@NgModule({
  declarations: [CandidateProfileComponent,CandidateContactComponent,CandidatePersonalInfoComponent,CandidateSocialNetworksComponent],
  imports: [
    ImageCropperModule,
    CommonModule,
    CandidateProfileRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ListUsersRoutingModule,
    FlexLayoutModule,
  ],
})
export class CandidateProfileModuel {}

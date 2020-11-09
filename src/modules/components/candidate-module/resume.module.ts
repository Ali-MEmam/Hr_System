import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ViewResumeRoutingModuel } from "../../../routing/candidate-routing/resume-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListUsersRoutingModule } from "routing/user-managment-routing/list-users-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ViewResumeComponent } from "app/candidate-components/view-resume/view-resume.component";
import { EducationComponent } from 'app/candidate-components/view-resume/education/education.component';
import { ExperienceComponent } from 'app/candidate-components/view-resume/experience/experience.component';
import { SkillsComponent } from 'app/candidate-components/view-resume/skills/skills.component';
import { PortfolioComponent } from 'app/candidate-components/view-resume/portfolio/portfolio.component';

@NgModule({
  declarations: [ViewResumeComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    PortfolioComponent


  ],

  imports: [
    CommonModule,
    ViewResumeRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ListUsersRoutingModule,
    FlexLayoutModule, 
  ],
})
export class ViewResumeModuel {}

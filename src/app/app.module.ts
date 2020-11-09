import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from "./app-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS, } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { ToastrModule } from "ngx-toastr";
import { BrowserModule } from "@angular/platform-browser";
import { PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, } from "ngx-perfect-scrollbar";
import { ChartsModule } from 'ng2-charts';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { TreePipe } from './tree.pipe';
import { CheckChildrenDirective } from './check-children.directive';
import { SelectGroupDirective } from './select-group.directive';
import { AppComponent } from "./app.component";
import { LoginComponent } from "./core/authentication/login/login.component";
import { ListUsersComponent } from "./business-components/user-managment-components/components/list-users/list-users.component";
import { CommonUserManagmentComponent } from "./business-components/user-managment-components/components/common-user-managment/common-user-managment.component";
import { SharedModule } from "./shared/shared.module";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { AddUserComponent } from "./business-components/user-managment-components/components/add-user/add-user.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateUserComponent } from "./business-components/user-managment-components/components/update-user/update-user.component";
import { ListProfilsComponent } from "./business-components/user-managment-components/components/list-profils/list-profils.component";
import { ListRolesComponent } from "./business-components/user-managment-components/components/list-roles/list-roles.component";
import { AddProfileComponent } from "./business-components/user-managment-components/components/add-profile/add-profile.component";
import { AddRoleComponent } from "./business-components/user-managment-components/components/add-role/add-role.component";
import { UpdateProfileComponent } from "./business-components/user-managment-components/components/update-profile/update-profile.component";
import { UpdateRoleComponent } from "./business-components/user-managment-components/components/update-role/update-role.component";
import { NgSelectModule } from "@ng-select/ng-select";
import { DetailsProfileComponent } from "./business-components/user-managment-components/components/details-profile/details-profile.component";
import { UserService } from "../services/user-managment-services/user.service";
import { DecimalPipe } from "@angular/common";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SpinnerComponent } from "./spinner/spinner.component";
import { RegisterComponent } from "./core/authentication/register/register.component";
import { AuthInterceptorService } from "./core/interceptors/auth-interceptor.service";
import { ImageCropperModule } from "ngx-image-cropper";
import { FileUploadModule } from 'ng2-file-upload';
//Candidate Commponents
import { UserProfileDetailsComponent } from "./../../src/app/business-components/user-managment-components/components/user-profile-details/user-profile-details.component";
import { NewResumeComponent } from "./candidate-components/new-resume/new-resume/new-resume.component";
import { NewEducationComponent } from "./candidate-components/new-resume/new-education/new-education.component";
import { NewExperienceComponent } from "./candidate-components/new-resume/new-experience/new-experience.component";
import { NewAwardComponent } from "./candidate-components/new-resume/new-award/new-award.component";
import { NewSkillComponent } from "./candidate-components/new-resume/new-skill/new-skill.component";
import { NewPortfolioComponent } from "./candidate-components/new-resume/new-portfolio/new-portfolio.component";
import { EditResumeComponent } from "./candidate-components/edit-resume/edit-resume.component";
import { CandidateContainerComponent } from "./candidate-components/candidate-container/candidate-container.component";

import { CompleteProfileComponent } from "./candidate-components/new-resume/complete-profile/complete-profile.component";
//not found
import { NotFoundPageComponent } from "../app/shared/not-found-page/not-found-page.component";
import { UserChangePasswordComponent } from './business-components/user-managment-components/components/user-change-password/user-change-password.component';
import { LunchOfPreSelectingComponent } from './business-components/screening/lunch-of-pre-selecting/lunch-of-pre-selecting.component';
import { StartScreeningComponent } from './business-components/screening/start-screening/start-screening.component';
import { ArchwizardModule } from 'angular-archwizard';
import { ScreeningComponent } from './business-components/screening/screening.component';
import { ResultOfPreselectingComponent } from './business-components/screening/result-of-preselecting/result-of-preselecting.component';

// import {ResultOfPreselectingComponent} from './business-components/screening/res'
import { RecruiterDashbaordComponent } from './business-components/recruiter-dashbaord/recruiter-dashbaord.component';
import { DndDirective } from './directives/dnd.directive';
import { MeetingComponent } from './business-components/meeting/meeting.component';
import { ScreeningUploadCvComponent } from './business-components/screening/screening-upload-cv/screening-upload-cv.component';
import { StatisticOfMatchingComponent } from './business-components/screening/result-of-preselecting/statistic-of-matching/statistic-of-matching.component';
import { TestManagmentComponent } from './business-components/test-managment/test-managment.component';
import { MeetingReportComponent } from './business-components/meeting/meeting-report/meeting-report.component';
import { EditTestComponent } from './business-components/test-managment/test-list/edit-test/edit-test.component';
import { AssessmentByTypeComponent } from './business-components/assessment/assessment-by-type/assessment-by-type.component';
import { AssessmentReportComponent } from './business-components/assessment/assessment-report/assessment-report.component';
import { ChartistModule } from 'ng-chartist';
// import { JobDetailsComponent } from './business-components/job/job-details/job-details.component';
/* import { JobScreeningComponent } from './business-components/job/job-screening/job-screening.component'; */
import { BusinessComponentsComponent } from './business-components/business-components.component';
import { JobCreateNotesComponent } from './business-components/job/job-create-notes/job-create-notes.component';
/* import { JobNoteListComponent } from './business-components/job/job-note-list/job-note-list.component'; */
import { DepartmentsComponent } from './business-components/departments/departments.component';
import { JobListComponent } from './business-components/job/job-list/job-list.component';
import { JobAttachmentsComponent } from './business-components/job/job-attachments/job-attachments.component';
import { CandidateNewSidebarComponent } from './shared/candidate-new-sidebar/candidate-new-sidebar/candidate-new-sidebar.component';
import { CandidateNavbarComponent } from './shared/candidate-navbar/candidate-navbar.component';
// import { CandidateNewSidebarComponent } from './shared/candidate-new-sidebar/candidate-new-sidebar/candidate-new-sidebar.component';
import { JobSpecificComponent } from './business-components/job/job-specific/job-specific.component';
import { JobContainerComponent } from './business-components/job/job-container/job-container.component';
import { JobScreeeningDetailsComponent } from './business-components/job/job-screeening-details/job-screeening-details.component';
/* import { ActivityLogsComponent } from './business-components/job/activity-logs/activity-logs.component'; */
import { StepsContainerComponent } from './candidate-components/new-resume/steps-container/steps-container.component';
// import { JobAttachmentsComponent } from './business-components/job/job-attachments/job-attachments.component';
// import { CandidateNewSidebarComponent } from './shared/candidate-new-sidebar/candidate-new-sidebar/candidate-new-sidebar.component';
import { CandidateStepsSidebarComponent } from './shared/candidate-steps-sidebar/candidate-steps-sidebar.component';
import { CandidateStepsNavbarComponent } from './shared/candidate-steps-navbar/candidate-steps-navbar.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
// import { MeetingDetailsComponent } from './candidate-components/candidate-list-of-meeting/meeting-details/meeting-details.component';
import { Ng2TelInputModule } from 'ng2-tel-input';
import { RecruiterProfileComponent } from './business-components/recruiter-profile/recruiter-profile.component';
import { CompleteRegisterProfileComponent } from './business-components/complete-register-profile/complete-register-profile.component';
import { RegisterProfileFormComponent } from './business-components/complete-register-profile/register-profile-form/register-profile-form.component';
import { NavbarRegisterRecruiterComponent } from './shared/navbar-register-recruiter/navbar-register-recruitercomponent';
import { SidebarRegisterRecruiterComponent } from './shared/sidebar-register-recruiter/sidebar-register-recruiter.component';
// import { JobTestsComponent } from './business-components/job/job-tests/job-tests.component';
import { TagInputModule } from 'ngx-chips';
// import { JobHistoryComponent } from './business-components/job/job-history/job-history.component';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatChipsModule } from '@angular/material/chips';
import { TasksComponent } from '../app/business-components/Tasks-components/tasks.component';
// import {AuthInterceptorService} from './shared/';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { CategoryListComponent } from './business-components/test-managment/category-list/category-list.component';
import { CreateHrTestComponent } from './business-components/test-managment/add-test/create-hr-test/create-hr-test.component';
import { CreateTecnicalTestComponent } from './business-components/test-managment/add-test/create-tecnical-test/create-tecnical-test.component';
// import { AssignProfileComponent } from './assign-profile/assign-profile.component';
// import { CreateFirstContentComponent } from './business-components/test-managment/add-test/create-first-content/create-first-content.component';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelPropagation: false,
};

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

/* ----------------------------- facebook Login ----------------------------- */

@NgModule({
  declarations: [
    AppComponent,
    TreePipe,
    CheckChildrenDirective,
    SelectGroupDirective,
    LoginComponent,
    CommonUserManagmentComponent,
    AddUserComponent,
    UpdateUserComponent,
    ListProfilsComponent,
    ListRolesComponent,
    ListUsersComponent,
    AddProfileComponent,
    AddRoleComponent,
    UpdateProfileComponent,
    UpdateRoleComponent,
    DetailsProfileComponent,
    SpinnerComponent,
    RegisterComponent,
    UserProfileDetailsComponent,
    NewResumeComponent,
    NewEducationComponent,
    NewExperienceComponent,
    NewAwardComponent,
    NewSkillComponent,
    NewPortfolioComponent,
    EditResumeComponent,
    CandidateContainerComponent,
    CompleteProfileComponent,
    NotFoundPageComponent,
    UserChangePasswordComponent,
    LunchOfPreSelectingComponent,
    ScreeningComponent,
    UserChangePasswordComponent,
    RecruiterDashbaordComponent,
    ResultOfPreselectingComponent,
    MeetingComponent,
    StartScreeningComponent,

    RecruiterDashbaordComponent,
    ScreeningUploadCvComponent,
    ResultOfPreselectingComponent,
    StatisticOfMatchingComponent,
    TestManagmentComponent,
    MeetingReportComponent,
    EditTestComponent,
    AssessmentByTypeComponent,
    AssessmentReportComponent,
    BusinessComponentsComponent,
    DndDirective,
    JobCreateNotesComponent,
    DepartmentsComponent,
    JobListComponent,

    JobSpecificComponent,
    JobContainerComponent,
    //  JobAttachmentsComponent,

    JobScreeeningDetailsComponent,
    //  JobDetailsComponent,

    CandidateNewSidebarComponent,
    CandidateNavbarComponent,
    StepsContainerComponent,
    CandidateStepsSidebarComponent,
    CandidateStepsNavbarComponent,
    RecruiterProfileComponent,
    CompleteRegisterProfileComponent,
    RegisterProfileFormComponent,
    NavbarRegisterRecruiterComponent,
    SidebarRegisterRecruiterComponent,
    TasksComponent,
    // AssignProfileComponent,
    // CreateHrTestComponent,
    // CreateTecnicalTestComponent,
    // CategoryListComponent,
    //  CreateFirstContentComponent,
    //  JobHistoryComponent,
    //  JobTestsComponent
    //  MeetingDetailsComponent
  ],
  imports: [
    MatButtonToggleModule,
    PdfViewerModule,
    TagInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatChipsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    ImageCropperModule,
    ChartsModule,
    ArchwizardModule,
    FileUploadModule,
    ChartistModule,
    Ng2TelInputModule,
    NgxIntlTelInputModule,
    MatCheckboxModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      maxPercent: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      showInnerStroke: false,
      outerStrokeColor: "#e59a12",
      outerStrokeGradient: false,
      animationDuration: 600,
      clockwise: true,
      showBackground: false,
      showTitle: true,
      showUnits: true,
      showSubtitle: false,
      unitsFontSize: "40",
      titleFontSize: '40',
      titleColor: '#fff',
      unitsColor: "#fff",
      // outerStrokeLinecap : "inherit"
    }),
    PerfectScrollbarModule,
    SharedModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgSelectModule,
    FormsModule,
    ToastrModule.forRoot({
      maxOpened: 1,
      preventDuplicates: false,
    }),
    ArchwizardModule
  ],
  providers: [
    UserService,
    DecimalPipe,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
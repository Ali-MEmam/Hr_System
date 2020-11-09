import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";
import { LoginComponent } from "./core/authentication/login/login.component";

import { AuthGuard } from "./core/guards/auth-guard.service";
import { CommonUserManagmentComponent } from "./business-components/user-managment-components/components/common-user-managment/common-user-managment.component";
import { recruiter_ROUTES } from "../routing/core-routing/authentication-routing/common-user-managment.routes";
import { candidate_ROUTES } from "../routing/core-routing/authentication-routing/candidate.routes";
import { meeting_ROUTES } from "../routing/core-routing/authentication-routing/meeting.routes";
import { jobs_ROUTES } from "../routing/core-routing/jobs-routes";
// import {UpdateUserComponent} from "./business-components/user-managment-components/components/update-user/update-user.component";
import { RegisterComponent } from "./core/authentication/register/register.component";
import { CompleteProfileComponent } from "./candidate-components/new-resume/complete-profile/complete-profile.component";
import { NewResumeComponent } from "./candidate-components/new-resume/new-resume/new-resume.component";
import { CandidateContainerComponent } from "./candidate-components/candidate-container/candidate-container.component";
// import { RecruiterDashbaordComponent } from "./business-components/recruiter-dashbaord/recruiter-dashbaord.component";
import { NotFoundPageComponent } from "./shared/not-found-page/not-found-page.component";
import { RecruiterDashbaordComponent } from './business-components/recruiter-dashbaord/recruiter-dashbaord.component';
import { BusinessComponentsComponent } from './business-components/business-components.component';
import { MeetingComponent } from './business-components/meeting/meeting.component';
import { TestManagmentComponent } from './business-components/test-managment/test-managment.component';
import { testManagment_ROUTES } from 'routing/core-routing/authentication-routing/test-managment.routes';
import { AssessmentByTypeComponent } from './business-components/assessment/assessment-by-type/assessment-by-type.component';
import { AssessmentReportComponent } from './business-components/assessment/assessment-report/assessment-report.component';
import { ScreeningComponent } from './business-components/screening/screening.component';
import { DepartmentsComponent } from './business-components/departments/departments.component';
import { JobListComponent } from './business-components/job/job-list/job-list.component';
import { JobSpecificComponent } from './business-components/job/job-specific/job-specific.component';
import { JobContainerComponent } from './business-components/job/job-container/job-container.component';
import { StepsContainerComponent } from './candidate-components/new-resume/steps-container/steps-container.component';
import { JobScreeeningDetailsComponent } from './business-components/job/job-screeening-details/job-screeening-details.component';
import { RecruiterProfileComponent } from './business-components/recruiter-profile/recruiter-profile.component';
import { CompleteRegisterProfileComponent } from './business-components/complete-register-profile/complete-register-profile.component';
import { RegisterProfileFormComponent } from './business-components/complete-register-profile/register-profile-form/register-profile-form.component';
import { JobHistoryComponent } from './business-components/job/job-history/job-history.component';
import { TasksComponent } from './business-components/Tasks-components/tasks.component';

const appRoutes: Routes = [
  // {
  //   path: "pages/recruiter",
  //   redirectTo: "accueil",
  //   pathMatch: "full",
  // },
  { path: "", component: LoginComponent },
  { path: "register/:type", component: RegisterComponent },
  { path: "register/:type/:id", component: RegisterComponent },
  {
    path: "pages/recruiter",
    component: BusinessComponentsComponent,
    children: [
      {
        path: "user-managment",
        component: CommonUserManagmentComponent,
        children: recruiter_ROUTES,
        canActivate: [AuthGuard],
      },
      {
        path: "complete-register",
        component: StepsContainerComponent,
        children: [
          {
            path: "company-profile/:id",
            component: CompleteProfileComponent,
            canActivate: [AuthGuard]
          }
        ],
        canActivate: [AuthGuard],
      },
      {
        path: "mydashboard",
        component: RecruiterDashbaordComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "recruiter-profile",
        component: RecruiterProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "",
        component: MeetingComponent,
        children: meeting_ROUTES,
        canActivate: [AuthGuard]
      },
      {
        path: "test-managment",
        component: TestManagmentComponent,
        children: testManagment_ROUTES,
        canActivate: [AuthGuard]
      },
      {
        path: "assessments",
        component: AssessmentByTypeComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "assessments/report/:id",
        component: AssessmentReportComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "screening",
        component: ScreeningComponent,
        canActivate: [AuthGuard]
      }, {
        path: "department",
        component: DepartmentsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "tasks",
        component: TasksComponent,
        canActivate: [AuthGuard],
      },
      {
        path: "jobs",
        component: JobContainerComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: "info/:id",
            component: JobSpecificComponent,
            children: jobs_ROUTES,
            canActivate: [AuthGuard]
          },
          {
            path: "list",
            component: JobListComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "info/:id/screening/details/:id2",
            component: JobScreeeningDetailsComponent,
            canActivate: [AuthGuard]
          },
          {
            path: "info/:id/details/history",
            component: JobHistoryComponent,
            canActivate: [AuthGuard]
          },
        ]
      },

    ],
    canActivate: [AuthGuard]
  },
  {
    path: "candidate/pages/:id",
    component: CandidateContainerComponent,
    children: candidate_ROUTES,
    canActivate: [AuthGuard],
  },
  {
    path: "complete-profile",
    component: StepsContainerComponent,
    children: [
      {
        path: "step1/:id",
        component: CompleteProfileComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "step2/:id",
        component: NewResumeComponent,
        canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard],
  },
  {
    path: "complete-Register",
    component: CompleteRegisterProfileComponent,
    children: [
      {
        path: "step1/:id",
        component: RegisterProfileFormComponent,
        canActivate: [AuthGuard]
      }
    ],
    canActivate: [AuthGuard],
  },
  // {
  //   path: "notFound",
  //   component: NotFoundPageComponent,
  // },

  // {
  //   path: "**",
  //   redirectTo: "notFound",
  //   pathMatch: "full",
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

import { Routes } from "@angular/router";
export const candidate_ROUTES: Routes = [
  {
    path: "dashboard",
    loadChildren: () =>
      import(
        "../../../modules/components/candidate-module/dashboard.module"
      ).then((m) => m.DashboardModuel),
  },
  {
    path: "meetings",
    loadChildren: () =>
      import(
        "../../../modules/components/candidate-module/list-of-meeting.module"
      ).then((m) => m.ListOfMeetingModuel),
  },
  {
    path: "assessments",
    loadChildren: () =>
      import(
        "../../../modules/components/candidate-module/list-of-assessment.module"
      ).then((m) => m.ListOfAssessmentsModuel),
  },
  {
    path: "changepassword",
    loadChildren: () =>
      import(
        "../../../modules/components/candidate-module/change-password.module"
      ).then((m) => m.ChangePasswordModuel),
  },
  {
    path: "profile",
    loadChildren: () =>
      import(
        "../../../modules/components/candidate-module/profile.module"
      ).then((m) => m.CandidateProfileModuel),
  },
  {
    path: "resume",
    loadChildren: () =>
      import("../../../modules/components/candidate-module/resume.module").then(
        (m) => m.ViewResumeModuel
      ),
  },{
    path:"assessments/first-contact",
    loadChildren:() => 
      import("../../../modules/components/candidate-module/first-contact.module").then(
        (m) => m.FirstContactModuel
        ),
  },{
    path:"assessments/technical",
    loadChildren:() =>
      import("../../../modules/components/candidate-module/technical-module").then(
        (m) => m.TechnicalInterviewModuel
      )
  },
  {
    path:"meetings/meet-bot",
    loadChildren:() =>
      import("../../../modules/components/candidate-module/chat-bot-module").then(
        (m) => m.chatBootModuel
      )
  },
  {
    path:"meetings/meeting-history",
    loadChildren:() =>
      import("../../../modules/components/candidate-module/meeting-history-module").then(
        (m) => m.meetingHistoryModuel
      )
  }
];

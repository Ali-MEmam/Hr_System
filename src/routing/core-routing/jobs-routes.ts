import { Routes } from "@angular/router";
export const jobs_ROUTES: Routes = [
  {
    path: "attachments",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-attachment"
      ).then((m) => m.jobAttachmentModuel),
  },
  {
    path: "details",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-details"
      ).then((m) => m.jobDetailsModuel),
  },
  // {
  //   path: "logs",
  //   loadChildren: () =>
  //     import(
  //       "../../modules/components/job-module/activity-logs-module"
  //     ).then((m) => m.activityLogsModuel),
  // },
  {
    path: "notes",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-notes"
      ).then((m) => m.jobNoteListModuel),
  },
  {
    path: "screening",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-screening"
      ).then((m) => m.jobScreeningModuel),
  },
  {
    path: "criteria",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-criteria-module"
      ).then((m) => m.jobCriteriaModuel),
  },
  {
    path: "tasks",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-tasks"
      ).then((m) => m.JobTasksModuel),
  },
  {
    path: "tests",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-tests"
      ).then((m) => m.JobTestsModuel),
  },
  {
    path: "history",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-history"
      ).then((m) => m.JobHistoryModuel),
  }


 /* {
    path: "screening",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-attachment"
      ).then((m) => m.jobAttachmentModuel),
  }, */
 /*  {
    path: "notes",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-attachment"
      ).then((m) => m.jobAttachmentModuel),
  }, *//* {
    path: "tests",
    loadChildren: () =>
      import(
        "../../modules/components/job-module/job-attachment"
      ).then((m) => m.jobAttachmentModuel),
  } */
];
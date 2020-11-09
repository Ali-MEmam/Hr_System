import { Routes } from "@angular/router";
export const meeting_ROUTES: Routes = [
  {
    path: "listofmeeting",
    loadChildren: () =>
      import(
        "../../../modules/components/meeting-module/list-of-meeting-module"
      ).then((m) => m.ListOfMeetingModule),
  },{
      path:"affectmeeting",
      loadChildren:() =>
      import(
        "../../../modules/components/meeting-module/affect-meeting.module"
      ).then((m)=>m.AffectMeetingModule)
  },
  {
      path:"withoutscreening",
      loadChildren:() =>
        import(
            "../../../modules/components/meeting-module/meeting-without-screening.module"
        ).then((m)=>m.InvitationWithoutScreeningModule)
  }
 
];

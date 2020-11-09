import { Routes, RouterModule } from "@angular/router";
import { AddUserComponent } from "../../../app/business-components/user-managment-components/components/add-user/add-user.component";

export const recruiter_ROUTES: Routes = [
  {
    path: "list-users",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/list-users.module"
      ).then((m) => m.ListUsersModule),
  },
  {
    path: "list-profils",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/list-profils.module"
      ).then((m) => m.ListProfilsModule),
  },
  {
    path: "list-roles",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/list-roles.module"
      ).then((m) => m.ListRolesModule),
  },
  {
    path: "add-user",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/add-user.module"
      ).then((m) => m.AddUserModule),
  },
  {
    path: "add-profile",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/add-profile.module"
      ).then((m) => m.AddProfileModule),
  },
  {
    path: "add-role",
    loadChildren: () =>
      import(
        "../../../modules/components/user-managment-module/add-role.module"
      ).then((m) => m.AddRoleModule),
  },{
    path:"parameter",
    loadChildren:() =>
      import(
        "../../../modules/components/user-managment-module/parameter.module"
      ).then((m) => m.ParameterModule)
  },{
    path:"assign-profile",
    loadChildren:() =>
      import(
        "../../../modules/components/user-managment-module/assign-profile.module"
      ).then((m) => m.AssignProfileModule)
  }
];

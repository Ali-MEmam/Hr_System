import { Routes } from "@angular/router";
export const testManagment_ROUTES: Routes = [
  {
    path: "hrtest-list",
    loadChildren: () =>
      import(
        "../../../modules/components/test-managment-module/hr-test.module"
      ).then((m) => m.HrTestModule),
  },
  {
    path:"technicaltest-list",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/technical-test.module"
      ).then((m) => m.TecnicalTestModule)
  },
  {
    path:"firstcontact-list",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/first-contact.module"
      ).then((m) => m.FirstConctactModule)
  },
  {
    path:"testslist",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/list-of-test.module"
      ).then((m)=> m.TestListModule)
  },
  {
    path:"testslist/details/:id",
    loadChildren:() => 
      import(
        "../../../modules/components/test-managment-module/test-details.module"
      ).then((m) => m.SingleTestModule)
  },{
    path:"addtest",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/add-test-module"
      ).then((m)=> m.AddTestModule)
  },
  {
    path:"category-list",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/category-list.modules"
      ).then((m)=> m.CategoryListModule)
  },
  {
    path:"FirstContent-test",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/create-first-content-test"
      ).then((m)=> m.AddFirstContentModule)
  },
  {
    path:"Hr-test",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/create-hr-test"
      ).then((m)=> m.createHRTestModule)
  },
  {
    path:"tecnical-test",
    loadChildren:() =>
      import(
        "../../../modules/components/test-managment-module/create-tecnical-test"
      ).then((m)=> m.AddTecnicalContentModule)
  },
];

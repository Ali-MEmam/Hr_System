function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-user-managment-module-list-roles-module"], {
  /***/
  "./src/modules/components/user-managment-module/list-roles.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/components/user-managment-module/list-roles.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ListRolesModule */

  /***/
  function srcModulesComponentsUserManagmentModuleListRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRolesModule", function () {
      return ListRolesModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _routing_user_managment_routing_list_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/user-managment-routing/list-roles-routing.module */
    "./src/routing/user-managment-routing/list-roles-routing.module.ts");

    var ListRolesModule = function ListRolesModule() {
      _classCallCheck(this, ListRolesModule);
    };

    ListRolesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListRolesModule
    });
    ListRolesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListRolesModule_Factory(t) {
        return new (t || ListRolesModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_list_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListRolesRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListRolesModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_list_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListRolesRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRolesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_list_roles_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListRolesRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/user-managment-routing/list-roles-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/routing/user-managment-routing/list-roles-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ListRolesRoutingModule */

  /***/
  function srcRoutingUserManagmentRoutingListRolesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListRolesRoutingModule", function () {
      return ListRolesRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_business_components_user_managment_components_components_list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/business-components/user-managment-components/components/list-roles/list-roles.component */
    "./src/app/business-components/user-managment-components/components/list-roles/list-roles.component.ts");
    /* harmony import */


    var _app_business_components_user_managment_components_components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../app/business-components/user-managment-components/components/add-role/add-role.component */
    "./src/app/business-components/user-managment-components/components/add-role/add-role.component.ts");
    /* harmony import */


    var _app_business_components_user_managment_components_components_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../app/business-components/user-managment-components/components/update-role/update-role.component */
    "./src/app/business-components/user-managment-components/components/update-role/update-role.component.ts");

    var routes = [{
      path: '',
      component: _app_business_components_user_managment_components_components_list_roles_list_roles_component__WEBPACK_IMPORTED_MODULE_2__["ListRolesComponent"]
    }, {
      path: 'add-role',
      component: _app_business_components_user_managment_components_components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_3__["AddRoleComponent"]
    }, {
      path: 'update-role/:id',
      component: _app_business_components_user_managment_components_components_update_role_update_role_component__WEBPACK_IMPORTED_MODULE_4__["UpdateRoleComponent"]
    }];

    var ListRolesRoutingModule = function ListRolesRoutingModule() {
      _classCallCheck(this, ListRolesRoutingModule);
    };

    ListRolesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListRolesRoutingModule
    });
    ListRolesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListRolesRoutingModule_Factory(t) {
        return new (t || ListRolesRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListRolesRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListRolesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-components-user-managment-module-list-roles-module-es5.js.map
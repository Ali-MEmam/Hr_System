function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-user-managment-module-add-role-module"], {
  /***/
  "./src/modules/components/user-managment-module/add-role.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/modules/components/user-managment-module/add-role.module.ts ***!
    \*************************************************************************/

  /*! exports provided: AddRoleModule */

  /***/
  function srcModulesComponentsUserManagmentModuleAddRoleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoleModule", function () {
      return AddRoleModule;
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


    var _routing_user_managment_routing_add_role_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/user-managment-routing/add-role-routing.module */
    "./src/routing/user-managment-routing/add-role-routing.module.ts");

    var AddRoleModule = function AddRoleModule() {
      _classCallCheck(this, AddRoleModule);
    };

    AddRoleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddRoleModule
    });
    AddRoleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddRoleModule_Factory(t) {
        return new (t || AddRoleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_add_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddRoleRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddRoleModule, {
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_add_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddRoleRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRoleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_user_managment_routing_add_role_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddRoleRoutingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/user-managment-routing/add-role-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/routing/user-managment-routing/add-role-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: AddRoleRoutingModule */

  /***/
  function srcRoutingUserManagmentRoutingAddRoleRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddRoleRoutingModule", function () {
      return AddRoleRoutingModule;
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


    var _app_business_components_user_managment_components_components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/business-components/user-managment-components/components/add-role/add-role.component */
    "./src/app/business-components/user-managment-components/components/add-role/add-role.component.ts");

    var routes = [{
      path: '',
      component: _app_business_components_user_managment_components_components_add_role_add_role_component__WEBPACK_IMPORTED_MODULE_2__["AddRoleComponent"]
    }];

    var AddRoleRoutingModule = function AddRoleRoutingModule() {
      _classCallCheck(this, AddRoleRoutingModule);
    };

    AddRoleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AddRoleRoutingModule
    });
    AddRoleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AddRoleRoutingModule_Factory(t) {
        return new (t || AddRoleRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddRoleRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddRoleRoutingModule, [{
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
//# sourceMappingURL=modules-components-user-managment-module-add-role-module-es5.js.map
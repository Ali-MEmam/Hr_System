(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-user-managment-module-add-user-module"],{

/***/ "./src/modules/components/user-managment-module/add-user.module.ts":
/*!*************************************************************************!*\
  !*** ./src/modules/components/user-managment-module/add-user.module.ts ***!
  \*************************************************************************/
/*! exports provided: AddUserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserModule", function() { return AddUserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _routing_user_managment_routing_add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routing/user-managment-routing/add-user-routing.module */ "./src/routing/user-managment-routing/add-user-routing.module.ts");




class AddUserModule {
}
AddUserModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddUserModule });
AddUserModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddUserModule_Factory(t) { return new (t || AddUserModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _routing_user_managment_routing_add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUserRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddUserModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _routing_user_managment_routing_add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUserRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _routing_user_managment_routing_add_user_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddUserRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/user-managment-routing/add-user-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/routing/user-managment-routing/add-user-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: AddUserRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserRoutingModule", function() { return AddUserRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_business_components_user_managment_components_components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/add-user/add-user.component */ "./src/app/business-components/user-managment-components/components/add-user/add-user.component.ts");





const routes = [
    {
        path: "",
        component: _app_business_components_user_managment_components_components_add_user_add_user_component__WEBPACK_IMPORTED_MODULE_2__["AddUserComponent"],
    },
];
class AddUserRoutingModule {
}
AddUserRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddUserRoutingModule });
AddUserRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddUserRoutingModule_Factory(t) { return new (t || AddUserRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddUserRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddUserRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-user-managment-module-add-user-module-es2015.js.map
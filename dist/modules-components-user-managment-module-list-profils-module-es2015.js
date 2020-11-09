(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-user-managment-module-list-profils-module"],{

/***/ "./src/modules/components/user-managment-module/list-profils.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/user-managment-module/list-profils.module.ts ***!
  \*****************************************************************************/
/*! exports provided: ListProfilsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProfilsModule", function() { return ListProfilsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _routing_user_managment_routing_list_profils_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routing/user-managment-routing/list-profils-routing.module */ "./src/routing/user-managment-routing/list-profils-routing.module.ts");




class ListProfilsModule {
}
ListProfilsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListProfilsModule });
ListProfilsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListProfilsModule_Factory(t) { return new (t || ListProfilsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _routing_user_managment_routing_list_profils_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListProfilsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListProfilsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _routing_user_managment_routing_list_profils_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListProfilsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListProfilsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _routing_user_managment_routing_list_profils_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListProfilsRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/user-managment-routing/list-profils-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/routing/user-managment-routing/list-profils-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ListProfilsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListProfilsRoutingModule", function() { return ListProfilsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_business_components_user_managment_components_components_list_profils_list_profils_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/list-profils/list-profils.component */ "./src/app/business-components/user-managment-components/components/list-profils/list-profils.component.ts");
/* harmony import */ var _app_business_components_user_managment_components_components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/add-profile/add-profile.component */ "./src/app/business-components/user-managment-components/components/add-profile/add-profile.component.ts");
/* harmony import */ var _app_business_components_user_managment_components_components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/update-profile/update-profile.component */ "./src/app/business-components/user-managment-components/components/update-profile/update-profile.component.ts");
/* harmony import */ var _app_business_components_user_managment_components_components_details_profile_details_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/details-profile/details-profile.component */ "./src/app/business-components/user-managment-components/components/details-profile/details-profile.component.ts");








const routes = [
    {
        path: '',
        component: _app_business_components_user_managment_components_components_list_profils_list_profils_component__WEBPACK_IMPORTED_MODULE_2__["ListProfilsComponent"],
    },
    {
        path: 'add-profile',
        component: _app_business_components_user_managment_components_components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_3__["AddProfileComponent"],
    },
    {
        path: 'update-profile/:id',
        component: _app_business_components_user_managment_components_components_update_profile_update_profile_component__WEBPACK_IMPORTED_MODULE_4__["UpdateProfileComponent"],
    },
    {
        path: 'details-profile/:id',
        component: _app_business_components_user_managment_components_components_details_profile_details_profile_component__WEBPACK_IMPORTED_MODULE_5__["DetailsProfileComponent"],
    }
];
class ListProfilsRoutingModule {
}
ListProfilsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ListProfilsRoutingModule });
ListProfilsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ListProfilsRoutingModule_Factory(t) { return new (t || ListProfilsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListProfilsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListProfilsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-user-managment-module-list-profils-module-es2015.js.map
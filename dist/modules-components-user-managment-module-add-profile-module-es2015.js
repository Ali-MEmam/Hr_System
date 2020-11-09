(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-user-managment-module-add-profile-module"],{

/***/ "./src/modules/components/user-managment-module/add-profile.module.ts":
/*!****************************************************************************!*\
  !*** ./src/modules/components/user-managment-module/add-profile.module.ts ***!
  \****************************************************************************/
/*! exports provided: AddProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileModule", function() { return AddProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _routing_user_managment_routing_add_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../routing/user-managment-routing/add-profile-routing.module */ "./src/routing/user-managment-routing/add-profile-routing.module.ts");




class AddProfileModule {
}
AddProfileModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProfileModule });
AddProfileModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProfileModule_Factory(t) { return new (t || AddProfileModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _routing_user_managment_routing_add_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProfileRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProfileModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _routing_user_managment_routing_add_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProfileRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProfileModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _routing_user_managment_routing_add_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["AddProfileRoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/user-managment-routing/add-profile-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/routing/user-managment-routing/add-profile-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: AddProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProfileRoutingModule", function() { return AddProfileRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_business_components_user_managment_components_components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/business-components/user-managment-components/components/add-profile/add-profile.component */ "./src/app/business-components/user-managment-components/components/add-profile/add-profile.component.ts");





const routes = [
    {
        path: '',
        component: _app_business_components_user_managment_components_components_add_profile_add_profile_component__WEBPACK_IMPORTED_MODULE_2__["AddProfileComponent"]
    }
];
class AddProfileRoutingModule {
}
AddProfileRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AddProfileRoutingModule });
AddProfileRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AddProfileRoutingModule_Factory(t) { return new (t || AddProfileRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AddProfileRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddProfileRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-user-managment-module-add-profile-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-test-managment-module-test-details-module"],{

/***/ "./src/app/business-components/test-managment/test-list/single-test/single-test.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/business-components/test-managment/test-list/single-test/single-test.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SingleTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestComponent", function() { return SingleTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../services/test-mangment/test-mangment.service */ "./src/services/test-mangment/test-mangment.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var services_user_managment_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/user-managment-services/role.service */ "./src/services/user-managment-services/role.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");












function SingleTestComponent_ul_29_div_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r675 = ctx.$implicit;
    const j_r676 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", j_r676 + 1, " - ", answer_r675, " ");
} }
function SingleTestComponent_ul_29_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SingleTestComponent_ul_29_div_3_li_1_Template, 2, 2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r668 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r668.answer);
} }
function SingleTestComponent_ul_29_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " NO Answer found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SingleTestComponent_ul_29_li_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const correctAns_r679 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", correctAns_r679, " ");
} }
function SingleTestComponent_ul_29_li_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SingleTestComponent_ul_29_li_6_div_3_Template, 4, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r668 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r668.correct_answer);
} }
function SingleTestComponent_ul_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SingleTestComponent_ul_29_div_3_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SingleTestComponent_ul_29_ng_template_4_Template, 2, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SingleTestComponent_ul_29_li_6_Template, 4, 1, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r668 = ctx.$implicit;
    const _r671 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r668.question);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r668.answer.length > 0)("ngIfElse", _r671);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r668.correct_answer.length > 0);
} }
class SingleTestComponent {
    /* -------------------------------------------------------------------------- */
    /*                                 Constructor                                */
    /* -------------------------------------------------------------------------- */
    constructor(route, testMangmentService, rolesServerice, _location, toster) {
        this.route = route;
        this.testMangmentService = testMangmentService;
        this.rolesServerice = rolesServerice;
        this._location = _location;
        this.toster = toster;
        this.allRoles = [];
        this.id = "1";
        this.questionsForm = [];
    }
    /* -------------------------------------------------------------------------- */
    /*                             ngOnInit LifeCycle                             */
    /* -------------------------------------------------------------------------- */
    ngOnInit() {
        this.testMangmentService.gettestById(this.route.snapshot.params["id"]).subscribe((data) => {
            console.log(data);
            this.data = data;
            this.questionsForm = this.data.questions;
            console.log(this.questionsForm);
        }, (err) => {
            console.log("not comming");
        });
    }
    /* -------------------------------------------------------------------------- */
    /*                            Go Back To last Page                            */
    /* -------------------------------------------------------------------------- */
    goback() {
        this._location.back();
    }
}
SingleTestComponent.ɵfac = function SingleTestComponent_Factory(t) { return new (t || SingleTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_2__["TestMangmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_user_managment_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
SingleTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SingleTestComponent, selectors: [["app-single-test"]], decls: 34, vars: 5, consts: [["id", "filter", 1, "mb-3"], [1, "row", "text-left"], [1, "col-12"], [1, "content-header"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-content"], [1, "card-body"], [1, "col-md-12", "col-lg-12", "pt-2"], [1, "font-weight-bold", "pr-2"], [1, "mt-5", "font-weight-bold", "subtitle", "mb-3"], [4, "ngFor", "ngForOf"], [1, "form-actions"], [1, "card-title", "goback", "mr-1", "mt-5", "btn", "btn-primary", "btn-raised", "my-1", 3, "click"], [1, "ft-chevrons-left", "mr-1"], [1, "title", "bold-500"], [4, "ngIf", "ngIfElse"], ["showMsg", ""], [4, "ngIf"], ["class", "text", 4, "ngFor", "ngForOf"], [1, "text"], [1, "errormsg"], [1, "subtitle", "bold-500"], [1, "ng-tns-c111-0", "ft-check"]], template: function SingleTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Test Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Test Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "recruiter name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "test questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, SingleTestComponent_ul_29_Template, 7, 4, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleTestComponent_Template_button_click_31_listener($event) { return ctx.goback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Go Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.test, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.type, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.recrutier_name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.created, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questionsForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".font-weight-bold[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n  text-transform: capitalize;\n}\n\n.subtitle[_ngcontent-%COMP%] {\n  color: #009DA0 !important;\n}\n\n.bold-500[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n\n.title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  color: #342e49 !important;\n}\n\nul[_ngcontent-%COMP%]   li.title[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 0;\n}\n\nul[_ngcontent-%COMP%]   li.title[_ngcontent-%COMP%]::before {\n  content: \"- \";\n  color: #6d6d6d;\n  font-size: 25px;\n  margin-right: 10px;\n}\n\nul[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  margin-left: 20px;\n}\n\nul[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .ft-check[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  color: #009DA0;\n}\n\nul[_ngcontent-%COMP%]   .errormsg[_ngcontent-%COMP%] {\n  color: #6c757d !important;\n  margin-left: 20px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy90ZXN0LW1hbmFnbWVudC90ZXN0LWxpc3Qvc2luZ2xlLXRlc3QvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXGFwcFxcYnVzaW5lc3MtY29tcG9uZW50c1xcdGVzdC1tYW5hZ21lbnRcXHRlc3QtbGlzdFxcc2luZ2xlLXRlc3RcXHNpbmdsZS10ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL3Rlc3QtbWFuYWdtZW50L3Rlc3QtbGlzdC9zaW5nbGUtdGVzdC9zaW5nbGUtdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUEyQjtFQUMzQiwwQkFBMEI7QUNDOUI7O0FEQ0E7RUFDRyx5QkFDSDtBQ0NBOztBREFBO0VBQ0ksZ0JBQWdCO0FDR3BCOztBRERBO0VBQ0kscUJBQXFCO0VBQ3JCLHlCQUF5QjtBQ0k3Qjs7QUREQTtFQUdZLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0FDRTVCOztBRFBBO0VBT2dCLGFBQWE7RUFDYixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtBQ0lsQzs7QURkQTtFQWdCUSx5QkFBd0I7RUFDeEIsaUJBQWlCO0FDRXpCOztBRG5CQTtFQW1CWSxrQkFBa0I7RUFDbEIsY0FBYztBQ0kxQjs7QUR4QkE7RUF3QlEseUJBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7QUNJbEMiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL3Rlc3QtbWFuYWdtZW50L3Rlc3QtbGlzdC9zaW5nbGUtdGVzdC9zaW5nbGUtdGVzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb250LXdlaWdodC1ib2xkIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcbi5zdWJ0aXRsZXtcclxuICAgY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudFxyXG59XHJcbi5ib2xkLTUwMHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMzNDJlNDkgIWltcG9ydGFudDtcclxufVxyXG5cclxudWx7XHJcbiAgICBsaXtcclxuICAgICAgICAmLnRpdGxle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIi0gXCI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzZkNmQ2ZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgXHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBjb2xvcjojNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgLmZ0LWNoZWNre1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5REEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5lcnJvcm1zZ3tcclxuICAgICAgICBjb2xvcjojNmM3NTdkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IFxyXG4gICAgfVxyXG59IFxyXG4gIFxyXG4iLCIuZm9udC13ZWlnaHQtYm9sZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib2xkLTUwMCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aXRsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgY29sb3I6ICMzNDJlNDkgIWltcG9ydGFudDtcbn1cblxudWwgbGkudGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG51bCBsaS50aXRsZTo6YmVmb3JlIHtcbiAgY29udGVudDogXCItIFwiO1xuICBjb2xvcjogIzZkNmQ2ZDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbnVsIC50ZXh0IHtcbiAgY29sb3I6ICM2Yzc1N2QgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG5cbnVsIC50ZXh0IC5mdC1jaGVjayB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY29sb3I6ICMwMDlEQTA7XG59XG5cbnVsIC5lcnJvcm1zZyB7XG4gIGNvbG9yOiAjNmM3NTdkICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-single-test",
                templateUrl: "./single-test.component.html",
                styleUrls: ["./single-test.component.scss"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_2__["TestMangmentService"] }, { type: services_user_managment_services_role_service__WEBPACK_IMPORTED_MODULE_4__["RoleService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/test-managment-module/test-details.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/modules/components/test-managment-module/test-details.module.ts ***!
  \*****************************************************************************/
/*! exports provided: SingleTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestModule", function() { return SingleTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var routing_test_managment_routing_test_details_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! routing/test-managment-routing/test-details-routing.module */ "./src/routing/test-managment-routing/test-details-routing.module.ts");
/* harmony import */ var app_business_components_test_managment_test_list_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/business-components/test-managment/test-list/single-test/single-test.component */ "./src/app/business-components/test-managment/test-list/single-test/single-test.component.ts");















class SingleTestModule {
}
SingleTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleTestModule });
SingleTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SingleTestModule_Factory(t) { return new (t || SingleTestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            routing_test_managment_routing_test_details_routing_module__WEBPACK_IMPORTED_MODULE_12__["SingleTestRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleTestModule, { declarations: [app_business_components_test_managment_test_list_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_13__["SingleTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        routing_test_managment_routing_test_details_routing_module__WEBPACK_IMPORTED_MODULE_12__["SingleTestRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [app_business_components_test_managment_test_list_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_13__["SingleTestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    routing_test_managment_routing_test_details_routing_module__WEBPACK_IMPORTED_MODULE_12__["SingleTestRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_11__["NgxDatatableModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/test-managment-routing/test-details-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/routing/test-managment-routing/test-details-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: SingleTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleTestRoutingModule", function() { return SingleTestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_business_components_test_managment_test_list_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/business-components/test-managment/test-list/single-test/single-test.component */ "./src/app/business-components/test-managment/test-list/single-test/single-test.component.ts");





const routes = [
    {
        path: "",
        component: _app_business_components_test_managment_test_list_single_test_single_test_component__WEBPACK_IMPORTED_MODULE_2__["SingleTestComponent"],
    },
];
class SingleTestRoutingModule {
}
SingleTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SingleTestRoutingModule });
SingleTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SingleTestRoutingModule_Factory(t) { return new (t || SingleTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SingleTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-test-managment-module-test-details-module-es2015.js.map
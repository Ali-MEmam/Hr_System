(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-test-managment-module-technical-test-module"],{

/***/ "./src/app/business-components/test-managment/tecnical-test/tecnical-test.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/business-components/test-managment/tecnical-test/tecnical-test.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: TecnicalTestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicalTestComponent", function() { return TecnicalTestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/test-services/hr-test.service */ "./src/services/test-services/hr-test.service.ts");














function TecnicalTestComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Question ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r617 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r617.questionsForm.invalid);
} }
function TecnicalTestComponent_div_42_Template(rf, ctx) { if (rf & 1) {
    const _r623 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_div_42_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r623); const ctx_r622 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r622.backClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_div_42_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r623); const ctx_r624 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r624.onSave(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r618 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r618.listOfQuestions[0]);
} }
function TecnicalTestComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    const _r626 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_div_43_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r626); const ctx_r625 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r625.cancelEdit(ctx_r625.questionsForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_div_43_Template_button_click_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r626); const ctx_r627 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r627.saveEdit(ctx_r627.questionsForm); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r619 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r619.questionsForm.invalid);
} }
function TecnicalTestComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "please add question");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TecnicalTestComponent_ngx_datatable_56_ngx_datatable_column_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-datatable-column", 44);
} if (rf & 2) {
    const col_r631 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 250)("name", col_r631.name)("prop", col_r631.prop);
} }
function TecnicalTestComponent_ngx_datatable_56_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r635 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_ngx_datatable_56_ng_template_5_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r635); const value_r633 = ctx.value; const ctx_r634 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r634.editQuestion(value_r633); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TecnicalTestComponent_ngx_datatable_56_ng_template_5_Template_a_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r635); const value_r633 = ctx.value; const ctx_r636 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r636.deleteQuestion(value_r633); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TecnicalTestComponent_ngx_datatable_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-datatable-row-detail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TecnicalTestComponent_ngx_datatable_56_ngx_datatable_column_3_Template, 1, 3, "ngx-datatable-column", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TecnicalTestComponent_ngx_datatable_56_ng_template_5_Template, 4, 0, "ng-template", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r621 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r621.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 6)("rows", ctx_r621.rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r621.columns);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);
} }
class TecnicalTestComponent {
    constructor(fb, http, testService, _location, toast, tests) {
        this.fb = fb;
        this.http = http;
        this.testService = testService;
        this._location = _location;
        this.toast = toast;
        this.tests = tests;
        this.editMode = false;
        this.columns = [
            { prop: 'questions' },
            { prop: 'Answers' },
        ];
        this.listOfQuestions = [];
        this.rows = [];
        this.id = 0;
        this.testObject = {};
    }
    ngOnInit() {
        this.questionsForm = this.fb.group({
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ans1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ans2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            ans3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    onSubmitQuestionsForm(form) {
        console.log(form);
        this.testObject["test_name"] = form.value.testName;
        var obj = {
            questions: form.value.question,
            Answers: '(' + form.value.ans1 + ', ' + '  ' + form.value.ans2 + ', ' + '  ' + form.value.ans3 + ')',
            answers: [form.value.ans1, form.value.ans2, form.value.ans3],
            id: this.id
        };
        this.listOfQuestions.push(obj);
        this.displayTests();
        this.id++;
        form.reset();
        form.get('testName').patchValue(this.testObject["test_name"]);
        this.toast.success("Question Added", '', {
            timeOut: 2000,
            positionClass: 'toast-top-full-width',
            closeButton: true
        });
        console.log(this.listOfQuestions);
    }
    onSave() {
        var obj = {};
        var objQuestions = {};
        console.log(this.listOfQuestions);
        obj["test"] = this.testObject["test_name"];
        obj["type"] = "Technical";
        obj["created"] = "20-20-2020";
        obj["recrutier_name"] = "Mohamed Ahmed";
        obj["questions"] = [];
        for (let i = 0; i <= this.listOfQuestions.length - 1; i++) {
            objQuestions =
                {
                    question: this.listOfQuestions[i]["questions"],
                    answer: this.listOfQuestions[i]["answers"]
                };
            obj["questions"].push(objQuestions);
        }
        console.log(obj);
        this.tests.postTechnicalTest(obj).subscribe();
        this.toast.success("Test Created Successfully", '', {
            timeOut: 2000,
            positionClass: 'toast-top-full-width',
            closeButton: true
        });
    }
    editQuestion(i) {
        console.log("edit" + i);
        var filtered = this.listOfQuestions.filter(x => {
            return x.id == i;
        });
        console.log(filtered[0]);
        this.questionsForm.get("question").patchValue(filtered[0]["questions"]);
        this.questionsForm.get("ans1").patchValue(filtered[0]["answers"][0]);
        this.questionsForm.get("ans2").patchValue(filtered[0]["answers"][1]);
        this.questionsForm.get("ans3").patchValue(filtered[0]["answers"][2]);
        this.editMode = true;
        this.editId = filtered[0].id;
    }
    saveEdit(form) {
        console.log(this.listOfQuestions);
        for (var i = 0; i <= this.listOfQuestions.length - 1; i++) {
            if (this.listOfQuestions[i].id == this.editId) {
                console.log(this.listOfQuestions[i]["id"], "hiiiiiiiiiii this is the id ");
                this.listOfQuestions[i].questions = form.value.question;
                this.listOfQuestions[i].answers[0] = form.value.ans1;
                this.listOfQuestions[i].answers[1] = form.value.ans2;
                this.listOfQuestions[i].answers[2] = form.value.ans3;
                this.listOfQuestions[i].Answers = '(' + form.value.ans1 + ', ' + '  ' + form.value.ans2 + ', ' + '  ' + form.value.ans3 + ')';
                console.log(this.listOfQuestions[i].questions, form.value.question);
            }
        }
        form.reset();
        form.get('testName').patchValue(this.testObject["test_name"]);
        this.toast.success("Edited Successfully", '', {
            timeOut: 2000,
            positionClass: 'toast-top-full-width',
            closeButton: true
        });
        this.displayTests();
        this.editMode = false;
    }
    cancelEdit(form) {
        form.reset();
        form.get('testName').patchValue(this.testObject["test_name"]);
        this.editMode = false;
    }
    deleteQuestion(i) {
        console.log("delete" + i);
        var filtered = this.listOfQuestions.filter(x => {
            return x.id != i;
        });
        this.listOfQuestions = filtered;
        this.displayTests();
        this.toast.error("Question Deleted", '', {
            timeOut: 2000,
            positionClass: 'toast-top-full-width',
            closeButton: true
        });
    }
    /* -------------------------------------------------------------------------- */
    /*                              Display All Candidates                        */
    /* -------------------------------------------------------------------------- */
    displayTests() {
        this.rows = [...this.listOfQuestions];
    }
    /****************  Back Button ****************/
    backClicked() {
        this._location.back();
    }
}
TecnicalTestComponent.ɵfac = function TecnicalTestComponent_Factory(t) { return new (t || TecnicalTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_6__["HrTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_6__["HrTestService"])); };
TecnicalTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TecnicalTestComponent, selectors: [["app-tecnical-test"]], viewQuery: function TecnicalTestComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
    } }, decls: 57, vars: 6, consts: [[1, "row"], [1, "col-lg-5", "col-12"], ["id", "basic-form-layouts"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header"], [1, "col-md-12", "mx-auto"], [1, "card"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-section"], [1, "col-md-12"], [1, "form-group"], ["for", "userinput1"], ["formControlName", "testName", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "question", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "ans1", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "ans2", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "ans3", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["class", "form-actions", "style", "border: none; padding: 0; margin-top: 0px;", 4, "ngIf"], ["class", "form-actions left", 4, "ngIf"], ["class", "form-actions left d-flex justify-content-center", 4, "ngIf"], [1, "col-lg-7", "col-12"], ["id", "filter", 1, "mb-3"], [1, "col-12"], [1, "card-body", 2, "padding-top", "10px"], ["class", "test-placeholder", 4, "ngIf"], ["class", "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", 4, "ngIf"], [1, "form-actions", 2, "border", "none", "padding", "0", "margin-top", "0px"], ["type", "submit", 1, "btn", "btn-raised", "btn-primary", 3, "disabled"], [1, "form-actions", "left"], ["type", "button", 1, "btn", "btn-raised", "btn-warning", "mr-1", 3, "click"], [1, "ft-x"], ["type", "button", 1, "btn", "btn-raised", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-check-square-o"], [1, "form-actions", "left", "d-flex", "justify-content-center"], [1, "test-placeholder"], ["src", "../../../../assets/img/test.svg", "alt", ""], [1, "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], [3, "width", "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Actions", "sortable", "false", "prop", "id", 3, "width"], ["ngx-datatable-cell-template", ""], [3, "width", "name", "prop"], ["data-original-title", "", "title", "", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["data-original-title", "", "title", "", 1, "danger", "p-0", 3, "click"], [1, "ft-x", "font-medium-3", "mr-2"]], template: function TecnicalTestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Create Test");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TecnicalTestComponent_Template_form_ngSubmit_12_listener($event) { return ctx.onSubmitQuestionsForm(ctx.questionsForm); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Technical Interview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Test Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "textarea", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Answer 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Answer 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Answer 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "textarea", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, TecnicalTestComponent_div_41_Template, 3, 1, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, TecnicalTestComponent_div_42_Template, 7, 1, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, TecnicalTestComponent_div_43_Template, 7, 1, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "section", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "List Of Questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, TecnicalTestComponent_div_55_Template, 4, 0, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](56, TecnicalTestComponent_ngx_datatable_56_Template, 6, 9, "ngx-datatable", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.questionsForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfQuestions.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfQuestions.length >= 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableRowDetailDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DataTableColumnCellDirective"]], styles: [".ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #FF586B !important;\n}\n\n.test-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n.test-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-left: 36px;\n}\n\n.test-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy90ZXN0LW1hbmFnbWVudC90ZWNuaWNhbC10ZXN0L0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGJ1c2luZXNzLWNvbXBvbmVudHNcXHRlc3QtbWFuYWdtZW50XFx0ZWNuaWNhbC10ZXN0XFx0ZWNuaWNhbC10ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL3Rlc3QtbWFuYWdtZW50L3RlY25pY2FsLXRlc3QvdGVjbmljYWwtdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUNKO0FDQUE7O0FEQ0E7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FDRXRCOztBREpBO0VBSVEsVUFBVTtFQUNkLGlCQUFpQjtBQ0lyQjs7QURUQTtFQVFRLGdCQUFnQjtBQ0t4QiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvdGVzdC1tYW5hZ21lbnQvdGVjbmljYWwtdGVzdC90ZWNuaWNhbC10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXRvdWNoZWQubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGNTg2QiAhaW1wb3J0YW50XHJcbn1cclxuLnRlc3QtcGxhY2Vob2xkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGNTg2QiAhaW1wb3J0YW50O1xufVxuXG4udGVzdC1wbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMnJlbSAxcmVtO1xufVxuXG4udGVzdC1wbGFjZWhvbGRlciBpbWcge1xuICB3aWR0aDogMzUlO1xuICBtYXJnaW4tbGVmdDogMzZweDtcbn1cblxuLnRlc3QtcGxhY2Vob2xkZXIgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TecnicalTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tecnical-test',
                templateUrl: './tecnical-test.component.html',
                styleUrls: ['./tecnical-test.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_6__["HrTestService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_6__["HrTestService"] }]; }, { table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_3__["DatatableComponent"]]
        }] }); })();


/***/ }),

/***/ "./src/modules/components/test-managment-module/technical-test.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/modules/components/test-managment-module/technical-test.module.ts ***!
  \*******************************************************************************/
/*! exports provided: TecnicalTestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicalTestModule", function() { return TecnicalTestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _app_business_components_test_managment_tecnical_test_tecnical_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app/business-components/test-managment/tecnical-test/tecnical-test.component */ "./src/app/business-components/test-managment/tecnical-test/tecnical-test.component.ts");
/* harmony import */ var _routing_test_managment_routing_technical_test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../routing/test-managment-routing/technical-test-routing.module */ "./src/routing/test-managment-routing/technical-test-routing.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");















class TecnicalTestModule {
}
TecnicalTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TecnicalTestModule });
TecnicalTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TecnicalTestModule_Factory(t) { return new (t || TecnicalTestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _routing_test_managment_routing_technical_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TecnicalTestRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TecnicalTestModule, { declarations: [_app_business_components_test_managment_tecnical_test_tecnical_test_component__WEBPACK_IMPORTED_MODULE_2__["TecnicalTestComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _routing_test_managment_routing_technical_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TecnicalTestRoutingModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TecnicalTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_app_business_components_test_managment_tecnical_test_tecnical_test_component__WEBPACK_IMPORTED_MODULE_2__["TecnicalTestComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _routing_test_managment_routing_technical_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["TecnicalTestRoutingModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/test-managment-routing/technical-test-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/routing/test-managment-routing/technical-test-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TecnicalTestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TecnicalTestRoutingModule", function() { return TecnicalTestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_business_components_test_managment_tecnical_test_tecnical_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app/business-components/test-managment/tecnical-test/tecnical-test.component */ "./src/app/business-components/test-managment/tecnical-test/tecnical-test.component.ts");





const routes = [
    {
        path: "",
        component: _app_business_components_test_managment_tecnical_test_tecnical_test_component__WEBPACK_IMPORTED_MODULE_2__["TecnicalTestComponent"],
    },
];
class TecnicalTestRoutingModule {
}
TecnicalTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TecnicalTestRoutingModule });
TecnicalTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TecnicalTestRoutingModule_Factory(t) { return new (t || TecnicalTestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TecnicalTestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TecnicalTestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-test-managment-module-technical-test-module-es2015.js.map
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-test-managment-module-hr-test-module"], {
  /***/
  "./src/app/business-components/test-managment/hr-test/hr-test.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/business-components/test-managment/hr-test/hr-test.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: HrTestComponent */

  /***/
  function srcAppBusinessComponentsTestManagmentHrTestHrTestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrTestComponent", function () {
      return HrTestComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../services/test-services/hr-test.service */
    "./src/services/test-services/hr-test.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    function HrTestComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Question ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r597 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r597.questionsForm.invalid);
      }
    }

    function HrTestComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r603 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_div_32_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r603);

          var ctx_r602 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r602.backClicked();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Back ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_div_32_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r603);

          var ctx_r604 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r604.onSave();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r598 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r598.listOfQuestions[0]);
      }
    }

    function HrTestComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r606 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_div_33_Template_button_click_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r606);

          var ctx_r605 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r605.cancelEdit(ctx_r605.questionsForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_div_33_Template_button_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r606);

          var ctx_r607 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r607.saveEdit(ctx_r607.questionsForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Edit ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r599 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r599.questionsForm.invalid);
      }
    }

    function HrTestComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "please add question");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HrTestComponent_ngx_datatable_46_ngx_datatable_column_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-datatable-column", 42);
      }

      if (rf & 2) {
        var col_r611 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 250)("name", col_r611.name)("prop", col_r611.prop);
      }
    }

    function HrTestComponent_ngx_datatable_46_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r615 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_ngx_datatable_46_ng_template_5_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r615);

          var value_r613 = ctx.value;

          var ctx_r614 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r614.editQuestion(value_r613);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HrTestComponent_ngx_datatable_46_ng_template_5_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r615);

          var value_r613 = ctx.value;

          var ctx_r616 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r616.deleteQuestion(value_r613);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HrTestComponent_ngx_datatable_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngx-datatable", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-datatable-row-detail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HrTestComponent_ngx_datatable_46_ngx_datatable_column_3_Template, 1, 3, "ngx-datatable-column", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ngx-datatable-column", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HrTestComponent_ngx_datatable_46_ng_template_5_Template, 4, 0, "ng-template", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r601 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r601.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 8)("rows", ctx_r601.rows);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r601.columns);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", 100);
      }
    }

    var HrTestComponent =
    /*#__PURE__*/
    function () {
      function HrTestComponent(fb, http, _location, testService, toast, tests) {
        _classCallCheck(this, HrTestComponent);

        this.fb = fb;
        this.http = http;
        this._location = _location;
        this.testService = testService;
        this.toast = toast;
        this.tests = tests;
        this.listOfQuestions = [];
        this.rows = [];
        this.id = 0;
        this.testObject = {};
        this.editMode = false;
        this.columns = [{
          prop: 'questions'
        }, {
          prop: 'answers'
        }];
      }

      _createClass(HrTestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questionsForm = this.fb.group({
            testName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.displayTests();
        }
      }, {
        key: "onSubmitQuestionsForm",
        value: function onSubmitQuestionsForm(form) {
          this.testObject["test_name"] = form.value.testName;
          var obj = {
            questions: form.value.question,
            answers: form.value.answer,
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
        }
      }, {
        key: "onSave",
        value: function onSave() {
          var obj = {};
          var objQuestions = {};
          console.log(this.listOfQuestions);
          obj["test"] = this.testObject["test_name"];
          obj["type"] = "HR-Test";
          obj["created"] = "20-20-2020";
          obj["recrutier_name"] = "Mohamed Ahmed";
          obj["questions"] = [];

          for (var i = 0; i <= this.listOfQuestions.length - 1; i++) {
            objQuestions = {
              question: this.listOfQuestions[i]["questions"],
              answer: [this.listOfQuestions[i]["answers"]]
            };
            obj["questions"].push(objQuestions);
          }

          console.log(obj);
          this.tests.postHrTest(obj).subscribe();
          this.toast.success("Test Created Successfully", '', {
            timeOut: 2000,
            positionClass: 'toast-top-full-width',
            closeButton: true
          });
        }
      }, {
        key: "editQuestion",
        value: function editQuestion(i) {
          console.log("edit" + i);
          var filtered = this.listOfQuestions.filter(function (x) {
            return x.id == i;
          });
          console.log(filtered[0]);
          this.questionsForm.get("question").patchValue(filtered[0]["questions"]);
          this.questionsForm.get("answer").patchValue(filtered[0]["answers"]);
          this.editMode = true;
          this.editId = filtered[0].id;
        }
      }, {
        key: "saveEdit",
        value: function saveEdit(form) {
          console.log(this.listOfQuestions);

          for (var i = 0; i <= this.listOfQuestions.length - 1; i++) {
            if (this.listOfQuestions[i].id == this.editId) {
              console.log(this.listOfQuestions[i]["id"], "hiiiiiiiiiii this is the id ");
              this.listOfQuestions[i].questions = form.value.question;
              this.listOfQuestions[i].answers = form.value.answer;
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
      }, {
        key: "cancelEdit",
        value: function cancelEdit(form) {
          form.reset();
          form.get('testName').patchValue(this.testObject["test_name"]);
          this.editMode = false;
        }
      }, {
        key: "deleteQuestion",
        value: function deleteQuestion(i) {
          console.log("delete" + i);
          var filtered = this.listOfQuestions.filter(function (x) {
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

      }, {
        key: "displayTests",
        value: function displayTests() {
          this.rows = _toConsumableArray(this.listOfQuestions);
        }
        /****************  Back Button ****************/

      }, {
        key: "backClicked",
        value: function backClicked() {
          this._location.back();
        }
      }]);

      return HrTestComponent;
    }();

    HrTestComponent.ɵfac = function HrTestComponent_Factory(t) {
      return new (t || HrTestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_5__["HrTestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_5__["HrTestService"]));
    };

    HrTestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HrTestComponent,
      selectors: [["app-hr-test"]],
      viewQuery: function HrTestComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 47,
      vars: 6,
      consts: [[1, "row"], [1, "col-lg-5", "col-12"], ["id", "basic-form-layouts"], [1, "row", "text-left"], [1, "col-sm-12"], [1, "content-header"], [1, "col-md-12", "mx-auto"], [1, "card"], [1, "card-content"], [1, "px-3"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-section"], [1, "col-md-12"], [1, "form-group"], ["for", "userinput1"], ["formControlName", "testName", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "question", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["formControlName", "answer", "type", "text", "id", "userinput1", "name", "name", 1, "form-control", "border-primary"], ["class", "form-actions", "style", "border: none; padding: 0; margin-top: 0px;", 4, "ngIf"], ["class", "form-actions left", 4, "ngIf"], ["class", "form-actions left d-flex justify-content-center", 4, "ngIf"], [1, "col-lg-7", "col-12"], ["id", "filter", 1, "mb-3"], [1, "col-12"], [1, "card-body", 2, "padding-top", "10px"], ["class", "test-placeholder", 4, "ngIf"], ["class", "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows", 4, "ngIf"], [1, "form-actions", 2, "border", "none", "padding", "0", "margin-top", "0px"], ["type", "submit", 1, "btn", "btn-raised", "btn-primary", 3, "disabled"], [1, "form-actions", "left"], ["type", "button", 1, "btn", "btn-raised", "btn-warning", "mr-1", 3, "click"], [1, "ft-x"], ["type", "button", 1, "btn", "btn-raised", "btn-primary", 3, "disabled", "click"], [1, "fa", "fa-check-square-o"], [1, "form-actions", "left", "d-flex", "justify-content-center"], [1, "test-placeholder"], ["src", "../../../../assets/img/test.svg", "alt", ""], [1, "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], [3, "width", "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Actions", "sortable", "false", "prop", "id", 3, "width"], ["ngx-datatable-cell-template", ""], [3, "width", "name", "prop"], ["data-original-title", "", "title", "", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["data-original-title", "", "title", "", 1, "danger", "p-0", 3, "click"], [1, "ft-x", "font-medium-3", "mr-2"]],
      template: function HrTestComponent_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HrTestComponent_Template_form_ngSubmit_12_listener($event) {
            return ctx.onSubmitQuestionsForm(ctx.questionsForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "HR Interview");

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Answer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, HrTestComponent_div_31_Template, 3, 1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, HrTestComponent_div_32_Template, 7, 1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HrTestComponent_div_33_Template, 7, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "List Of Questions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, HrTestComponent_div_45_Template, 4, 0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, HrTestComponent_ngx_datatable_46_Template, 6, 9, "ngx-datatable", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.questionsForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfQuestions.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.listOfQuestions.length >= 1);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableRowDetailDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"]],
      styles: [".ng-touched.ng-invalid[_ngcontent-%COMP%] {\n  border-color: #FF586B !important;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  min-height: auto !important;\n}\n\n.test-placeholder[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem 1rem;\n}\n\n.test-placeholder[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 35%;\n  margin-left: 36px;\n}\n\n.test-placeholder[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy90ZXN0LW1hbmFnbWVudC9oci10ZXN0L0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGJ1c2luZXNzLWNvbXBvbmVudHNcXHRlc3QtbWFuYWdtZW50XFxoci10ZXN0XFxoci10ZXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL3Rlc3QtbWFuYWdtZW50L2hyLXRlc3QvaHItdGVzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUNKO0FDQUE7O0FEQ0E7RUFDSSwyQkFBMkI7QUNFL0I7O0FEQUE7RUFDSSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FDR3RCOztBRExBO0VBSVEsVUFBVTtFQUNkLGlCQUFpQjtBQ0tyQjs7QURWQTtFQVFRLGdCQUFnQjtBQ014QiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvdGVzdC1tYW5hZ21lbnQvaHItdGVzdC9oci10ZXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXRvdWNoZWQubmctaW52YWxpZHtcclxuICAgIGJvcmRlci1jb2xvcjogI0ZGNTg2QiAhaW1wb3J0YW50XHJcbn1cclxudGV4dGFyZWF7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRlc3QtcGxhY2Vob2xkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDM1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzNnB4O1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG59IiwiLm5nLXRvdWNoZWQubmctaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI0ZGNTg2QiAhaW1wb3J0YW50O1xufVxuXG50ZXh0YXJlYSB7XG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLnRlc3QtcGxhY2Vob2xkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcbn1cblxuLnRlc3QtcGxhY2Vob2xkZXIgaW1nIHtcbiAgd2lkdGg6IDM1JTtcbiAgbWFyZ2luLWxlZnQ6IDM2cHg7XG59XG5cbi50ZXN0LXBsYWNlaG9sZGVyIHAge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrTestComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hr-test',
          templateUrl: './hr-test.component.html',
          styleUrls: ['./hr-test.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
        }, {
          type: _services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_5__["HrTestService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _services_test_services_hr_test_service__WEBPACK_IMPORTED_MODULE_5__["HrTestService"]
        }];
      }, {
        table: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/modules/components/test-managment-module/hr-test.module.ts":
  /*!************************************************************************!*\
    !*** ./src/modules/components/test-managment-module/hr-test.module.ts ***!
    \************************************************************************/

  /*! exports provided: HrTestModule */

  /***/
  function srcModulesComponentsTestManagmentModuleHrTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrTestModule", function () {
      return HrTestModule;
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


    var _app_business_components_test_managment_hr_test_hr_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/business-components/test-managment/hr-test/hr-test.component */
    "./src/app/business-components/test-managment/hr-test/hr-test.component.ts");
    /* harmony import */


    var _routing_test_managment_routing_hr_test_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../routing/test-managment-routing/hr-test-routing.module */
    "./src/routing/test-managment-routing/hr-test-routing.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @swimlane/ngx-datatable */
    "./node_modules/@swimlane/ngx-datatable/__ivy_ngcc__/fesm2015/swimlane-ngx-datatable.js");

    var HrTestModule = function HrTestModule() {
      _classCallCheck(this, HrTestModule);
    };

    HrTestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HrTestModule
    });
    HrTestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HrTestModule_Factory(t) {
        return new (t || HrTestModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_hr_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrTestRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrTestModule, {
        declarations: [_app_business_components_test_managment_hr_test_hr_test_component__WEBPACK_IMPORTED_MODULE_2__["HrTestComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_hr_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrTestRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrTestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_business_components_test_managment_hr_test_hr_test_component__WEBPACK_IMPORTED_MODULE_2__["HrTestComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_hr_test_routing_module__WEBPACK_IMPORTED_MODULE_3__["HrTestRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/test-managment-routing/hr-test-routing.module.ts":
  /*!**********************************************************************!*\
    !*** ./src/routing/test-managment-routing/hr-test-routing.module.ts ***!
    \**********************************************************************/

  /*! exports provided: HrTestRoutingModule */

  /***/
  function srcRoutingTestManagmentRoutingHrTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HrTestRoutingModule", function () {
      return HrTestRoutingModule;
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


    var _app_business_components_test_managment_hr_test_hr_test_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/business-components/test-managment/hr-test/hr-test.component */
    "./src/app/business-components/test-managment/hr-test/hr-test.component.ts");

    var routes = [{
      path: "",
      component: _app_business_components_test_managment_hr_test_hr_test_component__WEBPACK_IMPORTED_MODULE_2__["HrTestComponent"]
    }];

    var HrTestRoutingModule = function HrTestRoutingModule() {
      _classCallCheck(this, HrTestRoutingModule);
    };

    HrTestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: HrTestRoutingModule
    });
    HrTestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function HrTestRoutingModule_Factory(t) {
        return new (t || HrTestRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HrTestRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HrTestRoutingModule, [{
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
//# sourceMappingURL=modules-components-test-managment-module-hr-test-module-es5.js.map
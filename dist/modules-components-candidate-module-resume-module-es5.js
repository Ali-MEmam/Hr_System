function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-candidate-module-resume-module"], {
  /***/
  "./src/app/candidate-components/view-resume/education/education.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/candidate-components/view-resume/education/education.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: EducationComponent */

  /***/
  function srcAppCandidateComponentsViewResumeEducationEducationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EducationComponent", function () {
      return EducationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_candidate_education_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! services/candidate/education.service */
    "./src/services/candidate/education.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EducationComponent_a_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_a_7_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r202);

          var ctx_r201 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          return ctx_r201.open(_r198);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EducationComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "there is no data right now please add your info!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EducationComponent_ng_template_11_div_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_ng_template_11_div_10_div_4_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r211);

          var i_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r209.deleteEducationFormArray(i_r207);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EducationComponent_ng_template_11_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EducationComponent_ng_template_11_div_10_div_4_Template, 4, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "To Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Institute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r207 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r207);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r207 != 0);
      }
    }

    function EducationComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Education");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_ng_template_11_Template_button_click_3_listener($event) {
          var d_r204 = ctx.dismiss;
          return d_r204("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EducationComponent_ng_template_11_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r214);

          var ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r213.onSubmitEducation(ctx_r213.educationForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EducationComponent_ng_template_11_div_10_Template, 32, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_ng_template_11_Template_a_click_12_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r214);

          var ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r215.addNewEduForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Add More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_ng_template_11_Template_button_click_16_listener($event) {
          var d_r204 = ctx.dismiss;
          return d_r204("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r199.educationForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r199.educationForm.get("educations").controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r199.educationForm.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r199.educationForm.invalid);
      }
    }

    function EducationComponent_div_15_ng_template_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r224 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Education");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_15_ng_template_27_Template_button_click_3_listener($event) {
          var d_r221 = ctx.dismiss;
          return d_r221("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EducationComponent_div_15_ng_template_27_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

          var edu_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r223.onSubmitEduEdit(ctx_r223.eduEdit, edu_r217.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "date from");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "date from");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Institute");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_15_ng_template_27_Template_button_click_40_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r224);

          var edu_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r226 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r226.onDeleteEdu(edu_r217.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r219.eduEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r219.eduEdit.invalid);
      }
    }

    function EducationComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "ul", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_15_Template_li_click_20_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r229);

          var edu_r217 = ctx.$implicit;

          var ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r228.getEduId(edu_r217.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationComponent_div_15_Template_a_click_23_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r229);

          var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          var ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r230.open(_r218);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EducationComponent_div_15_ng_template_27_Template, 44, 2, "ng-template", null, 59, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var edu_r217 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r217.institute);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", edu_r217.title, " .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r217.date_from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r217.date_to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](edu_r217.description);
      }
    }

    var EducationComponent =
    /*#__PURE__*/
    function () {
      function EducationComponent(modalService, educationService, fb, http, toast) {
        _classCallCheck(this, EducationComponent);

        this.modalService = modalService;
        this.educationService = educationService;
        this.fb = fb;
        this.http = http;
        this.toast = toast;
        this.education = [];
        this.eduEditing = false;
      }

      _createClass(EducationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.educationForm = this.fb.group({
            educations: this.fb.array([this.createEduForm()])
          });
          this.eduEdit = this.fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateFrom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateTo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            institute: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          /****************** the real EndPoints **********************/

          /*    this.educationService.getAlleducationsForUser(this.candidateID)
             .subscribe(education=>{
               this.education=education
             })*/

          /********** the fake endpoints ******************/

          this.getAllEducation().subscribe(function (data) {
            _this.education = data;
          });
        }
      }, {
        key: "tokenTransform",
        value: function tokenTransform() {
          this.currentUserId = JSON.parse(atob(window.sessionStorage.getItem("token").split(".")[1])).sub;
        }
        /* test for getting and viewing fake data from http://localhost:3000/ */

      }, {
        key: "getAllEducation",
        value: function getAllEducation() {
          return this.http.get("http://localhost:3000/education");
        }
        /* on add more education  */
        // onAddEducation() {
        //   this.educationClicked = !this.educationClicked
        // }
        // cancelAddEducation() {
        //   this.educationClicked = false
        // }

        /**************            Cycle of AddEducation            **************/

        /* to create new form for user to add more education */

      }, {
        key: "createEduForm",
        value: function createEduForm() {
          return this.fb.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateFrom: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateTo: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            institute: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addNewEduForm",
        value: function addNewEduForm() {
          var addEducations = this.educationForm.get("educations");
          addEducations.push(this.createEduForm());
        }
        /* Submit new Education From */

      }, {
        key: "onSubmitEducation",
        value: function onSubmitEducation(form) {
          var _this2 = this;

          var _loop = function _loop(i) {
            var addedEducationObj = {
              date_from: form.value.educations[i].dateFrom,
              date_to: form.value.educations[i].dateTo,
              description: form.value.educations[i].description,
              institute: form.value.educations[i].institute,
              title: form.value.educations[i].title
            };

            _this2.addEducation(addedEducationObj).subscribe(function (data) {
              console.log(data);

              if (i + 1 === form.value.educations.length) {
                _this2.update();
              }

              _this2.toast.success("resume Updated successfully", "", {
                timeOut: 3000,
                positionClass: "toast-top-full-width",
                closeButton: true
              });
            });
          };

          for (var i = 0; i < form.value.educations.length; i++) {
            _loop(i);
          }

          this.educationForm = this.fb.group({
            educations: this.fb.array([this.createEduForm()])
          }); // this.educationClicked = false;
        }
        /* post for each object in educations formArray */

      }, {
        key: "addEducation",
        value: function addEducation(eduObj) {
          return this.http.post("http://localhost:3000/education", eduObj);
        }
      }, {
        key: "CancelAddEducation",
        value: function CancelAddEducation() {
          this.educationForm = this.fb.group({
            educations: this.fb.array([this.createEduForm()])
          }); // this.educationClicked = false;
        }
      }, {
        key: "deleteEducationFormArray",
        value: function deleteEducationFormArray(i) {
          var deleteSkills = this.educationForm.controls["educations"];
          deleteSkills.removeAt(i);

          if (this.educationForm.value.educations.length == 0) {// this.educationClicked = false;
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this3 = this;

          this.getAllEducation().subscribe(function (data) {
            //to listen in sidebar chart
            _this3.education = data;

            _this3.educationService.sidebarChart.next(0);
          });
        }
      }, {
        key: "onDeleteEdu",
        value: function onDeleteEdu(eduId) {
          var _this4 = this;

          this.deleteEdu(eduId).subscribe(function (data) {
            // console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: "Are you sure?",
              text: "You won't be able to revert this!",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, delete it!"
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire("Deleted!", "Your file has been deleted.", "success");

                _this4.update();

                _this4.modalService.dismissAll();
              }
            });
          });
        }
      }, {
        key: "deleteEdu",
        value: function deleteEdu(id) {
          return this.http["delete"]("http://localhost:3000/education/" + id);
        }
        /*  edit cycle for education   */

      }, {
        key: "cancelEditEdu",
        value: function cancelEditEdu() {
          this.eduEditing = false;
          this.eduEdit.reset();
        }
      }, {
        key: "getEduId",
        value: function getEduId(id) {
          this.eduId = id;
          this.eduEditing = true;
          var filtered = this.education.filter(function (item) {
            return item.id == id;
          });
          this.eduEdit.patchValue({
            title: filtered[0].title,
            dateFrom: filtered[0].date_from,
            dateTo: filtered[0].date_to,
            institute: filtered[0].institute,
            description: filtered[0].description
          });
        }
      }, {
        key: "onSubmitEduEdit",
        value: function onSubmitEduEdit(form, id) {
          var _this5 = this;

          console.log(form);
          var eduObj = {
            title: this.eduEdit.value.title,
            date_from: this.eduEdit.value.dateFrom,
            date_to: this.eduEdit.value.dateTo,
            institute: this.eduEdit.value.institute,
            description: this.eduEdit.value.description
          };
          this.http.patch("http://localhost:3000/education/" + id, eduObj).subscribe(function (data) {
            console.log(data);

            _this5.update();

            _this5.eduEdit.reset();

            _this5.eduEditing = false;

            _this5.toast.success("resume Updated successfully", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });

            _this5.modalService.dismissAll();
          }, function (err) {
            _this5.toast.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });
          });
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this6 = this;

          this.modalService.open(content, {
            size: "lg"
          }).result.then(function (result) {
            _this6.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this6.closeResult = "Dismissed ".concat(_this6.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return "by pressing ESC";
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return "by clicking on a backdrop";
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return EducationComponent;
    }();

    EducationComponent.ɵfac = function EducationComponent_Factory(t) {
      return new (t || EducationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    EducationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EducationComponent,
      selectors: [["app-education"]],
      decls: 16,
      vars: 3,
      consts: [[1, "education"], [1, "education_icon"], [1, "fa", "fa-graduation-cap"], [1, "education_content"], [1, "education_content_heading"], ["class", "education_content_add-icon", "title", "", 3, "click", 4, "ngIf"], ["class", "no-data-found-wrapper", 4, "ngIf"], [1, "card-content"], [1, "card-body", "p-1"], ["addMore", ""], [1, "edu-history-sec", "education_content_details"], ["class", "edu-history edu-design style2 education_content_details_info", 4, "ngFor", "ngForOf"], ["title", "", 1, "education_content_add-icon", 3, "click"], [1, "la", "la-plus"], [1, "no-data-found-wrapper"], [1, "no-data-found-wrapper_paragraph"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["formArrayName", "educations", "class", "resumeadd-form", 4, "ngFor", "ngForOf"], [1, "pt-4"], ["type", "button", 1, "add-more-btn", 3, "disabled", "click"], [1, "d-flex", "pt-4", "modal-btn-wrapper"], ["type", "button", "aria-label", "Close", 1, "btn", "close", 3, "click"], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"], ["formArrayName", "educations", 1, "resumeadd-form"], [1, "row", "align-items-start", 3, "formGroupName"], [1, "col-lg-12"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], [1, "form-group"], ["for", "dateFrom", 1, "form-control-label"], ["formControlName", "title", "type", "text"], [1, "col-lg-6"], [1, "form-control-label"], ["type", "Date", "formControlName", "dateFrom", "id", "educationDateEnd", "name", "educationDateEnd", 1, "dateInput"], [1, "la", "la-calendar", "pick"], ["type", "Date", "formControlName", "dateTo", "id", "educationDateEnd", "name", "educationDateEnd", 1, "dateInput"], ["formControlName", "institute", "type", "text"], ["formControlName", "description"], [1, "delete-more", "d-flex", "mt-3"], ["title", "", 1, "ml-auto", 3, "click"], [1, "la", "la-close"], [1, "edu-history", "edu-design", "style2", "education_content_details_info"], [1, "education_content_details_info_side-circle"], [1, "edu-history", "edu-design"], [1, "edu-hisinfo"], [1, "education_content_details_info_subtitle"], [1, "education_content_details_info_subtitle", "ml-3"], [1, "action_job"], [3, "click"], [1, "edit-popup", "education_content_details_info_action-popup"], ["title", "", 3, "click"], [1, "la", "la-pencil", "education_content_details_info_action-icon"], [1, "card-body"], ["edit", ""], [1, "edu-history"], [1, "row", "pt-4"], ["type", "button", 1, "btn", "close", 3, "click"]],
      template: function EducationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationComponent_a_7_Template, 2, 0, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EducationComponent_div_8_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationComponent_ng_template_11_Template, 20, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EducationComponent_div_15_Template, 29, 5, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.education.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.education[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n\n.education_icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4%;\n  vertical-align: top;\n  font-size: 20px;\n  color: #27bfc0;\n  position: relative;\n  top: 7px;\n}\n\n.education_content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n}\n\n.education_content_details[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.education_content_details_info_action-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.education_content_details_info_action-popup[_ngcontent-%COMP%] {\n  background-color: #27bfc0;\n  color: #ffffff;\n}\n\n.education_content_details_info_action-popup[_ngcontent-%COMP%]::before {\n  background-color: #27bfc0;\n}\n\n.education_content_details_info_side-circle[_ngcontent-%COMP%] {\n  border: 1.5px solid #9e9e9e !important;\n  font-size: 10px;\n}\n\n.education_content_details_info[_ngcontent-%COMP%]   .edu-hisinfo[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.education_content_details_info_subtitle[_ngcontent-%COMP%] {\n  color: #2a2a2a;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  float: none;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.education_content_details_info_subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.education_content_details_info_subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\n.education_content_details_info_subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  font-weight: normal;\n}\n\n.education_content_details_info_subtitle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n\n.education_content_details[_ngcontent-%COMP%]   .edu-history.style2[_ngcontent-%COMP%]::before {\n  background: #9e9e9e !important;\n  top: 16px;\n  width: 1.5px;\n  height: 100%;\n  left: 7.5px;\n}\n\n.education_content_heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  width: 96%;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.education_content_add-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: #707070;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-weight: 900;\n  color: #ffffff;\n  display: inline-block;\n  position: relative;\n}\n\n.education_content_add-icon[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.education_content_add-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0px;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.btns-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px;\n  color: white;\n}\n\n.btns-action_saveBtn[_ngcontent-%COMP%] {\n  background-color: #27bfc0;\n}\n\n.btns-action_deleteBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n}\n\n.edu-history[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvZWR1Y2F0aW9uL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9lZHVjYXRpb24vZWR1Y2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9lZHVjYXRpb24vRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvZWR1Y2F0aW9uL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGNhbmRpZGF0ZS1jb21wb25lbnRzXFx2aWV3LXJlc3VtZVxcZWR1Y2F0aW9uXFxlZHVjYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFXO0VBQ1gsY0FBYztBQ0RoQjs7QURJQTtFQUNFLG9DQUFrRDtFQUNsRCw0QkFBOEI7RUFDOUIsb0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUNEbkI7O0FESUE7RUFDRSxrQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGdCQUF3QjtFQUN4QixZQUFzQjtBQ0R4Qjs7QURJQTs7RUFFRSwrQkFBb0M7RUFBcEMsd0JBQW9DO0VBQ3BDLHlCQUEyQjtVQUEzQixtQkFBMkI7RUFDM0IsV0FBeUI7RUFDekIsV0FBeUI7RUFDekIsa0NBQXdDO0VBQ3hDLGVBQTJCO0VBQzNCLGtCQUE2QjtFQUM3QixlQUF3QjtFQUN4QixnQkFBc0I7RUFH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QUFvQjtFQUNwQixnQkFBb0I7RUFDcEIsWUFBb0I7RUFDcEIsY0R6UWE7RUMwUWIsZUFBb0I7RUFDcEIsV0FBb0I7RUFDcEIsa0JBQXdCO0VBQ3hCLFNBQW9CO0VBQ3BCLFVBQW1CO0FGc2J2Qjs7QUUvYkE7RUFZUSxpQkFBaUI7RUFDakIsZUFBb0I7QUZ1YjVCOztBRWxiQTtFQUNJLG1CQUFtQjtFQUNuQixlQUFzQjtBRnFiMUI7O0FBRUE7RUVsYkksVUFBVztFQUNYLGtCQUFrQjtFQUNsQixTQUFjO0VBQ2QsVUFBYTtFQUNiLFdBQWM7RUFDZCxlQUFpQjtBRm9ickI7O0FFL2FBO0VBRVEsV0FBVztFQUNYLFlBQWE7QUZpYnJCOztBRTlhSTtFQUNJLHlCRC9TUztBRGd1QmpCOztBRTlhSTtFQUNJLHlCRGxUTztBRG11QmY7O0FFN2FBO0VBQ0ksbUJBQW1CO0FGZ2J2Qjs7QUU3YUE7RUFDSSxlQUFjO0FGZ2JsQiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL3ZpZXctcmVzdW1lL2VkdWNhdGlvbi9lZHVjYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aCA6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKCdhc3NldHMvaW1nL1BhdHRlcm4uc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMjJweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvdmVyZmxvdyAgICAgICAgOiBoaWRkZW47XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogYXV0bztcclxufVxyXG5cclxuLm1haW4tdGl0bGUsXHJcbi5ib3JkZXItdGl0bGUge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IHNvbGlkIDAuNXB4ICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogMTVweCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICBtYXJnaW4tYm90dG9tICAgICAgOiAwO1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG4gIC8vIHotaW5kZXggICAgICAgICA6IDk5O1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQgIDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5ICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXNpemUgICAgIDogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgY29sb3IgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy10b3AgICA6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b20gOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5qb2ItaXMuZnQge1xyXG4gICAgbWFyZ2luICAgICAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgJisudGFicy13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoICA6IDkwJTtcclxuICBtYXJnaW4gOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0ICA6IG5vbmU7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG4udGFicy13cmFwcGVyIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiAxcHggc29saWQgI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiA1cHggMCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogJHN0ZWVsO1xyXG5cclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuICAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1pbmRpZ287XHJcbiAgICBiYWNrZ3JvdW5kICAgICAgOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudCAgIDogJyc7XHJcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcclxuICAgIHdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgIDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDIuNTtcclxuICAgICAgICBwYWRkaW5nICAgICA6IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGlucHV0cyBzdHlsZVxyXG5cclxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB0ZXh0LWFsaWduICAgICAgOiBsZWZ0O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweCAxMHB4O1xyXG4gIC8vIGJvcmRlci1sZWZ0ICA6IDJweCBzb2xpZCAgJGJvcmRlci1jb2xvcjtcclxuICBiYWNrZ3JvdW5kICAgICAgOiAjZmZmO1xyXG4gIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDEwcHg7XHJcblxyXG4gICY6Zm9jdXMtd2l0aGluIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRlYWxpc2g7XHJcbiAgICB0cmFuc2l0aW9uIDogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdCA6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodCAgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2ggOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgOiAxLjMxO1xyXG4gICAgZm9udC13ZWlnaHQgIDogNTAwO1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5ICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuXHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0ICAgOiAxMHB4O1xyXG4gICAgYm90dG9tICA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCAsIHRleHRhcmVhICwgc2VsZWN0IHtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbSAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDAgNHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxM3B4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gIG1hcmdpbiAgICAgICAgOiAtNXB4IDAgMzBweDtcclxuICBjb2xvciAgICAgICAgIDogZ3JleTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5ICAgICAgIDogYmxvY2s7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcclxuICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbn1cclxuXHJcbi5zZWxlY3QtdXNlci10YWJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtdHdvO1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQgICAgICAgICAgICAgICAgOiBub25lO1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDJweCBzb2xpZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1cyAgICA6IDVweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgICBjdXJzb3IgICAgICAgICAgICAgICA6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemUgICAgICAgICAgICA6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseSAgICAgICAgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc3RyZXRjaCAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgICAgICA6IDEuMzY7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgICAgICA6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ24gICAgICAgICAgIDogbGVmdDtcclxuICAgIGNvbG9yICAgICAgICAgICAgICAgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICBwYWRkaW5nICAgICAgICAgICAgICA6IDVweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvciAgOiAkYm9yZGVyLWNvbG9yO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLmZhLWV5ZS1zbGFzaDpob3ZlcixcclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZCAgICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgY29sb3IgICAgICAgICA6ICR0ZWFsaXNoO1xyXG4gIGZvbnQtc2l6ZSAgICAgOiAxOHB4O1xyXG4gIHdpZHRoICAgICAgICAgOiA0MHB4O1xyXG4gIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDE2cHg7XHJcbiAgcmlnaHQgICAgICAgICA6IDVweDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yICAgICA6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmRhdGVJbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBjdXJzb3IgICAgICAgOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3AgICAgIDogMTZweDtcclxuICByaWdodCAgIDogNXB4O1xyXG4gIHdpZHRoICAgOiA0MHB4O1xyXG4gIGN1cnNvciAgOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAubGEubGEtcGx1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzAwOURBMDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDYwMDtcclxuICB9XHJcblxyXG4gIC5hZGQtbW9yZS1idG4ge1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwOURBMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDE0cHg7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgIzAwOURBMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIG1hcmdpbiAgICAgIDogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduICA6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5IDogU2Vnb2VVSTtcclxuICAgIGZvbnQtc2l6ZSAgIDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0IDogMS41O1xyXG4gICAgY29sb3IgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgfVxyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luIDogMDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGggICAgICAgICAgOiAxMDAlO1xyXG4gIC8vIHBhZGRpbmc6IDAgMTVweDtcclxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nICAgICAgIDogOHB4IDIwcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTtcclxuICAgIGhlaWdodCAgICAgICAgOiBhdXRvO1xyXG4gICAgZm9udC1zaXplICAgICA6IDE0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAmLnNhdmVCdG4ge1xyXG4gICAgICBib3JkZXItY29sb3IgICAgOiAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2xvc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyICAgIDoxcHggc29saWQgJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VtZWFkZC1mb3JtIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hZGRNb3JlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICAgICA6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yICAgICAgICAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAvLyBjb2xvcjogIzAwOURBMCAgO1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgIDogNHB4IDE1cHggNHB4IDhweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQgICAgICAgICAgOiA2MDA7XHJcbn1cclxuXHJcbi5zYXZlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yICAgICAgICAgICA6IHdoaXRlXHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0J0biB7XHJcbiAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy10b3A6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG4gICZfY3JlYXRlLW5ld3tcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLmJ0bi5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBib3JkZXItY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaXMtaW52YWxpZHtcclxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXF1aXJlZC1lcnJvcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OjUlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZW1wbHktbGlzdHtcclxuICAmOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi50YWItY29udGVudHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZy9QYXR0ZXJuLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMjJweDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbi10aXRsZSxcbi5ib3JkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2VkZWZmNztcbiAgcGFkZGluZzogMTVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi10aXRsZSBoMyxcbi5ib3JkZXItdGl0bGUgaDMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5LFxuLmJvcmRlci10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5qb2ItaXMuZnQsXG4uYm9yZGVyLXRpdGxlIC5qb2ItaXMuZnQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubWFpbi10aXRsZSArIC50YWJzLXdyYXBwZXIsXG4uYm9yZGVyLXRpdGxlICsgLnRhYnMtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogODBweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLnRhYnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWZmNztcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjODg4Nzk1O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjFiNDY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzBiMWI0NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNlNTlhMTI7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIGEge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzI3YmZjMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tZ3JvdXAgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuLmZvcm0tZ3JvdXAgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsIC5mb3JtLWdyb3VwIHRleHRhcmVhLCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHQge1xuICBtYXJnaW46IC01cHggMCAzMHB4O1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zNjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjYWNhY2E7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxuLmZhLWV5ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ucGljazo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVJbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC5sYS5sYS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbC1ib2R5IC5hZGQtbW9yZS1idG4ge1xuICBjb2xvcjogIzAwOURBMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbn1cblxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZVVJO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMGIxYjQ2O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLnNhdmVCdG4ge1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLmNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTI7XG4gIGNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYm9keSBmb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnJlc3VtZWFkZC1mb3JtIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRNb3JlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweCAxNXB4IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNhdmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja0J0biB7XG4gIGNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEycmVtO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJfY3JlYXRlLW5ldyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1aXJlZC1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lbXBseS1saXN0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVscC1ibG9jayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmVkdWNhdGlvbiB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmVkdWNhdGlvbl9pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG59XG5cbi5lZHVjYXRpb25fY29udGVudCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDkwJTtcbn1cblxuLmVkdWNhdGlvbl9jb250ZW50X2RldGFpbHMge1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfZGV0YWlsc19pbmZvX2FjdGlvbi1pY29uIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9kZXRhaWxzX2luZm9fYWN0aW9uLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9kZXRhaWxzX2luZm9fYWN0aW9uLXBvcHVwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwO1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfZGV0YWlsc19pbmZvX3NpZGUtY2lyY2xlIHtcbiAgYm9yZGVyOiAxLjVweCBzb2xpZCAjOWU5ZTllICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVkdWNhdGlvbl9jb250ZW50X2RldGFpbHNfaW5mbyAuZWR1LWhpc2luZm8ge1xuICB3aWR0aDogNTAlO1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9kZXRhaWxzX2luZm9fc3VidGl0bGUgaDQge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9kZXRhaWxzX2luZm9fc3VidGl0bGUgaDQgc3BhbiB7XG4gIG1hcmdpbjogM3B4O1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIHAge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIHVsIHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cblxuLmVkdWNhdGlvbl9jb250ZW50X2RldGFpbHMgLmVkdS1oaXN0b3J5LnN0eWxlMjo6YmVmb3JlIHtcbiAgYmFja2dyb3VuZDogIzllOWU5ZSAhaW1wb3J0YW50O1xuICB0b3A6IDE2cHg7XG4gIHdpZHRoOiAxLjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA3LjVweDtcbn1cblxuLmVkdWNhdGlvbl9jb250ZW50X2hlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDk2JTtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9hZGQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5lZHVjYXRpb25fY29udGVudF9hZGQtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uZWR1Y2F0aW9uX2NvbnRlbnRfYWRkLWljb24gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogLTVweCAwIDMwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzllOWU5ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbi5mYS1leWUtc2xhc2g6aG92ZXIsXG4uZmEtZXllOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGljayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idG5zLWFjdGlvbiBidXR0b24ge1xuICBtYXJnaW46IDVweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYnRucy1hY3Rpb25fc2F2ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzA7XG59XG5cbi5idG5zLWFjdGlvbl9kZWxldGVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xufVxuXG4uZWR1LWhpc3Rvcnkge1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG4iLCIkbGlnaHQtZ3JleTogI2ZhZmFmYTtcclxuJHdhcm0tZ3JleSA6IzcwNzA3MDtcclxuJHdoaXRlOiNmZmZmZmY7XHJcbiR3YXJtLWdyZXktdHdvOiAjOWU5ZTllO1xyXG4kZGFyay1pbmRpZ28gOiAjMGIxYjQ2O1xyXG4kd2hpdGUtdHdvOiNlZmVmZWY7XHJcbiR0ZWFsaXNoIDojMjdiZmMwO1xyXG4kb3JhbmdlOiNlNTlhMTI7XHJcbiRib3JkZXItY29sb3I6I2NhY2FjYTtcclxuJGR1c2s6IzU0NWY3ZDtcclxuJGJsYWNrOiMyYTJhMmE7XHJcbiRzdGVlbDogIzg4ODc5NTtcclxuJHdoaXRlLWZvdXI6I2ZlZmVmZTtcclxuJHBhbGUtZ3JleTojZjNmNGY5OyIsIkBpbXBvcnQgXCIuLi8uLi8uLi8uLi92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uLy4uL2dlbmVyYWxcIjtcclxuXHJcbi5lZHVjYXRpb24ge1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgJl9pY29uIHtcclxuICAgICAgICBkaXNwbGF5ICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgOiA0JTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICAgICAgICBwb3NpdGlvbiAgICAgIDogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wICAgICAgICAgICA6IDdweDtcclxuICAgIH1cclxuXHJcbiAgICAmX2NvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB3aWR0aCAgOiA5MCU7XHJcblxyXG4gICAgICAgICZfZGV0YWlscyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcblxyXG4gICAgICAgICAgICAmX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgJl9hY3Rpb24taWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICZfYWN0aW9uLXBvcHVwIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiAkd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmX3NpZGUtY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXIgICA6IDEuNXB4IHNvbGlkICR3YXJtLWdyZXktdHdvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5lZHUtaGlzaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmX3N1YnRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgIDogJGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAgICAgOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbiAgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmcgICAgICAgOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0ICAgICAgICAgOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5ICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGg0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luIDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBkaXNjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmVkdS1oaXN0b3J5LnN0eWxlMjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICR3YXJtLWdyZXktdHdvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgOiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgIDogMS41cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGVmdCAgICAgIDogNy41cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfaGVhZGluZyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAxOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5ICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aCAgICAgIDogOTYlO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9hZGQtaWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IDE4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJtLWdyZXk7XHJcbiAgICAgICAgICAgIHdpZHRoICAgICAgICAgICA6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgICAgICA6IDI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDUwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQgICAgIDogOTAwO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIGxlZnQgICAgIDogNTAlO1xyXG4gICAgICAgICAgICAgICAgdG9wICAgICAgOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi8vIGlucHV0cyBzdHlsZVxyXG5cclxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSAgIDogMDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDVweCAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLWxlZnQgIDogMnB4IHNvbGlkICAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAxMHB4O1xyXG5cclxuICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgICAgIHRyYW5zaXRpb24gOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0IDogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICA6IDEzcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaCA6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgIDogMS4zMTtcclxuICAgICAgICBmb250LXdlaWdodCAgOiA1MDA7XHJcbiAgICAgICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuICAgICAgICBmb250LWZhbWlseSAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQge1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICA6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luICAgICAgICAgIDogMCA0cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IDEzcHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuXHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICAgIG1hcmdpbiAgICAgICAgOiAtNXB4IDAgMzBweDtcclxuICAgIGNvbG9yICAgICAgICAgOiBncmV5O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSB0ZXh0YXJlYSB7XHJcbiAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXkgICAgICAgOiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbn1cclxuXHJcbi5zZWxlY3QtdXNlci10YWJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10d287XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiA1cHg7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQgICAgICAgICAgICAgICAgOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNXB4O1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgICAgIGN1cnNvciAgICAgICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemUgICAgICAgICAgICA6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zdHJldGNoICAgICAgICAgOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgICAgICAgICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nICAgICAgIDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ24gICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJi5hY3RpdmUge1xyXG4gICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodCAgICAgOiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgICBjb2xvciAgOiAkYm9yZGVyLWNvbG9yO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gICAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLmZhLWV5ZS1zbGFzaDpob3ZlcixcclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZCAgICA6ICNmZmY7XHJcbiAgICBib3JkZXIgICAgICAgIDogbm9uZTtcclxuICAgIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAxOHB4O1xyXG4gICAgd2lkdGggICAgICAgICA6IDQwcHg7XHJcbiAgICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgICB0b3AgICAgICAgICAgIDogMTZweDtcclxuICAgIHJpZ2h0ICAgICAgICAgOiA1cHg7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBvcGFjaXR5IDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcCAgICAgOiAxNnB4O1xyXG4gICAgcmlnaHQgICA6IDVweDtcclxuICAgIHdpZHRoICAgOiA0MHB4O1xyXG4gICAgY3Vyc29yICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4vLyBidG5zXHJcbi5idG5zLWFjdGlvbiB7XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGNvbG9yIDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgJl9zYXZlQnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaDtcclxuICAgIH1cclxuXHJcbiAgICAmX2RlbGV0ZUJ0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZVxyXG4gICAgfVxyXG59XHJcblxyXG4uZWR1LWhpc3Rvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxufVxyXG5cclxuLm1vZGFsLWJ0bi13cmFwcGVye1xyXG4gICAgcGFkZGluZzowIDEwcHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-education",
          templateUrl: "./education.component.html",
          styleUrls: ["./education.component.scss"]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: services_candidate_education_service__WEBPACK_IMPORTED_MODULE_1__["EducationService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/view-resume/experience/experience.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/candidate-components/view-resume/experience/experience.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ExperienceComponent */

  /***/
  function srcAppCandidateComponentsViewResumeExperienceExperienceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExperienceComponent", function () {
      return ExperienceComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_candidate_experience_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! services/candidate/experience.service */
    "./src/services/candidate/experience.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! services/candidate/skills.service */
    "./src/services/candidate/skills.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ExperienceComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "there is no data right now please add your info!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExperienceComponent_ng_template_12_div_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_12_div_10_div_4_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r247);

          var i_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r245.deleteEducationFormArray(i_r243);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExperienceComponent_ng_template_12_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_ng_template_12_div_10_div_4_Template, 4, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Title ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "To Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " company_name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r243 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r243);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r243 != 0);
      }
    }

    function ExperienceComponent_ng_template_12_Template(rf, ctx) {
      if (rf & 1) {
        var _r250 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Work Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_12_Template_button_click_3_listener($event) {
          var d_r240 = ctx.dismiss;
          return d_r240("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExperienceComponent_ng_template_12_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250);

          var ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r249.onSubmitExp(ctx_r249.experienceForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_ng_template_12_div_10_Template, 32, 2, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_12_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r250);

          var ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r251.addNewExpForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_12_Template_button_click_15_listener($event) {
          var d_r240 = ctx.dismiss;
          return d_r240("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r233.experienceForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r233.experienceForm.get("experiences").controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r233.experienceForm.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r233.experienceForm.invalid);
      }
    }

    function ExperienceComponent_div_15_div_1_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_15_div_1_ng_template_28_Template_button_click_3_listener($event) {
          var d_r258 = ctx.dismiss;
          return d_r258("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExperienceComponent_div_15_div_1_ng_template_28_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          var exp_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r260.onSubmitExpEdit(ctx_r260.expEdit, exp_r254.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Title ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " date from ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " date to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Company Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_15_div_1_ng_template_28_Template_button_click_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          var exp_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r263.onDeleteExp(exp_r254.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r256.expEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r256.expEdit.invalid);
      }
    }

    function ExperienceComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_15_div_1_Template_li_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266);

          var exp_r254 = ctx.$implicit;

          var ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r265.getExpId(exp_r254.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_15_div_1_Template_a_click_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r266);

          var _r255 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r267.open(_r255);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExperienceComponent_div_15_div_1_ng_template_28_Template, 43, 2, "ng-template", null, 61, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var exp_r254 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", exp_r254.company_name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", exp_r254.title, " .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r254.date_from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r254.date_to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](exp_r254.description);
      }
    }

    function ExperienceComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_15_div_1_Template, 30, 5, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r234.experience);
      }
    }

    function ExperienceComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "there is no data right now please add your info!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExperienceComponent_ng_template_28_div_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r276 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_28_div_10_div_4_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r276);

          var i_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r274.deleteVolExpFormArray(i_r272);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ExperienceComponent_ng_template_28_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExperienceComponent_ng_template_28_div_10_div_4_Template, 4, 0, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "To Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Organization");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "textarea", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r272 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r272);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r272 != 0);
      }
    }

    function ExperienceComponent_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Volunteer experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_28_Template_button_click_3_listener($event) {
          var d_r269 = ctx.dismiss;
          return d_r269("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExperienceComponent_ng_template_28_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

          var ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r278.onSubmitvolExp(ctx_r278.volExperienceForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ExperienceComponent_ng_template_28_div_10_Template, 32, 2, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_28_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r279);

          var ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r280.addNewVolExpForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_ng_template_28_Template_button_click_15_listener($event) {
          var d_r269 = ctx.dismiss;
          return d_r269("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r237.volExperienceForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r237.volExperienceForm.get("volunteer").controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r237.volExperienceForm.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r237.volExperienceForm.invalid);
      }
    }

    function ExperienceComponent_div_31_div_1_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        var _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Volunteering Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_31_div_1_ng_template_28_Template_button_click_3_listener($event) {
          var d_r287 = ctx.dismiss;
          return d_r287("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ExperienceComponent_div_31_div_1_ng_template_28_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290);

          var volExp_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r289.onSubmitVolExpEdit(ctx_r289.volExpEdit, volExp_r283.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "date from");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "date to");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " organization Name ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Description ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "textarea", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_31_div_1_ng_template_28_Template_button_click_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r290);

          var volExp_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r292 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r292.onDeleteVolExp(volExp_r283.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r285.volExpEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r285.volExpEdit.invalid);
      }
    }

    function ExperienceComponent_div_31_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r295 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " - ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_31_div_1_Template_li_click_21_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r295);

          var volExp_r283 = ctx.$implicit;

          var ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r294.getvolExpId(volExp_r283.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_div_31_div_1_Template_a_click_24_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r295);

          var _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

          var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r296.open(_r284);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExperienceComponent_div_31_div_1_ng_template_28_Template, 43, 2, "ng-template", null, 70, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var volExp_r283 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", volExp_r283.organization_name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", volExp_r283.title, " .");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volExp_r283.date_from);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volExp_r283.date_to);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](volExp_r283.description);
      }
    }

    function ExperienceComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExperienceComponent_div_31_div_1_Template, 30, 5, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r238.volunteer);
      }
    }

    var ExperienceComponent =
    /*#__PURE__*/
    function () {
      function ExperienceComponent(modalService, experienceService, fb, http, skillsService, toast) {
        _classCallCheck(this, ExperienceComponent);

        this.modalService = modalService;
        this.experienceService = experienceService;
        this.fb = fb;
        this.http = http;
        this.skillsService = skillsService;
        this.toast = toast;
        this.experience = [];
        this.volunteer = [];
        this.experienceClicked = false;
        this.expEditing = false;
        this.volExpEditing = false;
      }

      _createClass(ExperienceComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          /*****************  FormGroup *****************/
          this.experienceForm = this.fb.group({
            experiences: this.fb.array([this.createExpForm()])
          });
          this.volExperienceForm = this.fb.group({
            volunteer: this.fb.array([this.createVolExpForm()])
          });
          this.expEdit = this.fb.group({
            dateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.volExpEdit = this.fb.group({
            date_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organization_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.getAllExp().subscribe(function (data) {
            _this7.experience = data;
          });
          this.getAllVolunteer().subscribe(function (data) {
            _this7.volunteer = data;
          });
        }
      }, {
        key: "getAllExp",
        value: function getAllExp() {
          return this.http.get('http://localhost:3000/experience');
        }
        /**************            Cycle of Add Experience            **************/

      }, {
        key: "createExpForm",
        value: function createExpForm() {
          return this.fb.group({
            dateFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            company_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addNewExpForm",
        value: function addNewExpForm() {
          var addExps = this.experienceForm.get('experiences');
          addExps.push(this.createExpForm());
        }
      }, {
        key: "onSubmitExp",
        value: function onSubmitExp(form) {
          var _this8 = this;

          console.log(form);

          var _loop2 = function _loop2(i) {
            var addedExpObj = {
              date_from: form.value.experiences[i].dateFrom,
              date_to: form.value.experiences[i].dateTo,
              description: form.value.experiences[i].description,
              company_name: form.value.experiences[i].company_name,
              title: form.value.experiences[i].title
            };

            _this8.addExp(addedExpObj).subscribe(function (data) {
              // console.log(data);
              if (i + 1 === form.value.experiences.length) {
                _this8.update();
              }

              _this8.toast.success("resume Updated successfully", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
              });

              _this8.modalService.dismissAll();

              _this8.update();
            });
          };

          for (var i = 0; i < form.value.experiences.length; i++) {
            _loop2(i);
          }

          this.experienceForm = this.fb.group({
            experiences: this.fb.array([this.createExpForm()])
          });
          this.experienceClicked = false;
        }
      }, {
        key: "addExp",
        value: function addExp(expObj) {
          return this.http.post('http://localhost:3000/experience', expObj);
        }
      }, {
        key: "canacelAddExp",
        value: function canacelAddExp() {
          this.experienceForm = this.fb.group({
            experiences: this.fb.array([this.createExpForm()])
          });
          this.experienceClicked = false;
        }
      }, {
        key: "deleteExpFormArray",
        value: function deleteExpFormArray(i) {
          var deleteExp = this.experienceForm.controls["experiences"];
          deleteExp.removeAt(i);

          if (this.experienceForm.value.experiences.length == 0) {
            this.experienceClicked = false;
          }
        }
      }, {
        key: "update",
        value: function update() {
          var _this9 = this;

          this.getAllExp().subscribe(function (data) {
            //to listen in sidebar chart
            _this9.experience = data;

            _this9.experienceService.sidebarChart.next(0);
          });
          this.getAllVolunteer().subscribe(function (data) {
            _this9.volunteer = data;

            _this9.experienceService.sidebarChart.next(0);
          });
        }
      }, {
        key: "onDeleteExp",
        value: function onDeleteExp(Id) {
          var _this10 = this;

          this.deleteExp(Id).subscribe(function (data) {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

                _this10.modalService.dismissAll();

                _this10.update();
              }
            });
          });
        }
      }, {
        key: "deleteExp",
        value: function deleteExp(id) {
          return this.http["delete"]('http://localhost:3000/experience/' + id);
        }
        /*  edit cycle for experiance   */

      }, {
        key: "cancelEditExp",
        value: function cancelEditExp() {
          this.expEditing = false;
          this.expEdit.reset();
        }
      }, {
        key: "getExpId",
        value: function getExpId(id) {
          this.expId = id;
          this.expEditing = true;
          var filtered = this.experience.filter(function (item) {
            return item.id == id;
          });
          this.expEdit.patchValue({
            title: filtered[0].title,
            dateFrom: filtered[0].date_from,
            dateTo: filtered[0].date_to,
            company_name: filtered[0].company_name,
            description: filtered[0].description
          });
        }
      }, {
        key: "onSubmitExpEdit",
        value: function onSubmitExpEdit(form, id) {
          var _this11 = this;

          console.log(form);
          var expObj = {
            title: this.expEdit.value.title,
            date_from: this.expEdit.value.dateFrom,
            date_to: this.expEdit.value.dateTo,
            company_name: this.expEdit.value.company_name,
            description: this.expEdit.value.description
          };
          this.http.patch('http://localhost:3000/experience/' + id, expObj).subscribe(function (data) {
            _this11.update();

            _this11.expEdit.reset();

            _this11.expEditing = false;

            _this11.toast.success("Experience Updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this11.modalService.dismissAll();

            _this11.update();
          }, function (err) {
            _this11.toast.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });
          });
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this12 = this;

          this.modalService.open(content, {
            size: 'lg'
          }).result.then(function (result) {
            _this12.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this12.closeResult = "Dismissed ".concat(_this12.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation end                            */

        /* -------------------------------------------------------------------------- */

        /* -------------------------------------------------------------------------- */

        /*                         start volunteer experience                         */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "getAllVolunteer",
        value: function getAllVolunteer() {
          return this.http.get('http://localhost:3000/volunteer');
        }
      }, {
        key: "cancelvolExp",
        value: function cancelvolExp() {
          this.volExpEditing = false;
          this.volExpEdit.reset();
        }
      }, {
        key: "getvolExpId",
        value: function getvolExpId(id) {
          this.volExpId = id;
          this.volExpEditing = true;
          var filtered = this.volunteer.filter(function (item) {
            return item.id == id;
          });
          this.volExpEdit.patchValue({
            title: filtered[0].title,
            date_from: filtered[0].date_from,
            date_to: filtered[0].date_to,
            organization_name: filtered[0].organization_name,
            description: filtered[0].description
          });
          console.log(filtered);
        }
      }, {
        key: "onSubmitVolExpEdit",
        value: function onSubmitVolExpEdit(form, id) {
          var _this13 = this;

          console.log(form);
          console.log(this.expEdit.value.title);
          var volExpObj = {
            title: this.volExpEdit.value.title,
            date_from: this.volExpEdit.value.date_from,
            date_to: this.volExpEdit.value.date_to,
            organization_name: this.volExpEdit.value.organization_name,
            description: this.volExpEdit.value.description
          };
          this.http.patch('http://localhost:3000/volunteer/' + id, volExpObj).subscribe(function (data) {
            _this13.toast.success("Experience Updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this13.modalService.dismissAll();

            _this13.update();

            _this13.volExpEdit.reset();
          }, function (err) {
            _this13.toast.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });
          });
        }
      }, {
        key: "onDeleteVolExp",
        value: function onDeleteVolExp(id) {
          var _this14 = this;

          this.deleteVolExp(id).subscribe(function (data) {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

                _this14.update();

                _this14.modalService.dismissAll();
              }
            });
          });
        }
      }, {
        key: "deleteVolExp",
        value: function deleteVolExp(id) {
          return this.http["delete"]('http://localhost:3000/volunteer/' + id);
        }
      }, {
        key: "createVolExpForm",
        value: function createVolExpForm() {
          return this.fb.group({
            date_from: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            date_to: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            organization_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "addNewVolExpForm",
        value: function addNewVolExpForm() {
          var addExps = this.volExperienceForm.get('volunteer');
          addExps.push(this.createVolExpForm());
        }
      }, {
        key: "addVolExp",
        value: function addVolExp(volExpObj) {
          return this.http.post('http://localhost:3000/volunteer', volExpObj);
        }
      }, {
        key: "canacelVolAddExp",
        value: function canacelVolAddExp() {
          this.experienceForm = this.fb.group({
            volunteer: this.fb.array([this.createVolExpForm()])
          });
          this.modalService.dismissAll();
        }
      }, {
        key: "onSubmitvolExp",
        value: function onSubmitvolExp(form) {
          var _this15 = this;

          console.log(form);

          var _loop3 = function _loop3(i) {
            var volExpObj = {
              date_from: form.value.volunteer[i].date_from,
              date_to: form.value.volunteer[i].date_to,
              description: form.value.volunteer[i].description,
              organization_name: form.value.volunteer[i].organization_name,
              title: form.value.volunteer[i].title
            };

            _this15.addVolExp(volExpObj).subscribe(function (data) {
              // console.log(data);
              if (i + 1 === form.value.volunteer.length) {
                _this15.update();
              }

              _this15.toast.success("Resume Updated successfully", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
              });

              _this15.modalService.dismissAll();
            });
          };

          for (var i = 0; i < form.value.volunteer.length; i++) {
            _loop3(i);
          }

          this.volExperienceForm = this.fb.group({
            volunteer: this.fb.array([this.createVolExpForm()])
          });
        }
      }, {
        key: "deleteVolExpFormArray",
        value: function deleteVolExpFormArray(i) {
          var deleteVolExp = this.volExperienceForm.controls["volunteer"];
          deleteVolExp.removeAt(i);

          if (this.volExperienceForm.value.volunteer.length == 0) {}
        }
      }]);

      return ExperienceComponent;
    }();

    ExperienceComponent.ɵfac = function ExperienceComponent_Factory(t) {
      return new (t || ExperienceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_7__["SkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    ExperienceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ExperienceComponent,
      selectors: [["app-experience"]],
      decls: 32,
      vars: 4,
      consts: [[1, "experience"], [1, "experience_icon"], [1, "fa", "fa-briefcase"], [1, "experience_content"], [1, "experience_content_heading"], ["title", "", 1, "experience_content_add-icon", 3, "click"], [1, "la", "la-plus"], ["class", "no-data-found-wrapper", 4, "ngIf"], [1, "card-content"], [1, "card-body", "p-1"], ["addMore", ""], [1, "edu-history-sec", "experience_content_details"], [4, "ngIf"], [1, "fa", "fa-hands-helping"], ["addMoreVol", ""], [1, "no-data-found-wrapper"], [1, "no-data-found-wrapper_paragraph"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], ["formArrayName", "experiences", "class", "resumeadd-form", 4, "ngFor", "ngForOf"], ["type", "button", 1, "add-more-btn", 3, "disabled", "click"], [1, "d-flex", "pt-4", "modal-btn-wrapper"], ["type", "button", "aria-label", "Close", 1, "btn", "close", 3, "click"], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"], ["formArrayName", "experiences", 1, "resumeadd-form"], [1, "row", "align-items-start", 3, "formGroupName"], [1, "col-lg-12"], [1, "row"], ["class", "col-lg-12", 4, "ngIf"], [1, "form-group"], ["for", "dateFrom", 1, "form-control-label"], ["formControlName", "title", "type", "text"], [1, "col-lg-6"], [1, "form-control-label"], ["type", "Date", "formControlName", "dateFrom", "id", "experienceDateEnd", "name", "experienceDateEnd", 1, "dateInput"], [1, "la", "la-calendar", "pick"], ["type", "Date", "formControlName", "dateTo", "id", "experienceDateEnd", "name", "experienceDateEnd", 1, "dateInput"], ["for", "company_name", 1, "form-control-label"], ["formControlName", "company_name", "type", "text"], ["formControlName", "description"], [1, "delete-more", "d-flex", "mt-3"], ["title", "", 1, "ml-auto", 3, "click"], [1, "la", "la-close"], ["class", "edu-history edu-design experience_content_details_info", 4, "ngFor", "ngForOf"], [1, "edu-history", "edu-design", "experience_content_details_info"], [1, "experience_content_details_list"], [1, "edu-history", "edu-design"], [1, "edu-hisinfo"], [1, "experience_content_details_info_subtitle"], [1, "experience_content_details_info_subtitle", "ml-3"], [1, "action_job"], [3, "click"], [1, "edit-popup", "experience_content_details_info_action-popup"], ["title", "", 3, "click"], [1, "la", "la-pencil", "experience_content_details_info_action-icon"], [1, "card-body"], ["edit", ""], [1, "edu-history"], ["for", "dateTo", 1, "form-control-label"], ["type", "button", 1, "btn", "close", 3, "click"], ["formArrayName", "volunteer", "class", "resumeadd-form", 4, "ngFor", "ngForOf"], ["formArrayName", "volunteer", 1, "resumeadd-form"], ["type", "Date", "formControlName", "date_from", 1, "dateInput"], ["type", "Date", "formControlName", "date_to", 1, "dateInput"], ["formControlName", "organization_name", "type", "text"], ["editVol", ""], ["for", "description", 1, "form-control-label"]],
      template: function ExperienceComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297);

            var _r232 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

            return ctx.open(_r232);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ExperienceComponent_div_9_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ExperienceComponent_ng_template_12_Template, 19, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ExperienceComponent_div_15_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Volunteer Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ExperienceComponent_Template_a_click_23_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r297);

            var _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

            return ctx.open(_r236);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ExperienceComponent_div_25_Template, 4, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ExperienceComponent_ng_template_28_Template, 19, 4, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ExperienceComponent_div_31_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.volunteer.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.experience);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.experience[_ngcontent-%COMP%] {\n  margin-bottom: 4%;\n  padding: 0 10px;\n}\n\n.experience_icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4%;\n  vertical-align: top;\n  font-size: 20px;\n  color: #27bfc0;\n  position: relative;\n  top: 7px;\n}\n\n.experience_content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n}\n\n.experience_content_details[_ngcontent-%COMP%] {\n  padding: 0;\n  padding-left: 40px;\n}\n\n.experience_content_details_list[_ngcontent-%COMP%] {\n  list-style: disc;\n  font-size: 20px;\n}\n\n.experience_content_details_info_action-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.experience_content_details_info_action-popup[_ngcontent-%COMP%] {\n  background-color: #27bfc0;\n  color: #ffffff;\n}\n\n.experience_content_details_info_action-popup[_ngcontent-%COMP%]::before {\n  background-color: #27bfc0;\n}\n\n.experience_content_details_info_side-circle[_ngcontent-%COMP%] {\n  border: 1.5px solid #9e9e9e !important;\n  font-size: 10px;\n}\n\n.experience_content_details_info[_ngcontent-%COMP%]   .edu-hisinfo[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.experience_content_details_info_subtitle[_ngcontent-%COMP%] {\n  color: #2a2a2a;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n  float: none;\n  font-family: \"mainFontMedium\";\n  font-weight: 700;\n  text-transform: capitalize;\n}\n\n.experience_content_details_info_subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.experience_content_details_info_subtitle[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 3px;\n}\n\n.experience_content_details_info_subtitle[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  font-weight: normal;\n}\n\n.experience_content_details_info_subtitle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: disc;\n}\n\n.experience_content_details[_ngcontent-%COMP%]   .edu-history.style2[_ngcontent-%COMP%]::before {\n  background: #9e9e9e !important;\n  top: 16px;\n  width: 1.5px;\n  height: 100%;\n  left: 7.5px;\n}\n\n.experience_content_heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  width: 96%;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.experience_content_add-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: #707070;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-weight: 900;\n  color: #ffffff;\n  display: inline-block;\n  position: relative;\n}\n\n.experience_content_add-icon[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.experience_content_add-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0px;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.edu-history[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvZXhwZXJpZW5jZS9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX2dlbmVyYWwuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9leHBlcmllbmNlL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL3ZpZXctcmVzdW1lL2V4cGVyaWVuY2UvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXGFwcFxcY2FuZGlkYXRlLWNvbXBvbmVudHNcXHZpZXctcmVzdW1lXFxleHBlcmllbmNlXFxleHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBVztFQUNYLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxvQ0FBa0Q7RUFDbEQsNEJBQThCO0VBQzlCLG9CQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FDRG5COztBRElBO0VBQ0Usa0JBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixnQkFBd0I7RUFDeEIsWUFBc0I7QUNEeEI7O0FESUE7O0VBRUUsK0JBQW9DO0VBQXBDLHdCQUFvQztFQUNwQyx5QkFBMkI7VUFBM0IsbUJBQTJCO0VBQzNCLFdBQXlCO0VBQ3pCLFdBQXlCO0VBQ3pCLGtDQUF3QztFQUN4QyxlQUEyQjtFQUMzQixrQkFBNkI7RUFDN0IsZUFBd0I7RUFDeEIsZ0JB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OztBRXhjQTtFQUNJLGVBQWU7QUYyY25COztBRXhjQTtFQUNJLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGNEM1BhO0VDNFBiLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0FGMmNkOztBRXBkQTtFQVdRLGlCQUFpQjtFQUNqQixlQUFlO0FGNmN2Qjs7QUV6Y0E7RUFDSSxtQkFBbUI7RUFDbkIsZUFBZTtBRjRjbkI7O0FBRUE7RUV6Y0ksVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxlQUFlO0FGMmNuQjs7QUUxYkE7RUFDSSxtQkFBbUI7QUY2YnZCIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvZXhwZXJpZW5jZS9leHBlcmllbmNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGggOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgnYXNzZXRzL2ltZy9QYXR0ZXJuLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemUgICAgOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDIycHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xyXG4gIGhlaWdodCAgICAgICAgICA6IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlLFxyXG4uYm9yZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDE1cHggMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgIDogMDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuICAvLyB6LWluZGV4ICAgICAgICAgOiA5OTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLXJpZ2h0ICA6IGF1dG87XHJcbiAgICBmb250LWZhbWlseSAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplICAgICA6IDIycHg7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctdG9wICAgOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuam9iLWlzLmZ0IHtcclxuICAgIG1hcmdpbiAgICAgICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gICYrLnRhYnMtd3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICB3aWR0aCAgOiA5MCU7XHJcbiAgbWFyZ2luIDogODBweCBhdXRvIDAgIWltcG9ydGFudDtcclxuICBmbG9hdCAgOiBub25lO1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLnRhYnMtd3JhcHBlciB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogMXB4IHNvbGlkICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogNXB4IDAgMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICRzdGVlbDtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbiAgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaW5kaWdvO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQgICA6ICcnO1xyXG4gICAgZGlzcGxheSAgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgIDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemUgICA6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAyLjU7XHJcbiAgICAgICAgcGFkZGluZyAgICAgOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5IDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbnB1dHMgc3R5bGVcclxuXHJcbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDA7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHggMTBweDtcclxuICAvLyBib3JkZXItbGVmdCAgOiAycHggc29saWQgICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDNweDtcclxuICBtYXJnaW4tYm90dG9tICAgOiAxMHB4O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgdHJhbnNpdGlvbiA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQgOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQgIDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgIDogMS4zMTtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseSAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodCAgIDogMTBweDtcclxuICAgIGJvdHRvbSAgOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgLCB0ZXh0YXJlYSAsIHNlbGVjdCB7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b20gICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwIDRweDtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMTNweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBtYXJnaW4gICAgICAgIDogLTVweCAwIDMwcHg7XHJcbiAgY29sb3IgICAgICAgICA6IGdyZXk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoIDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheSAgICAgICA6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG59XHJcblxyXG4uc2VsZWN0LXVzZXItdGFicyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXR3bztcclxuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZsb2F0ICAgICAgICAgICAgICAgIDogbm9uZTtcclxuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAycHggc29saWQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzICAgICA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplICAgICAgICAgICAgOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXN0cmV0Y2ggICAgICAgICA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgICAgICAgOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgICAgICA6IGxlZnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgOiA1cHggMTBweDtcclxuICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3IgIDogJGJvcmRlci1jb2xvcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5mYS1leWUtc2xhc2g6aG92ZXIsXHJcbi5mYS1leWU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gIGJvcmRlciAgICAgICAgOiBub25lO1xyXG4gIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICBmb250LXNpemUgICAgIDogMThweDtcclxuICB3aWR0aCAgICAgICAgIDogNDBweDtcclxuICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAxNnB4O1xyXG4gIHJpZ2h0ICAgICAgICAgOiA1cHg7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvciAgICAgOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBvcGFjaXR5IDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wICAgICA6IDE2cHg7XHJcbiAgcmlnaHQgICA6IDVweDtcclxuICB3aWR0aCAgIDogNDBweDtcclxuICBjdXJzb3IgIDogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmxhLmxhLXBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA2MDA7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1vcmUtYnRuIHtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxNHB4O1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICMwMDlEQTA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBtYXJnaW4gICAgICA6IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbiAgOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseSA6IFNlZ29lVUk7XHJcbiAgICBmb250LXNpemUgICA6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCA6IDEuNTtcclxuICAgIGNvbG9yICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1idG4td3JhcHBlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoICAgICAgICAgIDogMTAwJTtcclxuICAvLyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZyAgICAgICA6IDhweCAyMHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBoZWlnaHQgICAgICAgIDogYXV0bztcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5zYXZlQnRuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yICAgIDogJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlciAgICA6MXB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bWVhZGQtZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkTW9yZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvciAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICBjb2xvciAgICAgICAgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6ICMwMDlEQTAgIDtcclxuICBwYWRkaW5nICAgICAgICAgICAgICA6IDRweCAxNXB4IDRweCA4cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlci1yaWdodC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0ICAgICAgICAgIDogNjAwO1xyXG59XHJcblxyXG4uc2F2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdG4ge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVye1xyXG4gIHBhZGRpbmctdG9wOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICBjb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICAmX2NyZWF0ZS1uZXd7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmlzLWludmFsaWR7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG4ucmVxdWlyZWQtZXJyb3J7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDo1JTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmVtcGx5LWxpc3R7XHJcbiAgJjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvUGF0dGVybi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgcGFkZGluZzogNXB4IDIycHg7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1haW4tdGl0bGUsXG4uYm9yZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNlZGVmZjc7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tdGl0bGUgaDMsXG4uYm9yZGVyLXRpdGxlIGgzIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBiMWI0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW4tdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSxcbi5ib3JkZXItdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuam9iLWlzLmZ0LFxuLmJvcmRlci10aXRsZSAuam9iLWlzLmZ0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1haW4tdGl0bGUgKyAudGFicy13cmFwcGVyLFxuLmJvcmRlci10aXRsZSArIC50YWJzLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi50YWJzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVmZjc7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBjb2xvcjogIzg4ODc5NTtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxYjQ2O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTU5YTEyO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCB0ZXh0YXJlYSwgLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsIC5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luOiAtNXB4IDAgMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLmZhLWV5ZS1zbGFzaDpob3Zlcixcbi5mYS1leWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSAubGEubGEtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwtYm9keSAuYWRkLW1vcmUtYnRuIHtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzBiMWI0Njtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5zYXZlQnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5jbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyO1xuICBjb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJvZHkgZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yZXN1bWVhZGQtZm9ybSB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkTW9yZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zYXZlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tCdG4ge1xuICBjb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnJlbTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyX2NyZWF0ZS1uZXcge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWlyZWQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZW1wbHktbGlzdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5leHBlcmllbmNlIHtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cblxuLmV4cGVyaWVuY2VfaWNvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDQlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogN3B4O1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTAlO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHMge1xuICBwYWRkaW5nOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlsc19saXN0IHtcbiAgbGlzdC1zdHlsZTogZGlzYztcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHNfaW5mb19hY3Rpb24taWNvbiB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHNfaW5mb19hY3Rpb24tcG9wdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwO1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuLmV4cGVyaWVuY2VfY29udGVudF9kZXRhaWxzX2luZm9fYWN0aW9uLXBvcHVwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHNfaW5mb19zaWRlLWNpcmNsZSB7XG4gIGJvcmRlcjogMS41cHggc29saWQgIzllOWU5ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlsc19pbmZvIC5lZHUtaGlzaW5mbyB7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIHtcbiAgY29sb3I6ICMyYTJhMmE7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmbG9hdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHNfaW5mb19zdWJ0aXRsZSBoNCBzcGFuIHtcbiAgbWFyZ2luOiAzcHg7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlsc19pbmZvX3N1YnRpdGxlIHAge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2RldGFpbHNfaW5mb19zdWJ0aXRsZSB1bCB7XG4gIGxpc3Qtc3R5bGU6IGRpc2M7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfZGV0YWlscyAuZWR1LWhpc3Rvcnkuc3R5bGUyOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjOWU5ZTllICFpbXBvcnRhbnQ7XG4gIHRvcDogMTZweDtcbiAgd2lkdGg6IDEuNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGxlZnQ6IDcuNXB4O1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2hlYWRpbmcge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDk2JTtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfYWRkLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXhwZXJpZW5jZV9jb250ZW50X2FkZC1pY29uOmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5leHBlcmllbmNlX2NvbnRlbnRfYWRkLWljb24gaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0IHtcbiAgYm9yZGVyOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogLTVweCAwIDMwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzllOWU5ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbi5mYS1leWUtc2xhc2g6aG92ZXIsIC5mYS1leWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogNXB4O1xufVxuXG4ucGljazo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVJbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkdS1oaXN0b3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiIsIiRsaWdodC1ncmV5OiAjZmFmYWZhO1xyXG4kd2FybS1ncmV5IDojNzA3MDcwO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHdhcm0tZ3JleS10d286ICM5ZTllOWU7XHJcbiRkYXJrLWluZGlnbyA6ICMwYjFiNDY7XHJcbiR3aGl0ZS10d286I2VmZWZlZjtcclxuJHRlYWxpc2ggOiMyN2JmYzA7XHJcbiRvcmFuZ2U6I2U1OWExMjtcclxuJGJvcmRlci1jb2xvcjojY2FjYWNhO1xyXG4kZHVzazojNTQ1ZjdkO1xyXG4kYmxhY2s6IzJhMmEyYTtcclxuJHN0ZWVsOiAjODg4Nzk1O1xyXG4kd2hpdGUtZm91cjojZmVmZWZlO1xyXG4kcGFsZS1ncmV5OiNmM2Y0Zjk7IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vZ2VuZXJhbFwiO1xyXG5cclxuLmV4cGVyaWVuY2V7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICZfaWNvbntcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDQlO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA3cHg7XHJcbiAgICB9XHJcbiAgICAmX2NvbnRlbnR7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgJl9kZXRhaWxze1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XHJcbiAgICAgICAgICAgICZfbGlzdHtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IGRpc2M7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJl9pbmZve1xyXG4gICAgICAgICAgICAgICAgJl9hY3Rpb24taWNvbntcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmX2FjdGlvbi1wb3B1cHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJl9zaWRlLWNpcmNsZXtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6MS41cHggc29saWQgJHdhcm0tZ3JleS10d28gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZWR1LWhpc2luZm97XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICZfc3VidGl0bGV7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6JGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGg0e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDNweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBwe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1bHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZTpkaXNjO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZWR1LWhpc3Rvcnkuc3R5bGUyOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAgJHdhcm0tZ3JleS10d28gIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTZweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGxlZnQ6IDcuNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfaGVhZGluZ3tcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5NiU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkZGFyay1pbmRpZ287ICAgIFxyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2FkZC1pY29ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJtLWdyZXk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICY6aG92ZXJ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG4vLyBpbnB1dHMgc3R5bGVcclxuXHJcbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbSAgIDogMDtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDVweCAxMHB4O1xyXG4gICAgLy8gYm9yZGVyLWxlZnQgIDogMnB4IHNvbGlkICAkYm9yZGVyLWNvbG9yO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgOiAzcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgICAgOiAxMHB4O1xyXG5cclxuICAgICY6Zm9jdXMtd2l0aGluIHtcclxuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgICAgIHRyYW5zaXRpb24gOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMxO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gICA6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgICAgICBtYXJnaW4gICAgICAgICAgOiAwIDRweDtcclxuICAgICAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0e1xyXG4gICAgbWFyZ2luOiAtNXB4IDAgMzBweDtcclxuICAgIGNvbG9yOiBncmV5O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICAgIGJvcmRlcjpub25lO1xyXG59XHJcbmZvcm0gdGV4dGFyZWF7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5mb3JtIGxhYmVsIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbn1cclxuXHJcbi5zZWxlY3QtdXNlci10YWJzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10d287XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiA1cHg7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZmxvYXQgICAgICAgICAgICAgICAgOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkO1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNXB4O1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgICAgIGN1cnNvciAgICAgICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemUgICAgICAgICAgICA6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zdHJldGNoICAgICAgICAgOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgICAgICAgICAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nICAgICAgIDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtYWxpZ24gICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmLmFjdGl2ZSB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG5jb2xvciAgOiAkYm9yZGVyLWNvbG9yO1xyXG5vcGFjaXR5OiAxO1xyXG4vKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4vKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG5jb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4vKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG5jb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG4gIFxyXG4uZmEtZXllLXNsYXNoOmhvdmVyLC5mYS1leWU6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGlja3tcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgfVxyXG59XHJcbi5kYXRlSW5wdXR7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuICBbdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNnB4O1xyXG4gICAgcmlnaHQ6IDVweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG4vLyBidG5zXHJcbi8vIC5idG5zLWFjdGlvbntcclxuLy8gICAgIGJ1dHRvbntcclxuLy8gICAgICAgICBtYXJnaW46IDVweDtcclxuLy8gICAgICAgICBjb2xvcjogd2hpdGU7XHJcbi8vICAgICB9XHJcbi8vICAgICAmX3NhdmVCdG57XHJcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2g7XHJcbi8vICAgICB9XHJcbi8vICAgICAmX2RlbGV0ZUJ0bntcclxuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiRvcmFuZ2VcclxuLy8gICAgIH1cclxuLy8gfVxyXG4uZWR1LWhpc3Rvcnkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExperienceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-experience',
          templateUrl: './experience.component.html',
          styleUrls: ['./experience.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: services_candidate_experience_service__WEBPACK_IMPORTED_MODULE_1__["ExperienceService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_7__["SkillsService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/view-resume/portfolio/portfolio.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/candidate-components/view-resume/portfolio/portfolio.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: PortfolioComponent */

  /***/
  function srcAppCandidateComponentsViewResumePortfolioPortfolioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function () {
      return PortfolioComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_candidate_portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! services/candidate/portfolio.service */
    "./src/services/candidate/portfolio.service.ts");
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

    function PortfolioComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_a_3_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r335);

          var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r334.onAddPortfolio();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Portfolio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_div_4_div_3_img_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 18);
      }
    }

    function PortfolioComponent_div_4_div_3_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 19);
      }
    }

    function PortfolioComponent_div_4_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_div_4_div_3_img_2_Template, 1, 0, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_4_div_3_img_3_Template, 1, 0, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_4_div_3_Template_a_click_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r341);

          var portfolio_r337 = ctx.$implicit;

          var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r340.onDeletePortfolio(portfolio_r337.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r336.testing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r336.testing);
      }
    }

    function PortfolioComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_4_div_3_Template, 15, 2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r332.portfolio);
      }
    }

    function PortfolioComponent_div_5_div_4_label_5_i_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 42);
      }
    }

    function PortfolioComponent_div_5_div_4_label_5_span_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Upload Portfolio");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PortfolioComponent_div_5_div_4_label_5_img_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 43);
      }
    }

    function PortfolioComponent_div_5_div_4_label_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PortfolioComponent_div_5_div_4_label_5_i_1_Template, 1, 0, "i", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PortfolioComponent_div_5_div_4_label_5_span_2_Template, 2, 0, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_div_5_div_4_label_5_img_3_Template, 1, 0, "img", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r345.testing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r345.testing);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r345.testing);
      }
    }

    function PortfolioComponent_div_5_div_4_a_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 44);
      }

      if (rf & 2) {
        var ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx_r346.testing, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function PortfolioComponent_div_5_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_div_5_div_4_label_5_Template, 4, 3, "label", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function PortfolioComponent_div_5_div_4_Template_input_change_6_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r351);

          var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r350.readUrlNew($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PortfolioComponent_div_5_div_4_a_7_Template, 1, 1, "a", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r344 = ctx.index;

        var ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r344);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r342.portfolioUpdateForm.value.portfolio);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r342.portfolioUpdateForm.value.portfolios);
      }
    }

    function PortfolioComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function PortfolioComponent_div_5_Template_form_ngSubmit_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353);

          var ctx_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r352.onSubmitPortfolio(ctx_r352.portfolioUpdateForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Max file size is 1MB, Minimum dimension: 270x210 And Suitable files are .jpg & .png ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_5_div_4_Template, 13, 3, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PortfolioComponent_div_5_Template_button_click_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r353);

          var ctx_r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r354.cancelAddPortfolio();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r333.portfolioUpdateForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r333.portfolioUpdateForm.get("portfolios").controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r333.portfolioUpdateForm.invalid);
      }
    }

    var PortfolioComponent =
    /*#__PURE__*/
    function () {
      function PortfolioComponent(portfolioServie, fb, http) {
        _classCallCheck(this, PortfolioComponent);

        this.portfolioServie = portfolioServie;
        this.fb = fb;
        this.http = http;
        this.portfolio = [];
        this.portfolioClicked = false;
        this.users = [];
      }

      _createClass(PortfolioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.portfolioForm = this.fb.group({
            file: '',
            name: ''
          });
          this.portfolioForm = this.fb.group({
            file: '',
            name: ''
          });
          this.portfolioUpdateForm = this.fb.group({
            portfolios: this.fb.array([this.createPortfolioUpdateForm()])
          });
          this.getAllPortfolio().subscribe(function (data) {
            _this16.portfolio = data;
          });
        }
      }, {
        key: "getAllPortfolio",
        value: function getAllPortfolio() {
          return this.http.get('http://localhost:3000/portfolio');
        }
      }, {
        key: "update",
        value: function update() {
          var _this17 = this;

          this.getAllPortfolio().subscribe(function (data) {
            _this17.portfolio = data; //to listen in sidebar chart

            _this17.portfolioServie.sidebarChart.next(0);
          });
        } // **************upload file******************//
        // selectedFile = null
        // onFileSelected(event){
        //   console.log(event);
        //   this.selectedFile = event.target
        //   let uploadFormData = new FormData ();
        //   let uploadFormObj={
        //     "file":event.target.files[0],
        //     "name":event.target.files[0].name
        //   }
        //   // uploadFormData.append('file' , this.selectedFile.files[0])
        //   for ( var key in uploadFormObj ) {
        //     uploadFormData.append(key, uploadFormObj[key]);
        // }
        //   console.log(uploadFormData);
        //   this.http.post('http://localhost:3000/portfolio',uploadFormObj).subscribe(response=>{
        //     console.log(response);
        //   })
        // }
        // files;
        // getAttachedFile(){
        //   this.http.get('http://localhost:3000/portfolio').subscribe(response=>{
        //     console.log(response[1].file);
        //     this.files=response[1].file
        // })
        // }

      }, {
        key: "readUrl",
        value: function readUrl(event) {
          var _this18 = this;

          this.fileData = event.target.files[0];
          console.log(event.target.files);
          var mimeType = this.fileData.type;

          if (mimeType.match(/image||text\/*/) == null) {
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(this.fileData);

          reader.onload = function (event) {
            _this18.fileSrc = reader.result;
            _this18.file = reader.result;
            _this18.portfolioForm.value.file = _this18.file;
            console.log(_this18.portfolioForm.value.file);
            _this18.testing = _this18.file;
            console.log(_this18.testing);
            console.log(_this18.portfolioForm.value.file);
          }; // this.preview();


          console.log(this.fileData);
          var myObj = {
            "file": this.portfolioForm.value.file,
            "name": this.portfolioForm.value.name
          };
          this.http.post('http://localhost:3000/portfolio', myObj).subscribe(function (response) {
            console.log(response);
          });
        }
      }, {
        key: "onAddPortfolio",
        value: function onAddPortfolio() {
          this.portfolioClicked = !this.portfolioClicked;
          console.log(this.portfolioUpdateForm);
          console.log(this.portfolio);
        }
      }, {
        key: "createPortfolioUpdateForm",
        value: function createPortfolioUpdateForm() {
          return this.fb.group({
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            portfolio: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
          console.log(this.portfolioUpdateForm);
        }
      }, {
        key: "addNewPortfolioUpdateForm",
        value: function addNewPortfolioUpdateForm() {
          var addPortfolio = this.portfolioUpdateForm.get('portfolios');
          addPortfolio.push(this.createPortfolioUpdateForm());
          console.log(this.portfolioUpdateForm);
        }
      }, {
        key: "onSubmitPortfolio",
        value: function onSubmitPortfolio(form) {
          var _this19 = this;

          console.log(form);
          console.log(this.portfolioFileObj);
          this.addPortfolio(this.portfolioFileObj).subscribe(function (data) {
            console.log(data);
            console.log(_this19.portfolio);
            _this19.portfolioClicked = false;
            _this19.portfolioUpdateForm = _this19.fb.group({
              portfolios: _this19.fb.array([_this19.createPortfolioUpdateForm()])
            });

            _this19.update();
          });
        }
      }, {
        key: "addPortfolio",
        value: function addPortfolio(portfolioObj) {
          return this.http.post('http://localhost:3000/portfolio', portfolioObj);
        }
      }, {
        key: "cancelAddPortfolio",
        value: function cancelAddPortfolio() {
          this.portfolioUpdateForm = this.fb.group({
            portfolios: this.fb.array([this.createPortfolioUpdateForm()])
          });
          console.log(this.portfolioUpdateForm);
          this.portfolioClicked = false;
        }
      }, {
        key: "deletePortfolioUpdateFormArray",
        value: function deletePortfolioUpdateFormArray(i) {
          var deleteport = this.portfolioUpdateForm.controls["portfolios"];
          deleteport.removeAt(i);

          if (this.portfolioUpdateForm.value.portfolios.length == 0) {
            this.portfolioClicked = false;
          }

          console.log(this.portfolioUpdateForm);
        }
      }, {
        key: "readUrlNew",
        value: function readUrlNew(event) {
          var _this20 = this;

          this.fileData = event.target.files[0];
          console.log(event.target.files[0]);
          var mimeType = this.fileData.type;

          if (mimeType.match(/image||text\/*/) == null) {
            return;
          }

          var reader = new FileReader();
          reader.readAsDataURL(this.fileData);

          reader.onload = function (event) {
            _this20.fileSrc = reader.result;
            _this20.file = reader.result;
            _this20.portfolioUpdateForm.value.portfolios[0].portfolio = _this20.file;
            _this20.testing = _this20.file;
            console.log(_this20.testing);
            console.log(_this20.file);
          }; // this.preview();


          console.log(this.fileData);
          this.portfolioFileObj = {
            "file": this.file,
            "title": this.portfolioUpdateForm.value.portfolios[0].title
          };
          console.log(this.portfolioFileObj);
        }
      }, {
        key: "onDeletePortfolio",
        value: function onDeletePortfolio(Id) {
          var _this21 = this;

          this.deletePortfolio(Id).subscribe(function (data) {
            console.log(data);
            console.log(_this21.portfolio);

            _this21.update();
          });
        }
      }, {
        key: "deletePortfolio",
        value: function deletePortfolio(id) {
          return this.http["delete"]('http://localhost:3000/portfolio/' + id);
        }
      }]);

      return PortfolioComponent;
    }();

    PortfolioComponent.ɵfac = function PortfolioComponent_Factory(t) {
      return new (t || PortfolioComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    PortfolioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PortfolioComponent,
      selectors: [["app-portfolio"]],
      decls: 6,
      vars: 3,
      consts: [[1, "border-title"], ["title", "", 3, "click", 4, "ngIf"], [4, "ngIf"], ["title", "", 3, "click"], [1, "la", "la-plus"], [1, "mini-portfolio"], [1, "mp-row"], ["class", "mp-col file-upload-container", 4, "ngFor", "ngForOf"], [1, "mp-col", "file-upload-container"], [1, "mportolio"], ["src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png", "alt", "", 4, "ngIf"], ["src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png", 4, "ngIf"], [1, "action_job"], [1, "edit-popup"], ["href", "#", "title", ""], [1, "la", "la-pencil"], [1, "delete-popup"], [1, "la", "la-trash-o"], ["src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png", "alt", ""], ["src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png"], [3, "formGroup", "ngSubmit"], [1, "p-4"], ["class", "resumeadd-form  border-Space", "formArrayName", "portfolios", 4, "ngFor", "ngForOf"], [1, "row", "pt-4", "custumPadding"], [1, ""], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"], ["type", "button", 1, "btn", "cancelBtn", 3, "click"], ["formArrayName", "portfolios", 1, "resumeadd-form", "border-Space"], [1, "row", 3, "formGroupName"], [1, "col-lg-12"], [1, "upload-portfolio"], [1, "uploadbox"], ["for", "file-upload", "class", "custom-file-upload", 4, "ngIf"], ["id", "file-upload", "formControlName", "portfolio", "type", "file", 3, "change"], ["download", "", 3, "href", 4, "ngIf"], [1, "uploadfield"], [1, "pf-title"], [1, "pf-field"], ["placeholder", "Tooms..", "type", "text", "formControlName", "title"], ["for", "file-upload", 1, "custom-file-upload"], ["class", "la la-cloud-upload", 4, "ngIf"], ["class", "pdf-img img-fluid mx-auto mt-0", "src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png", "alt", "kisspng-pdf-computer-icons-download-pdf-5b3643b91e7405-3244798015302829371247", 4, "ngIf"], [1, "la", "la-cloud-upload"], ["src", "https://cdn4.iconfinder.com/data/icons/file-extension-names-vol-8/512/24-512.png", "alt", "kisspng-pdf-computer-icons-download-pdf-5b3643b91e7405-3244798015302829371247", 1, "pdf-img", "img-fluid", "mx-auto", "mt-0"], ["download", "", 3, "href"]],
      template: function PortfolioComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PortfolioComponent_a_3_Template, 3, 0, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PortfolioComponent_div_4_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PortfolioComponent_div_5_Template, 12, 3, "div", 2);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioClicked == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioClicked == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.portfolioClicked == true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
      styles: [".progressbar[_ngcontent-%COMP%]   .progress[_ngcontent-%COMP%] {\n  background-color: #f26956;\n  height: 100%;\n  overflow: visible;\n}\n\n.progress[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  right: -33px;\n  top: 4px;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  cursor: pointer;\n}\n\n.example-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.la.la-plus[_ngcontent-%COMP%] {\n  background-color: #009DA0 !important;\n}\n\n.la.la-graduation-cap[_ngcontent-%COMP%] {\n  color: #009DA0 !important;\n}\n\ndiv.progress[_ngcontent-%COMP%] {\n  color: #009DA0 !important;\n  background-color: #009DA0 !important;\n}\n\n.pdf-img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 20px auto 0;\n  display: block;\n}\n\n.mportolio[_ngcontent-%COMP%] {\n  width: 50% !important;\n  margin: auto;\n  margin-bottom: 20px;\n}\n\n.btn-style.btn-edited[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid #009DA0;\n  color: #009DA0;\n  margin-top: 12px;\n  font-family: Open Sans;\n  font-size: 14px;\n  border-radius: 22px;\n  background-color: white !important;\n}\n\n.btn-style.btn-edited[_ngcontent-%COMP%]:hover {\n  background-color: #009DA0 !important;\n  color: white;\n}\n\n.file-upload-container[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.delete-popup[_ngcontent-%COMP%] {\n  background: #f26956;\n}\n\n.delete-popup[_ngcontent-%COMP%]::before {\n  background: #f26956;\n}\n\n.edit-popup[_ngcontent-%COMP%] {\n  background: #009DA0;\n}\n\n.edit-popup[_ngcontent-%COMP%]::before {\n  background: #009DA0;\n}\n\n.edu-hisinfo[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  color: #009DA0;\n}\n\n.edu-history.style2[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  border-color: #f26956;\n}\n\n.action_job[_ngcontent-%COMP%]   .la.la-pencil[_ngcontent-%COMP%]:hover {\n  color: #009DA0;\n}\n\n.action_job[_ngcontent-%COMP%]   .la.la-trash-o[_ngcontent-%COMP%]:hover {\n  color: #f26956;\n}\n\n.action_job[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: grey !important;\n}\n\n.add-more-btn[_ngcontent-%COMP%] {\n  margin-right: 2em;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.add-more-btn[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  width: 27px;\n  height: 27px;\n  background: #009DA0 !important;\n  border-radius: 50%;\n  color: #ffffff;\n  text-align: center;\n  line-height: 27px;\n  font-size: 14px;\n  margin-right: 8px;\n}\n\n.cancelBtn[_ngcontent-%COMP%] {\n  border: 2px solid #f26956;\n  color: #f26956;\n  margin-left: 15px;\n}\n\n.cancelBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #f26956;\n}\n\n.cancelBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  border: 2px solid #009DA0;\n  color: #009DA0;\n  margin-left: 15px;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #009DA0;\n}\n\n.saveBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: white;\n  color: #009DA0;\n}\n\n.delete-more[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  float: left;\n  width: 27px;\n  height: 27px;\n  background: #f26956;\n  border-radius: 50%;\n  color: #ffffff;\n  text-align: center;\n  line-height: 27px;\n  font-size: 14px;\n  margin-right: 8px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding-top: 8%;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  width: 36px;\n  top: 3px;\n  right: 14px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.custumPadding[_ngcontent-%COMP%] {\n  padding-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvcG9ydGZvbGlvL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGNhbmRpZGF0ZS1jb21wb25lbnRzXFx2aWV3LXJlc3VtZVxccG9ydGZvbGlvXFxwb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL3ZpZXctcmVzdW1lL3BvcnRmb2xpby9wb3J0Zm9saW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtBQ0NyQjs7QURHQTtFQUNJLFlBQVk7RUFDWixRQUFRO0FDQVo7O0FERUE7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0FDQ25COztBRFBBO0VBUVEsZUFBZTtBQ0d2Qjs7QURFQTtFQUNJLG9DQUFvQztBQ0N4Qzs7QURDQTtFQUNJLHlCQUF5QjtBQ0U3Qjs7QURFQTtFQUNJLHlCQUF5QjtFQUN6QixvQ0FBb0M7QUNDeEM7O0FER0E7RUFDSSxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGNBQWM7QUNBbEI7O0FERUE7RUFDSSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLG1CQUFtQjtBQ0N2Qjs7QURHQTtFQUNJLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQ0FBa0M7QUNBdEM7O0FER0E7RUFDSSxvQ0FBb0M7RUFDcEMsWUFBWTtBQ0FoQjs7QURLQTtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQ0YxQjs7QURNQTtFQUNJLG1CQUFtQjtBQ0h2Qjs7QURFQTtFQUlRLG1CQUFtQjtBQ0YzQjs7QURNQTtFQUNJLG1CQUFtQjtBQ0h2Qjs7QURFQTtFQUlRLG1CQUFtQjtBQ0YzQjs7QURLQTtFQUNJLGNBQWM7QUNGbEI7O0FESUE7RUFDSSxxQkFBcUI7QUNEekI7O0FER0E7RUFHWSxjQUFjO0FDRjFCOztBRERBO0VBU1ksY0FBYztBQ0oxQjs7QURMQTtFQWNRLHNCQUFzQjtBQ0w5Qjs7QURTQTtFQWtCSSxpQkFBaUI7RUFDakIseUJBQW1CO1VBQW5CLG1CQUFtQjtBQ3ZCdkI7O0FESUE7RUFFUSxXQUEyQjtFQUMzQixXQUEyQjtFQUMzQixZQUEyQjtFQUMzQiw4QkFBeUM7RUFLekMsa0JBQTBCO0VBQzFCLGNBQThCO0VBQzlCLGtCQUE2QjtFQUM3QixpQkFBMkI7RUFDM0IsZUFBMkI7RUFDM0IsaUJBQTBCO0FDRmxDOztBRFdBO0VBQ0kseUJBQThCO0VBQzlCLGNBQW9CO0VBQ3BCLGlCQUFpQjtBQ1JyQjs7QURLQTtFQU1RLFlBQWlCO0VBQ2pCLG1CQUFtQjtBQ1AzQjs7QURBQTtFQVdRLFlBQVk7RUFDWixtQkFBb0I7QUNQNUI7O0FEV0E7RUFDSSx5QkFBOEI7RUFDOUIsY0FBb0I7RUFDcEIsaUJBQWlCO0FDUnJCOztBREtBO0VBT1EsWUFBaUI7RUFDakIsbUJBQW1CO0FDUjNCOztBREFBO0VBWVEsWUFBcUI7RUFDckIsbUJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixjQUF5QjtBQ1JqQzs7QURZQTtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUtuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGlCQUFpQjtBQ1RyQjs7QURXQTtFQUNJLGVBQWU7QUNSbkI7O0FEWUE7RUFDSSxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsUUFBUTtFQUNSLFdBQVc7QUNUZjs7QURHQTtFQVNRLGlCQUFpQjtFQUNqQixlQUFlO0FDUnZCOztBRFlBO0VBQ0ksbUJBQW1CO0FDVHZCOztBRGNBO0VBQ0ksa0JBQWtCO0FDWHRCIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvcG9ydGZvbGlvL3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ncmVzc2JhciAucHJvZ3Jlc3N7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjI2OTU2O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcblxyXG59XHJcblxyXG4ucHJvZ3Jlc3Mgc3BhbntcclxuICAgIHJpZ2h0OiAtMzNweDtcclxuICAgIHRvcDogNHB4O1xyXG59XHJcbi5leGFtcGxlLWZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubGEubGEtcGx1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxufVxyXG4ubGEubGEtZ3JhZHVhdGlvbi1jYXB7XHJcbiAgICBjb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuZGl2LnByb2dyZXNze1xyXG4gICAgY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5wZGYtaW1ne1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5tcG9ydG9saW97XHJcbiAgICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuLmJ0bi1zdHlsZS5idG4tZWRpdGVke1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwOURBMDtcclxuICAgIGNvbG9yOiAjMDA5REEwO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1zdHlsZS5idG4tZWRpdGVkOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcbn1cclxuXHJcbi5maWxlLXVwbG9hZC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuXHJcbi5kZWxldGUtcG9wdXAge1xyXG4gICAgYmFja2dyb3VuZDogI2YyNjk1NjtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMjY5NTY7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5lZGl0LXBvcHVwIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDlEQTA7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5REEwO1xyXG4gICAgfVxyXG59XHJcbi5lZHUtaGlzaW5mbyA+IGgze1xyXG4gICAgY29sb3I6ICMwMDlEQTA7XHJcbn1cclxuLmVkdS1oaXN0b3J5LnN0eWxlMiA+IGl7XHJcbiAgICBib3JkZXItY29sb3I6ICNmMjY5NTY7XHJcbn1cclxuLmFjdGlvbl9qb2Ige1xyXG4gICAgLmxhLmxhLXBlbmNpbCB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMDA5REEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubGEubGEtdHJhc2gtbyB7XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZjI2OTU2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaSBhIHtcclxuICAgICAgICBjb2xvcjogZ3JleSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYWRkLW1vcmUtYnRuIHtcclxuICAgID5hIGkge1xyXG4gICAgICAgIGZsb2F0ICAgICAgICAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB3aWR0aCAgICAgICAgICAgICAgICA6IDI3cHg7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgICAgICAgOiAyN3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQgICAgICAgICAgIDogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xyXG4gICAgICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNTAlO1xyXG4gICAgICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNTAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNTAlO1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduICAgICAgICAgICA6IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodCAgICAgICAgICA6IDI3cHg7XHJcbiAgICAgICAgZm9udC1zaXplICAgICAgICAgICAgOiAxNHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodCAgICAgICAgIDogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmdpbi1yaWdodDogMmVtO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcblxyXG4uY2FuY2VsQnRuIHtcclxuICAgIGJvcmRlciAgICAgOiAycHggc29saWQgI2YyNjk1NjtcclxuICAgIGNvbG9yICAgICAgOiAjZjI2OTU2O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgY29sb3IgICAgIDogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyNjk1NjtcclxuICAgIH1cclxuXHJcbiAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgY3Vyc29yIDogbm90LWFsbG93ZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zYXZlQnRuIHtcclxuICAgIGJvcmRlciAgICAgOiAycHggc29saWQgIzAwOURBMDtcclxuICAgIGNvbG9yICAgICAgOiAjMDA5REEwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcblxyXG4gICAgICAgIGNvbG9yICAgICA6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwMDlEQTA7XHJcbiAgICB9XHJcblxyXG4gICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgb3BhY2l0eSAgICAgICAgIDogMC42O1xyXG4gICAgICAgIGN1cnNvciAgICAgICAgICA6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5kZWxldGUtbW9yZSA+IGEgaSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAyN3B4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgYmFja2dyb3VuZDogI2YyNjk1NjtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjdweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xyXG59XHJcbi5yZXN1bWVhZGQtZm9ybXtcclxuICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgIFxyXG59XHJcblxyXG4ucGlja3tcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAzNnB4O1xyXG4gICAgdG9wOiAzcHg7XHJcbiAgICByaWdodDogMTRweDtcclxuICAgIC8vIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICY6OmJlZm9yZXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuLmRhdGVJbnB1dHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAvL2N1cnNvcjogcG9pbnRlcjtcclxuXHJcbn1cclxuXHJcbi5jdXN0dW1QYWRkaW5ne1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59IiwiLnByb2dyZXNzYmFyIC5wcm9ncmVzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMjY5NTY7XG4gIGhlaWdodDogMTAwJTtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi5wcm9ncmVzcyBzcGFuIHtcbiAgcmlnaHQ6IC0zM3B4O1xuICB0b3A6IDRweDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5leGFtcGxlLWZvcm0gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYS5sYS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xufVxuXG4ubGEubGEtZ3JhZHVhdGlvbi1jYXAge1xuICBjb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xufVxuXG5kaXYucHJvZ3Jlc3Mge1xuICBjb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XG59XG5cbi5wZGYtaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDIwcHggYXV0byAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm1wb3J0b2xpbyB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgbWFyZ2luOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnRuLXN0eWxlLmJ0bi1lZGl0ZWQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTA7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5idG4tc3R5bGUuYnRuLWVkaXRlZDpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZmlsZS11cGxvYWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5kZWxldGUtcG9wdXAge1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xufVxuXG4uZGVsZXRlLXBvcHVwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xufVxuXG4uZWRpdC1wb3B1cCB7XG4gIGJhY2tncm91bmQ6ICMwMDlEQTA7XG59XG5cbi5lZGl0LXBvcHVwOjpiZWZvcmUge1xuICBiYWNrZ3JvdW5kOiAjMDA5REEwO1xufVxuXG4uZWR1LWhpc2luZm8gPiBoMyB7XG4gIGNvbG9yOiAjMDA5REEwO1xufVxuXG4uZWR1LWhpc3Rvcnkuc3R5bGUyID4gaSB7XG4gIGJvcmRlci1jb2xvcjogI2YyNjk1Njtcbn1cblxuLmFjdGlvbl9qb2IgLmxhLmxhLXBlbmNpbDpob3ZlciB7XG4gIGNvbG9yOiAjMDA5REEwO1xufVxuXG4uYWN0aW9uX2pvYiAubGEubGEtdHJhc2gtbzpob3ZlciB7XG4gIGNvbG9yOiAjZjI2OTU2O1xufVxuXG4uYWN0aW9uX2pvYiBsaSBhIHtcbiAgY29sb3I6IGdyZXkgIWltcG9ydGFudDtcbn1cblxuLmFkZC1tb3JlLWJ0biB7XG4gIG1hcmdpbi1yaWdodDogMmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWRkLW1vcmUtYnRuID4gYSBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJhY2tncm91bmQ6ICMwMDlEQTAgIWltcG9ydGFudDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbXMtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtby1ib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5cbi5jYW5jZWxCdG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjZjI2OTU2O1xuICBjb2xvcjogI2YyNjk1NjtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5jYW5jZWxCdG46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQ6ICNmMjY5NTY7XG59XG5cbi5jYW5jZWxCdG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5zYXZlQnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOURBMDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwOURBMDtcbn1cblxuLnNhdmVCdG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwOURBMDtcbn1cblxuLmRlbGV0ZS1tb3JlID4gYSBpIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAyN3B4O1xuICBoZWlnaHQ6IDI3cHg7XG4gIGJhY2tncm91bmQ6ICNmMjY5NTY7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNTAlO1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDUwJTtcbiAgLW8tYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1yaWdodDogOHB4O1xufVxuXG4ucmVzdW1lYWRkLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogOCU7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgd2lkdGg6IDM2cHg7XG4gIHRvcDogM3B4O1xuICByaWdodDogMTRweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4uY3VzdHVtUGFkZGluZyB7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PortfolioComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-portfolio',
          templateUrl: './portfolio.component.html',
          styleUrls: ['./portfolio.component.scss']
        }]
      }], function () {
        return [{
          type: services_candidate_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/view-resume/skills/skills.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/candidate-components/view-resume/skills/skills.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SkillsComponent */

  /***/
  function srcAppCandidateComponentsViewResumeSkillsSkillsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillsComponent", function () {
      return SkillsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! services/candidate/skills.service */
    "./src/services/candidate/skills.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    function SkillsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "there is no data right now please add your info!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillsComponent_div_5_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Skills");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_5_ng_template_23_Template_button_click_3_listener($event) {
          var d_r306 = ctx.dismiss;
          return d_r306("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SkillsComponent_div_5_ng_template_23_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r309);

          var skill_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r308.onSubmitSkillEdit(ctx_r308.skillEdit, skill_r302.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "skill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "percentage");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_5_ng_template_23_Template_button_click_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r309);

          var skill_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r311.onDeleteSkill(skill_r302.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r304.skillEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r304.skillEdit.invalid);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        width: a0
      };
    };

    function SkillsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_5_Template_li_click_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314);

          var skill_r302 = ctx.$implicit;

          var ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r313.getSkillId(skill_r302.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_div_5_Template_a_click_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r314);

          var _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          var ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r315.open(_r303);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SkillsComponent_div_5_ng_template_23_Template, 26, 2, "ng-template", null, 30, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var skill_r302 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r302.skill);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", skill_r302.percentage, "%");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, skill_r302.percentage + "%"));
      }
    }

    function SkillsComponent_ng_template_11_div_10_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_ng_template_11_div_10_div_4_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r324);

          var i_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r322.deleteEducationFormArray(i_r320);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SkillsComponent_ng_template_11_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_ng_template_11_div_10_div_4_Template, 4, 0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skill");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Skill Proffecient");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r320 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r320);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r320 != 0);
      }
    }

    function SkillsComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Skills");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_ng_template_11_Template_button_click_3_listener($event) {
          var d_r317 = ctx.dismiss;
          return d_r317("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SkillsComponent_ng_template_11_Template_form_ngSubmit_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r326.onSubmitSkill(ctx_r326.skillsForm);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SkillsComponent_ng_template_11_div_10_Template, 15, 2, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_ng_template_11_Template_a_click_11_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r327);

          var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r328.addNewSkillForm();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Add More");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_ng_template_11_Template_button_click_15_listener($event) {
          var d_r317 = ctx.dismiss;
          return d_r317("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r301.skillsForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r301.skillsForm.get("skills").controls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r301.skillsForm.invalid);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r301.skillsForm.invalid);
      }
    }

    var SkillsComponent =
    /*#__PURE__*/
    function () {
      function SkillsComponent(modalService, skillsService, fb, http, toast) {
        _classCallCheck(this, SkillsComponent);

        this.modalService = modalService;
        this.skillsService = skillsService;
        this.fb = fb;
        this.http = http;
        this.toast = toast;
        this.skills = [];
        this.skillsClicked = false;
        this.skillEditing = false;
      }

      _createClass(SkillsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          /*****************  FormGroup *****************/
          this.skillsForm = this.fb.group({
            skills: this.fb.array([this.createSkillForm()])
          });
          this.skillEdit = this.fb.group({
            skill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]]
          });
          this.getAllSkills().subscribe(function (data) {
            _this22.skills = data;
          });
        }
      }, {
        key: "getAllSkills",
        value: function getAllSkills() {
          return this.http.get('http://localhost:3000/skills');
        }
      }, {
        key: "getSkillById",
        value: function getSkillById(id) {
          return this.http.get('http://localhost:3000/skills/' + id);
        }
        /**************            Cycle of Add Skill            **************/

      }, {
        key: "onAddSkill",
        value: function onAddSkill() {
          this.skillsClicked = !this.skillsClicked;
        }
      }, {
        key: "createSkillForm",
        value: function createSkillForm() {
          return this.fb.group({
            skill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            percentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]]
          });
        }
      }, {
        key: "addNewSkillForm",
        value: function addNewSkillForm() {
          var addSkills = this.skillsForm.get('skills');
          addSkills.push(this.createSkillForm());
        }
      }, {
        key: "onSubmitSkill",
        value: function onSubmitSkill(form) {
          var _this23 = this;

          console.log(form);

          var _loop4 = function _loop4(i) {
            var addedSkillObj = {
              "skill": form.value.skills[i].skill,
              "percentage": +form.value.skills[i].percentage
            };
            console.log(addedSkillObj);

            _this23.addSkill(addedSkillObj).subscribe(function (data) {
              console.log(data);

              if (i + 1 === form.value.skills.length) {
                _this23.update();
              }

              _this23.toast.success("resume Updated successfully", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
              });
            });

            _this23.modalService.dismissAll();
          };

          for (var i = 0; i < form.value.skills.length; i++) {
            _loop4(i);
          }

          this.skillsForm = this.fb.group({
            skills: this.fb.array([this.createSkillForm()])
          });
          this.skillsClicked = false;
        }
      }, {
        key: "addSkill",
        value: function addSkill(skillObj) {
          return this.http.post('http://localhost:3000/skills', skillObj);
        }
      }, {
        key: "cancelAddSkill",
        value: function cancelAddSkill() {
          this.skillsForm = this.fb.group({
            skills: this.fb.array([this.createSkillForm()])
          });
          this.skillsClicked = false;
        }
      }, {
        key: "getEduId",
        value: function getEduId(id) {
          this.skillId = id;
          this.skillEditing = true;
          var filtered = this.skills.filter(function (item) {
            return item.id == id;
          });
          this.skillEdit.patchValue({
            skill: filtered[0].skill,
            percentage: filtered[0].percentage
          });
        }
      }, {
        key: "update",
        value: function update() {
          var _this24 = this;

          this.getAllSkills().subscribe(function (data) {
            _this24.skills = data; //to listen in sidebar chart

            _this24.skillsService.sidebarChart.next(0);
          });
        }
      }, {
        key: "deleteSkillsFormArray",
        value: function deleteSkillsFormArray(i) {
          var deleteSkills = this.skillsForm.controls["skills"];
          deleteSkills.removeAt(i);
          console.log(this.skillsForm.value.skills.length);

          if (this.skillsForm.value.skills.length == 0) {
            this.skillsClicked = false;
          }
        }
        /* deleting specific data */

      }, {
        key: "onDeleteSkill",
        value: function onDeleteSkill(skillId) {
          var _this25 = this;

          this.deleteSkill(skillId).subscribe(function (data) {
            console.log(data);
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
            }).then(function (result) {
              if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Deleted!', 'Your file has been deleted.', 'success');

                _this25.update();

                _this25.modalService.dismissAll();
              }
            });
          });
        }
      }, {
        key: "deleteSkill",
        value: function deleteSkill(id) {
          return this.http["delete"]('http://localhost:3000/skills/' + id);
        }
        /*  edit cycle for skill   */

      }, {
        key: "cancelEditSkill",
        value: function cancelEditSkill() {
          this.skillEditing = false;
          this.skillEdit.reset();
        }
      }, {
        key: "getSkillId",
        value: function getSkillId(id) {
          this.skillId = id;
          this.skillEditing = true;
          var filtered = this.skills.filter(function (item) {
            return item.id == id;
          });
          this.skillEdit.patchValue({
            skill: filtered[0].skill,
            percentage: filtered[0].percentage
          });
        }
      }, {
        key: "onSubmitSkillEdit",
        value: function onSubmitSkillEdit(form, id) {
          var _this26 = this;

          console.log(form);
          var skillObj = {
            skill: this.skillEdit.value.skill,
            percentage: this.skillEdit.value.percentage
          };
          this.http.patch('http://localhost:3000/skills/' + id, skillObj).subscribe(function (data) {
            _this26.toast.success("Skill Updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this26.modalService.dismissAll();

            _this26.update();

            _this26.skillEdit.reset();
          }, function (err) {
            _this26.toast.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });
          });
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this27 = this;

          this.modalService.open(content, {
            size: 'lg'
          }).result.then(function (result) {
            _this27.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this27.closeResult = "Dismissed ".concat(_this27.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return SkillsComponent;
    }();

    SkillsComponent.ɵfac = function SkillsComponent_Factory(t) {
      return new (t || SkillsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    SkillsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SkillsComponent,
      selectors: [["app-skills"]],
      decls: 13,
      vars: 2,
      consts: [[1, "skills"], [1, "skills_content"], [1, "skills_content_title"], ["class", "no-data-found-wrapper", 4, "ngIf"], ["class", "progress-sec with-edit col-lg-6 col-md-6 col-sm-12", 4, "ngFor", "ngForOf"], [1, "skills_icon"], ["title", "", 1, "skills_icon_add-icon", 3, "click"], [1, "la", "la-plus"], [1, "card-content"], [1, "card-body", "p-1"], ["addMore", ""], [1, "no-data-found-wrapper"], [1, "no-data-found-wrapper_paragraph"], [1, "progress-sec", "with-edit", "col-lg-6", "col-md-6", "col-sm-12"], [1, "skills_content_list"], [1, "row"], [1, "col-10"], [1, "skills_content_heading"], [1, "col-2", "text-right"], [1, "skills_content_list_percentage", "text-right"], [1, "col-12"], [1, "progressbar"], [1, "progress", "skills_content_progressbar", 3, "ngStyle"], [1, "skills_content_edit-icon"], [1, "action_job"], [1, "skills_content_action-list", 3, "click"], [1, "edit-popup", "skills_content_action-list_action-popup"], ["title", "", 3, "click"], [1, "la", "la-pencil", "skills_content_action-list_action-icon"], [1, "card-body"], ["edit", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [1, "edu-history"], [3, "formGroup", "ngSubmit"], [1, "col-lg-8"], [1, "form-group"], [1, "form-control-label"], ["formControlName", "skill", "placeholder", "Skill Name", "type", "text"], [1, "col-lg-4"], ["formControlName", "percentage", "type", "number", "min", "1"], [1, "d-flex", "pt-4", "modal-btn-wrapper"], ["type", "button", 1, "btn", "close", 3, "click"], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"], ["formArrayName", "skills", "class", "resumeadd-form", 4, "ngFor", "ngForOf"], ["type", "button", 1, "add-more-btn", 3, "disabled", "click"], ["type", "button", "aria-label", "Close", 1, "btn", "close", 3, "click"], ["formArrayName", "skills", 1, "resumeadd-form"], [1, "row", "align-items-start", 3, "formGroupName"], [1, "col-lg-12"], ["class", "col-lg-12", 4, "ngIf"], ["formControlName", "skill", "type", "text", "placeholder", "Skill Title"], ["type", "number", "formControlName", "percentage", "min", "1", "placeholder", "Skill Proffecient"], [1, "delete-more", "d-flex", "mt-3"], ["title", "", 1, "ml-auto", 3, "click"], [1, "la", "la-close"]],
      template: function SkillsComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SkillsComponent_div_4_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SkillsComponent_div_5_Template, 25, 5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SkillsComponent_Template_a_click_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r330);

            var _r300 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            return ctx.open(_r300);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SkillsComponent_ng_template_11_Template, 19, 4, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.skills.length == 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skills);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultStyleDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.skills[_ngcontent-%COMP%] {\n  padding: 1% 10px 0;\n}\n\n.skills_content_title[_ngcontent-%COMP%] {\n  font-size: 20px !important;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.skills_icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 4%;\n  vertical-align: top;\n  font-size: 20px;\n  color: #27bfc0;\n  position: relative;\n  top: 7px;\n}\n\n.skills_icon_add-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  background-color: #707070;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  font-weight: 900;\n  color: #ffffff;\n  display: inline-block;\n  position: relative;\n}\n\n.skills_icon_add-icon[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n}\n\n.skills_icon_add-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background-color: transparent;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n.skills_content[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 90%;\n}\n\n.skills_content_action-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 18px;\n  left: 5px;\n}\n\n.skills_content_action-list_action-icon[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.skills_content_action-list_action-popup[_ngcontent-%COMP%] {\n  background-color: #27bfc0;\n  color: #ffffff;\n}\n\n.skills_content_action-list_action-popup[_ngcontent-%COMP%]::before {\n  background-color: #27bfc0;\n}\n\n.skills_content_list[_ngcontent-%COMP%] {\n  font-size: 17px;\n  list-style: disc;\n}\n\n.skills_content_list_percentage[_ngcontent-%COMP%] {\n  color: #e59a12;\n  font-weight: normal;\n  font-size: 14px;\n}\n\n.skills_content_progressbar[_ngcontent-%COMP%] {\n  height: 100%;\n  border-radius: 40px;\n  overflow: visible;\n  color: #27bfc0 !important;\n  background-color: #27bfc0 !important;\n}\n\n.skills_content_heading[_ngcontent-%COMP%] {\n  font-size: 18px;\n  display: inline-block;\n  width: 96%;\n  color: #0b1b46;\n  font-family: \"mainFontMedium\";\n}\n\n.skills_content[_ngcontent-%COMP%]   .progressbar[_ngcontent-%COMP%] {\n  height: 14px;\n  position: relative;\n}\n\n.la.la-plus[_ngcontent-%COMP%] {\n  background-color: #707070 !important;\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 0px;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.btns-action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 5px;\n  color: white;\n}\n\n.btns-action_saveBtn[_ngcontent-%COMP%] {\n  background-color: #27bfc0;\n}\n\n.btns-action_deleteBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n}\n\n.edu-history[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvc2tpbGxzL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9za2lsbHMvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvc2tpbGxzL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGNhbmRpZGF0ZS1jb21wb25lbnRzXFx2aWV3LXJlc3VtZVxcc2tpbGxzXFxza2lsbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFXO0VBQ1gsY0FBYztBQ0RoQjs7QURJQTtFQUNFLG9DQUFrRDtFQUNsRCw0QkFBOEI7RUFDOUIsb0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUNEbkI7O0FESUE7RUFDRSxrQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGdCQUF3QjtFQUN4QixZQUFzQjtBQ0R4Qjs7QURJQTs7RUFFRSwrQkFBb0M7RUFBcEMsd0JBQW9DO0VBQ3BDLHlCQUEyQjtVQUEzQixtQkFBMkI7RUFDM0IsV0FBeUI7RUFDekIsV0FBeUI7RUFDekIsa0NBQXdDO0VBQ3hDLGVBQTJCO0VBQzNCLGtCQUE2QjtFQUM3QixlQUF3QjtFQUN4QixnQkFBc0I7RUFHdEIsNERBQXFFO0FDSHZFOztBRFZB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aUJBQWlCO0VBQ2pCLGVBQWU7QUY2Y3ZCOztBRXpjQTtFQUNJLG1CQUFtQjtFQUNuQixlQUFlO0FGNGNuQjs7QUFFQTtFRXpjSSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLGVBQWU7QUYyY25COztBRXRjQTtFQUVRLFdBQVc7RUFDWCxZQUFZO0FGd2NwQjs7QUV0Y0k7RUFDSSx5QkQ5UVM7QUR1dEJqQjs7QUV2Y0k7RUFDSSx5QkRoUk87QUQwdEJmOztBRXZjQTtFQUNJLG1CQUFtQjtBRjBjdkIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9za2lsbHMvc2tpbGxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGggOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgnYXNzZXRzL2ltZy9QYXR0ZXJuLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemUgICAgOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDIycHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xyXG4gIGhlaWdodCAgICAgICAgICA6IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlLFxyXG4uYm9yZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDE1cHggMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgIDogMDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuICAvLyB6LWluZGV4ICAgICAgICAgOiA5OTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLXJpZ2h0ICA6IGF1dG87XHJcbiAgICBmb250LWZhbWlseSAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplICAgICA6IDIycHg7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctdG9wICAgOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuam9iLWlzLmZ0IHtcclxuICAgIG1hcmdpbiAgICAgICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gICYrLnRhYnMtd3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICB3aWR0aCAgOiA5MCU7XHJcbiAgbWFyZ2luIDogODBweCBhdXRvIDAgIWltcG9ydGFudDtcclxuICBmbG9hdCAgOiBub25lO1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLnRhYnMtd3JhcHBlciB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogMXB4IHNvbGlkICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogNXB4IDAgMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICRzdGVlbDtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbiAgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaW5kaWdvO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQgICA6ICcnO1xyXG4gICAgZGlzcGxheSAgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgIDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemUgICA6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAyLjU7XHJcbiAgICAgICAgcGFkZGluZyAgICAgOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5IDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbnB1dHMgc3R5bGVcclxuXHJcbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDA7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHggMTBweDtcclxuICAvLyBib3JkZXItbGVmdCAgOiAycHggc29saWQgICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDNweDtcclxuICBtYXJnaW4tYm90dG9tICAgOiAxMHB4O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgdHJhbnNpdGlvbiA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQgOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQgIDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgIDogMS4zMTtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseSAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodCAgIDogMTBweDtcclxuICAgIGJvdHRvbSAgOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgLCB0ZXh0YXJlYSAsIHNlbGVjdCB7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b20gICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwIDRweDtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMTNweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBtYXJnaW4gICAgICAgIDogLTVweCAwIDMwcHg7XHJcbiAgY29sb3IgICAgICAgICA6IGdyZXk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoIDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheSAgICAgICA6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG59XHJcblxyXG4uc2VsZWN0LXVzZXItdGFicyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXR3bztcclxuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZsb2F0ICAgICAgICAgICAgICAgIDogbm9uZTtcclxuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAycHggc29saWQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzICAgICA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplICAgICAgICAgICAgOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXN0cmV0Y2ggICAgICAgICA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgICAgICAgOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgICAgICA6IGxlZnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgOiA1cHggMTBweDtcclxuICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3IgIDogJGJvcmRlci1jb2xvcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5mYS1leWUtc2xhc2g6aG92ZXIsXHJcbi5mYS1leWU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gIGJvcmRlciAgICAgICAgOiBub25lO1xyXG4gIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICBmb250LXNpemUgICAgIDogMThweDtcclxuICB3aWR0aCAgICAgICAgIDogNDBweDtcclxuICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAxNnB4O1xyXG4gIHJpZ2h0ICAgICAgICAgOiA1cHg7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvciAgICAgOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBvcGFjaXR5IDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wICAgICA6IDE2cHg7XHJcbiAgcmlnaHQgICA6IDVweDtcclxuICB3aWR0aCAgIDogNDBweDtcclxuICBjdXJzb3IgIDogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmxhLmxhLXBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA2MDA7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1vcmUtYnRuIHtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxNHB4O1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICMwMDlEQTA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBtYXJnaW4gICAgICA6IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbiAgOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseSA6IFNlZ29lVUk7XHJcbiAgICBmb250LXNpemUgICA6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCA6IDEuNTtcclxuICAgIGNvbG9yICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1idG4td3JhcHBlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoICAgICAgICAgIDogMTAwJTtcclxuICAvLyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZyAgICAgICA6IDhweCAyMHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBoZWlnaHQgICAgICAgIDogYXV0bztcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5zYXZlQnRuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yICAgIDogJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlciAgICA6MXB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bWVhZGQtZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkTW9yZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvciAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICBjb2xvciAgICAgICAgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6ICMwMDlEQTAgIDtcclxuICBwYWRkaW5nICAgICAgICAgICAgICA6IDRweCAxNXB4IDRweCA4cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlci1yaWdodC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0ICAgICAgICAgIDogNjAwO1xyXG59XHJcblxyXG4uc2F2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdG4ge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVye1xyXG4gIHBhZGRpbmctdG9wOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICBjb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICAmX2NyZWF0ZS1uZXd7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmlzLWludmFsaWR7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG4ucmVxdWlyZWQtZXJyb3J7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDo1JTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmVtcGx5LWxpc3R7XHJcbiAgJjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvUGF0dGVybi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgcGFkZGluZzogNXB4IDIycHg7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1haW4tdGl0bGUsXG4uYm9yZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNlZGVmZjc7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tdGl0bGUgaDMsXG4uYm9yZGVyLXRpdGxlIGgzIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBiMWI0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW4tdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSxcbi5ib3JkZXItdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuam9iLWlzLmZ0LFxuLmJvcmRlci10aXRsZSAuam9iLWlzLmZ0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1haW4tdGl0bGUgKyAudGFicy13cmFwcGVyLFxuLmJvcmRlci10aXRsZSArIC50YWJzLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi50YWJzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVmZjc7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBjb2xvcjogIzg4ODc5NTtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxYjQ2O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTU5YTEyO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCB0ZXh0YXJlYSwgLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsIC5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luOiAtNXB4IDAgMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLmZhLWV5ZS1zbGFzaDpob3Zlcixcbi5mYS1leWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSAubGEubGEtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwtYm9keSAuYWRkLW1vcmUtYnRuIHtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzBiMWI0Njtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5zYXZlQnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5jbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyO1xuICBjb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJvZHkgZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yZXN1bWVhZGQtZm9ybSB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkTW9yZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zYXZlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tCdG4ge1xuICBjb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnJlbTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyX2NyZWF0ZS1uZXcge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWlyZWQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZW1wbHktbGlzdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5za2lsbHMge1xuICBwYWRkaW5nOiAxJSAxMHB4IDA7XG59XG5cbi5za2lsbHNfY29udGVudF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzBiMWI0NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnNraWxsc19pY29uIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA3cHg7XG59XG5cbi5za2lsbHNfaWNvbl9hZGQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzcwNzA3MDtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5za2lsbHNfaWNvbl9hZGQtaWNvbjpob3ZlciB7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uc2tpbGxzX2ljb25fYWRkLWljb24gaSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDUwJTtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uc2tpbGxzX2NvbnRlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA5MCU7XG59XG5cbi5za2lsbHNfY29udGVudF9hY3Rpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxOHB4O1xuICBsZWZ0OiA1cHg7XG59XG5cbi5za2lsbHNfY29udGVudF9hY3Rpb24tbGlzdF9hY3Rpb24taWNvbiB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc2tpbGxzX2NvbnRlbnRfYWN0aW9uLWxpc3RfYWN0aW9uLXBvcHVwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi5za2lsbHNfY29udGVudF9hY3Rpb24tbGlzdF9hY3Rpb24tcG9wdXA6OmJlZm9yZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzA7XG59XG5cbi5za2lsbHNfY29udGVudF9saXN0IHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaXN0LXN0eWxlOiBkaXNjO1xufVxuXG4uc2tpbGxzX2NvbnRlbnRfbGlzdF9wZXJjZW50YWdlIHtcbiAgY29sb3I6ICNlNTlhMTI7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNraWxsc19jb250ZW50X3Byb2dyZXNzYmFyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xufVxuXG4uc2tpbGxzX2NvbnRlbnRfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTYlO1xuICBjb2xvcjogIzBiMWI0NjtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuLnNraWxsc19jb250ZW50IC5wcm9ncmVzc2JhciB7XG4gIGhlaWdodDogMTRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGEubGEtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcbn1cblxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzI3YmZjMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tZ3JvdXAgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBib3JkZXI6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luOiAtNXB4IDAgMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLmZhLWV5ZS1zbGFzaDpob3ZlciwgLmZhLWV5ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5waWNrOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnRucy1hY3Rpb24gYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0bnMtYWN0aW9uX3NhdmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwO1xufVxuXG4uYnRucy1hY3Rpb25fZGVsZXRlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbn1cblxuLmVkdS1oaXN0b3J5IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbiIsIiRsaWdodC1ncmV5OiAjZmFmYWZhO1xyXG4kd2FybS1ncmV5IDojNzA3MDcwO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHdhcm0tZ3JleS10d286ICM5ZTllOWU7XHJcbiRkYXJrLWluZGlnbyA6ICMwYjFiNDY7XHJcbiR3aGl0ZS10d286I2VmZWZlZjtcclxuJHRlYWxpc2ggOiMyN2JmYzA7XHJcbiRvcmFuZ2U6I2U1OWExMjtcclxuJGJvcmRlci1jb2xvcjojY2FjYWNhO1xyXG4kZHVzazojNTQ1ZjdkO1xyXG4kYmxhY2s6IzJhMmEyYTtcclxuJHN0ZWVsOiAjODg4Nzk1O1xyXG4kd2hpdGUtZm91cjojZmVmZWZlO1xyXG4kcGFsZS1ncmV5OiNmM2Y0Zjk7IiwiQGltcG9ydCBcIi4uLy4uLy4uLy4uL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vLi4vZ2VuZXJhbFwiO1xyXG5cclxuLnNraWxsc3tcclxuICAgIHBhZGRpbmc6IDElIDEwcHggMDtcclxuICAgICZfY29udGVudF90aXRsZXtcclxuICAgICAgICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogJGRhcmstaW5kaWdvOyAgICBcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgJl9pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0JTtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiA3cHg7XHJcbiAgICAgICAgJl9hZGQtaWNvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2FybS1ncmV5O1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjkwMCA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkd2hpdGU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgICZfY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAmX2FjdGlvbi1saXN0e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogMThweDtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAmX2FjdGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICZfYWN0aW9uLXBvcHVwe1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgJjo6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfbGlzdHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogZGlzYztcclxuICAgICAgICAgICAgJl9wZXJjZW50YWdle1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcHJvZ3Jlc3NiYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmX2hlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogOTYlO1xyXG4gICAgICAgICAgICBjb2xvcjogJGRhcmstaW5kaWdvOyAgICBcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIlxyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvZ3Jlc3NiYXJ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubGEubGEtcGx1c3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJtLWdyZXkgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vIGlucHV0cyBzdHlsZVxyXG5cclxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9se1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAwO1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgOiBsZWZ0O1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICAvLyBib3JkZXItbGVmdCAgOiAycHggc29saWQgICRib3JkZXItY29sb3I7XHJcbiAgICBiYWNrZ3JvdW5kICAgICAgOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICA6IDNweDtcclxuICAgIG1hcmdpbi1ib3R0b20gICAgICA6IDEwcHg7XHJcblxyXG4gICAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRlYWxpc2g7XHJcbiAgICAgICAgdHJhbnNpdGlvbiA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXIgICAgICAgICAgOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbSAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgICA6IDAgNHB4O1xyXG4gICAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgJjpmb2N1cyB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRleHR7XHJcbiAgICBtYXJnaW46IC01cHggMCAzMHB4O1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbn1cclxuZm9ybSB0ZXh0YXJlYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG59XHJcbmZvcm0gbGFiZWwge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcclxuICAgIGNvbG9yOiAkd2FybS1ncmV5LXR3bztcclxufVxyXG5cclxuLnNlbGVjdC11c2VyLXRhYnMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXR3bztcclxuICAgIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDVweDtcclxuICAgIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBib3JkZXIgICAgICAgICAgICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICBmbG9hdCAgICAgICAgICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgZGlzcGxheSAgICAgICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgICAgICAgOiAycHggc29saWQ7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA1cHg7XHJcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgICAgICAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseSAgICAgICAgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgICBmb250LXN0cmV0Y2ggICAgICAgICA6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlICAgICAgICAgICA6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodCAgICAgICAgICA6IDEuMzY7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmcgICAgICAgOiBub3JtYWw7XHJcbiAgICAgICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBsZWZ0O1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICAgICAgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgcGFkZGluZyAgICAgICAgICAgICAgOiA1cHggMTBweDtcclxuICAgICAgICB0cmFuc2l0aW9uICAgICAgICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICYuYWN0aXZlIHtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbmNvbG9yICA6ICRib3JkZXItY29sb3I7XHJcbm9wYWNpdHk6IDE7XHJcbi8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbi8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbmNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbi8qIE1pY3Jvc29mdCBFZGdlICovXHJcbmNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcbiAgXHJcbi5mYS1leWUtc2xhc2g6aG92ZXIsLmZhLWV5ZTpob3ZlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWNre1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgJjo6YmVmb3Jle1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICB9XHJcbn1cclxuLmRhdGVJbnB1dHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4gIFt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDE2cHg7XHJcbiAgICByaWdodDogNXB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuXHJcbi8vIGJ0bnNcclxuLmJ0bnMtYWN0aW9ue1xyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuICAgICZfc2F2ZUJ0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaDtcclxuICAgIH1cclxuICAgICZfZGVsZXRlQnRue1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6JG9yYW5nZVxyXG4gICAgfVxyXG59XHJcbi5lZHUtaGlzdG9yeSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkillsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-skills',
          templateUrl: './skills.component.html',
          styleUrls: ['./skills.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"]
        }, {
          type: services_candidate_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/view-resume/view-resume.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/candidate-components/view-resume/view-resume.component.ts ***!
    \***************************************************************************/

  /*! exports provided: ViewResumeComponent */

  /***/
  function srcAppCandidateComponentsViewResumeViewResumeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumeComponent", function () {
      return ViewResumeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var app_candidate_components_view_resume_education_education_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! app/candidate-components/view-resume/education/education.component */
    "./src/app/candidate-components/view-resume/education/education.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/candidate-components/view-resume/experience/experience.component */
    "./src/app/candidate-components/view-resume/experience/experience.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/candidate-components/view-resume/skills/skills.component */
    "./src/app/candidate-components/view-resume/skills/skills.component.ts");

    var ViewResumeComponent =
    /*#__PURE__*/
    function () {
      function ViewResumeComponent() {
        _classCallCheck(this, ViewResumeComponent);
      }

      _createClass(ViewResumeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ViewResumeComponent;
    }();

    ViewResumeComponent.ɵfac = function ViewResumeComponent_Factory(t) {
      return new (t || ViewResumeComponent)();
    };

    ViewResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewResumeComponent,
      selectors: [["app-view-resume"]],
      decls: 26,
      vars: 0,
      consts: [[1, "resume"], [1, "row", "candidate", "no-gutters"], [1, "border-title"], [1, "container"], [1, "tabs-wrapper"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-resume-tab", "data-toggle", "pill", "href", "#pills-resume", "role", "tab", "aria-controls", "pills-resume", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-toggle", "pill", "href", "#pills-contact", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], [1, "col-lg-12", "px-4", "mx-auto"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], [1, ""], ["id", "pills-resume", "role", "tabpanel", "aria-labelledby", "pills-resume-tab", 1, "tab-pane", "fade"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"]],
      template: function ViewResumeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Resume");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-education", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-experience", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-skills", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [app_candidate_components_view_resume_education_education_component__WEBPACK_IMPORTED_MODULE_1__["EducationComponent"], app_candidate_components_view_resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_2__["ExperienceComponent"], app_candidate_components_view_resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_3__["SkillsComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvdmlldy1yZXN1bWUvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF9nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL3ZpZXctcmVzdW1lL3ZpZXctcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcYXBwXFxjYW5kaWRhdGUtY29tcG9uZW50c1xcdmlldy1yZXN1bWVcXHZpZXctcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBVztFQUNYLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxvQ0FBa0Q7RUFDbEQsNEJBQThCO0VBQzlCLG9CQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FDRG5COztBRElBO0VBQ0Usa0JBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixnQkFBd0I7RUFDeEIsWUFBc0I7QUNEeEI7O0FESUE7O0VBRUUsK0JBQW9DO0VBQXBDLHdCQUFvQztFQUNwQyx5QkFBMkI7VUFBM0IsbUJBQTJCO0VBQzNCLFdBQXlCO0VBQ3pCLFdBQXlCO0VBQ3pCLGtDQUF3QztFQUN4QyxlQUEyQjtFQUMzQixrQkFBNkI7RUFDN0IsZUFBd0I7RUFDeEIsZ0JBQXNCO0VBR3RCLDREQUFxRTtBQ0h2RTs7QURWQTs7RUFpQkksa0JBQW9CO0VBQ3BCLDZCQUFn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QjtFQUM1QixnQ0FBZ0M7QUMxQmxDOztBRDRCQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLFNBQVE7RUFDUixlQUFlO0FDekJqQjs7QUQyQkE7RUFFSSwyQkFBMkI7QUN6Qi9COztBRDZCQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDMUJsQjs7QUQ2QkE7RUFDRSxzQkFBc0I7QUMxQnhCOztBRTdiQTtFQUNJLGtCQUFrQjtBRmdjdEIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy92aWV3LXJlc3VtZS92aWV3LXJlc3VtZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoIDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoJ2Fzc2V0cy9pbWcvUGF0dGVybi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplICAgIDogMjAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAyMnB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93ICAgICAgICA6IGhpZGRlbjtcclxuICBoZWlnaHQgICAgICAgICAgOiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSxcclxuLmJvcmRlci10aXRsZSB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogc29saWQgMC41cHggI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiAxNXB4IDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b20gICAgICA6IDA7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcbiAgLy8gei1pbmRleCAgICAgICAgIDogOTk7XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1yaWdodCAgOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHkgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBjb2xvciAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcclxuICB9XHJcblxyXG4gIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmpvYi1pcy5mdCB7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmKy50YWJzLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgd2lkdGggIDogOTAlO1xyXG4gIG1hcmdpbiA6IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQgIDogbm9uZTtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbi50YWJzLXdyYXBwZXIge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IDFweCBzb2xpZCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDVweCAwIDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b20gICA6IDIwcHg7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAkc3RlZWw7XHJcblxyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxyXG4gIC5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWluZGlnbztcclxuICAgIGJhY2tncm91bmQgICAgICA6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XHJcbiAgICBjb250ZW50ICAgOiAnJztcclxuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xyXG4gICAgd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICA6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplICAgOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMi41O1xyXG4gICAgICAgIHBhZGRpbmcgICAgIDogMDtcclxuICAgICAgICBmb250LWZhbWlseSA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gaW5wdXRzIHN0eWxlXHJcblxyXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tICAgOiAwO1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGxlZnQ7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgLy8gYm9yZGVyLWxlZnQgIDogMnB4IHNvbGlkICAkYm9yZGVyLWNvbG9yO1xyXG4gIGJhY2tncm91bmQgICAgICA6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTBweDtcclxuXHJcbiAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGVhbGlzaDtcclxuICAgIHRyYW5zaXRpb24gOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0IDogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaCA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICA6IDEuMzE7XHJcbiAgICBmb250LXdlaWdodCAgOiA1MDA7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHkgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG5cclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQgICA6IDEwcHg7XHJcbiAgICBib3R0b20gIDogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0ICwgdGV4dGFyZWEgLCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogMCA0cHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDEzcHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgbWFyZ2luICAgICAgICA6IC01cHggMCAzMHB4O1xyXG4gIGNvbG9yICAgICAgICAgOiBncmV5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIHRleHRhcmVhIHtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXkgICAgICAgOiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xyXG4gIGNvbG9yOiAkd2FybS1ncmV5LXR3bztcclxufVxyXG5cclxuLnNlbGVjdC11c2VyLXRhYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10d287XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweDtcclxuICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdCAgICAgICAgICAgICAgICA6IG5vbmU7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNXB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICAgIGN1cnNvciAgICAgICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5ICAgICAgICAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zdHJldGNoICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgICAgICAgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICAgICAgIDogMS4zNjtcclxuICAgIGxldHRlci1zcGFjaW5nICAgICAgIDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBsZWZ0O1xyXG4gICAgY29sb3IgICAgICAgICAgICAgICAgOiAkd2FybS1ncmV5LXR3bztcclxuICAgIHBhZGRpbmcgICAgICAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDBweDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yICA6ICRib3JkZXItY29sb3I7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kICAgIDogI2ZmZjtcclxuICBib3JkZXIgICAgICAgIDogbm9uZTtcclxuICBjb2xvciAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgZm9udC1zaXplICAgICA6IDE4cHg7XHJcbiAgd2lkdGggICAgICAgICA6IDQwcHg7XHJcbiAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gIC8vIHRvcDogMTZweDtcclxuICByaWdodCAgICAgICAgIDogNXB4O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcCAgICAgOiAxNnB4O1xyXG4gIHJpZ2h0ICAgOiA1cHg7XHJcbiAgd2lkdGggICA6IDQwcHg7XHJcbiAgY3Vyc29yICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5sYS5sYS1wbHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1tb3JlLWJ0biB7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTRweDtcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjMDA5REEwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG5cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgbWFyZ2luICAgICAgOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ24gIDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHkgOiBTZWdvZVVJO1xyXG4gICAgZm9udC1zaXplICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgOiAxLjU7XHJcbiAgICBjb2xvciAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aCAgICAgICAgICA6IDEwMCU7XHJcbiAgLy8gcGFkZGluZzogMCAxNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmcgICAgICAgOiA4cHggMjBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IGF1dG87XHJcbiAgICBmb250LXNpemUgICAgIDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICYuc2F2ZUJ0biB7XHJcbiAgICAgIGJvcmRlci1jb2xvciAgICA6ICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jbG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXIgICAgOjFweCBzb2xpZCAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdW1lYWRkLWZvcm0ge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFkZE1vcmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3IgICAgIDogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3IgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgY29sb3IgICAgICAgICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiAjMDA5REEwICA7XHJcbiAgcGFkZGluZyAgICAgICAgICAgICAgOiA0cHggMTVweCA0cHggOHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTAgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXItcmlnaHQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICBmb250LXdlaWdodCAgICAgICAgICA6IDYwMDtcclxufVxyXG5cclxuLnNhdmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogd2hpdGVcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcntcclxuICBwYWRkaW5nLXRvcDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgJl9jcmVhdGUtbmV3e1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pcy1pbnZhbGlke1xyXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlcXVpcmVkLWVycm9ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRvcDogNSU7XHJcbiAgcmlnaHQ6NSU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5lbXBseS1saXN0e1xyXG4gICY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL1BhdHRlcm4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAyMnB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYWluLXRpdGxlLFxuLmJvcmRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXRpdGxlIGgzLFxuLmJvcmRlci10aXRsZSBoMyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5idG4uYnRuLXByaW1hcnksXG4uYm9yZGVyLXRpdGxlIC5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1haW4tdGl0bGUgLmpvYi1pcy5mdCxcbi5ib3JkZXItdGl0bGUgLmpvYi1pcy5mdCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tYWluLXRpdGxlICsgLnRhYnMtd3JhcHBlcixcbi5ib3JkZXItdGl0bGUgKyAudGFicy13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG4udGFicy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZmY3O1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcbiAgY29sb3I6ICM4ODg3OTU7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMWI0NjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2U1OWExMjtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkgYSB7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi41O1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXA6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjdiZmMwO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1ncm91cCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG4uZm9ybS1ncm91cCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEsIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogLTVweCAwIDMwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzllOWU5ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbi5mYS1leWUtc2xhc2g6aG92ZXIsXG4uZmEtZXllOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGljayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5waWNrOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkgLmxhLmxhLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOURBMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1vZGFsLWJvZHkgLmFkZC1tb3JlLWJ0biB7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOURBMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHggMCAwO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFNlZ29lVUk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwYjFiNDY7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uc2F2ZUJ0biB7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uY2xvc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMjtcbiAgY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1ib2R5IGZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmVzdW1lYWRkLWZvcm0ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmFkZE1vcmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4IDE1cHggNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2F2ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbn1cblxuLnNhdmVCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrQnRuIHtcbiAgY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJyZW07XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcl9jcmVhdGUtbmV3IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLnJlcXVpcmVkLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmVkO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVtcGx5LWxpc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWxwLWJsb2NrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG59XG4iLCIkbGlnaHQtZ3JleTogI2ZhZmFmYTtcclxuJHdhcm0tZ3JleSA6IzcwNzA3MDtcclxuJHdoaXRlOiNmZmZmZmY7XHJcbiR3YXJtLWdyZXktdHdvOiAjOWU5ZTllO1xyXG4kZGFyay1pbmRpZ28gOiAjMGIxYjQ2O1xyXG4kd2hpdGUtdHdvOiNlZmVmZWY7XHJcbiR0ZWFsaXNoIDojMjdiZmMwO1xyXG4kb3JhbmdlOiNlNTlhMTI7XHJcbiRib3JkZXItY29sb3I6I2NhY2FjYTtcclxuJGR1c2s6IzU0NWY3ZDtcclxuJGJsYWNrOiMyYTJhMmE7XHJcbiRzdGVlbDogIzg4ODc5NTtcclxuJHdoaXRlLWZvdXI6I2ZlZmVmZTtcclxuJHBhbGUtZ3JleTojZjNmNGY5OyIsIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uL2dlbmVyYWwnO1xyXG5cclxuXHJcbi50YWItY29udGVudHtcclxuICAgIHBhZGRpbmc6IDIwcHggNDBweDtcclxufVxyXG4vLyAucHJvZ3Jlc3NiYXIgLnByb2dyZXNze1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZiMjM2YTtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLnByb2dyZXNzIHNwYW57XHJcbi8vICAgICByaWdodDogLTMzcHg7XHJcbi8vICAgICB0b3A6IDRweDtcclxuLy8gfVxyXG4vLyAuZXhhbXBsZS1mb3Jte1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgbGFiZWx7XHJcbi8vICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4vLyBidXR0b257XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBib3JkZXI6ICMwMDlEQTA7XHJcbi8vIH1cclxuXHJcbi8vIC5sYS5sYS1wbHVze1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi8vIC5sYS5sYS1ncmFkdWF0aW9uLWNhcHtcclxuLy8gICAgIGNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcblxyXG4vLyB9XHJcblxyXG4vLyBkaXYucHJvZ3Jlc3N7XHJcbi8vICAgICBjb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG5cclxuLy8gfVxyXG5cclxuLy8gLnBkZi1pbWd7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgICBtYXJnaW46IDIwcHggYXV0byAwO1xyXG4vLyAgICAgZGlzcGxheTogYmxvY2s7XHJcbi8vIH1cclxuLy8gLm1wb3J0b2xpb3tcclxuLy8gICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuLy8gICAgIG1hcmdpbjogYXV0bztcclxuLy8gICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbi8vIH1cclxuXHJcblxyXG4vLyAuYnRuLXN0eWxlLmJ0bi1lZGl0ZWR7XHJcbi8vICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xyXG4vLyAgICAgY29sb3I6ICMwMDlEQTA7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4vLyAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuLy8gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuLy8gICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYnRuLXN0eWxlLmJ0bi1lZGl0ZWQ6aG92ZXJ7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbi8vICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxuLy8gfVxyXG5cclxuLy8gLmZpbGUtdXBsb2FkLWNvbnRhaW5lcntcclxuLy8gICAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4vLyB9XHJcbi8vIC5uYXYtcGlsbHMgLm5hdi1saW5re1xyXG4vLyAgICAgY29sb3I6ICNiN2I3Yjc7XHJcbi8vIH1cclxuLy8gLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLCAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDlEQTA7XHJcbi8vICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuLy8gICAgIGNvbG9yOiAjMDA5ZGEwO1xyXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuLy8gfVxyXG5cclxuLy8gLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XHJcbi8vICAgICBjb250ZW50OiAnJztcclxuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4vLyAgICAgd2lkdGg6IDEwMCU7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIGJhY2tncm91bmQ6ICMwMDlkYTA7XHJcbi8vIH1cclxuXHJcbi8vIC5jYXJke1xyXG4vLyAgICAgcGFkZGluZzogMjBweCAyMHB4IDQwcHg7XHJcbi8vICAgICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpO1xyXG4vLyB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-resume',
          templateUrl: './view-resume.component.html',
          styleUrls: ['./view-resume.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/modules/components/candidate-module/resume.module.ts":
  /*!******************************************************************!*\
    !*** ./src/modules/components/candidate-module/resume.module.ts ***!
    \******************************************************************/

  /*! exports provided: ViewResumeModuel */

  /***/
  function srcModulesComponentsCandidateModuleResumeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumeModuel", function () {
      return ViewResumeModuel;
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


    var _routing_candidate_routing_resume_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/candidate-routing/resume-routing.module */
    "./src/routing/candidate-routing/resume-routing.module.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! routing/user-managment-routing/list-users-routing.module */
    "./src/routing/user-managment-routing/list-users-routing.module.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var app_candidate_components_view_resume_view_resume_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/candidate-components/view-resume/view-resume.component */
    "./src/app/candidate-components/view-resume/view-resume.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_education_education_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/candidate-components/view-resume/education/education.component */
    "./src/app/candidate-components/view-resume/education/education.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! app/candidate-components/view-resume/experience/experience.component */
    "./src/app/candidate-components/view-resume/experience/experience.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! app/candidate-components/view-resume/skills/skills.component */
    "./src/app/candidate-components/view-resume/skills/skills.component.ts");
    /* harmony import */


    var app_candidate_components_view_resume_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! app/candidate-components/view-resume/portfolio/portfolio.component */
    "./src/app/candidate-components/view-resume/portfolio/portfolio.component.ts");

    var ViewResumeModuel = function ViewResumeModuel() {
      _classCallCheck(this, ViewResumeModuel);
    };

    ViewResumeModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ViewResumeModuel
    });
    ViewResumeModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ViewResumeModuel_Factory(t) {
        return new (t || ViewResumeModuel)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_resume_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewResumeRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewResumeModuel, {
        declarations: [app_candidate_components_view_resume_view_resume_component__WEBPACK_IMPORTED_MODULE_7__["ViewResumeComponent"], app_candidate_components_view_resume_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], app_candidate_components_view_resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"], app_candidate_components_view_resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], app_candidate_components_view_resume_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_resume_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewResumeRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewResumeModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_candidate_components_view_resume_view_resume_component__WEBPACK_IMPORTED_MODULE_7__["ViewResumeComponent"], app_candidate_components_view_resume_education_education_component__WEBPACK_IMPORTED_MODULE_8__["EducationComponent"], app_candidate_components_view_resume_experience_experience_component__WEBPACK_IMPORTED_MODULE_9__["ExperienceComponent"], app_candidate_components_view_resume_skills_skills_component__WEBPACK_IMPORTED_MODULE_10__["SkillsComponent"], app_candidate_components_view_resume_portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_11__["PortfolioComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_resume_routing_module__WEBPACK_IMPORTED_MODULE_2__["ViewResumeRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/candidate-routing/resume-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/routing/candidate-routing/resume-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: ViewResumeRoutingModuel */

  /***/
  function srcRoutingCandidateRoutingResumeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewResumeRoutingModuel", function () {
      return ViewResumeRoutingModuel;
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


    var _app_candidate_components_view_resume_view_resume_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/candidate-components/view-resume/view-resume.component */
    "./src/app/candidate-components/view-resume/view-resume.component.ts");

    var routes = [{
      path: "",
      component: _app_candidate_components_view_resume_view_resume_component__WEBPACK_IMPORTED_MODULE_2__["ViewResumeComponent"]
    }];

    var ViewResumeRoutingModuel = function ViewResumeRoutingModuel() {
      _classCallCheck(this, ViewResumeRoutingModuel);
    };

    ViewResumeRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ViewResumeRoutingModuel
    });
    ViewResumeRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ViewResumeRoutingModuel_Factory(t) {
        return new (t || ViewResumeRoutingModuel)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewResumeRoutingModuel, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewResumeRoutingModuel, [{
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
//# sourceMappingURL=modules-components-candidate-module-resume-module-es5.js.map
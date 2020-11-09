function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-candidate-module-profile-module"], {
  /***/
  "./src/app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: CandidateContactComponent */

  /***/
  function srcAppCandidateComponentsCandidateProfileCandidateContactCandidateContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateContactComponent", function () {
      return CandidateContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! services/candidate/complete-profile.service */
    "./src/services/candidate/complete-profile.service.ts");
    /* harmony import */


    var services_candidate_countries_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! services/candidate/countries.service */
    "./src/services/candidate/countries.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CandidateContactComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateContactComponent_div_0_Template_span_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132);

          var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return ctx_r131.open(_r129);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r128.profileData.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r128.profileData.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r128.profileData.phone_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r128.profileData.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r128.profileData.address);
      }
    }

    function CandidateContactComponent_ng_template_3_option_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41, 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var country_r138 = ctx.$implicit;
        var i_r139 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", i_r139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r138.CountryName);
      }
    }

    function CandidateContactComponent_ng_template_3_option_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "--Select State--");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateContactComponent_ng_template_3_option_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var state_r141 = ctx.$implicit;
        var j_r142 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", j_r142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](state_r141.StateName);
      }
    }

    function CandidateContactComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Contact Information");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateContactComponent_ng_template_3_Template_button_click_3_listener($event) {
          var d_r134 = ctx.dismiss;
          return d_r134("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CandidateContactComponent_ng_template_3_Template_form_ngSubmit_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.onSubmitContact(ctx_r144.form);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Country");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "select", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CandidateContactComponent_ng_template_3_Template_select_change_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.onChangeCountry($event.target.value, ctx_r146.selectValue);
        })("ngModelChange", function CandidateContactComponent_ng_template_3_Template_select_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r147.profileData.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CandidateContactComponent_ng_template_3_option_17_Template, 3, 2, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "City");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CandidateContactComponent_ng_template_3_Template_select_change_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r148.onChangeState($event.target.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CandidateContactComponent_ng_template_3_option_23_Template, 2, 0, "option", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CandidateContactComponent_ng_template_3_option_24_Template, 2, 2, "option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone Number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateContactComponent_ng_template_3_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r149.profileData.phone_number = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "E-mail");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateContactComponent_ng_template_3_Template_input_ngModelChange_34_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.profileData.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "input", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateContactComponent_ng_template_3_Template_input_ngModelChange_39_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r151.profileData.address = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateContactComponent_ng_template_3_Template_button_click_41_listener($event) {
          var d_r134 = ctx.dismiss;
          return d_r134("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Save ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r130.contactForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.profileData.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.countryInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r130.stateInfo == "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r130.stateInfo);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.profileData.phone_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.profileData.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r130.profileData.address);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r130.contactForm.invalid);
      }
    }

    var CandidateContactComponent =
    /*#__PURE__*/
    function () {
      function CandidateContactComponent(country, fb, candidateUpdateProfileService, currentRoute, toast, modalService, http) {
        _classCallCheck(this, CandidateContactComponent);

        this.country = country;
        this.fb = fb;
        this.candidateUpdateProfileService = candidateUpdateProfileService;
        this.currentRoute = currentRoute;
        this.toast = toast;
        this.modalService = modalService;
        this.http = http;
        this.stateInfo = [];
        this.countryInfo = [];
        this.cityInfo = [];
        this.editForm = true;
        this.userCompelete = 0;
        /* -------------------------------------------------------------------------- */

        /*                     Form contact Information                       */

        /* -------------------------------------------------------------------------- */

        this.addContactInfoEditMode = true;
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation end                            */

        /* -------------------------------------------------------------------------- */
        // start select countries and city

        this.countryUrl = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";
      }
      /* -------------------------------------------------------------------------- */

      /*                          NGON INit LifeCycle Hook                          */

      /* -------------------------------------------------------------------------- */


      _createClass(CandidateContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
          this.tokenTransform();
          this.candidateId = this.currentRoute.parent.parent.snapshot.params["id"]; // my profile form
          // contact form

          this.contactForm = this.fb.group({
            phone_number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // website: [''],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            country: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          }); // display personal data

          this.displayPersonalInfo();
        }
      }, {
        key: "tokenTransform",
        value: function tokenTransform() {
          this.currentUserId = JSON.parse(atob(window.sessionStorage.getItem("token").split('.')[1])).sub;
        }
      }, {
        key: "displayPersonalInfo",
        value: function displayPersonalInfo() {
          var _this = this;

          // get data from api
          this.candidateUpdateProfileService.getProfileCandidate(this.candidateId).subscribe(function (response) {
            // console.log(response);
            _this.profileData = response; // console.log(this.profileData);

            localStorage.setItem("userId", response.id);
            _this.userId = localStorage.getItem("userId");
          }, function (error) {// console.log(error + 'this is error')
          });
        }
      }, {
        key: "onSubmitContact",
        value: function onSubmitContact(form) {
          var _this2 = this;

          console.log(this.contactForm.value.country);
          console.log(this.contactForm.value);
          var editContact = {
            id: this.userId,
            phone_number: this.contactForm.value.phone_number,
            email: this.contactForm.value.email,
            // website: this.contactForm.value.website,
            address: this.contactForm.value.address,
            city: this.stateName,
            country: this.countryName
          };
          this.candidateUpdateProfileService.editProfileCandidate(editContact, this.currentUserId).subscribe(function (data) {
            // console.log("success social");
            _this2.displayPersonalInfo();

            _this2.onCancelContact();

            _this2.toast.success("Contact Information updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this2.candidateUpdateProfileService.sidebarChart.next(0);
          }, function (error) {
            // console.log("there is error in social");
            _this2.toast.error("Error , Please try again", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });
          }); // social Networks form
        }
      }, {
        key: "onCancelContact",
        value: function onCancelContact() {
          this.addContactInfoEditMode = true;
          this.displayPersonalInfo();
        }
      }, {
        key: "startEditContact",
        value: function startEditContact() {
          this.addContactInfoEditMode = false;
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this3 = this;

          this.modalService.open(content, {
            size: 'lg'
          }).result.then(function (result) {
            _this3.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this3.closeResult = "Dismissed ".concat(_this3.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }, {
        key: "allCountries",
        value: function allCountries() {
          return this.http.get(this.countryUrl);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.subscription) {
            this.subscription.unsubscribe();
          }
        }
      }, {
        key: "getCountries",
        value: function getCountries() {
          var _this4 = this;

          this.country.allCountries().subscribe(function (data2) {
            _this4.countryInfo = data2.Countries;
            console.log('Data:', _this4.countryInfo);
          }, function (err) {
            return console.log(err);
          }, function () {
            return console.log('complete');
          });
        }
      }, {
        key: "onChangeCountry",
        value: function onChangeCountry(countryValue) {
          console.log(countryValue);
          console.log(this.countryInfo[countryValue].CountryName);
          this.countryName = this.countryInfo[countryValue].CountryName;
          this.stateInfo = this.countryInfo[countryValue].States;
          this.cityInfo = this.stateInfo[0].Cities;
          console.log(this.stateInfo);
        }
      }, {
        key: "onChangeState",
        value: function onChangeState(stateValue) {
          this.cityInfo = this.stateInfo[stateValue].Cities;
          console.log(this.stateInfo[stateValue]);
          this.stateName = this.stateInfo[stateValue].StateName;
          console.log(this.cityInfo);
        }
      }]);

      return CandidateContactComponent;
    }();

    CandidateContactComponent.ɵfac = function CandidateContactComponent_Factory(t) {
      return new (t || CandidateContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_countries_service__WEBPACK_IMPORTED_MODULE_6__["CountriesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__["CompleteProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]));
    };

    CandidateContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidateContactComponent,
      selectors: [["app-candidate-contact"]],
      decls: 5,
      vars: 1,
      consts: [["class", "profile", 4, "ngIf"], [1, "card-content"], [1, "card-body", "p-1"], ["EditMode", ""], [1, "profile"], [1, "profile__salary-info"], [1, "profile__summury-info__Edit", "col-3", "ml-auto"], [1, "Edit-icon-wrapper"], ["title", "", 1, "profile__summury-info__Edit-link", "job-is", "ft", 3, "click"], [1, "la", "la-pencil"], [1, "edu-history-sec", "row", "content"], [1, "job-overview", "style2", "row"], [1, "row", "contact-link"], ["src", "../../../../assets/img/icons/city.svg", "alt", ""], ["src", "../../../../assets/img/icons/global.svg", "alt", ""], ["src", "../../../../assets/img/icons/call.svg", "alt", ""], ["src", "../../../../assets/img/icons/email.svg", "alt", ""], ["src", "../../../../assets/img/icons/location-pointer.svg", "alt", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [1, "row", "content"], [1, "col-12"], [1, "form", "content", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "col-lg-6"], [1, "form-group"], ["formControlName", "country", 1, "form-control", 3, "ngModel", "change", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "city", 1, "form-control", 3, "change"], ["value", "-1", 4, "ngIf"], ["type", "text", "formControlName", "phone_number", 3, "ngModel", "ngModelChange"], ["type", "text", "formControlName", "email", 3, "ngModel", "ngModelChange"], [1, "col-lg-12"], ["type", "text", "formControlName", "address", 3, "ngModel", "ngModelChange"], [1, "pt-4", "modal-btn-wrapper"], ["type", "button", "aria-label", "Close", 1, "btn", "close", "backBtn", 3, "click"], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"], [3, "value"], ["selectValue", ""], ["value", "-1"]],
      template: function CandidateContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CandidateContactComponent_div_0_Template, 29, 5, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidateContactComponent_ng_template_3_Template, 45, 9, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile__summury-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.profile__summury-info__details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27bfc0;\n  vertical-align: middle;\n}\n\n.profile__summury-info__details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  line-height: 1.8;\n}\n\n.profile__summury-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.profile__summury-info__img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.profile__summury-info__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: solid 1.5px #27bfc0;\n}\n\n.profile__summury-info__Edit[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n  position: absolute;\n  right: 0;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  background: #9e9e9e;\n  border-color: #9e9e9e;\n  color: white;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white;\n}\n\n.profile__summury-info[_ngcontent-%COMP%]   .upload-info[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.profile__personal-info__form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.profile__personal-info__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.profile__personal-info[_ngcontent-%COMP%]   .edu-history[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.profile[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n  padding-top: 2%;\n  border-bottom: 1px solid #edeff7;\n  padding: 4% 0% 4% 5%;\n}\n\n.profile[_ngcontent-%COMP%]   h3.subtitle[_ngcontent-%COMP%] {\n  color: #009DA0;\n  text-transform: capitalize;\n}\n\n.profile[_ngcontent-%COMP%]   .pf-title[_ngcontent-%COMP%] {\n  margin: 0;\n  margin-bottom: 10px;\n}\n\n.profile[_ngcontent-%COMP%]   .pf-field[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  line-height: 40px !important;\n}\n\n.profile[_ngcontent-%COMP%]   .pf-field[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  padding: 8px 15px !important;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%] {\n  border: 2px solid #009DA0;\n  color: #009DA0;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #009DA0;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: white;\n  color: #009DA0;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%] {\n  border: 2px solid #f26956;\n  color: #f26956;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.profile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-family: Quicksand;\n  font-size: 20px;\n  font-weight: bold;\n  color: #202020;\n  margin: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n@media (max-width: 768px) {\n  .profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%]   figure[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.profile[_ngcontent-%COMP%]   .pf-field[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%], .profile[_ngcontent-%COMP%]   .pf-field[_ngcontent-%COMP%]    > textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 2px solid #e8ecec;\n  border-radius: 8px;\n  padding: 12px 45px 12px 15px;\n  background: #ffffff;\n  font-size: 13px;\n  line-height: 24px;\n  margin-bottom: 20px;\n  padding: 4% 5%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 1%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #009DA0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  font-size: 14px;\n  font-family: Open Sans;\n  margin: 0;\n  font-weight: 500;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%] {\n  border: none;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .wtabs[_ngcontent-%COMP%] {\n  padding: 5% 0% 0% 8%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   .la-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f18a\";\n  font-size: 13px;\n  font-weight: 900;\n  color: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: table;\n  font-size: 16px;\n  font-family: Quicksand;\n  color: #009DA0;\n  font-weight: 500;\n  margin: 0;\n  margin-bottom: 0px;\n  margin-bottom: 7px;\n  margin-top: 3px;\n}\n\n.job-overview.style2[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.contact-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.contact-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.edu-history-sec[_ngcontent-%COMP%] {\n  padding: 0 10px !important;\n}\n\n.edu-history-sec[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLWNvbnRhY3QvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF9nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1jb250YWN0L2NhbmRpZGF0ZS1jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtY29udGFjdC9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtY29udGFjdC9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcYXBwXFxjYW5kaWRhdGUtY29tcG9uZW50c1xcY2FuZGlkYXRlLXByb2ZpbGVcXGNhbmRpZGF0ZS1jb250YWN0XFxjYW5kaWRhdGUtY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVc7RUFDWCxjQUFjO0FDRGhCOztBRElBO0VBQ0Usb0NBQWtEO0VBQ2xELDRCQUE4QjtFQUM5QixvQkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQ0RuQjs7QURJQTtFQUNFLGtCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZ0JBQXdCO0VBQ3hCLFlBQXNCO0FDRHhCOztBRElBOztFQUVFLCtCQUFvQztFQUFwQyx3QkFBb0M7RUFDcEMseUJBQTJCO1VBQTNCLG1CQUEyQjtFQUMz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QTJCO0VBQzNCLGlCQUEyQjtFQUMzQixtQkFBMkI7RUFDM0IsY0FBNEI7QUZ1YnBDOztBRTNtQkE7RUF5TFkscUJBQXFCO0FGc2JqQzs7QUUvbUJBO0VBNkxnQixpQkFBaUI7QUZzYmpDOztBRW5uQkE7RUFnTW9CLGNBQWM7QUZ1YmxDOztBRXZuQkE7RUFxTXdCLGNBQWM7QUZzYnRDOztBRTNuQkE7RUE2TVEsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLFNBQVM7RUFFVCxnQkFBZ0I7QUZpYnhCOztBRXBvQkE7RUFzTlEsWUFBb0I7RUFDcEIsbUJBQW9CO0VBQ3BCLGtCQUFvQjtFQUNwQixjQUFpQjtFQUNqQixpQkFBaUI7QUZrYnpCOztBRTVvQkE7RUE2Tlksb0JBQW9CO0FGbWJoQzs7QUVocEJBO0VBcU9nQixvQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFhO0FGK2E3Qjs7QUVycEJBO0VBeU9vQixnQkFBb0I7RUFDcEIsZUFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQW9CO0FGZ2J4Qzs7QUU1cEJBO0VBaVBnQixjQUFvQjtFQUNwQixlQUFtQjtFQUNuQixzQkFBd0I7RUFDeEIsY0FBc0I7RUFDdEIsZ0JBQWtCO0VBQ2xCLFNBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZUFBa0I7QUYrYWxDOztBRXhhQTtFQUNJLFVBQVU7QUYyYWQ7O0FFeGFJO0VBRVEsb0JBQWE7RUFBYixhQUFhO0FGMGF6Qjs7QUU1YUk7RUFJWSxrQkFBa0I7QUY0YWxDOztBRXZhSTtFQUNJLDBCQUEwQjtBRjBhbEM7O0FFM2FJO0VBR1EsVUFBVTtBRjRhdEIiLCJmaWxlIjoic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtY29udGFjdC9jYW5kaWRhdGUtY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoIDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoJ2Fzc2V0cy9pbWcvUGF0dGVybi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplICAgIDogMjAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAyMnB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93ICAgICAgICA6IGhpZGRlbjtcclxuICBoZWlnaHQgICAgICAgICAgOiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSxcclxuLmJvcmRlci10aXRsZSB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogc29saWQgMC41cHggI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiAxNXB4IDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b20gICAgICA6IDA7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcbiAgLy8gei1pbmRleCAgICAgICAgIDogOTk7XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1yaWdodCAgOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHkgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBjb2xvciAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcclxuICB9XHJcblxyXG4gIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmpvYi1pcy5mdCB7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmKy50YWJzLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgd2lkdGggIDogOTAlO1xyXG4gIG1hcmdpbiA6IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQgIDogbm9uZTtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbi50YWJzLXdyYXBwZXIge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IDFweCBzb2xpZCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDVweCAwIDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b20gICA6IDIwcHg7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAkc3RlZWw7XHJcblxyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxyXG4gIC5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWluZGlnbztcclxuICAgIGJhY2tncm91bmQgICAgICA6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XHJcbiAgICBjb250ZW50ICAgOiAnJztcclxuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xyXG4gICAgd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICA6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplICAgOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMi41O1xyXG4gICAgICAgIHBhZGRpbmcgICAgIDogMDtcclxuICAgICAgICBmb250LWZhbWlseSA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gaW5wdXRzIHN0eWxlXHJcblxyXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tICAgOiAwO1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGxlZnQ7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgLy8gYm9yZGVyLWxlZnQgIDogMnB4IHNvbGlkICAkYm9yZGVyLWNvbG9yO1xyXG4gIGJhY2tncm91bmQgICAgICA6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTBweDtcclxuXHJcbiAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGVhbGlzaDtcclxuICAgIHRyYW5zaXRpb24gOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0IDogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaCA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICA6IDEuMzE7XHJcbiAgICBmb250LXdlaWdodCAgOiA1MDA7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHkgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG5cclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQgICA6IDEwcHg7XHJcbiAgICBib3R0b20gIDogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0ICwgdGV4dGFyZWEgLCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogMCA0cHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDEzcHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgbWFyZ2luICAgICAgICA6IC01cHggMCAzMHB4O1xyXG4gIGNvbG9yICAgICAgICAgOiBncmV5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIHRleHRhcmVhIHtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXkgICAgICAgOiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xyXG4gIGNvbG9yOiAkd2FybS1ncmV5LXR3bztcclxufVxyXG5cclxuLnNlbGVjdC11c2VyLXRhYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10d287XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweDtcclxuICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdCAgICAgICAgICAgICAgICA6IG5vbmU7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNXB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICAgIGN1cnNvciAgICAgICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5ICAgICAgICAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zdHJldGNoICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgICAgICAgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICAgICAgIDogMS4zNjtcclxuICAgIGxldHRlci1zcGFjaW5nICAgICAgIDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBsZWZ0O1xyXG4gICAgY29sb3IgICAgICAgICAgICAgICAgOiAkd2FybS1ncmV5LXR3bztcclxuICAgIHBhZGRpbmcgICAgICAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDBweDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yICA6ICRib3JkZXItY29sb3I7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kICAgIDogI2ZmZjtcclxuICBib3JkZXIgICAgICAgIDogbm9uZTtcclxuICBjb2xvciAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgZm9udC1zaXplICAgICA6IDE4cHg7XHJcbiAgd2lkdGggICAgICAgICA6IDQwcHg7XHJcbiAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gIC8vIHRvcDogMTZweDtcclxuICByaWdodCAgICAgICAgIDogNXB4O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcCAgICAgOiAxNnB4O1xyXG4gIHJpZ2h0ICAgOiA1cHg7XHJcbiAgd2lkdGggICA6IDQwcHg7XHJcbiAgY3Vyc29yICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5sYS5sYS1wbHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1tb3JlLWJ0biB7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTRweDtcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjMDA5REEwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG5cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgbWFyZ2luICAgICAgOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ24gIDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHkgOiBTZWdvZVVJO1xyXG4gICAgZm9udC1zaXplICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgOiAxLjU7XHJcbiAgICBjb2xvciAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aCAgICAgICAgICA6IDEwMCU7XHJcbiAgLy8gcGFkZGluZzogMCAxNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmcgICAgICAgOiA4cHggMjBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IGF1dG87XHJcbiAgICBmb250LXNpemUgICAgIDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICYuc2F2ZUJ0biB7XHJcbiAgICAgIGJvcmRlci1jb2xvciAgICA6ICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jbG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXIgICAgOjFweCBzb2xpZCAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdW1lYWRkLWZvcm0ge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFkZE1vcmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3IgICAgIDogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3IgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgY29sb3IgICAgICAgICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiAjMDA5REEwICA7XHJcbiAgcGFkZGluZyAgICAgICAgICAgICAgOiA0cHggMTVweCA0cHggOHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTAgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXItcmlnaHQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICBmb250LXdlaWdodCAgICAgICAgICA6IDYwMDtcclxufVxyXG5cclxuLnNhdmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogd2hpdGVcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcntcclxuICBwYWRkaW5nLXRvcDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgJl9jcmVhdGUtbmV3e1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pcy1pbnZhbGlke1xyXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlcXVpcmVkLWVycm9ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRvcDogNSU7XHJcbiAgcmlnaHQ6NSU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5lbXBseS1saXN0e1xyXG4gICY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL1BhdHRlcm4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAyMnB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYWluLXRpdGxlLFxuLmJvcmRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXRpdGxlIGgzLFxuLmJvcmRlci10aXRsZSBoMyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5idG4uYnRuLXByaW1hcnksXG4uYm9yZGVyLXRpdGxlIC5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1haW4tdGl0bGUgLmpvYi1pcy5mdCxcbi5ib3JkZXItdGl0bGUgLmpvYi1pcy5mdCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tYWluLXRpdGxlICsgLnRhYnMtd3JhcHBlcixcbi5ib3JkZXItdGl0bGUgKyAudGFicy13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG4udGFicy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZmY3O1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcbiAgY29sb3I6ICM4ODg3OTU7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMWI0NjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2U1OWExMjtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkgYSB7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi41O1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXA6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjdiZmMwO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1ncm91cCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG4uZm9ybS1ncm91cCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEsIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogLTVweCAwIDMwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzllOWU5ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbi5mYS1leWUtc2xhc2g6aG92ZXIsXG4uZmEtZXllOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGljayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5waWNrOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkgLmxhLmxhLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOURBMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1vZGFsLWJvZHkgLmFkZC1tb3JlLWJ0biB7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOURBMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHggMCAwO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFNlZ29lVUk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwYjFiNDY7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uc2F2ZUJ0biB7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uY2xvc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMjtcbiAgY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1ib2R5IGZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmVzdW1lYWRkLWZvcm0ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmFkZE1vcmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4IDE1cHggNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2F2ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbn1cblxuLnNhdmVCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrQnRuIHtcbiAgY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJyZW07XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcl9jcmVhdGUtbmV3IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLnJlcXVpcmVkLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmVkO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVtcGx5LWxpc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWxwLWJsb2NrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvX19kZXRhaWxzIGkge1xuICBjb2xvcjogIzI3YmZjMDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19fZGV0YWlscyBsaSB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjg7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19faW1nIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvX19pbWcgaW1nIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogc29saWQgMS41cHggIzI3YmZjMDtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19fRWRpdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvX19FZGl0LWxpbmsge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgYmFja2dyb3VuZDogIzllOWU5ZTtcbiAgYm9yZGVyLWNvbG9yOiAjOWU5ZTllO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm9fX0VkaXQtbGluazpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvIC51cGxvYWQtaW5mbyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4ucHJvZmlsZV9fcGVyc29uYWwtaW5mb19fZm9ybSB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnByb2ZpbGVfX3BlcnNvbmFsLWluZm9fX2Zvcm0gaW5wdXQge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZmlsZV9fcGVyc29uYWwtaW5mbyAuZWR1LWhpc3RvcnkgPiBpIHtcbiAgZm9udC1zaXplOiA0MHB4O1xufVxuXG4ucHJvZmlsZSAuZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBwYWRkaW5nLXRvcDogMiU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZmY3O1xuICBwYWRkaW5nOiA0JSAwJSA0JSA1JTtcbn1cblxuLnByb2ZpbGUgaDMuc3VidGl0bGUge1xuICBjb2xvcjogIzAwOURBMDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5wcm9maWxlIC5wZi10aXRsZSB7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGUgLnBmLWZpZWxkID4gaSB7XG4gIGxpbmUtaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlIC5wZi1maWVsZCA+IGlucHV0IHtcbiAgcGFkZGluZzogOHB4IDE1cHggIWltcG9ydGFudDtcbn1cblxuLnByb2ZpbGUgLnNhdmVCdG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMDA5REEwO1xuICBjb2xvcjogIzAwOURBMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wcm9maWxlIC5zYXZlQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMDA5REEwO1xufVxuXG4ucHJvZmlsZSAuc2F2ZUJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMDA5REEwO1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyNjk1NjtcbiAgY29sb3I6ICNmMjY5NTY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucHJvZmlsZSAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMDIwMjA7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2ZpbGUgLnByb2ZpbGVfX3N1bW11cnktd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5wcm9maWxlIC5wcm9maWxlX19zdW1tdXJ5LXdyYXBwZXIgZmlndXJlIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9maWxlIC5wcm9maWxlX19zdW1tdXJ5LXdyYXBwZXIgZmlndXJlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG59XG5cbi5wcm9maWxlIC5wZi1maWVsZCA+IGlucHV0LFxuLnByb2ZpbGUgLnBmLWZpZWxkID4gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2U4ZWNlYztcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogOHB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogOHB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMTJweCA0NXB4IDEycHggMTVweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogNCUgNSU7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldyB1bCBsaSBpIHtcbiAgY29sb3I6ICMwMDlEQTA7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwgbGk6aG92ZXIgaSB7XG4gIGNvbG9yOiAjZjI2OTU2O1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3IHVsID4gbGkgaDMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyIC53dGFicyB7XG4gIHBhZGRpbmc6IDUlIDAlIDAlIDglO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiAuam9iLXRpdGxlLXNlYyAuam9iLWxjdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTIgLmpvYi10aXRsZS1zZWMgLmpvYi1sY3RuIC5sYS1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOGFcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2YyNjk1Njtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTIgLmpvYi10aXRsZS1zZWMgaDMge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xuICBjb2xvcjogIzAwOURBMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDdweDtcbiAgbWFyZ2luLXRvcDogM3B4O1xufVxuXG4uam9iLW92ZXJ2aWV3LnN0eWxlMiB1bCA+IGxpIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLmNvbnRhY3QtbGluayBsaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWN0LWxpbmsgbGkgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uZWR1LWhpc3Rvcnktc2VjIHtcbiAgcGFkZGluZzogMCAxMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5lZHUtaGlzdG9yeS1zZWMgbGkge1xuICBwYWRkaW5nOiAwO1xufVxuIiwiJGxpZ2h0LWdyZXk6ICNmYWZhZmE7XHJcbiR3YXJtLWdyZXkgOiM3MDcwNzA7XHJcbiR3aGl0ZTojZmZmZmZmO1xyXG4kd2FybS1ncmV5LXR3bzogIzllOWU5ZTtcclxuJGRhcmstaW5kaWdvIDogIzBiMWI0NjtcclxuJHdoaXRlLXR3bzojZWZlZmVmO1xyXG4kdGVhbGlzaCA6IzI3YmZjMDtcclxuJG9yYW5nZTojZTU5YTEyO1xyXG4kYm9yZGVyLWNvbG9yOiNjYWNhY2E7XHJcbiRkdXNrOiM1NDVmN2Q7XHJcbiRibGFjazojMmEyYTJhO1xyXG4kc3RlZWw6ICM4ODg3OTU7XHJcbiR3aGl0ZS1mb3VyOiNmZWZlZmU7XHJcbiRwYWxlLWdyZXk6I2YzZjRmOTsiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nZW5lcmFsJztcclxuXHJcblxyXG4ucHJvZmlsZSB7XHJcbiAgICAmX19zdW1tdXJ5LWluZm8ge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmX19kZXRhaWxzIHtcclxuICAgICBcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheSAgICA6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW1nIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICA6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgIDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgICAgOiBzb2xpZCAxLjVweCAkdGVhbGlzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fRWRpdCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMTdweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX0VkaXQtbGluayB7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgICAgIDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemUgICA6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgICAgOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51cGxvYWQtaW5mbyB7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheSAgICA6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICZfX3BlcnNvbmFsLWluZm8ge1xyXG4gICAgICAgICZfX2Zvcm0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wICAgOiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZWR1LWhpc3Rvcnk+aSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICBwYWRkaW5nLXRvcCAgOiAyJTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWZmNztcclxuICAgICAgICBwYWRkaW5nICAgICAgOiA0JSAwJSA0JSA1JTtcclxuICAgIH1cclxuXHJcbiAgICBoMy5zdWJ0aXRsZSB7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBmLXRpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuXHJcbi5wZi1maWVsZCB7XHJcbiAgICAmID4gaXtcclxuICAgICAgICBsaW5lLWhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgPiBpbnB1dHtcclxuICAgICAgICBwYWRkaW5nOiA4cHggMTVweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcbiAgIFxyXG5cclxuXHJcbiAgICAuc2F2ZUJ0biB7XHJcbiAgICAgICAgYm9yZGVyICAgICA6IDJweCBzb2xpZCAjMDA5REEwO1xyXG4gICAgICAgIGNvbG9yICAgICAgOiAjMDA5REEwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yICAgICA6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5REEwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHkgICAgICAgICA6IDAuNjtcclxuICAgICAgICAgICAgY3Vyc29yICAgICAgICAgIDogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FuY2VsQnRuIHtcclxuICAgICAgICBib3JkZXIgICAgIDogMnB4IHNvbGlkICNmMjY5NTY7XHJcbiAgICAgICAgY29sb3IgICAgICA6ICNmMjY5NTY7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvciAgICAgOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2YyNjk1NjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgIGN1cnNvciA6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5ICAgOiBRdWlja3NhbmQ7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICMyMDIwMjA7XHJcbiAgICAgICAgbWFyZ2luICAgICAgICA6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGVfX3N1bW11cnktd3JhcHBlciB7XHJcbiAgICAgICAgZGlzcGxheSAgICA6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgZmlndXJlIHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5wZi1maWVsZD5pbnB1dCxcclxuICAgIC5wZi1maWVsZD50ZXh0YXJlYSB7XHJcbiAgICAgICAgd2lkdGggICAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkICNlOGVjZWM7XHJcbiAgICAgICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgLW1vei1ib3JkZXItcmFkaXVzICAgOiA4cHg7XHJcbiAgICAgICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA4cHg7XHJcbiAgICAgICAgLW8tYm9yZGVyLXJhZGl1cyAgICAgOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZyAgICAgICAgICAgICAgOiAxMnB4IDQ1cHggMTJweCAxNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgICBmb250LXNpemUgICAgICAgICAgICA6IDEzcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAyNHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b20gICAgICAgIDogMjBweDtcclxuICAgICAgICBwYWRkaW5nICAgICAgICAgICAgICA6IDQlIDUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5qb2Itb3ZlcnZpZXcge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA5REEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2YyNjk1NjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLmpvYi1vdmVydmlldyB1bCA+IGxpIGgzIHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLy8gZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgLmpvYi1vdmVydmlldy5zdHlsZTIge1xyXG4gICAgICAgIGJvcmRlciAgICAgICAgOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQgOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdCAgOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wICAgOiAwO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAud3RhYnMge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1JSAwJSAwJSA4JTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC5qb2ItdGl0bGUtc2VjIHtcclxuICAgICAgICAgICAgLmpvYi1sY3RuIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAgOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgICAgIC5sYS1jaXJjbGU6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50ICAgIDogXCJcXGYxOGFcIjtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemUgIDogMTNweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yICAgICAgOiAjZjI2OTU2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ICAgICAgOiB0YWJsZTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAgICA6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseSAgOiBRdWlja3NhbmQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQgIDogNTAwO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luICAgICAgIDogMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDdweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3AgICA6IDNweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5qb2Itb3ZlcnZpZXcuc3R5bGUyIHVsID4gbGl7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250YWN0LWxpbmt7XHJcbiAgICAgICAgbGl7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGltZ3tcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZWR1LWhpc3Rvcnktc2Vje1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGxpe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate-contact',
          templateUrl: './candidate-contact.component.html',
          styleUrls: ['./candidate-contact.component.scss']
        }]
      }], function () {
        return [{
          type: services_candidate_countries_service__WEBPACK_IMPORTED_MODULE_6__["CountriesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__["CompleteProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: CandidatePersonalInfoComponent */

  /***/
  function srcAppCandidateComponentsCandidateProfileCandidatePersonalInfoCandidatePersonalInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidatePersonalInfoComponent", function () {
      return CandidatePersonalInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! services/candidate/complete-profile.service */
    "./src/services/candidate/complete-profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");

    function CandidatePersonalInfoComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r157 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatePersonalInfoComponent_div_0_Template_span_click_5_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r157);

          var ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return ctx_r156.open(_r154);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "figure", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Education Level ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Salary Range");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
        var ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r153.profileData.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r153.profileData.first_name, " ", ctx_r153.profileData.last_name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.profileData.job_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.profileData.birth_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.profileData.about);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.profileData.education_level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r153.profileData.experience);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r153.profileData.expected_salary_min, "$ - ", ctx_r153.profileData.expected_salary_max, "$");
      }
    }

    function CandidatePersonalInfoComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatePersonalInfoComponent_ng_template_3_Template_button_click_3_listener($event) {
          var d_r159 = ctx.dismiss;
          return d_r159("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CandidatePersonalInfoComponent_ng_template_3_Template_form_ngSubmit_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r162.onSubmitEditMyProfile(ctx_r162.form);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 42, 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " upload picture");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "update profile picture ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "image-cropper", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("imageCropped", function CandidatePersonalInfoComponent_ng_template_3_Template_image_cropper_imageCropped_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r164.imageCropped($event);
        })("imageLoaded", function CandidatePersonalInfoComponent_ng_template_3_Template_image_cropper_imageLoaded_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r165.imageLoaded();
        })("cropperReady", function CandidatePersonalInfoComponent_ng_template_3_Template_image_cropper_cropperReady_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r166.cropperReady();
        })("loadImageFailed", function CandidatePersonalInfoComponent_ng_template_3_Template_image_cropper_loadImageFailed_32_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r167.loadImageFailed();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CandidatePersonalInfoComponent_ng_template_3_Template_input_change_33_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r168.fileChangeEvent($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " choose new picture ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " save changes ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " First Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_43_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r169.profileData.first_name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Last Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_47_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r170.profileData.last_name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Job Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_52_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r171.profileData.job_title = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Birth Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_57_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r172.profileData.birth_date = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "About");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "textarea", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_textarea_ngModelChange_63_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r173.profileData.about = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Experience");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "input", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_68_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r174.profileData.experience = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Education Level");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_73_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r175.profileData.education_level = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "salary From ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "input", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_78_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r176.profileData.expected_salary_min = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Salary To");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidatePersonalInfoComponent_ng_template_3_Template_input_ngModelChange_83_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r163);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r177.profileData.expected_salary_max = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "button", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidatePersonalInfoComponent_ng_template_3_Template_button_click_85_listener($event) {
          var d_r159 = ctx.dismiss;
          return d_r159("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r155.myProfileForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r155.croppedImage ? ctx_r155.croppedImage : ctx_r155.profileData.profile_image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("imageChangedEvent", ctx_r155.imageChangedEvent)("maintainAspectRatio", true)("aspectRatio", 2 / 2)("resizeToWidth", 500)("roundCropper", true)("cropper", ctx_r155.cropper);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.first_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.last_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.job_title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.birth_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.about);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.experience);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.education_level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.expected_salary_min);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r155.profileData.expected_salary_max);
      }
    }

    var CandidatePersonalInfoComponent =
    /*#__PURE__*/
    function () {
      function CandidatePersonalInfoComponent(fb, candidateUpdateProfileService, currentRoute, toast, modalService) {
        _classCallCheck(this, CandidatePersonalInfoComponent);

        this.fb = fb;
        this.candidateUpdateProfileService = candidateUpdateProfileService;
        this.currentRoute = currentRoute;
        this.toast = toast;
        this.modalService = modalService;
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.cropper = {
          x1: 0,
          y1: 0,
          x2: 300,
          y2: 300
        };
        this.addPersonalInfoEditMode = true;
        this.editProfileError = false;
        this.editForm = true;
        this.editProfileForm = true;
        this.userCompelete = 0;
      }
      /* -------------------------------------------------------------------------- */

      /*                          NGON INit LifeCycle Hook                          */

      /* -------------------------------------------------------------------------- */


      _createClass(CandidatePersonalInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tokenTransform(); // my profile form

          this.myProfileForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            birth_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            job_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // domain: ['', Validators.required],
            // current_salary: ['', Validators.required],
            expected_salary_max: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            expected_salary_min: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            education_level: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            // language: [''],
            experience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            about: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            profile_image: ['']
          }); // display personal data

          this.displayPersonalInfo();
        }
        /* -------------------------------------------------------------------------- */

        /*                         Get Personal Info Function                         */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "displayPersonalInfo",
        value: function displayPersonalInfo() {
          var _this5 = this;

          // get data from api
          this.candidateUpdateProfileService.getProfileCandidate(this.currentUserId).subscribe(function (response) {
            // console.log(response);
            _this5.profileData = response; // console.log(this.profileData);

            localStorage.setItem("userId", response.id);
            _this5.userId = localStorage.getItem("userId");
          }, function (error) {// console.log(error + 'this is error')
          });
        }
        /* -------------------------------------------------------------------------- */

        /*                     Form My Profile Information                            */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "onSubmitEditMyProfile",
        value: function onSubmitEditMyProfile() {
          var _this6 = this;

          var editMyProfileForm = {
            id: this.userId,
            first_name: this.myProfileForm.value.first_name,
            last_name: this.myProfileForm.value.last_name,
            birth_date: this.myProfileForm.value.birth_date,
            job_title: this.myProfileForm.value.job_title,
            // domain: this.myProfileForm.value.domain,
            // current_salary: this.myProfileForm.value.current_salary,
            expected_salary_max: this.myProfileForm.value.expected_salary_max,
            expected_salary_min: this.myProfileForm.value.expected_salary_min,
            education_level: this.myProfileForm.value.education_level,
            language: this.myProfileForm.value.language,
            experience: this.myProfileForm.value.experience,
            about: this.myProfileForm.value.about,
            profile_image: this.croppedImage
          }; // console.log(editMyProfileForm)

          this.candidateUpdateProfileService.editProfileCandidate(editMyProfileForm, this.currentUserId).subscribe(function (data) {
            console.log("success");

            _this6.onCancelMyProfile();

            _this6.displayPersonalInfo(); //to listen in sidebar chart


            _this6.toast.success("profile Updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this6.candidateUpdateProfileService.sidebarChart.next(0);
          }, function (error) {
            // console.log("there is error");
            _this6.toast.error("please try again", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });
          });
        }
      }, {
        key: "tokenTransform",
        value: function tokenTransform() {
          this.currentUserId = JSON.parse(atob(window.sessionStorage.getItem("token").split('.')[1])).sub;
        }
      }, {
        key: "onCancelMyProfile",
        value: function onCancelMyProfile() {
          this.editProfileForm = true;
          this.displayPersonalInfo();
        }
      }, {
        key: "startEditMyProfile",
        value: function startEditMyProfile() {
          this.editProfileForm = false;
        }
      }, {
        key: "fileChangeEvent",
        value: function fileChangeEvent(event) {
          this.imageChangedEvent = event;
          this.uploadedImage = event.target.files[0].name;
          this.imagesCount = event.target.files.length;
        }
      }, {
        key: "imageCropped",
        value: function imageCropped(event) {
          this.croppedImage = event.base64;
          console.log(this.croppedImage);
        }
      }, {
        key: "getSelectedUserProfilePicture",
        value: function getSelectedUserProfilePicture(info) {
          this.selectedUserInfo = info;
          this.url = this.selectedUserInfo.profile_image;
          console.log(this.url);
        }
      }, {
        key: "imageLoaded",
        value: function imageLoaded() {// show cropper
        }
      }, {
        key: "cropperReady",
        value: function cropperReady() {// cropper ready
        }
      }, {
        key: "loadImageFailed",
        value: function loadImageFailed() {} // show message

        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this7 = this;

          this.modalService.open(content, {
            size: 'lg'
          }).result.then(function (result) {
            _this7.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this7.closeResult = "Dismissed ".concat(_this7.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return CandidatePersonalInfoComponent;
    }();

    CandidatePersonalInfoComponent.ɵfac = function CandidatePersonalInfoComponent_Factory(t) {
      return new (t || CandidatePersonalInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__["CompleteProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]));
    };

    CandidatePersonalInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidatePersonalInfoComponent,
      selectors: [["app-candidate-personal-info"]],
      decls: 5,
      vars: 1,
      consts: [["class", "profile", 4, "ngIf"], [1, "card-content"], [1, "card-body", "p-1"], ["addMore", ""], [1, "profile"], [1, "profile__summury-info"], [1, "content_wrapper", "my-4"], [1, "profile__summury-info__Edit", "col-2", "ml-auto"], [1, "Edit-icon-wrapper"], [1, "profile__summury-info__Edit-link", "job-is", "ft", 3, "click"], [1, "la", "la-pencil"], [1, "d-flex", "content", "profile__summury-wrapper", "row"], [1, "img-wrapper"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "profile__summury-info__details", "col-8"], [1, "job-single-info3"], [1, "title"], [1, "profile__summury-info__detail"], [1, "row", "pt-5"], [1, "job-overview", "style2", "col-12"], [1, "job-title-sec"], ["src", "../../../../assets/img/icons/information@2x.png", "alt", ""], [1, "job-lctn"], [1, "job-listings-sec", "no-border", "row"], [1, "col-lg-6"], ["src", "../../../../assets/img/icons/work@2x.png", "alt", ""], [1, "col-12"], ["src", "../../../../assets/img/icons/money@2x.png", "alt", ""], [1, "no-dot"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [1, "profile__summury-info__Edit-mode"], [1, "form", "content", 3, "formGroup", "ngSubmit"], [1, "profile-form-edit"], [1, "row"], [1, "col-lg-4"], [1, "personal-deatils", "img", "pf-field"], [1, "hoverable"], ["alt", "", 1, "w-100", "img-fluid", 3, "src"], ["profileImage", ""], ["data-toggle", "modal", "data-target", "#profileImageCropper", 1, "hover-text"], [1, "background"], ["id", "profileImageCropper", "tabindex", "-1", "role", "dialog", "aria-labelledby", "profileImageCropper", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog"], [1, "modal-content"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "aspectRatio", "resizeToWidth", "roundCropper", "cropper", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"], ["id", "fileInput", "type", "file", "formControlName", "profile_image", 3, "change"], ["for", "fileInput"], [1, "modal-footer"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-primary"], [1, "col-lg-8", "my-auto"], [1, "form-group"], ["formControlName", "first_name", "type", "text", "id", "first_name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "last_name", "type", "text", "id", "last_name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "job_title", "type", "text", "id", "job_title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "birth_date", "type", "Date", "id", "educationDateStart", 1, "dateInput", 3, "ngModel", "ngModelChange"], [1, "la", "la-calendar", "pick"], [1, "col-lg-12"], ["formControlName", "about", "type", "text", "id", "about", 1, "profile__textarea", "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "experience", "type", "text", "id", "experience", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "education_level", "type", "text", "id", "education_level", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "expected_salary_min", "type", "text", "id", "expected_salary_min", 1, "form-control", 3, "ngModel", "ngModelChange"], ["formControlName", "expected_salary_max", "type", "text", "id", "expected_salary_max", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "pt-4", "modal-btn-wrapper"], ["type", "button", "aria-label", "Close", 1, "btn", "close", "backBtn", 3, "click"], ["type", "submit", 1, "btn", "saveBtn"]],
      template: function CandidatePersonalInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CandidatePersonalInfoComponent_div_0_Template, 53, 10, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidatePersonalInfoComponent_ng_template_3_Template, 89, 17, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ngx_image_cropper__WEBPACK_IMPORTED_MODULE_7__["ImageCropperComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile__summury-info[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 15px;\n}\n\n.profile__summury-info__details[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27bfc0;\n  vertical-align: middle;\n}\n\n.profile__summury-info__details[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: 0;\n  line-height: 1.8;\n}\n\n.profile__summury-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.profile__summury-info__img[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.profile__summury-info__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n  border-radius: 50%;\n  border: solid 1.5px #27bfc0;\n}\n\n.profile__summury-info__Edit[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 17px;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  background: #9e9e9e;\n  border-color: #9e9e9e;\n  color: white;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white;\n}\n\n.profile__summury-info[_ngcontent-%COMP%]   .upload-info[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-left: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: start;\n          align-items: flex-start;\n}\n\n.profile__personal-info__form[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 5%;\n}\n\n.profile__personal-info__form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.profile__personal-info[_ngcontent-%COMP%]   .edu-history[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  font-size: 40px;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%] {\n  border: 2px solid #27bfc0;\n  color: #27bfc0;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: white;\n  color: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%] {\n  border: 2px solid #f26956;\n  color: #f26956;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.profile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-family: \"mainFontMedium\";\n  font-size: 20px;\n  font-weight: bold;\n  color: #0b1b46;\n  margin: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: '';\n  height: 5px;\n  width: 5px;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: black;\n  position: relative;\n  top: -3px;\n  margin-right: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p.no-dot[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n@media (max-width: 768px) {\n  .profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n\n.profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  margin-right: 25px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid #27bfc0;\n  width: 150px;\n  height: 150px;\n}\n\n@media (max-width: 768px) {\n  .profile[_ngcontent-%COMP%]   .profile__summury-wrapper[_ngcontent-%COMP%]   .img-wrapper[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: block;\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 3px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 20px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 1%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  font-size: 14px;\n  font-family: Open Sans;\n  margin: 0;\n  font-weight: 500;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%] {\n  border: none;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .wtabs[_ngcontent-%COMP%] {\n  padding: 5% 0% 0% 8%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   .la-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f18a\";\n  font-size: 13px;\n  font-weight: 900;\n  color: #f26956;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  width: 36px;\n  top: 3px;\n  right: 14px;\n  color: #27bfc0;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n}\n\n.pdf-img[_ngcontent-%COMP%] {\n  height: 100%;\n  margin: 20px auto 0;\n  display: block;\n}\n\n.border-Space[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100px;\n  height: 3px;\n  background-color: #0000002e;\n  margin: 30px auto;\n}\n\n.border-Space[_ngcontent-%COMP%]:last-child {\n  width: 40% !important;\n}\n\n.border-Space[_ngcontent-%COMP%]:last-child::after {\n  display: none !important;\n}\n\n#profileImageCropper[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  display: block;\n  font-family: Open Sans !important;\n  background: #f26956;\n  border: 2px solid #f26956;\n  color: #fff !important;\n  margin-left: 15px;\n}\n\n#fileInput[_ngcontent-%COMP%] {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1;\n}\n\n#fileInput[_ngcontent-%COMP%]    + label[_ngcontent-%COMP%] {\n  color: black;\n  display: inline-block;\n  cursor: pointer;\n  border: 1px dotted;\n  padding: 5px 15px;\n  width: 100%;\n  text-align: center;\n  font-family: Open Sans;\n}\n\n.hoverable[_ngcontent-%COMP%] {\n  position: relative;\n  display: block;\n  cursor: pointer;\n  height: 140px;\n  width: 140px;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 1px solid #c5c5c5;\n  background-color: #fff;\n  margin: 0 auto;\n}\n\n.hoverable[_ngcontent-%COMP%]   .hover-text[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  z-index: 2;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 12px;\n  width: 100%;\n  height: 100%;\n  text-transform: capitalize;\n  background-color: rgba(0, 0, 0, 0.5);\n  color: white;\n  font-family: Open Sans;\n}\n\n.hoverable[_ngcontent-%COMP%]   .background[_ngcontent-%COMP%] {\n  background-color: rgba(255, 255, 255, 0.5);\n  pointer-events: none;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .hover-text[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n}\n\n.hoverable[_ngcontent-%COMP%]:hover   .background[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.personal-deatils[_ngcontent-%COMP%] {\n  margin-bottom: 30;\n}\n\n@media (max-width: 992px) {\n  .personal-deatils[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    margin-bottom: 0px;\n    padding: 15px;\n  }\n}\n\n.personal-deatils[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  overflow: hidden;\n  max-width: 5px auto !important;\n}\n\n@media (max-width: 992px) {\n  .personal-deatils[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    margin-bottom: 5px;\n  }\n}\n\n.personal-deatils[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLXBlcnNvbmFsLWluZm8vRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF9nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1wZXJzb25hbC1pbmZvL2NhbmRpZGF0ZS1wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtcGVyc29uYWwtaW5mby9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX3ZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtcGVyc29uYWwtaW5mby9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcYXBwXFxjYW5kaWRhdGUtY29tcG9uZW50c1xcY2FuZGlkYXRlLXByb2ZpbGVcXGNhbmRpZGF0ZS1wZXJzb25hbC1pbmZvXFxjYW5kaWRhdGUtcGVyc29uYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVc7RUFDWCxjQUFjO0FDRGhCOztBRElBO0VBQ0Usb0NBQWtEO0VBQ2xELDRCQUE4QjtFQUM5QixvQkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQ0RuQjs7QURJQTtFQUNFLGtCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZ0JBQXdCO0VBQ3hCLFlBQXNCO0FDRHhCOztBRElBOztFQUVFLCtCQUFvQztFQUFwQyx3QkFBb0M7RUFDcEMseUJBQTJCO1VBQTNCLG1CQUEyQjtFQUMzQixXQUF5QjtFQUN6QixXQUF5QjtFQUN6QixrQ0FBd0M7RUFDeEMsZUFBMkI7RUFDM0Isa0JBQTZCO0VBQzdCLGVBQXdCO0VBQ3hCLGdCQUFzQjtFQUd0Qiw0REFBcUU7QUNIdkU7O0FEVkE7O0VBaUJJLGtCQUFvQjtFQUNwQiw2QkFBZ0M7RUFDaEMsZUFBb0I7RUFDcEIsaUJBQW9CO0VBQ3BCLGNFdkNrQjtFRndDbEIsMEJBQTBCO0VBQzFCLGdCQUFtQjtFQUNuQixrQkFBbUI7QUNGdkI7O0FEdEJBOztFQTRCSSxpQkFBaUI7QUNEckI7O0FEM0JBOztFQWlDSSxvQkFBMkI7RUFDM0Isa0JBQWtCO0FDRHRCOztBRGpDQTs7RUFzQ0ksMkJBQTJCO0FDQS9COztBRElBO0VBQ0UsVUFBWTtFQUNaLDhCQUErQjtFQUMvQixXQUFhO0VBQ2IsZUFBZTtBQ0RqQjs7QURJQTtFQUNFLCtCQUFvQztFQUFwQyx3QkFBb0M7RUFDcEMseUJBQTJCO1VBQTNCLG1CQUEyQjtFQUMzQixXQUF5QjtFQUN6QixXQUF5QjtFQUN6QixnQ0FBc0M7RUFDdEMsZ0JBQTRCO0VBQzVCLGtCQUE2QjtFQUM3QixlQUF3QjtFQUl4Qiw0REFBcUU7QUNKdkU7O0FEUkE7RUFlSSxjRTNFVztBRHdFZjs7QURaQTs7RUFxQkkseUJFeEZrQjtFRnlGbEIsdUJBQTZCO0VBQzdCLGNFMUZrQjtFRjJGbEIsZ0JBQXFCO0FDSnpCOztBRHBCQTtFQTRCSSxXQUFjO0VBQ2QsY0FBaUI7RUFDakIsV0FBZ0I7RUFDaEIsV0FBZTtFQUNmLG1CRWhHVztBRDRGZjs7QUQ1QkE7RUFxQ00sZ0JBQWdCO0FDTHRCOztBRGhDQTtFQXdDUSxrQkFBa0I7RUFDbEIsZUFBa0I7RUFDbEIsZ0JBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBb0I7RUFDcEIsZ0JBQWlCO0VBQ2pCLFVBQWU7RUFDZiw2QkFBOEI7QUNKdEM7O0FEWUE7RUFDRSxzQkFBc0I7QUNUeEI7O0FEWUE7RUFDRSxrQkFBMEI7RUFDMUIsZ0JBQW1CO0VBQ25CLHlCRTdIbUI7RUY4SG5CLGdCQUFzQjtFQUN0QixpQkFBMEI7RUFFMUIsZ0JBQXNCO0VBQ3RCLG9DQUFrQztFQUFsQyw0QkFBa0M7RUFDbEMsa0JBQXFCO0VBQ3JCLG1CQUFzQjtBQ1Z4Qjs7QURBQTtFQWFJLDhCRXpJYTtFRjBJYixvQ0FBNkI7RUFBN0IsNEJBQTZCO0FDVGpDOztBRExBO0VBa0JJLGdCQUFnQjtFQUNoQixpQkFBa0I7RUFDbEIsZUFBbUI7RUFDbkIsZ0JBQWtCO0VBQ2xCLG9CQUFxQjtFQUNyQixrQkFBcUI7RUFDckIsaUJBQW1CO0VBQ25CLGdCQUFrQjtFQUNsQixXQUFtQjtFQUNuQiw2QkFBK0I7QUNUbkM7O0FEbEJBO0VBZ0NJLGtCQUFrQjtFQUNsQixXQUFjO0VBQ2QsWUFBYztBQ1ZsQjs7QUR4QkE7RUFzQ0ksc0JBQWdDO0VBQ2hDLDJCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsWUFBcUI7RUFDckIsYUFBdUI7RUFDdkIsb0NBQWtDO0VBQWxDLDRCQUFrQztFQUNsQyxZQUFzQjtFQUN0QixlQUFzQjtFQUN0QixXQUFzQjtBQ1YxQjs7QURwQ0E7RUFpRE0sMkJBQ0Y7QUNWSjs7QURlQTtFQUNFLG1CQUEyQjtFQUMzQixXQUFvQjtFQUNwQixtQkFBbUI7QUNackI7O0FEZUE7RUFDRSxZQUFZO0FDWmQ7O0FEZUE7RUFDRSxXQUFZO0VBQ1osWUFBWTtBQ1pkOztBRGVBO0VBQ0UscUNBQXFDO0VBQ3JDLGNBQXFCO0FDWnZCOztBRGdCQTtFQUNFLGVBQWU7QUNiakI7O0FEZ0JBO0VBQ0UsY0VoTnFCO0FEbU12Qjs7QURnQkE7RUFDRSx5QkVsTmdCO0VGbU5oQixrQkFBcUI7RUFDckIsWUFBcUI7RUFDckIscUJBQThCO0FDYmhDOztBRFNBO0VBT0ksdUJBQXNDO0VBQ3RDLFdBQTJCO0VBQzNCLHFCQUFtQztFQUNuQyxpQkFBZ0M7RUFLaEMsa0JBQTBCO0VBQzFCLGVBQThCO0VBQzlCLGVBQTJCO0VBQzNCLDZCQUF1QztFQUN2QyxvQkFBNkI7RUFDN0Isa0JBQTZCO0VBQzdCLGlCQUEyQjtFQUMzQixzQkFBNkI7RUFDN0IsZ0JBQTJCO0VBQzNCLGNFM09tQjtFRjRPbkIsaUJBQStCO0VBQy9CLG9DQUF1QztFQUF2Qyw0QkFBdUM7RUFDdkMsV0FBMEI7QUNaOUI7O0FEZkE7RUE4Qk0sa0JBQWtCO0FDWHhCOztBRG5CQTtFQWtDTSxjQUF5QjtFQUN6QixvQ0FBcUM7RUFDckMsNEJBQWlDO0VBQ2pDLG9DQUFrQztFQUFsQyw0QkFBa0M7QUNYeEM7O0FEaUJBO0VBQ0UsY0UxUG1CO0VGMlBuQixVQUFVO0VBQ1YsWUFBQTtBQ2RGOztBRFdBO0VBQ0UsY0UxUG1CO0VGMlBuQixVQUFVO0VBQ1YsWUFBQTtBQ2RGOztBRFdBO0VBQ0UsY0UxUG1CO0VGMlBuQixVQUFVO0VBQ1YsWUFBQTtBQ2RGOztBRFdBO0VBQ0UsY0UxUG1CO0VGMlBuQixVQUFVO0VBQ1YsWUFBQTtBQ2RGOztBRFdBO0VBQ0UsY0UxUG1CO0VGMlBuQixVQUFVO0VBQ1YsWUFBQTtBQ2RGOztBRGlCQTtFQUNFLDRCQUFBO0VBQ0EsY0VqUW1CO0FEbVByQjs7QURpQkE7RUFDRSxtQkFBQTtFQUNBLGNFdFFtQjtBRHdQckI7O0FEaUJBOztFQUVFLGVBQWU7QUNkakI7O0FEaUJBO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFvQjtFQUNwQixZQUFvQjtFQUNwQixjRXBSZTtFRnFSZixlQUFvQjtFQUNwQixXQUFvQjtFQUNwQixrQkFBd0I7RUFFeEIsVUFBbUI7QUNmckI7O0FETUE7RUFZSSxpQkFBaUI7RUFDakIsZUFBb0I7QUNkeEI7O0FEbUJBO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQXNCO0FDaEJ4Qjs7QUFFQTtFRG1CRSxVQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFNBQWM7RUFDZCxVQUFhO0VBQ2IsV0FBYztFQUNkLGVBQWlCO0FDakJuQjs7QURvQkE7RUFDRSxxQkFBcUI7QUNqQnZCOztBRGdCQTtFQUlJLHdDQUF3QztFQUN4QyxjQUF5QjtFQUN6QixnQkFBcUI7QUNoQnpCOztBRFVBO0VBVUksY0FBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQW1CO0VBQ25CLHlCQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsWUFBWTtBQ2hCaEI7O0FEb0JBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQ2pCbEI7O0FEZUE7RUFLSSx5QkFBK0I7RUFDL0Isa0JBQW9CO0VBQ3BCLG9CQUFxQjtFQUNyQixlQUFrQjtFQUNsQixnQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFvQjtFQUNwQixnQkFBaUI7RUFDakIsY0VuVmtCO0FEbVV0Qjs7QURHQTtFQWlCSSxTQUFVO0VBQ1YsaUJBQWlCO0FDaEJyQjs7QURGQTtFQXFCTSxhQUFhO0FDZm5COztBRG9CQTtFQUNFLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsV0FBcUI7RUFFckIsb0JBQXFCO0VBQXJCLGFBQXFCO0FDbEJ2Qjs7QURjQTtFQU9JLGlCQUF3QjtFQUV4QixZQUFvQjtFQUNwQiwwQkFBK0I7QUNsQm5DOztBRFFBO0VBYU0scUJFMVdTO0VGMldULFdBQXNCO0VBQ3RCLHlCRTVXUztBRDJWZjs7QURFQTtFQW1CTSx1QkFBdUI7RUFDdkIseUJFalhTO0VGa1hULGNFbFhTO0FEaVdmOztBRHVCQTtFQUVJLGFBQWE7QUNyQmpCOztBRHlCQTtFQUNFLHVCQUF1QjtBQ3RCekI7O0FEMEJBO0VBQ0Usa0NBQXVDO0VBQ3ZDLGdDQUEwQztFQUMxQyx5QkFBMEM7RUFFMUMseUJBQXVDO0VBR3ZDLGtCQUEwQjtFQUMxQixnQkFBMEI7QUMxQjVCOztBRDZCQTtFQUNFLG9DQUFvQztBQzFCdEM7O0FEeUJBO0VBSUkseUJFblpXO0VGb1pYLFlBQ0Y7QUMxQkY7O0FENkJBO0VBQ0UseUJBQW9DO0VBQ3BDLG9DQUE4QztFQUM5QyxrQ0FBa0M7QUMxQnBDOztBRDhCQTtFQUNFLGNBQWM7RUFDZCxvQkFBYTtFQUFiLGFBQWE7RUFFYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FDNUJ4Qjs7QUR1QkE7RUFPSSw2QkFBNkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLGNFemFXO0VGMGFYLGNBQWM7QUMxQnBCOztBRDRCRTtFQUNJLFVBQVU7QUN6QmhCOztBRFlBO0VBZ0JJLHlCRS9hVztFRmdiWCxxQkVoYlc7RUZpYlgsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsMEJBQTBCO0FDeEI5Qjs7QUQ2QkE7RUFDRSw0QkFBNEI7RUFDNUIsZ0NBQWdDO0FDMUJsQzs7QUQ0QkE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxTQUFRO0VBQ1IsZUFBZTtBQ3pCakI7O0FEMkJBO0VBRUksMkJBQTJCO0FDekIvQjs7QUQ2QkE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDViwwQkFBMEI7RUFDMUIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQzFCbEI7O0FENkJBO0VBQ0Usc0JBQXNCO0FDMUJ4Qjs7QUU3Ykk7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZTtBRmdjdkI7O0FFL2JTO0VBRU8sY0RIQztFQ0lELHNCQUFzQjtBRmljdEM7O0FFcGNTO0VBTU8sV0FBaUI7RUFDakIsb0JBQWlCO0VBQWpCLGFBQWlCO0VBQ2pCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsU0FBYztFQUNkLGdCQUFnQjtBRmtjaEM7O0FFL2NLO0VBaUJPLFNBQVU7RUFDVixVQUFVO0FGa2N0Qjs7QUUvYlE7RUFDSSxlQUFlO0FGa2MzQjs7QUVuY1M7RUFJTyxZQUFvQjtFQUNwQixhQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsMkJEMUJDO0FENmRqQjs7QUUvYlE7RUFDSSxrQkFBa0I7RUFDbEIsZUFBZ0I7QUZrYzVCOztBRS9iUTtFQUNJLFlBQWlCO0VBQ2pCLGVBQWtCO0VBQ2xCLG1CRHpDVztFQzBDWCxxQkQxQ1c7RUMyQ1gsWUFBbUI7QUZrYy9COztBRXZjUztFQVFPLHlCRDFDRDtFQzJDQyxxQkQzQ0Q7RUM0Q0MsWUFBdUI7QUZtY3ZDOztBRWxmSztFQW9ETyxZQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsb0JBQWlCO0VBQWpCLGFBQWlCO0VBQ2pCLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUZrY25DOztBRTNiUTtFQUNJLGNBQWlCO0VBQ2pCLGlCQUFpQjtBRjhiN0I7O0FFaGNTO0VBS08sbUJBQW1CO0FGK2JuQzs7QUVyY0s7RUFXTyxlQUFlO0FGOGIzQjs7QUV2Z0JBO0VBZ0ZRLHlCRDdFUztFQzhFVCxjRDlFUztFQytFVCxpQkFBaUI7QUYyYnpCOztBRTdnQkE7RUFzRlksWUFBaUI7RUFDakIsbUJEcEZLO0FEK2dCakI7O0FFbGhCQTtFQTJGWSxZQUFxQjtFQUNyQixtQkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLGNEM0ZLO0FEc2hCakI7O0FFemhCQTtFQW1HUSx5QkFBOEI7RUFDOUIsY0FBb0I7RUFDcEIsaUJBQWlCO0FGMGJ6Qjs7QUUvaEJBO0VBd0dZLFlBQWlCO0VBQ2pCLG1CQUFtQjtBRjJiL0I7O0FFcGlCQTtFQTZHWSxZQUFZO0VBQ1osbUJBQW9CO0FGMmJoQzs7QUV6aUJBO0VBb0hRLDBCQUEwQjtFQUMxQiw2QkFBZ0M7RUFDaEMsZUFBb0I7RUFDcEIsaUJBQW9CO0VBQ3BCLGNEdkhjO0VDd0hkLFNBQWlCO0FGeWJ6Qjs7QUVsakJBO0VBK0hZLGlCQUFpQjtBRnViN0I7O0FFdGpCQTtFQWtJZ0IsV0FBb0I7RUFDcEIsV0FBcUI7RUFDckIsVUFBcUI7RUFDckIscUJBQThCO0VBQzlCLGtCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsa0JBQTBCO0VBQzFCLFNBQXNCO0VBQ3RCLGtCQUFzQjtBRndidEM7O0FFbGtCQTtFQThJb0IsYUFBYTtBRndiakM7O0FFdGtCQTtFQXFKUSxvQkFBaUI7RUFBakIsYUFBaUI7RUFDakIseUJBQW1CO1VBQW5CLG1CQUFtQjtBRnFiM0I7O0FFbmJRO0VBeEpSO0lBeUpZLGNBQWM7RUZ1YnhCO0FBQ0Y7O0FFamxCQTtFQTZKWSxnQkFBZ0I7RUFDaEIsa0JBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBcUI7RUFDckIseUJEOUpLO0VDK0pMLFlBQVk7RUFDWixhQUFhO0FGd2J6Qjs7QUV2Ylk7RUFwS1o7SUFxS2dCLG1CQUFtQjtFRjJiakM7QUFDRjs7QUVqbUJBO0VBNktRLG1CQUFtQjtFQUNuQixjQUFjO0FGd2J0Qjs7QUV0bUJBO0VBZ0xZLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0FGMGI5Qjs7QUU1bUJBO0VBb0xnQixXQUFrQjtFQUNsQixrQkFBa0I7QUY0YmxDOztBRWpuQkE7RUE0TFkscUJBQXFCO0FGeWJqQzs7QUVybkJBO0VBZ01nQixpQkFBaUI7QUZ5YmpDOztBRXpuQkE7RUFtTW9CLGNEaE1IO0FEMG5CakI7O0FFN25CQTtFQXdNd0IsY0FBYztBRnlidEM7O0FFam9CQTtFQWlOUSxXQUFvQjtFQUNwQixXQUFvQjtFQUNwQixlQUFvQjtFQUNwQixzQkFBeUI7RUFDekIsU0FBaUI7RUFFakIsZ0JBQW1CO0FGbWIzQjs7QUUxb0JBO0VBMk5RLFlBQW9CO0VBQ3BCLG1CQUFvQjtFQUNwQixrQkFBb0I7RUFDcEIsY0FBaUI7RUFDakIsaUJBQWlCO0FGbWJ6Qjs7QUVscEJBO0VBa09ZLG9CQUFvQjtBRm9iaEM7O0FFdHBCQTtFQTBPZ0Isb0JBQWE7RUFBYixhQUFhO0VBQ2IsV0FBYTtBRmdiN0I7O0FFM3BCQTtFQThPb0IsZ0JBQW9CO0VBQ3BCLGVBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixjQUFvQjtBRmlieEM7O0FFNVpBO0VBQ0ksb0JBQW9CO0VBQ3BCLGdCQUFvQjtFQUNwQixZQUFvQjtFQUNwQixXQUFvQjtFQUNwQixRQUFtQjtFQUNuQixXQUFvQjtFQUNwQixjRDFRYTtBRHlxQmpCOztBRXRhQTtFQVVRLGlCQUFpQjtFQUNqQixlQUFvQjtBRmdhNUI7O0FFM1pBO0VBQ0ksbUJBQW1CO0FGOFp2Qjs7QUUxWkE7RUFDSSxZQUFhO0VBQ2IsbUJBQW9CO0VBQ3BCLGNBQWM7QUY2WmxCOztBRTFaQTtFQUVRLFdBQW9CO0VBQ3BCLGNBQXVCO0VBQ3ZCLFlBQXVCO0VBQ3ZCLFdBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixpQkFBMkI7QUY0Wm5DOztBRW5hQTtFQVdRLHFCQUFxQjtBRjRaN0I7O0FFdmFBO0VBY1ksd0JBQXdCO0FGNlpwQzs7QUV4WkE7RUFHWSxjQUFrQjtFQUNsQixpQ0FBaUM7RUFDakMsbUJBQW9CO0VBQ3BCLHlCQUE4QjtFQUM5QixzQkFBNEI7RUFDNUIsaUJBQWlCO0FGeVo3Qjs7QUVwWkE7RUFDSSxZQUFlO0VBQ2YsYUFBZTtFQUNmLFVBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFdBQVk7QUZ1WmhCOztBRTdaQTtFQVNRLFlBQWtCO0VBQ2xCLHFCQUF5QjtFQUN6QixlQUFvQjtFQUNwQixrQkFBdUI7RUFDdkIsaUJBQXFCO0VBQ3JCLFdBQWlCO0VBQ2pCLGtCQUFtQjtFQUNuQixzQkFBc0I7QUZ3WjlCOztBRW5aQTtFQUNJLGtCQUEwQjtFQUMxQixjQUF1QjtFQUN2QixlQUF5QjtFQUN6QixhQUF1QjtFQUN2QixZQUF1QjtFQUN2QixrQkFBcUI7RUFDckIsZ0JBQXdCO0VBQ3hCLHlCQUFtQztFQUNuQyxzQkFBc0I7RUFDdEIsY0FBd0I7QUZzWjVCOztBRWhhQTtFQWFRLGtCQUEwQjtFQUMxQixhQUFzQjtFQUN0QixRQUFxQjtFQUNyQixTQUFxQjtFQUNyQix3Q0FBdUM7VUFBdkMsZ0NBQXVDO0VBQ3ZDLFVBQW1CO0VBQ25CLHlCQUF3QjtVQUF4QixtQkFBd0I7RUFDeEIsd0JBQXdCO1VBQXhCLHVCQUF3QjtFQUN4QixlQUFzQjtFQUN0QixXQUFzQjtFQUN0QixZQUFzQjtFQUN0QiwwQkFBNEI7RUFDNUIsb0NBQTBDO0VBQzFDLFlBQXVCO0VBQ3ZCLHNCQUEyQjtBRnVabkM7O0FFbGJBO0VBK0JRLDBDQUEwQztFQUMxQyxvQkFBc0I7RUFDdEIsa0JBQXFCO0VBQ3JCLFVBQW1CO0FGdVozQjs7QUV6YkE7RUF1Q1ksb0JBQWE7RUFBYixhQUFhO0FGc1p6Qjs7QUU3YkE7RUEyQ1ksY0FBYztBRnNaMUI7O0FFalpBO0VBQ0ksaUJBQWlCO0FGb1pyQjs7QUVsWkk7RUFISjtJQUlRLG9CQUFtQjtJQUFuQixhQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsYUFBbUI7RUZzWnpCO0FBQ0Y7O0FFN1pBO0VBVVEsWUFBb0I7RUFDcEIsYUFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGdCQUFxQjtFQUNyQiw4QkFBaUM7QUZ1WnpDOztBRXJaUTtFQWhCUjtJQWlCWSxXQUFtQjtJQUNuQixZQUFtQjtJQUNuQixrQkFBa0I7RUZ5WjVCO0FBQ0Y7O0FFN2FBO0VBdUJZLFlBQVk7RUFDWixXQUFZO0FGMFp4QiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1wZXJzb25hbC1pbmZvL2NhbmRpZGF0ZS1wZXJzb25hbC1pbmZvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGggOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgnYXNzZXRzL2ltZy9QYXR0ZXJuLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemUgICAgOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDIycHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xyXG4gIGhlaWdodCAgICAgICAgICA6IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlLFxyXG4uYm9yZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDE1cHggMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgIDogMDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuICAvLyB6LWluZGV4ICAgICAgICAgOiA5OTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLXJpZ2h0ICA6IGF1dG87XHJcbiAgICBmb250LWZhbWlseSAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplICAgICA6IDIycHg7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctdG9wICAgOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuam9iLWlzLmZ0IHtcclxuICAgIG1hcmdpbiAgICAgICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gICYrLnRhYnMtd3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICB3aWR0aCAgOiA5MCU7XHJcbiAgbWFyZ2luIDogODBweCBhdXRvIDAgIWltcG9ydGFudDtcclxuICBmbG9hdCAgOiBub25lO1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLnRhYnMtd3JhcHBlciB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogMXB4IHNvbGlkICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogNXB4IDAgMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICRzdGVlbDtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbiAgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaW5kaWdvO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQgICA6ICcnO1xyXG4gICAgZGlzcGxheSAgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgIDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemUgICA6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAyLjU7XHJcbiAgICAgICAgcGFkZGluZyAgICAgOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5IDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbnB1dHMgc3R5bGVcclxuXHJcbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDA7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHggMTBweDtcclxuICAvLyBib3JkZXItbGVmdCAgOiAycHggc29saWQgICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDNweDtcclxuICBtYXJnaW4tYm90dG9tICAgOiAxMHB4O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgdHJhbnNpdGlvbiA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQgOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQgIDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgIDogMS4zMTtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseSAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodCAgIDogMTBweDtcclxuICAgIGJvdHRvbSAgOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgLCB0ZXh0YXJlYSAsIHNlbGVjdCB7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b20gICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwIDRweDtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMTNweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBtYXJnaW4gICAgICAgIDogLTVweCAwIDMwcHg7XHJcbiAgY29sb3IgICAgICAgICA6IGdyZXk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoIDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheSAgICAgICA6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG59XHJcblxyXG4uc2VsZWN0LXVzZXItdGFicyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXR3bztcclxuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZsb2F0ICAgICAgICAgICAgICAgIDogbm9uZTtcclxuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAycHggc29saWQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzICAgICA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplICAgICAgICAgICAgOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXN0cmV0Y2ggICAgICAgICA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgICAgICAgOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgICAgICA6IGxlZnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgOiA1cHggMTBweDtcclxuICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3IgIDogJGJvcmRlci1jb2xvcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5mYS1leWUtc2xhc2g6aG92ZXIsXHJcbi5mYS1leWU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gIGJvcmRlciAgICAgICAgOiBub25lO1xyXG4gIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICBmb250LXNpemUgICAgIDogMThweDtcclxuICB3aWR0aCAgICAgICAgIDogNDBweDtcclxuICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAxNnB4O1xyXG4gIHJpZ2h0ICAgICAgICAgOiA1cHg7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvciAgICAgOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBvcGFjaXR5IDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wICAgICA6IDE2cHg7XHJcbiAgcmlnaHQgICA6IDVweDtcclxuICB3aWR0aCAgIDogNDBweDtcclxuICBjdXJzb3IgIDogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmxhLmxhLXBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA2MDA7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1vcmUtYnRuIHtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxNHB4O1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICMwMDlEQTA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBtYXJnaW4gICAgICA6IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbiAgOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseSA6IFNlZ29lVUk7XHJcbiAgICBmb250LXNpemUgICA6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCA6IDEuNTtcclxuICAgIGNvbG9yICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1idG4td3JhcHBlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoICAgICAgICAgIDogMTAwJTtcclxuICAvLyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZyAgICAgICA6IDhweCAyMHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBoZWlnaHQgICAgICAgIDogYXV0bztcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5zYXZlQnRuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yICAgIDogJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlciAgICA6MXB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bWVhZGQtZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkTW9yZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvciAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICBjb2xvciAgICAgICAgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6ICMwMDlEQTAgIDtcclxuICBwYWRkaW5nICAgICAgICAgICAgICA6IDRweCAxNXB4IDRweCA4cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlci1yaWdodC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0ICAgICAgICAgIDogNjAwO1xyXG59XHJcblxyXG4uc2F2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdG4ge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVye1xyXG4gIHBhZGRpbmctdG9wOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICBjb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICAmX2NyZWF0ZS1uZXd7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmlzLWludmFsaWR7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG4ucmVxdWlyZWQtZXJyb3J7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDo1JTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmVtcGx5LWxpc3R7XHJcbiAgJjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvUGF0dGVybi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgcGFkZGluZzogNXB4IDIycHg7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1haW4tdGl0bGUsXG4uYm9yZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNlZGVmZjc7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tdGl0bGUgaDMsXG4uYm9yZGVyLXRpdGxlIGgzIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBiMWI0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW4tdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSxcbi5ib3JkZXItdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuam9iLWlzLmZ0LFxuLmJvcmRlci10aXRsZSAuam9iLWlzLmZ0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1haW4tdGl0bGUgKyAudGFicy13cmFwcGVyLFxuLmJvcmRlci10aXRsZSArIC50YWJzLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi50YWJzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVmZjc7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBjb2xvcjogIzg4ODc5NTtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxYjQ2O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTU5YTEyO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCB0ZXh0YXJlYSwgLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsIC5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luOiAtNXB4IDAgMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLmZhLWV5ZS1zbGFzaDpob3Zlcixcbi5mYS1leWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSAubGEubGEtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwtYm9keSAuYWRkLW1vcmUtYnRuIHtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzBiMWI0Njtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5zYXZlQnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5jbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyO1xuICBjb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJvZHkgZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yZXN1bWVhZGQtZm9ybSB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkTW9yZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zYXZlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tCdG4ge1xuICBjb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnJlbTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyX2NyZWF0ZS1uZXcge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWlyZWQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZW1wbHktbGlzdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMTVweDtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19fZGV0YWlscyBpIHtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm9fX2RldGFpbHMgbGkge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBsaW5lLWhlaWdodDogMS44O1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvIHAge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm9fX2ltZyB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19faW1nIGltZyB7XG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IHNvbGlkIDEuNXB4ICMyN2JmYzA7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm9fX0VkaXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTdweDtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19fRWRpdC1saW5rIHtcbiAgcGFkZGluZzogNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICM5ZTllOWU7XG4gIGJvcmRlci1jb2xvcjogIzllOWU5ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZmlsZV9fc3VtbXVyeS1pbmZvX19FZGl0LWxpbms6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mbyAudXBsb2FkLWluZm8ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnByb2ZpbGVfX3BlcnNvbmFsLWluZm9fX2Zvcm0ge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG59XG5cbi5wcm9maWxlX19wZXJzb25hbC1pbmZvX19mb3JtIGlucHV0IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnByb2ZpbGVfX3BlcnNvbmFsLWluZm8gLmVkdS1oaXN0b3J5ID4gaSB7XG4gIGZvbnQtc2l6ZTogNDBweDtcbn1cblxuLnByb2ZpbGUgLnNhdmVCdG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjdiZmMwO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wcm9maWxlIC5zYXZlQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjdiZmMwO1xufVxuXG4ucHJvZmlsZSAuc2F2ZUJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjdiZmMwO1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyNjk1NjtcbiAgY29sb3I6ICNmMjY5NTY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucHJvZmlsZSAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2ZpbGUgLmpvYi1sY3RuIHAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLnByb2ZpbGUgLmpvYi1sY3RuIHA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucHJvZmlsZSAuam9iLWxjdG4gcC5uby1kb3Q6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlIC5wcm9maWxlX19zdW1tdXJ5LXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUgLnByb2ZpbGVfX3N1bW11cnktd3JhcHBlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLnByb2ZpbGUgLnByb2ZpbGVfX3N1bW11cnktd3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3YmZjMDtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDE1MHB4O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLnByb2ZpbGUgLnByb2ZpbGVfX3N1bW11cnktd3JhcHBlciAuaW1nLXdyYXBwZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbn1cblxuLnByb2ZpbGUgLmpvYi10aXRsZS1zZWMge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnByb2ZpbGUgLmpvYi10aXRsZS1zZWMgaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG59XG5cbi5wcm9maWxlIC5qb2ItdGl0bGUtc2VjIGgzIGltZyB7XG4gIHdpZHRoOiAyMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwgbGkge1xuICBwYWRkaW5nLXJpZ2h0OiAxJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldyB1bCBsaSBpIHtcbiAgY29sb3I6ICMyN2JmYzA7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwgbGk6aG92ZXIgaSB7XG4gIGNvbG9yOiAjZjI2OTU2O1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3IHVsID4gbGkgaDMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBwYWRkaW5nLXRvcDogMDtcbiAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyIC53dGFicyB7XG4gIHBhZGRpbmc6IDUlIDAlIDAlIDglO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiAuam9iLXRpdGxlLXNlYyAuam9iLWxjdG4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTIgLmpvYi10aXRsZS1zZWMgLmpvYi1sY3RuIC5sYS1jaXJjbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXGYxOGFcIjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogOTAwO1xuICBjb2xvcjogI2YyNjk1Njtcbn1cblxuLnBpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMzZweDtcbiAgdG9wOiAzcHg7XG4gIHJpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzI3YmZjMDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4ucGRmLWltZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiAyMHB4IGF1dG8gMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5ib3JkZXItU3BhY2U6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogM3B4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMmU7XG4gIG1hcmdpbjogMzBweCBhdXRvO1xufVxuXG4uYm9yZGVyLVNwYWNlOmxhc3QtY2hpbGQge1xuICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItU3BhY2U6bGFzdC1jaGlsZDo6YWZ0ZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbiNwcm9maWxlSW1hZ2VDcm9wcGVyIC5tb2RhbC1mb290ZXIgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQ6ICNmMjY5NTY7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmMjY5NTY7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4jZmlsZUlucHV0IHtcbiAgd2lkdGg6IDAuMXB4O1xuICBoZWlnaHQ6IDAuMXB4O1xuICBvcGFjaXR5OiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4jZmlsZUlucHV0ICsgbGFiZWwge1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXI6IDFweCBkb3R0ZWQ7XG4gIHBhZGRpbmc6IDVweCAxNXB4O1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xufVxuXG4uaG92ZXJhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDE0MHB4O1xuICB3aWR0aDogMTQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2M1YzVjNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5ob3ZlcmFibGUgLmhvdmVyLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB6LWluZGV4OiAyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG59XG5cbi5ob3ZlcmFibGUgLmJhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ob3ZlcmFibGU6aG92ZXIgLmhvdmVyLXRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaG92ZXJhYmxlOmhvdmVyIC5iYWNrZ3JvdW5kIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wZXJzb25hbC1kZWF0aWxzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzA7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAucGVyc29uYWwtZGVhdGlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG4ucGVyc29uYWwtZGVhdGlscyAuaW1nIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogNXB4IGF1dG8gIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5wZXJzb25hbC1kZWF0aWxzIC5pbWcge1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbn1cblxuLnBlcnNvbmFsLWRlYXRpbHMgLmltZyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuIiwiJGxpZ2h0LWdyZXk6ICNmYWZhZmE7XHJcbiR3YXJtLWdyZXkgOiM3MDcwNzA7XHJcbiR3aGl0ZTojZmZmZmZmO1xyXG4kd2FybS1ncmV5LXR3bzogIzllOWU5ZTtcclxuJGRhcmstaW5kaWdvIDogIzBiMWI0NjtcclxuJHdoaXRlLXR3bzojZWZlZmVmO1xyXG4kdGVhbGlzaCA6IzI3YmZjMDtcclxuJG9yYW5nZTojZTU5YTEyO1xyXG4kYm9yZGVyLWNvbG9yOiNjYWNhY2E7XHJcbiRkdXNrOiM1NDVmN2Q7XHJcbiRibGFjazojMmEyYTJhO1xyXG4kc3RlZWw6ICM4ODg3OTU7XHJcbiR3aGl0ZS1mb3VyOiNmZWZlZmU7XHJcbiRwYWxlLWdyZXk6I2YzZjRmOTsiLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi92YXJpYWJsZXMnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi8uLi9nZW5lcmFsJztcclxuXHJcbi5wcm9maWxlIHtcclxuICAgICZfX3N1bW11cnktaW5mbyB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAmX19kZXRhaWxzIHtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheSAgICA6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luICAgICA6IDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4gOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9faW1nIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICA6IDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0ICAgICAgIDogMTUwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXIgICAgICAgOiBzb2xpZCAxLjVweCAkdGVhbGlzaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJl9fRWRpdCB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplIDogMTdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICZfX0VkaXQtbGluayB7XHJcbiAgICAgICAgICAgIHBhZGRpbmcgICAgIDogNXB4O1xyXG4gICAgICAgICAgICBmb250LXNpemUgICA6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJHdhcm0tZ3JleS10d287XHJcbiAgICAgICAgICAgIGNvbG9yICAgICAgIDogd2hpdGU7XHJcblxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3IgICAgOiAkb3JhbmdlO1xyXG4gICAgICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogd2hpdGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC51cGxvYWQtaW5mbyB7XHJcbiAgICAgICAgICAgIGhlaWdodCAgICAgOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgZGlzcGxheSAgICA6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICZfX3BlcnNvbmFsLWluZm8ge1xyXG4gICAgICAgICZfX2Zvcm0ge1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wICAgOiA1JTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcblxyXG4gICAgICAgICAgICBpbnB1dCB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZWR1LWhpc3Rvcnk+aSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuc2F2ZUJ0biB7XHJcbiAgICAgICAgYm9yZGVyICAgICA6IDJweCBzb2xpZCAkdGVhbGlzaDtcclxuICAgICAgICBjb2xvciAgICAgIDogJHRlYWxpc2g7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG5cclxuICAgICAgICAgICAgY29sb3IgICAgIDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0ZWFsaXNoO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHkgICAgICAgICA6IDAuNjtcclxuICAgICAgICAgICAgY3Vyc29yICAgICAgICAgIDogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiAkdGVhbGlzaDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbEJ0biB7XHJcbiAgICAgICAgYm9yZGVyICAgICA6IDJweCBzb2xpZCAjZjI2OTU2O1xyXG4gICAgICAgIGNvbG9yICAgICAgOiAjZjI2OTU2O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3IgICAgIDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmMjY5NTY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAmOmRpc2FibGVkIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICBjdXJzb3IgOiBub3QtYWxsb3dlZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgICBmb250LXNpemUgICAgIDogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgICAgICBjb2xvciAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgOiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuam9iLWxjdG4ge1xyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuXHJcbiAgICAgICAgICAgICY6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50ICAgICAgICAgOiAnJztcclxuICAgICAgICAgICAgICAgIGhlaWdodCAgICAgICAgICA6IDVweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoICAgICAgICAgICA6IDVweDtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXMgICA6IDUwJTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICB0b3AgICAgICAgICAgICAgOiAtM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0ICAgIDogMTVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmLm5vLWRvdHtcclxuICAgICAgICAgICAgICAgICY6OmJlZm9yZXtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9maWxlX19zdW1tdXJ5LXdyYXBwZXIge1xyXG4gICAgICAgIGRpc3BsYXkgICAgOiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW1nLXdyYXBwZXIge1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQgOiAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIG92ZXJmbG93ICAgICA6IGhpZGRlbjtcclxuICAgICAgICAgICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIEBtZWRpYShtYXgtd2lkdGg6NzY4cHgpIHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuam9iLXRpdGxlLXNlYyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5qb2Itb3ZlcnZpZXcge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMjY5NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuam9iLW92ZXJ2aWV3IHVsPmxpIGgzIHtcclxuICAgICAgICBmbG9hdCAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB3aWR0aCAgICAgICAgIDogMTAwJTtcclxuICAgICAgICBmb250LXNpemUgICAgIDogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseSAgIDogT3BlbiBTYW5zO1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgOiAwO1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuam9iLW92ZXJ2aWV3LnN0eWxlMiB7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodCA6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0ICA6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3AgICA6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICAgIC53dGFicyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDAlIDAlIDglO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLmpvYi10aXRsZS1zZWMge1xyXG4gICAgICAgICAgICAuam9iLWxjdG4ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoICA6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmxhLWNpcmNsZTpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgICAgOiBcIlxcZjE4YVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiAxM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3IgICAgICA6ICNmMjY5NTY7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBoMyB7XHJcbiAgICAgICAgICAgIC8vICAgICBkaXNwbGF5ICAgICAgOiB0YWJsZTtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtc2l6ZSAgICA6IDE2cHg7XHJcbiAgICAgICAgICAgIC8vICAgICBmb250LWZhbWlseSAgOiBRdWlja3NhbmQ7XHJcbiAgICAgICAgICAgIC8vICAgICBjb2xvciAgICAgICAgOiAkdGVhbGlzaDtcclxuICAgICAgICAgICAgLy8gICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgICAgICAgICAgLy8gICAgIG1hcmdpbiAgICAgICA6IDA7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICAgICAgICAgIC8vICAgICBtYXJnaW4tdG9wICAgOiAzcHg7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ucGljayB7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gICAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgICB3aWR0aCAgICAgICAgIDogMzZweDtcclxuICAgIHRvcCAgICAgICAgICAgOiAzcHg7XHJcbiAgICByaWdodCAgICAgICAgIDogMTRweDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuXHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgIGN1cnNvciAgICAgOiBwb2ludGVyO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuLmRhdGVJbnB1dCB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG5cclxufVxyXG5cclxuLnBkZi1pbWcge1xyXG4gICAgaGVpZ2h0IDogMTAwJTtcclxuICAgIG1hcmdpbiA6IDIwcHggYXV0byAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5ib3JkZXItU3BhY2Uge1xyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQgICAgICAgICA6ICcnO1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IGJsb2NrO1xyXG4gICAgICAgIHdpZHRoICAgICAgICAgICA6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodCAgICAgICAgICA6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwMmU7XHJcbiAgICAgICAgbWFyZ2luICAgICAgICAgIDogMzBweCBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAmOjphZnRlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNwcm9maWxlSW1hZ2VDcm9wcGVyIHtcclxuICAgIC5tb2RhbC1mb290ZXIge1xyXG4gICAgICAgIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgICAgICAgICBkaXNwbGF5ICAgIDogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCA6ICNmMjY5NTY7XHJcbiAgICAgICAgICAgIGJvcmRlciAgICAgOiAycHggc29saWQgI2YyNjk1NjtcclxuICAgICAgICAgICAgY29sb3IgICAgICA6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4jZmlsZUlucHV0IHtcclxuICAgIHdpZHRoICAgOiAwLjFweDtcclxuICAgIGhlaWdodCAgOiAwLjFweDtcclxuICAgIG9wYWNpdHkgOiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXggOiAtMTtcclxuXHJcbiAgICAmK2xhYmVsIHtcclxuICAgICAgICBjb2xvciAgICAgIDogYmxhY2s7XHJcbiAgICAgICAgZGlzcGxheSAgICA6IGlubGluZS1ibG9jaztcclxuICAgICAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXIgICAgIDogMXB4IGRvdHRlZDtcclxuICAgICAgICBwYWRkaW5nICAgIDogNXB4IDE1cHg7XHJcbiAgICAgICAgd2lkdGggICAgICA6IDEwMCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbiA6IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLmhvdmVyYWJsZSB7XHJcbiAgICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXkgICAgICAgICA6IGJsb2NrO1xyXG4gICAgY3Vyc29yICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDE0MHB4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XHJcbiAgICBvdmVyZmxvdyAgICAgICAgOiBoaWRkZW47XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgI2M1YzVjNTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwIGF1dG87XHJcblxyXG4gICAgLmhvdmVyLXRleHQge1xyXG4gICAgICAgIHBvc2l0aW9uICAgICAgICA6IGFic29sdXRlO1xyXG4gICAgICAgIGRpc3BsYXkgICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgdG9wICAgICAgICAgICAgIDogNTAlO1xyXG4gICAgICAgIGxlZnQgICAgICAgICAgICA6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm0gICAgICAgOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgei1pbmRleCAgICAgICAgIDogMjtcclxuICAgICAgICBhbGlnbi1pdGVtcyAgICAgOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50IDogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgICAgICA6IDEycHg7XHJcbiAgICAgICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuICAgICAgICBoZWlnaHQgICAgICAgICAgOiAxMDAlO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtICA6IGNhcGl0YWxpemU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwMDAsIDAwMCwgMDAwLCAwLjUpO1xyXG4gICAgICAgIGNvbG9yICAgICAgICAgICA6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5ICAgICA6IE9wZW4gU2FucztcclxuICAgIH1cclxuXHJcbiAgICAuYmFja2dyb3VuZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzICA6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1cyAgIDogNTAlO1xyXG4gICAgICAgIHotaW5kZXggICAgICAgICA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgICAgLmhvdmVyLXRleHQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmJhY2tncm91bmQge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wZXJzb25hbC1kZWF0aWxzIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwO1xyXG5cclxuICAgIEBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgICAgICAgZGlzcGxheSAgICAgIDogZmxleDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZyAgICAgIDogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nIHtcclxuICAgICAgICB3aWR0aCAgICAgICAgOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQgICAgICAgOiAxMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgb3ZlcmZsb3cgICAgIDogaGlkZGVuO1xyXG4gICAgICAgIG1heC13aWR0aCAgICA6NXB4IGF1dG8gIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAgICAgICAgICAgd2lkdGggICAgICAgIDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0ICAgICAgIDogNjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aCA6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyAuY2FyZHtcclxuLy8gICAgIHBhZGRpbmc6IDIwcHggMjBweCA0MHB4O1xyXG4vLyAgICAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKTtcclxuLy8gfVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidatePersonalInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate-personal-info',
          templateUrl: './candidate-personal-info.component.html',
          styleUrls: ['./candidate-personal-info.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_5__["CompleteProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/candidate-profile/candidate-profile.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/candidate-components/candidate-profile/candidate-profile.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CandidateProfileComponent */

  /***/
  function srcAppCandidateComponentsCandidateProfileCandidateProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateProfileComponent", function () {
      return CandidateProfileComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _candidate_personal_info_candidate_personal_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./candidate-personal-info/candidate-personal-info.component */
    "./src/app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component.ts");
    /* harmony import */


    var _candidate_social_networks_candidate_social_networks_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./candidate-social-networks/candidate-social-networks.component */
    "./src/app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component.ts");
    /* harmony import */


    var _candidate_contact_candidate_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./candidate-contact/candidate-contact.component */
    "./src/app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component.ts");

    var CandidateProfileComponent =
    /*#__PURE__*/
    function () {
      function CandidateProfileComponent() {
        _classCallCheck(this, CandidateProfileComponent);
      }

      _createClass(CandidateProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CandidateProfileComponent;
    }();

    CandidateProfileComponent.ɵfac = function CandidateProfileComponent_Factory(t) {
      return new (t || CandidateProfileComponent)();
    };

    CandidateProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidateProfileComponent,
      selectors: [["app-candidate-profile"]],
      decls: 26,
      vars: 0,
      consts: [[1, "profile"], [1, "row", "candidate", "no-gutters"], [1, "border-title"], [1, "container"], [1, "tabs-wrapper"], ["id", "pills-tab", "role", "tablist", 1, "nav", "nav-pills"], [1, "nav-item"], ["id", "pills-home-tab", "data-toggle", "pill", "href", "#pills-home", "role", "tab", "aria-controls", "pills-home", "aria-selected", "true", 1, "nav-link", "active"], ["id", "pills-profile-tab", "data-toggle", "pill", "href", "#pills-profile", "role", "tab", "aria-controls", "pills-profile", "aria-selected", "false", 1, "nav-link"], ["id", "pills-contact-tab", "data-toggle", "pill", "href", "#pills-contact", "role", "tab", "aria-controls", "pills-contact", "aria-selected", "false", 1, "nav-link"], [1, "col-lg-11", "mx-auto"], ["id", "pills-tabContent", 1, "tab-content"], ["id", "pills-home", "role", "tabpanel", "aria-labelledby", "pills-home-tab", 1, "tab-pane", "fade", "show", "active"], ["id", "pills-profile", "role", "tabpanel", "aria-labelledby", "pills-profile-tab", 1, "tab-pane", "fade"], ["id", "pills-contact", "role", "tabpanel", "aria-labelledby", "pills-contact-tab", 1, "tab-pane", "fade"]],
      template: function CandidateProfileComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "My Profile");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Personal Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Social Networks ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Contact Information ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "app-candidate-personal-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "app-candidate-social-networks");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-candidate-contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_candidate_personal_info_candidate_personal_info_component__WEBPACK_IMPORTED_MODULE_1__["CandidatePersonalInfoComponent"], _candidate_social_networks_candidate_social_networks_component__WEBPACK_IMPORTED_MODULE_2__["CandidateSocialNetworksComponent"], _candidate_contact_candidate_contact_component__WEBPACK_IMPORTED_MODULE_3__["CandidateContactComponent"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF9nZW5lcmFsLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX3ZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBVztFQUNYLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxvQ0FBa0Q7RUFDbEQsNEJBQThCO0VBQzlCLG9CQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FDRG5COztBRElBO0VBQ0Usa0JBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixnQkFBd0I7RUFDeEIsWUFBc0I7QUNEeEI7O0FESUE7O0VBRUUsK0JBQW9DO0VBQXBDLHdCQUFvQztFQUNwQyx5QkFBMkI7VUFBM0IsbUJBQTJCO0VBQzNCLFdBQXlCO0VBQ3pCLFdBQXlCO0VBQ3pCLGtDQUF3QztFQUN4QyxlQUEyQjtFQUMzQixrQkFBNkI7RUFDN0IsZUFBd0I7RUFDeEIsZ0JBQXNCO0VBR3RCLDREQUFxRTtBQ0h2RTs7QURWQTs7RUFpQkksa0JBQW9CO0VBQ3BCLDZCQUFnQztFQUNoQyxlQUFvQjtFQUNwQixpQkFBb0I7RUFDcEIsY0V2Q2tCO0VGd0NsQiwwQkFBMEI7RUFDMUIsZ0JBQW1CO0VBQ25CLGtCQUFtQjtBQ0Z2Qjs7QUR0QkE7O0VBNEJJLGlCQUFpQjtBQ0RyQjs7QUQzQkE7O0VBaUNJLG9CQUEyQjtFQUMzQixrQkFBa0I7QUNE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VUFBVTtFQUNWLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FDMUJsQjs7QUQ2QkE7RUFDRSxzQkFBc0I7QUMxQnhCIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aCA6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKCdhc3NldHMvaW1nL1BhdHRlcm4uc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMjJweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvdmVyZmxvdyAgICAgICAgOiBoaWRkZW47XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogYXV0bztcclxufVxyXG5cclxuLm1haW4tdGl0bGUsXHJcbi5ib3JkZXItdGl0bGUge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IHNvbGlkIDAuNXB4ICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogMTVweCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICBtYXJnaW4tYm90dG9tICAgICAgOiAwO1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG4gIC8vIHotaW5kZXggICAgICAgICA6IDk5O1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQgIDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5ICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXNpemUgICAgIDogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgY29sb3IgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy10b3AgICA6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b20gOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5qb2ItaXMuZnQge1xyXG4gICAgbWFyZ2luICAgICAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgJisudGFicy13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoICA6IDkwJTtcclxuICBtYXJnaW4gOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0ICA6IG5vbmU7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG4udGFicy13cmFwcGVyIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiAxcHggc29saWQgI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiA1cHggMCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogJHN0ZWVsO1xyXG5cclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuICAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1pbmRpZ287XHJcbiAgICBiYWNrZ3JvdW5kICAgICAgOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudCAgIDogJyc7XHJcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcclxuICAgIHdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgIDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDIuNTtcclxuICAgICAgICBwYWRkaW5nICAgICA6IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGlucHV0cyBzdHlsZVxyXG5cclxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB0ZXh0LWFsaWduICAgICAgOiBsZWZ0O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweCAxMHB4O1xyXG4gIC8vIGJvcmRlci1sZWZ0ICA6IDJweCBzb2xpZCAgJGJvcmRlci1jb2xvcjtcclxuICBiYWNrZ3JvdW5kICAgICAgOiAjZmZmO1xyXG4gIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDEwcHg7XHJcblxyXG4gICY6Zm9jdXMtd2l0aGluIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRlYWxpc2g7XHJcbiAgICB0cmFuc2l0aW9uIDogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdCA6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodCAgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2ggOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgOiAxLjMxO1xyXG4gICAgZm9udC13ZWlnaHQgIDogNTAwO1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5ICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuXHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0ICAgOiAxMHB4O1xyXG4gICAgYm90dG9tICA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCAsIHRleHRhcmVhICwgc2VsZWN0IHtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbSAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDAgNHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxM3B4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gIG1hcmdpbiAgICAgICAgOiAtNXB4IDAgMzBweDtcclxuICBjb2xvciAgICAgICAgIDogZ3JleTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5ICAgICAgIDogYmxvY2s7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcclxuICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbn1cclxuXHJcbi5zZWxlY3QtdXNlci10YWJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtdHdvO1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQgICAgICAgICAgICAgICAgOiBub25lO1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDJweCBzb2xpZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1cyAgICA6IDVweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgICBjdXJzb3IgICAgICAgICAgICAgICA6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemUgICAgICAgICAgICA6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseSAgICAgICAgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc3RyZXRjaCAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgICAgICA6IDEuMzY7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgICAgICA6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ24gICAgICAgICAgIDogbGVmdDtcclxuICAgIGNvbG9yICAgICAgICAgICAgICAgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICBwYWRkaW5nICAgICAgICAgICAgICA6IDVweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvciAgOiAkYm9yZGVyLWNvbG9yO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLmZhLWV5ZS1zbGFzaDpob3ZlcixcclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZCAgICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgY29sb3IgICAgICAgICA6ICR0ZWFsaXNoO1xyXG4gIGZvbnQtc2l6ZSAgICAgOiAxOHB4O1xyXG4gIHdpZHRoICAgICAgICAgOiA0MHB4O1xyXG4gIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDE2cHg7XHJcbiAgcmlnaHQgICAgICAgICA6IDVweDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yICAgICA6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmRhdGVJbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBjdXJzb3IgICAgICAgOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3AgICAgIDogMTZweDtcclxuICByaWdodCAgIDogNXB4O1xyXG4gIHdpZHRoICAgOiA0MHB4O1xyXG4gIGN1cnNvciAgOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAubGEubGEtcGx1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzAwOURBMDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDYwMDtcclxuICB9XHJcblxyXG4gIC5hZGQtbW9yZS1idG4ge1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwOURBMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDE0cHg7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgIzAwOURBMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIG1hcmdpbiAgICAgIDogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduICA6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5IDogU2Vnb2VVSTtcclxuICAgIGZvbnQtc2l6ZSAgIDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0IDogMS41O1xyXG4gICAgY29sb3IgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgfVxyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luIDogMDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGggICAgICAgICAgOiAxMDAlO1xyXG4gIC8vIHBhZGRpbmc6IDAgMTVweDtcclxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nICAgICAgIDogOHB4IDIwcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTtcclxuICAgIGhlaWdodCAgICAgICAgOiBhdXRvO1xyXG4gICAgZm9udC1zaXplICAgICA6IDE0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAmLnNhdmVCdG4ge1xyXG4gICAgICBib3JkZXItY29sb3IgICAgOiAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2xvc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyICAgIDoxcHggc29saWQgJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VtZWFkZC1mb3JtIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hZGRNb3JlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICAgICA6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yICAgICAgICAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAvLyBjb2xvcjogIzAwOURBMCAgO1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgIDogNHB4IDE1cHggNHB4IDhweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQgICAgICAgICAgOiA2MDA7XHJcbn1cclxuXHJcbi5zYXZlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yICAgICAgICAgICA6IHdoaXRlXHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0J0biB7XHJcbiAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy10b3A6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG4gICZfY3JlYXRlLW5ld3tcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLmJ0bi5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBib3JkZXItY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaXMtaW52YWxpZHtcclxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXF1aXJlZC1lcnJvcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OjUlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZW1wbHktbGlzdHtcclxuICAmOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi50YWItY29udGVudHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZy9QYXR0ZXJuLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMjJweDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbi10aXRsZSxcbi5ib3JkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2VkZWZmNztcbiAgcGFkZGluZzogMTVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi10aXRsZSBoMyxcbi5ib3JkZXItdGl0bGUgaDMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5LFxuLmJvcmRlci10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5qb2ItaXMuZnQsXG4uYm9yZGVyLXRpdGxlIC5qb2ItaXMuZnQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubWFpbi10aXRsZSArIC50YWJzLXdyYXBwZXIsXG4uYm9yZGVyLXRpdGxlICsgLnRhYnMtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogODBweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLnRhYnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWZmNztcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjODg4Nzk1O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjFiNDY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzBiMWI0NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNlNTlhMTI7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIGEge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzI3YmZjMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tZ3JvdXAgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuLmZvcm0tZ3JvdXAgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsIC5mb3JtLWdyb3VwIHRleHRhcmVhLCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHQge1xuICBtYXJnaW46IC01cHggMCAzMHB4O1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zNjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjYWNhY2E7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxuLmZhLWV5ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ucGljazo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVJbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC5sYS5sYS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbC1ib2R5IC5hZGQtbW9yZS1idG4ge1xuICBjb2xvcjogIzAwOURBMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbn1cblxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZVVJO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMGIxYjQ2O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLnNhdmVCdG4ge1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLmNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTI7XG4gIGNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYm9keSBmb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnJlc3VtZWFkZC1mb3JtIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRNb3JlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweCAxNXB4IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNhdmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja0J0biB7XG4gIGNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEycmVtO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJfY3JlYXRlLW5ldyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1aXJlZC1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lbXBseS1saXN0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVscC1ibG9jayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbiIsIiRsaWdodC1ncmV5OiAjZmFmYWZhO1xyXG4kd2FybS1ncmV5IDojNzA3MDcwO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHdhcm0tZ3JleS10d286ICM5ZTllOWU7XHJcbiRkYXJrLWluZGlnbyA6ICMwYjFiNDY7XHJcbiR3aGl0ZS10d286I2VmZWZlZjtcclxuJHRlYWxpc2ggOiMyN2JmYzA7XHJcbiRvcmFuZ2U6I2U1OWExMjtcclxuJGJvcmRlci1jb2xvcjojY2FjYWNhO1xyXG4kZHVzazojNTQ1ZjdkO1xyXG4kYmxhY2s6IzJhMmEyYTtcclxuJHN0ZWVsOiAjODg4Nzk1O1xyXG4kd2hpdGUtZm91cjojZmVmZWZlO1xyXG4kcGFsZS1ncmV5OiNmM2Y0Zjk7Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-candidate-profile",
          templateUrl: "./candidate-profile.component.html",
          styleUrls: ["./candidate-profile.component.scss"]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component.ts":
  /*!*************************************************************************************************************************!*\
    !*** ./src/app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component.ts ***!
    \*************************************************************************************************************************/

  /*! exports provided: CandidateSocialNetworksComponent */

  /***/
  function srcAppCandidateComponentsCandidateProfileCandidateSocialNetworksCandidateSocialNetworksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateSocialNetworksComponent", function () {
      return CandidateSocialNetworksComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_candidate_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/candidate/profile.service */
    "./src/services/candidate/profile.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! services/candidate/complete-profile.service */
    "./src/services/candidate/complete-profile.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function CandidateSocialNetworksComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r183 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateSocialNetworksComponent_div_0_Template_span_click_3_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r183);

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

          return ctx_r182.open(_r180);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "linkedin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h3", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Behance.com/profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "github.com/profile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

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
        var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r179.profileData.social_networks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r179.profileData.social_networks.facebook, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r179.profileData.social_networks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r179.profileData.social_networks.linkedin, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r179.profileData.social_networks.facebook, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r179.profileData.social_networks.facebook, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r179.profileData.social_networks.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r179.profileData.social_networks.linkedin, " ");
      }
    }

    function CandidateSocialNetworksComponent_ng_template_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r190 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Social Contacts");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateSocialNetworksComponent_ng_template_3_Template_button_click_3_listener($event) {
          var d_r185 = ctx.dismiss;
          return d_r185("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CandidateSocialNetworksComponent_ng_template_3_Template_form_ngSubmit_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r189.onSubmitSocialNetworks(ctx_r189.form);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Facebook");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateSocialNetworksComponent_ng_template_3_Template_input_ngModelChange_16_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r191.profileData.social_networks.facebook = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Linkedin");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 35, 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateSocialNetworksComponent_ng_template_3_Template_input_ngModelChange_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r192.profileData.social_networks.linkedin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "behance");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateSocialNetworksComponent_ng_template_3_Template_input_ngModelChange_29_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r193.profileData.social_networks.behance = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "github");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 40, 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CandidateSocialNetworksComponent_ng_template_3_Template_input_ngModelChange_35_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r190);

          var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r194.profileData.social_networks.github = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CandidateSocialNetworksComponent_ng_template_3_Template_button_click_39_listener($event) {
          var d_r185 = ctx.dismiss;
          return d_r185("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Cancel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Save");

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
        var ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r181.socialNetworksForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.profileData.social_networks.facebook);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.profileData.social_networks.linkedin);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.profileData.social_networks.behance);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r181.profileData.social_networks.github);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r181.socialNetworksForm.invalid);
      }
    }

    var CandidateSocialNetworksComponent =
    /*#__PURE__*/
    function () {
      function CandidateSocialNetworksComponent(fb, candidateUpdateProfileService, currentRoute, profileInfoPercentage, toast, modalService) {
        _classCallCheck(this, CandidateSocialNetworksComponent);

        this.fb = fb;
        this.candidateUpdateProfileService = candidateUpdateProfileService;
        this.currentRoute = currentRoute;
        this.profileInfoPercentage = profileInfoPercentage;
        this.toast = toast;
        this.modalService = modalService;
        this.editProfileError = false;
        this.editForm = true;
        this.editProfileForm = true;
        this.editEducationForm = true;
        this.userCompelete = 0;
        /* -------------------------------------------------------------------------- */

        /*                     Form Social Networks Information                       */

        /* -------------------------------------------------------------------------- */

        this.addSocialNetworksInfoEditMode = true;
      }
      /* -------------------------------------------------------------------------- */

      /*                          NGON INit LifeCycle Hook                          */

      /* -------------------------------------------------------------------------- */


      _createClass(CandidateSocialNetworksComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.tokenTransform();
          this.candidateId = this.currentRoute.parent.parent.snapshot.params["id"]; // social Networks Form

          this.socialNetworksForm = this.fb.group({
            facebook: [''],
            linkedin: [''],
            behance: [''],
            github: ['']
          }); // display personal data

          this.displayPersonalInfo();
        }
        /* -------------------------------------------------------------------------- */

        /*                         Get Personal Info Function                         */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "displayPersonalInfo",
        value: function displayPersonalInfo() {
          var _this8 = this;

          // get data from api
          this.candidateUpdateProfileService.getProfileCandidate(this.candidateId).subscribe(function (response) {
            console.log("data here ".concat(response));
            console.log(response);
            _this8.profileData = response; // console.log(this.profileData);

            localStorage.setItem("userId", response.id);
            _this8.userId = localStorage.getItem("userId");
          }, function (error) {// console.log(error + 'this is error')
          });
        }
      }, {
        key: "tokenTransform",
        value: function tokenTransform() {
          this.currentUserId = JSON.parse(atob(window.sessionStorage.getItem("token").split('.')[1])).sub;
        }
      }, {
        key: "onSubmitSocialNetworks",
        value: function onSubmitSocialNetworks(form) {
          var _this9 = this;

          var editSocailNetworks = {
            id: this.userId,
            link: this.socialNetworksForm.value.facebook,
            website: this.socialNetworksForm.value.linkedin
          };
          this.candidateUpdateProfileService.editProfileCandidate(editSocailNetworks, this.currentUserId).subscribe(function (data) {
            // console.log("success social");
            _this9.displayPersonalInfo();

            _this9.onCancelSocailNetworks();

            _this9.toast.success("social Networks updated successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this9.candidateUpdateProfileService.sidebarChart.next(0);
          }, function (error) {
            _this9.toast.error("Error , Please try again", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            }); // console.log("there is error in social");

          }); // social Networks form
        }
      }, {
        key: "onCancelSocailNetworks",
        value: function onCancelSocailNetworks() {
          this.addSocialNetworksInfoEditMode = true;
          this.displayPersonalInfo();
        }
      }, {
        key: "startEditSocailNetworks",
        value: function startEditSocailNetworks() {
          this.addSocialNetworksInfoEditMode = false;
        }
        /* -------------------------------------------------------------------------- */

        /*                           modal Inviteation start                          */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "open",
        value: function open(content) {
          var _this10 = this;

          this.modalService.open(content, {
            size: 'lg'
          }).result.then(function (result) {
            _this10.closeResult = "Closed with: ".concat(result);
          }, function (reason) {
            _this10.closeResult = "Dismissed ".concat(_this10.getDismissReason(reason));
          });
        } // This function is used in open

      }, {
        key: "getDismissReason",
        value: function getDismissReason(reason) {
          if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
          } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
          } else {
            return "with: ".concat(reason);
          }
        }
      }]);

      return CandidateSocialNetworksComponent;
    }();

    CandidateSocialNetworksComponent.ɵfac = function CandidateSocialNetworksComponent_Factory(t) {
      return new (t || CandidateSocialNetworksComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_6__["CompleteProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_candidate_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]));
    };

    CandidateSocialNetworksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidateSocialNetworksComponent,
      selectors: [["app-candidate-social-networks"]],
      decls: 5,
      vars: 1,
      consts: [["class", "profile", 4, "ngIf"], [1, "card-content"], [1, "card-body", "p-1"], ["Editmode", ""], [1, "profile"], [1, "profile__socialNetwork-info"], [1, "profile__summury-info__Edit"], ["title", "", 1, "profile__summury-info__Edit-link", "job-is", "ft", 3, "click"], [1, "la", "la-pencil"], [1, "profile__socialNetwork-info__content"], [1, "row", "content"], [1, "col-lg-6"], [1, "profile__socialNetwork-info__content-links"], ["target", "_blank", 1, "row", 3, "href"], [1, "col-2", "facebookContainer"], ["src", "../../../../assets/img/icons/facebook.png", "alt", ""], [1, "col-7"], [1, "subtitle", "facebook-subtitle"], [1, "col-2", "linkedinContainer"], ["src", "../../../../assets/img/icons/linkedin (1).png", "alt", ""], [1, "subtitle", "linkedin-subtitle"], ["src", "../../../../assets/img/icons/behance.png", "alt", ""], ["src", "../../../../assets/img/icons/github.png", "alt", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter"], [1, "modal-body"], [1, "profile__summury-info__Edit-mode"], [1, "form", "content", 3, "formGroup", "ngSubmit"], [1, "row"], [1, "form-group"], ["type", "text", "formControlName", "facebook", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-facebook"], ["type", "text", "formControlName", "linkedin", 3, "ngModel", "ngModelChange"], ["linkedin", ""], [1, "la", "la-linkedin", 2, "font-size", "25px"], ["type", "text", "formControlName", "behance", 3, "ngModel", "ngModelChange"], [1, "fa", "fa-behance"], ["type", "text", "formControlName", "github", 3, "ngModel", "ngModelChange"], ["github", ""], [1, "la", "la-github", 2, "font-size", "25px"], [1, "pt-3", "modal-btn-wrapper"], ["type", "button", "aria-label", "Close", 1, "btn", "close", "backBtn", 3, "click"], ["type", "submit", 1, "btn", "saveBtn", 3, "disabled"]],
      template: function CandidateSocialNetworksComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CandidateSocialNetworksComponent_div_0_Template, 47, 8, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CandidateSocialNetworksComponent_ng_template_3_Template, 43, 6, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.profileData);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.profile__summury-info[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%] {\n  padding: 5px;\n  font-size: 20px;\n  background: #9e9e9e;\n  border-color: #9e9e9e;\n  color: white;\n}\n\n.profile__summury-info__Edit-link[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  padding: 2% 5%;\n  margin: 2%;\n  border: 3px;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #f26956;\n  width: 20%;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   .facebookContainer[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   .linkedinContainer[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  color: #0e76a8;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3.facebook-subtitle[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3.linkedin-subtitle[_ngcontent-%COMP%] {\n  color: #0e76a8;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 80%;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.profile__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888888;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%] {\n  border: 2px solid #27bfc0;\n  color: #27bfc0;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .saveBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: white;\n  color: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%] {\n  border: 2px solid #f26956;\n  color: #f26956;\n  margin-left: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .cancelBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.profile[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  font-family: \"mainFontMedium\";\n  font-size: 20px;\n  font-weight: bold;\n  color: #0b1b46;\n  margin: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-left: 40px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]::before {\n  content: '';\n  height: 5px;\n  width: 5px;\n  display: inline-block;\n  border-radius: 50%;\n  background-color: black;\n  position: relative;\n  top: -3px;\n  margin-right: 15px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   p.no-dot[_ngcontent-%COMP%]::before {\n  display: none;\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%] {\n  margin-bottom: 40px;\n  display: block;\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 3px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  margin-right: 20px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding-right: 1%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #27bfc0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  color: #f26956;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]    > li[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  font-size: 14px;\n  font-family: Open Sans;\n  margin: 0;\n  font-weight: 500;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%] {\n  border: none;\n  padding-right: 15px;\n  padding-left: 15px;\n  padding-top: 0;\n  padding-bottom: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .wtabs[_ngcontent-%COMP%] {\n  padding: 5% 0% 0% 8%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%] {\n  -webkit-transition: all 0.4s ease-in-out;\n  transition: all 0.4s ease-in-out;\n  padding: 2% 5%;\n  margin: 2% 0;\n  border: 3px;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]:hover {\n  box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.1);\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #f26956;\n  width: 20%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   .facebookContainer[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   .linkedinContainer[_ngcontent-%COMP%]   i.social-mediaIcon[_ngcontent-%COMP%] {\n  color: #0e76a8;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3.facebook-subtitle[_ngcontent-%COMP%] {\n  color: #3b5998;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3.linkedin-subtitle[_ngcontent-%COMP%] {\n  color: #0e76a8;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  width: 80%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2__socialNetwork-info__content-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888888;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  width: 100%;\n}\n\n.profile[_ngcontent-%COMP%]   .job-overview.style2[_ngcontent-%COMP%]   .job-title-sec[_ngcontent-%COMP%]   .job-lctn[_ngcontent-%COMP%]   .la-circle[_ngcontent-%COMP%]:before {\n  content: \"\\f18a\";\n  font-size: 13px;\n  font-weight: 900;\n  color: #f26956;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  padding: 0 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLXNvY2lhbC1uZXR3b3Jrcy9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX2dlbmVyYWwuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLXNvY2lhbC1uZXR3b3Jrcy9jYW5kaWRhdGUtc29jaWFsLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtcHJvZmlsZS9jYW5kaWRhdGUtc29jaWFsLW5ldHdvcmtzL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1wcm9maWxlL2NhbmRpZGF0ZS1zb2NpYWwtbmV0d29ya3MvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXGFwcFxcY2FuZGlkYXRlLWNvbXBvbmVudHNcXGNhbmRpZGF0ZS1wcm9maWxlXFxjYW5kaWRhdGUtc29jaWFsLW5ldHdvcmtzXFxjYW5kaWRhdGUtc29jaWFsLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsVUFBVztFQUNYLGNBQWM7QUNEaEI7O0FESUE7RUFDRSxvQ0FBa0Q7RUFDbEQsNEJBQThCO0VBQzlCLG9CQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsaUJBQWlCO0FDRG5COztBRElBO0VBQ0Usa0JBQTBCO0VBQzFCLHVCQUF1QjtFQUN2QixnQkFBd0I7RUFDeEIsWUFBc0I7QUNEeEI7O0FESUE7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QixXQUFvQjtFQUNwQixlQUFvQjtFQUNwQixzQkFBeUI7RUFDekIsU0FBaUI7RUFFakIsZ0JBQW1CO0FGb2IzQjs7QUUzbUJBO0VBMkxRLFlBQW9CO0VBQ3BCLG1CQUFvQjtFQUNwQixrQkFBb0I7RUFDcEIsY0FBaUI7RUFDakIsaUJBQWlCO0FGb2J6Qjs7QUVubkJBO0VBa01ZLG9CQUFvQjtBRnFiaEM7O0FFdm5CQTtFQXVNUSx3Q0FBZ0M7RUFBaEMsZ0NBQWdDO0VBQ2hDLGNBQWlCO0VBQ2pCLFlBQWU7RUFDZixXQUFlO0FGb2J2Qjs7QUU5bkJBO0VBNk1ZLDJDQUEyQztBRnFidkQ7O0FFbG9CQTtFQWlOWSxnQkFBZ0I7QUZxYjVCOztBRXRvQkE7RUFxTlksZUFBaUI7RUFDakIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixjQUFvQjtFQUNwQixVQUFnQjtBRnFiNUI7O0FFN29CQTtFQTROWSxjQUFjO0FGcWIxQjs7QUVqcEJBO0VBZ09ZLGNBQWM7QUZxYjFCOztBRXJwQkE7RUFvT1ksY0FBYztBRnFiMUI7O0FFenBCQTtFQXdPWSxjQUFjO0FGcWIxQjs7QUU3cEJBO0VBNE9ZLFNBQVM7RUFDVCxVQUFXO0FGcWJ2Qjs7QUVscUJBO0VBaVBZLFdBQVc7QUZxYnZCOztBRXRxQkE7RUFvUGdCLGNBQWM7QUZzYjlCOztBRTFxQkE7RUE2UGdCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQWE7QUZpYjdCOztBRS9xQkE7RUFpUW9CLGdCQUFvQjtFQUNwQixlQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBb0I7QUZrYnhDOztBRXphQTtFQUNJLGVBQWU7QUY0YW5CIiwiZmlsZSI6InNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLXByb2ZpbGUvY2FuZGlkYXRlLXNvY2lhbC1uZXR3b3Jrcy9jYW5kaWRhdGUtc29jaWFsLW5ldHdvcmtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi92YXJpYWJsZXMnO1xyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGggOiA5MCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi5uYXZiYXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2UgICA6IHVybCgnYXNzZXRzL2ltZy9QYXR0ZXJuLnN2ZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0ICA6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemUgICAgOiAyMCU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogNXB4IDIycHg7XHJcbn1cclxuXHJcbmhlYWRlciB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgb3ZlcmZsb3cgICAgICAgIDogaGlkZGVuO1xyXG4gIGhlaWdodCAgICAgICAgICA6IGF1dG87XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlLFxyXG4uYm9yZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDE1cHggMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgICAgIDogMDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuICAvLyB6LWluZGV4ICAgICAgICAgOiA5OTtcclxuXHJcbiAgaDMge1xyXG4gICAgbWFyZ2luLXJpZ2h0ICA6IGF1dG87XHJcbiAgICBmb250LWZhbWlseSAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zaXplICAgICA6IDIycHg7XHJcbiAgICBmb250LXdlaWdodCAgIDogYm9sZDtcclxuICAgIGNvbG9yICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHBhZGRpbmctdG9wICAgOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tIDogMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuam9iLWlzLmZ0IHtcclxuICAgIG1hcmdpbiAgICAgICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcblxyXG4gICYrLnRhYnMtd3JhcHBlciB7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFpbi13cmFwcGVyIHtcclxuICB3aWR0aCAgOiA5MCU7XHJcbiAgbWFyZ2luIDogODBweCBhdXRvIDAgIWltcG9ydGFudDtcclxuICBmbG9hdCAgOiBub25lO1xyXG4gIHBhZGRpbmc6IDYwcHggMDtcclxufVxyXG5cclxuLnRhYnMtd3JhcHBlciB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogMXB4IHNvbGlkICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogNXB4IDAgMDtcclxuICBwb3NpdGlvbiAgICAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wICAgICAgICAgOiAwcHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbSAgIDogMjBweDtcclxuICAvLyBwb3NpdGlvbiAgICAgICAgOiBmaXhlZDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJveC1zaGFkb3cgICAgICAgICA6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICRzdGVlbDtcclxuXHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXHJcbiAgLm5hdi1waWxscyAuc2hvdz4ubmF2LWxpbmsge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstaW5kaWdvO1xyXG4gICAgYmFja2dyb3VuZCAgICAgIDogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgfVxyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcclxuICAgIGNvbnRlbnQgICA6ICcnO1xyXG4gICAgZGlzcGxheSAgIDogYmxvY2s7XHJcbiAgICB3aWR0aCAgICAgOiAxMDAlO1xyXG4gICAgaGVpZ2h0ICAgIDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogJG9yYW5nZTtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcbiAgICAgIGEge1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNjBweDtcclxuICAgICAgICBmb250LXNpemUgICA6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICAgICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICAgICAgbGluZS1oZWlnaHQgOiAyLjU7XHJcbiAgICAgICAgcGFkZGluZyAgICAgOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5IDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBpbnB1dHMgc3R5bGVcclxuXHJcbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDA7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRib3JkZXItY29sb3I7XHJcbiAgdGV4dC1hbGlnbiAgICAgIDogbGVmdDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHggMTBweDtcclxuICAvLyBib3JkZXItbGVmdCAgOiAycHggc29saWQgICRib3JkZXItY29sb3I7XHJcbiAgYmFja2dyb3VuZCAgICAgIDogI2ZmZjtcclxuICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDNweDtcclxuICBtYXJnaW4tYm90dG9tICAgOiAxMHB4O1xyXG5cclxuICAmOmZvY3VzLXdpdGhpbiB7XHJcbiAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkICR0ZWFsaXNoO1xyXG4gICAgdHJhbnNpdGlvbiA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBwYWRkaW5nLWxlZnQgOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxM3B4O1xyXG4gICAgZm9udC13ZWlnaHQgIDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgIDogMS4zMTtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDUwMDtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDA7XHJcbiAgICBmb250LWZhbWlseSAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodCAgIDogMTBweDtcclxuICAgIGJvdHRvbSAgOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQgLCB0ZXh0YXJlYSAsIHNlbGVjdCB7XHJcbiAgICBib3JkZXIgICAgICAgICAgOiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b20gICA6IDAgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nICAgICAgICAgOiAwcHg7XHJcbiAgICBtYXJnaW4gICAgICAgICAgOiAwIDRweDtcclxuICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBoZWlnaHQgICAgICAgICAgOiAyMnB4O1xyXG4gICAgZm9udC1zaXplICAgICAgIDogMTNweDtcclxuICAgIHdpZHRoICAgICAgICAgICA6IDEwMCU7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10ZXh0IHtcclxuICBtYXJnaW4gICAgICAgIDogLTVweCAwIDMwcHg7XHJcbiAgY29sb3IgICAgICAgICA6IGdyZXk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxufVxyXG5cclxuZm9ybSAuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gdGV4dGFyZWEge1xyXG4gIHdpZHRoIDogMTAwJTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gbGFiZWwge1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheSAgICAgICA6IGJsb2NrO1xyXG5cclxufVxyXG5cclxuLmN1c3RvbS1jb250cm9sIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XHJcbiAgY29sb3I6ICR3YXJtLWdyZXktdHdvO1xyXG59XHJcblxyXG4uc2VsZWN0LXVzZXItdGFicyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlLXR3bztcclxuICBib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuXHJcbiAgc3BhbiB7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGZsb2F0ICAgICAgICAgICAgICAgIDogbm9uZTtcclxuICAgIGRpc3BsYXkgICAgICAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAycHggc29saWQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXMgICAgOiA1cHg7XHJcbiAgICAtby1ib3JkZXItcmFkaXVzICAgICA6IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gICAgY3Vyc29yICAgICAgICAgICAgICAgOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplICAgICAgICAgICAgOiAxNHB4O1xyXG4gICAgZm9udC1mYW1pbHkgICAgICAgICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXN0cmV0Y2ggICAgICAgICA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgICAgICAgICAgOiAxLjM2O1xyXG4gICAgbGV0dGVyLXNwYWNpbmcgICAgICAgOiBub3JtYWw7XHJcbiAgICB0ZXh0LWFsaWduICAgICAgICAgICA6IGxlZnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgICAgICA6ICR3YXJtLWdyZXktdHdvO1xyXG4gICAgcGFkZGluZyAgICAgICAgICAgICAgOiA1cHggMTBweDtcclxuICAgIHRyYW5zaXRpb24gICAgICAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMHB4O1xyXG5cclxuICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJi5hY3RpdmUge1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodCAgICAgOiBib2xkICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcblxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7XHJcbiAgY29sb3IgIDogJGJvcmRlci1jb2xvcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIC8qIEZpcmVmb3ggKi9cclxufVxyXG5cclxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbi5mYS1leWUtc2xhc2g6aG92ZXIsXHJcbi5mYS1leWU6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBpY2sge1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGJhY2tncm91bmQgICAgOiAjZmZmO1xyXG4gIGJvcmRlciAgICAgICAgOiBub25lO1xyXG4gIGNvbG9yICAgICAgICAgOiAkdGVhbGlzaDtcclxuICBmb250LXNpemUgICAgIDogMThweDtcclxuICB3aWR0aCAgICAgICAgIDogNDBweDtcclxuICBwb3NpdGlvbiAgICAgIDogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAxNnB4O1xyXG4gIHJpZ2h0ICAgICAgICAgOiA1cHg7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIGN1cnNvciAgICAgOiBwb2ludGVyO1xyXG5cclxuICB9XHJcbn1cclxuXHJcbi5kYXRlSW5wdXQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgY3Vyc29yICAgICAgIDogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcclxuICBvcGFjaXR5IDogMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wICAgICA6IDE2cHg7XHJcbiAgcmlnaHQgICA6IDVweDtcclxuICB3aWR0aCAgIDogNDBweDtcclxuICBjdXJzb3IgIDogcG9pbnRlcjtcclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgLmxhLmxhLXBsdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBmb250LXdlaWdodCAgICAgOiA2MDA7XHJcbiAgfVxyXG5cclxuICAuYWRkLW1vcmUtYnRuIHtcclxuICAgIGNvbG9yICAgICAgICA6ICMwMDlEQTA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBmb250LXNpemUgICAgOiAxNHB4O1xyXG4gICAgYm9yZGVyICAgICAgIDogMXB4IHNvbGlkICMwMDlEQTA7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG1hcmdpbjogMTBweCAwIDA7XHJcblxyXG4gIC5tb2RhbC10aXRsZSB7XHJcbiAgICBtYXJnaW4gICAgICA6IDAgYXV0byAhaW1wb3J0YW50O1xyXG4gICAgdGV4dC1hbGlnbiAgOiBjZW50ZXI7XHJcbiAgICBmb250LWZhbWlseSA6IFNlZ29lVUk7XHJcbiAgICBmb250LXNpemUgICA6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCA6IDEuNTtcclxuICAgIGNvbG9yICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gIH1cclxuXHJcbiAgLmNsb3NlIHtcclxuICAgIG1hcmdpbiA6IDA7XHJcbiAgICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1idG4td3JhcHBlciB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHdpZHRoICAgICAgICAgIDogMTAwJTtcclxuICAvLyBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgOiBmbGV4O1xyXG5cclxuICBidXR0b24ge1xyXG4gICAgcGFkZGluZyAgICAgICA6IDhweCAyMHB4O1xyXG4gICAgLy8gbGluZS1oZWlnaHQ6IDE7XHJcbiAgICBoZWlnaHQgICAgICAgIDogYXV0bztcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAxNHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgJi5zYXZlQnRuIHtcclxuICAgICAgYm9yZGVyLWNvbG9yICAgIDogJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIH1cclxuXHJcbiAgICAmLmNsb3NlIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgIGJvcmRlciAgICA6MXB4IHNvbGlkICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm1vZGFsLWJvZHkge1xyXG4gIGZvcm0ge1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXN1bWVhZGQtZm9ybSB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uYWRkTW9yZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvciAgICAgOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvciAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICBjb2xvciAgICAgICAgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgLy8gY29sb3I6ICMwMDlEQTAgIDtcclxuICBwYWRkaW5nICAgICAgICAgICAgICA6IDRweCAxNXB4IDRweCA4cHg7XHJcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIC8vIGJvcmRlci1yaWdodC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXMgICAgICAgIDogNXB4O1xyXG4gIGZvbnQtd2VpZ2h0ICAgICAgICAgIDogNjAwO1xyXG59XHJcblxyXG4uc2F2ZUJ0biB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZVxyXG4gIH1cclxufVxyXG5cclxuLmJhY2tCdG4ge1xyXG4gIGNvbG9yICAgICAgICAgICA6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVye1xyXG4gIHBhZGRpbmctdG9wOiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHNwYW57XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgICBmb250LXNpemU6IDEycmVtO1xyXG4gICAgICBjb2xvcjogJHRlYWxpc2g7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIH1cclxuICAmX2NyZWF0ZS1uZXd7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgfVxyXG4gIC5idG4uYnRuLXByaW1hcnl7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmlzLWludmFsaWR7XHJcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG4ucmVxdWlyZWQtZXJyb3J7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdG9wOiA1JTtcclxuICByaWdodDo1JTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmVtcGx5LWxpc3R7XHJcbiAgJjpob3ZlcntcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5oZWxwLWJsb2NrIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tdG9wOiAtOHB4O1xyXG59XHJcblxyXG4udGFiLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxufSIsIi5jb250YWluZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImFzc2V0cy9pbWcvUGF0dGVybi5zdmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMjAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcbiAgcGFkZGluZzogNXB4IDIycHg7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGhlaWdodDogYXV0bztcbn1cblxuLm1haW4tdGl0bGUsXG4uYm9yZGVyLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDAuNXB4ICNlZGVmZjc7XG4gIHBhZGRpbmc6IDE1cHggMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLm1haW4tdGl0bGUgaDMsXG4uYm9yZGVyLXRpdGxlIGgzIHtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzBiMWI0NjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBhZGRpbmctdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLm1haW4tdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSxcbi5ib3JkZXItdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuam9iLWlzLmZ0LFxuLmJvcmRlci10aXRsZSAuam9iLWlzLmZ0IHtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cblxuLm1haW4tdGl0bGUgKyAudGFicy13cmFwcGVyLFxuLmJvcmRlci10aXRsZSArIC50YWJzLXdyYXBwZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXdyYXBwZXIge1xuICB3aWR0aDogOTAlO1xuICBtYXJnaW46IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBwYWRkaW5nOiA2MHB4IDA7XG59XG5cbi50YWJzLXdyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZGVmZjc7XG4gIHBhZGRpbmc6IDVweCAwIDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsge1xuICBjb2xvcjogIzg4ODc5NTtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmUsXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLnNob3cgPiAubmF2LWxpbmsge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxYjQ2O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XG4gIGNvbnRlbnQ6ICcnO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kOiAjZTU5YTEyO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSBhIHtcbiAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAyLjU7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbmZvcm0gc2VsZWN0LmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG59XG5cbi5mb3JtLWdyb3VwIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2FjYWNhO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cDpmb2N1cy13aXRoaW4ge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICMyN2JmYzA7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb3JtLWdyb3VwIHAge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG59XG5cbi5mb3JtLWdyb3VwIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxMHB4O1xuICBib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0LCAuZm9ybS1ncm91cCB0ZXh0YXJlYSwgLmZvcm0tZ3JvdXAgc2VsZWN0IHtcbiAgYm9yZGVyOiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMCA0cHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGhlaWdodDogMjJweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQ6Zm9jdXMsIC5mb3JtLWdyb3VwIHRleHRhcmVhOmZvY3VzLCAuZm9ybS1ncm91cCBzZWxlY3Q6Zm9jdXMge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5kZXNjcmlwdGlvbi10ZXh0IHtcbiAgbWFyZ2luOiAtNXB4IDAgMzBweDtcbiAgY29sb3I6IGdyZXk7XG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XG59XG5cbmZvcm0gLmZvcm0tY29udHJvbCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSB0ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gbGFiZWwge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmN1c3RvbS1jb250cm9sIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xuICBjb2xvcjogIzllOWU5ZTtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuIHtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlcjogMnB4IHNvbGlkO1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzY7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiAjOWU5ZTllO1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW46Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4uYWN0aXZlIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjY2FjYWNhO1xuICBvcGFjaXR5OiAxO1xuICAvKiBGaXJlZm94ICovXG59XG5cbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xuICBjb2xvcjogI2NhY2FjYTtcbn1cblxuLmZhLWV5ZS1zbGFzaDpob3Zlcixcbi5mYS1leWU6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5waWNrIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDVweDtcbn1cblxuLnBpY2s6OmJlZm9yZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kYXRlSW5wdXQge1xuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblt0eXBlPVwiZGF0ZVwiXTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDE2cHg7XG4gIHJpZ2h0OiA1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYm9keSAubGEubGEtcGx1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubW9kYWwtYm9keSAuYWRkLW1vcmUtYnRuIHtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xuICBtYXJnaW4tbGVmdDogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tb2RhbC1oZWFkZXIge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMTBweCAwIDA7XG59XG5cbi5tb2RhbC1oZWFkZXIgLm1vZGFsLXRpdGxlIHtcbiAgbWFyZ2luOiAwIGF1dG8gIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogU2Vnb2VVSTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzBiMWI0Njtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2Uge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZTpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24ge1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5zYXZlQnRuIHtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbi5jbG9zZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyO1xuICBjb2xvcjogI2U1OWExMjtcbn1cblxuLm1vZGFsLWJvZHkgZm9ybSB7XG4gIHBhZGRpbmc6IDE1cHg7XG59XG5cbi5yZXN1bWVhZGQtZm9ybSB7XG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xufVxuXG4uYWRkTW9yZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA0cHggMTVweCA0cHggOHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5zYXZlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJhY2tCdG4ge1xuICBjb2xvcjogI2U1OWExMiAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIge1xuICBwYWRkaW5nLXRvcDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAxMnJlbTtcbiAgY29sb3I6ICMyN2JmYzA7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyX2NyZWF0ZS1uZXcge1xuICB3aWR0aDogMjUlO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIC5idG4uYnRuLXByaW1hcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAxMHB4IDA7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uaXMtaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xufVxuXG4ucmVxdWlyZWQtZXJyb3Ige1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbG9yOiByZWQ7XG4gIHRvcDogNSU7XG4gIHJpZ2h0OiA1JTtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uZW1wbHktbGlzdDpob3ZlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmhlbHAtYmxvY2sge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGNvbG9yOiByZWQ7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IC04cHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm8ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5wcm9maWxlX19zdW1tdXJ5LWluZm9fX0VkaXQtbGluayB7XG4gIHBhZGRpbmc6IDVweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjOWU5ZTllO1xuICBib3JkZXItY29sb3I6ICM5ZTllOWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2ZpbGVfX3N1bW11cnktaW5mb19fRWRpdC1saW5rOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wcm9maWxlX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3Mge1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcbiAgcGFkZGluZzogMiUgNSU7XG4gIG1hcmdpbjogMiU7XG4gIGJvcmRlcjogM3B4O1xufVxuXG4ucHJvZmlsZV9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnByb2ZpbGVfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnByb2ZpbGVfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBpLnNvY2lhbC1tZWRpYUljb24ge1xuICBmb250LXNpemU6IDQwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjZjI2OTU2O1xuICB3aWR0aDogMjAlO1xufVxuXG4ucHJvZmlsZV9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzIC5mYWNlYm9va0NvbnRhaW5lciBpLnNvY2lhbC1tZWRpYUljb24ge1xuICBjb2xvcjogIzNiNTk5ODtcbn1cblxuLnByb2ZpbGVfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyAubGlua2VkaW5Db250YWluZXIgaS5zb2NpYWwtbWVkaWFJY29uIHtcbiAgY29sb3I6ICMwZTc2YTg7XG59XG5cbi5wcm9maWxlX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgaDMuZmFjZWJvb2stc3VidGl0bGUge1xuICBjb2xvcjogIzNiNTk5ODtcbn1cblxuLnByb2ZpbGVfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBoMy5saW5rZWRpbi1zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjMGU3NmE4O1xufVxuXG4ucHJvZmlsZV9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzIGgzIHtcbiAgbWFyZ2luOiAwO1xuICB3aWR0aDogODAlO1xufVxuXG4ucHJvZmlsZV9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzIHAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnByb2ZpbGVfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBwIGEge1xuICBjb2xvcjogIzg4ODg4ODtcbn1cblxuLnByb2ZpbGUgLnNhdmVCdG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjdiZmMwO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG5cbi5wcm9maWxlIC5zYXZlQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjMjdiZmMwO1xufVxuXG4ucHJvZmlsZSAuc2F2ZUJ0bjpkaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuNjtcbiAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiAjMjdiZmMwO1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgI2YyNjk1NjtcbiAgY29sb3I6ICNmMjY5NTY7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmhvdmVyIHtcbiAgY29sb3I6IHdoaXRlO1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xufVxuXG4ucHJvZmlsZSAuY2FuY2VsQnRuOmRpc2FibGVkIHtcbiAgb3BhY2l0eTogMC42O1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4ucHJvZmlsZSAudGl0bGUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIG1hcmdpbjogMDtcbn1cblxuLnByb2ZpbGUgLmpvYi1sY3RuIHAge1xuICBtYXJnaW4tbGVmdDogNDBweDtcbn1cblxuLnByb2ZpbGUgLmpvYi1sY3RuIHA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTNweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4ucHJvZmlsZSAuam9iLWxjdG4gcC5uby1kb3Q6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5wcm9maWxlIC5qb2ItdGl0bGUtc2VjIHtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5wcm9maWxlIC5qb2ItdGl0bGUtc2VjIGgzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuXG4ucHJvZmlsZSAuam9iLXRpdGxlLXNlYyBoMyBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3IHVsIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3IHVsIGxpIHtcbiAgcGFkZGluZy1yaWdodDogMSU7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcgdWwgbGkgaSB7XG4gIGNvbG9yOiAjMjdiZmMwO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3IHVsIGxpOmhvdmVyIGkge1xuICBjb2xvcjogI2YyNjk1Njtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldyB1bCA+IGxpIGgzIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTIge1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIHBhZGRpbmctbGVmdDogMTVweDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiAud3RhYnMge1xuICBwYWRkaW5nOiA1JSAwJSAwJSA4JTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTJfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xuICBwYWRkaW5nOiAyJSA1JTtcbiAgbWFyZ2luOiAyJSAwO1xuICBib3JkZXI6IDNweDtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTJfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rczpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDBweCAwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgaS5zb2NpYWwtbWVkaWFJY29uIHtcbiAgZm9udC1zaXplOiA0MHB4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogI2YyNjk1NjtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTJfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyAuZmFjZWJvb2tDb250YWluZXIgaS5zb2NpYWwtbWVkaWFJY29uIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgLmxpbmtlZGluQ29udGFpbmVyIGkuc29jaWFsLW1lZGlhSWNvbiB7XG4gIGNvbG9yOiAjMGU3NmE4O1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMl9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzIGgzLmZhY2Vib29rLXN1YnRpdGxlIHtcbiAgY29sb3I6ICMzYjU5OTg7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgaDMubGlua2VkaW4tc3VidGl0bGUge1xuICBjb2xvcjogIzBlNzZhODtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTJfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBoMyB7XG4gIG1hcmdpbjogMDtcbiAgd2lkdGg6IDgwJTtcbn1cblxuLnByb2ZpbGUgLmpvYi1vdmVydmlldy5zdHlsZTJfX3NvY2lhbE5ldHdvcmstaW5mb19fY29udGVudC1saW5rcyBwIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3MgcCBhIHtcbiAgY29sb3I6ICM4ODg4ODg7XG59XG5cbi5wcm9maWxlIC5qb2Itb3ZlcnZpZXcuc3R5bGUyIC5qb2ItdGl0bGUtc2VjIC5qb2ItbGN0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucHJvZmlsZSAuam9iLW92ZXJ2aWV3LnN0eWxlMiAuam9iLXRpdGxlLXNlYyAuam9iLWxjdG4gLmxhLWNpcmNsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcZjE4YVwiO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIGNvbG9yOiAjZjI2OTU2O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xuICBwYWRkaW5nOiAwIDE1cHg7XG59XG4iLCIkbGlnaHQtZ3JleTogI2ZhZmFmYTtcclxuJHdhcm0tZ3JleSA6IzcwNzA3MDtcclxuJHdoaXRlOiNmZmZmZmY7XHJcbiR3YXJtLWdyZXktdHdvOiAjOWU5ZTllO1xyXG4kZGFyay1pbmRpZ28gOiAjMGIxYjQ2O1xyXG4kd2hpdGUtdHdvOiNlZmVmZWY7XHJcbiR0ZWFsaXNoIDojMjdiZmMwO1xyXG4kb3JhbmdlOiNlNTlhMTI7XHJcbiRib3JkZXItY29sb3I6I2NhY2FjYTtcclxuJGR1c2s6IzU0NWY3ZDtcclxuJGJsYWNrOiMyYTJhMmE7XHJcbiRzdGVlbDogIzg4ODc5NTtcclxuJHdoaXRlLWZvdXI6I2ZlZmVmZTtcclxuJHBhbGUtZ3JleTojZjNmNGY5OyIsIkBpbXBvcnQgJy4uLy4uLy4uLy4uL3ZhcmlhYmxlcyc7XHJcbkBpbXBvcnQgJy4uLy4uLy4uLy4uL2dlbmVyYWwnO1xyXG5cclxuLnByb2ZpbGUge1xyXG4gICAgJl9fc3VtbXVyeS1pbmZvIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgJl9fRWRpdC1saW5rIHtcclxuICAgICAgICAgICAgcGFkZGluZyAgICAgOiA1cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgIDogMjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZCAgOiAkd2FybS1ncmV5LXR3bztcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkd2FybS1ncmV5LXR3bztcclxuICAgICAgICAgICAgY29sb3IgICAgICAgOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvciAgICA6ICRvcmFuZ2U7XHJcbiAgICAgICAgICAgICAgICBjb2xvciAgICAgICAgICAgOiB3aGl0ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfVxyXG4gICAgJl9fc29jaWFsTmV0d29yay1pbmZvX19jb250ZW50LWxpbmtzIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cyBlYXNlLWluLW91dDtcclxuICAgICAgICBwYWRkaW5nICAgOiAyJSA1JTtcclxuICAgICAgICBtYXJnaW4gICAgOiAyJTtcclxuICAgICAgICBib3JkZXIgICAgOiAzcHg7XHJcbiAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkuc29jaWFsLW1lZGlhSWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiA0MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgIDogI2YyNjk1NjtcclxuICAgICAgICAgICAgd2lkdGggICAgICA6IDIwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYWNlYm9va0NvbnRhaW5lciBpLnNvY2lhbC1tZWRpYUljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rZWRpbkNvbnRhaW5lciBpLnNvY2lhbC1tZWRpYUljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzBlNzZhODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzLmZhY2Vib29rLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMy5saW5rZWRpbi1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGU3NmE4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoIDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNhdmVCdG4ge1xyXG4gICAgICAgIGJvcmRlciAgICAgOiAycHggc29saWQgJHRlYWxpc2g7XHJcbiAgICAgICAgY29sb3IgICAgICA6ICR0ZWFsaXNoO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yICAgICA6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdGVhbGlzaDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgICAgICBvcGFjaXR5ICAgICAgICAgOiAwLjY7XHJcbiAgICAgICAgICAgIGN1cnNvciAgICAgICAgICA6IG5vdC1hbGxvd2VkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgY29sb3IgICAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYW5jZWxCdG4ge1xyXG4gICAgICAgIGJvcmRlciAgICAgOiAycHggc29saWQgI2YyNjk1NjtcclxuICAgICAgICBjb2xvciAgICAgIDogI2YyNjk1NjtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGNvbG9yICAgICA6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJjpkaXNhYmxlZCB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgY3Vyc29yIDogbm90LWFsbG93ZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAudGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5ICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplICAgICA6IDIwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICAgICAgY29sb3IgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgICAgICBtYXJnaW4gICAgICAgIDogMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmpvYi1sY3RuIHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcblxyXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgY29udGVudCAgICAgICAgIDogJyc7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQgICAgICAgICAgOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aCAgICAgICAgICAgOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzICAgOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgdG9wICAgICAgICAgICAgIDogLTNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodCAgICA6IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5uby1kb3R7XHJcbiAgICAgICAgICAgICAgICAmOjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuam9iLXRpdGxlLXNlYyB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgd2lkdGggICAgICAgOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5qb2Itb3ZlcnZpZXcge1xyXG4gICAgICAgIHVsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICAgICAgbGkge1xyXG5cclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG5cclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmMjY5NTY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAuam9iLW92ZXJ2aWV3IHVsPmxpIGgzIHtcclxuICAgICAgICBmbG9hdCAgICAgICAgIDogbGVmdDtcclxuICAgICAgICB3aWR0aCAgICAgICAgIDogMTAwJTtcclxuICAgICAgICBmb250LXNpemUgICAgIDogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseSAgIDogT3BlbiBTYW5zO1xyXG4gICAgICAgIG1hcmdpbiAgICAgICAgOiAwO1xyXG4gICAgICAgIC8vIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQgICA6IDUwMDtcclxuICAgIH1cclxuXHJcbiAgICAuam9iLW92ZXJ2aWV3LnN0eWxlMiB7XHJcbiAgICAgICAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodCA6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0ICA6IDE1cHg7XHJcbiAgICAgICAgcGFkZGluZy10b3AgICA6IDA7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcblxyXG4gICAgICAgIC53dGFicyB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDAlIDAlIDglO1xyXG5cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAmX19zb2NpYWxOZXR3b3JrLWluZm9fX2NvbnRlbnQtbGlua3Mge1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIHBhZGRpbmcgICA6IDIlIDUlO1xyXG4gICAgICAgIG1hcmdpbiAgICA6MiUgMDtcclxuICAgICAgICBib3JkZXIgICAgOiAzcHg7XHJcbiAgICAgIFxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGkuc29jaWFsLW1lZGlhSWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAgOiA0MHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBjb2xvciAgICAgIDogI2YyNjk1NjtcclxuICAgICAgICAgICAgd2lkdGggICAgICA6IDIwJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mYWNlYm9va0NvbnRhaW5lciBpLnNvY2lhbC1tZWRpYUljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzNiNTk5ODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5saW5rZWRpbkNvbnRhaW5lciBpLnNvY2lhbC1tZWRpYUljb24ge1xyXG4gICAgICAgICAgICBjb2xvcjogIzBlNzZhODtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgzLmZhY2Vib29rLXN1YnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6ICMzYjU5OTg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoMy5saW5rZWRpbi1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjMGU3NmE4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHdpZHRoIDogODAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzg4ODg4ODtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICAgICAuam9iLXRpdGxlLXNlYyB7XHJcbiAgICAgICAgICAgIC5qb2ItbGN0biB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGggIDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAubGEtY2lyY2xlOmJlZm9yZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudCAgICA6IFwiXFxmMThhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplICA6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvciAgICAgIDogI2YyNjk1NjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG4ubW9kYWwtYnRuLXdyYXBwZXJ7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateSocialNetworksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate-social-networks',
          templateUrl: './candidate-social-networks.component.html',
          styleUrls: ['./candidate-social-networks.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: services_candidate_complete_profile_service__WEBPACK_IMPORTED_MODULE_6__["CompleteProfileService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _services_candidate_profile_service__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/modules/components/candidate-module/profile.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/modules/components/candidate-module/profile.module.ts ***!
    \*******************************************************************/

  /*! exports provided: CandidateProfileModuel */

  /***/
  function srcModulesComponentsCandidateModuleProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateProfileModuel", function () {
      return CandidateProfileModuel;
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


    var _routing_candidate_routing_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/candidate-routing/profile-routing.module */
    "./src/routing/candidate-routing/profile-routing.module.ts");
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


    var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-image-cropper */
    "./node_modules/ngx-image-cropper/__ivy_ngcc__/fesm2015/ngx-image-cropper.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var app_candidate_components_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! app/candidate-components/candidate-profile/candidate-profile.component */
    "./src/app/candidate-components/candidate-profile/candidate-profile.component.ts");
    /* harmony import */


    var _app_candidate_components_candidate_profile_candidate_contact_candidate_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./../../../app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component */
    "./src/app/candidate-components/candidate-profile/candidate-contact/candidate-contact.component.ts");
    /* harmony import */


    var _app_candidate_components_candidate_profile_candidate_personal_info_candidate_personal_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component */
    "./src/app/candidate-components/candidate-profile/candidate-personal-info/candidate-personal-info.component.ts");
    /* harmony import */


    var _app_candidate_components_candidate_profile_candidate_social_networks_candidate_social_networks_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./../../../app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component */
    "./src/app/candidate-components/candidate-profile/candidate-social-networks/candidate-social-networks.component.ts");

    var CandidateProfileModuel = function CandidateProfileModuel() {
      _classCallCheck(this, CandidateProfileModuel);
    };

    CandidateProfileModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CandidateProfileModuel
    });
    CandidateProfileModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CandidateProfileModuel_Factory(t) {
        return new (t || CandidateProfileModuel)();
      },
      imports: [[ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateProfileRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CandidateProfileModuel, {
        declarations: [app_candidate_components_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_8__["CandidateProfileComponent"], _app_candidate_components_candidate_profile_candidate_contact_candidate_contact_component__WEBPACK_IMPORTED_MODULE_9__["CandidateContactComponent"], _app_candidate_components_candidate_profile_candidate_personal_info_candidate_personal_info_component__WEBPACK_IMPORTED_MODULE_10__["CandidatePersonalInfoComponent"], _app_candidate_components_candidate_profile_candidate_social_networks_candidate_social_networks_component__WEBPACK_IMPORTED_MODULE_11__["CandidateSocialNetworksComponent"]],
        imports: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateProfileRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateProfileModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_candidate_components_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_8__["CandidateProfileComponent"], _app_candidate_components_candidate_profile_candidate_contact_candidate_contact_component__WEBPACK_IMPORTED_MODULE_9__["CandidateContactComponent"], _app_candidate_components_candidate_profile_candidate_personal_info_candidate_personal_info_component__WEBPACK_IMPORTED_MODULE_10__["CandidatePersonalInfoComponent"], _app_candidate_components_candidate_profile_candidate_social_networks_candidate_social_networks_component__WEBPACK_IMPORTED_MODULE_11__["CandidateSocialNetworksComponent"]],
          imports: [ngx_image_cropper__WEBPACK_IMPORTED_MODULE_6__["ImageCropperModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_profile_routing_module__WEBPACK_IMPORTED_MODULE_2__["CandidateProfileRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/candidate-routing/profile-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/routing/candidate-routing/profile-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CandidateProfileRoutingModuel */

  /***/
  function srcRoutingCandidateRoutingProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateProfileRoutingModuel", function () {
      return CandidateProfileRoutingModuel;
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


    var _app_candidate_components_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/candidate-components/candidate-profile/candidate-profile.component */
    "./src/app/candidate-components/candidate-profile/candidate-profile.component.ts");

    var routes = [{
      path: "",
      component: _app_candidate_components_candidate_profile_candidate_profile_component__WEBPACK_IMPORTED_MODULE_2__["CandidateProfileComponent"]
    }];

    var CandidateProfileRoutingModuel = function CandidateProfileRoutingModuel() {
      _classCallCheck(this, CandidateProfileRoutingModuel);
    };

    CandidateProfileRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CandidateProfileRoutingModuel
    });
    CandidateProfileRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CandidateProfileRoutingModuel_Factory(t) {
        return new (t || CandidateProfileRoutingModuel)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CandidateProfileRoutingModuel, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateProfileRoutingModuel, [{
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
//# sourceMappingURL=modules-components-candidate-module-profile-module-es5.js.map
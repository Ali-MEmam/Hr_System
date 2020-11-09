function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-candidate-module-list-of-meeting-module"], {
  /***/
  "./src/app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: CandidateListOfMeetingComponent */

  /***/
  function srcAppCandidateComponentsCandidateListOfMeetingCandidateListOfMeetingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CandidateListOfMeetingComponent", function () {
      return CandidateListOfMeetingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var services_candidate_list_of_meeting_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! services/candidate/list-of-meeting.service */
    "./src/services/candidate/list-of-meeting.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function CandidateListOfMeetingComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
      }
    }

    function CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_td_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Start");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_td_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "History");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_td_21_Template, 4, 0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_td_22_Template, 4, 0, "td", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var test_r120 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r120.recrutier_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r120.screening_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r120.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r120.created);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", test_r120.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](test_r120.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r120.status === "available");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", test_r120.status === "done");
      }
    }

    function CandidateListOfMeetingComponent_ng_template_11_tbody_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tbody");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CandidateListOfMeetingComponent_ng_template_11_tbody_16_tr_1_Template, 24, 8, "tr", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r118.tests);
      }
    }

    function CandidateListOfMeetingComponent_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Recruiter");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Screening ID");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Type of Meeting");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CandidateListOfMeetingComponent_ng_template_11_tbody_16_Template, 2, 1, "tbody", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r114.tests.length > 0);
      }
    }

    function CandidateListOfMeetingComponent_ng_template_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "there is no list of meeting yet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CandidateListOfMeetingComponent_app_spinner_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-spinner");
      }
    }

    var CandidateListOfMeetingComponent =
    /*#__PURE__*/
    function () {
      function CandidateListOfMeetingComponent(lisfOfMeetingService) {
        _classCallCheck(this, CandidateListOfMeetingComponent);

        this.lisfOfMeetingService = lisfOfMeetingService;
        this.tests = [];
      }

      _createClass(CandidateListOfMeetingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.lisfOfMeetingService.getAllTestForCandidate().subscribe(function (response) {
            console.log(response);
            _this.tests = response;
            console.log(_this.tests);
          }, function (error) {
            console.log(error + 'this is error');
          });
        }
      }, {
        key: "chat",
        value: function chat() {
          console.log("hoiiiiiiiiiiiii");
          window.open("https://www.w3schools.com");
        }
      }]);

      return CandidateListOfMeetingComponent;
    }();

    CandidateListOfMeetingComponent.ɵfac = function CandidateListOfMeetingComponent_Factory(t) {
      return new (t || CandidateListOfMeetingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_list_of_meeting_service__WEBPACK_IMPORTED_MODULE_1__["ListOfMeetingService"]));
    };

    CandidateListOfMeetingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CandidateListOfMeetingComponent,
      selectors: [["app-candidate-list-of-meeting"]],
      decls: 16,
      vars: 4,
      consts: [[1, "row", "no-gutters"], [1, "col-lg-12", "col-md-12", "mb-5"], [1, "padding-left"], [1, "manage-jobs-sec"], [1, "border-title"], [1, "container"], [1, "main-wrapper"], [4, "ngIf", "ngIfThen", "ngIfElse"], ["meetingList", ""], ["class", "col-12"], ["noMeetingList", ""], [4, "ngIf"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], ["title", ""], [3, "ngClass"], ["class", "table-list-title", 4, "ngIf"], [1, "table-list-title"], ["routerLink", "meet-bot", 1, "start-btn"], ["routerLink", "meeting-history", 1, "history-btn"], [1, "no-data-view"]],
      template: function CandidateListOfMeetingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "List Of Meetings");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CandidateListOfMeetingComponent_div_10_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CandidateListOfMeetingComponent_ng_template_11_Template, 17, 1, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CandidateListOfMeetingComponent_ng_template_13_Template, 2, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CandidateListOfMeetingComponent_app_spinner_15_Template, 1, 0, "app-spinner", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tests.length > 0)("ngIfThen", _r113)("ngIfElse", _r115);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.tests);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.manage-jobs-sec[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  float: left;\n  width: 100%;\n  font-family: Quicksand;\n  font-size: 20px;\n  font-weight: bold;\n  color: #545f7d;\n}\n\n.table-list-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  float: none;\n}\n\n.border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 0;\n}\n\n.border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.table-list-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #4D5978 !important;\n  margin: 10px 0 10px;\n  text-align: center;\n}\n\n.table-list-title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4D5978;\n}\n\n.type-of-meeting[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.10rem;\n  \n  font-weight: 400;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  margin: 40px auto 0 !important;\n  width: 100%;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0;\n  width: 100%;\n  margin: 0;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f3f4f9;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #707070 !important;\n  padding: 20px;\n  background-color: #f3f4f9;\n  padding: 15px !important;\n  font-family: \"mainFontMedium\";\n  font-size: 16px;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  width: 100%;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 12px auto;\n  font-size: 14px;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4D5978;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4D5978;\n}\n\n.main-wrapper[_ngcontent-%COMP%]   .no-data-view[_ngcontent-%COMP%] {\n  font-size: 25px;\n  text-align: center;\n  text-shadow: 2px 0px #ffffff;\n  text-transform: capitalize;\n  margin-top: 15%;\n}\n\n.start-btn[_ngcontent-%COMP%] {\n  background: #F9B537;\n  border: 1px solid #F9B537;\n  color: white !important;\n  font-size: 14px;\n  padding: 8px 24px;\n  border-radius: 8px;\n  width: 20%;\n  margin-top: 10px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.start-btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #F9B537 !important;\n}\n\n.history-btn[_ngcontent-%COMP%] {\n  background: #27bfc0;\n  border: 1px solid #27bfc0;\n  color: white !important;\n  font-size: 14px;\n  padding: 8px 18px;\n  border-radius: 8px;\n  width: 20%;\n  margin-top: 10px;\n  -webkit-transition: all 0.2s ease-in-out;\n  transition: all 0.2s ease-in-out;\n}\n\n.history-btn[_ngcontent-%COMP%]:hover {\n  background-color: white;\n  color: #27bfc0 !important;\n}\n\n.details-btn[_ngcontent-%COMP%]:hover {\n  background: #f26956;\n  color: #ffffff;\n}\n\ni[_ngcontent-%COMP%] {\n  color: #008487;\n}\n\n.row.candidate[_ngcontent-%COMP%] {\n  flex-wrap: nowrap;\n}\n\n.table-list-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #259aab;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  padding: 1.2rem;\n}\n\n  .available {\n  text-transform: capitalize;\n  color: #27bfc0 !important;\n}\n\n  .done {\n  text-transform: capitalize;\n  color: #0dc900 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLWxpc3Qtb2YtbWVldGluZy9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcX2dlbmVyYWwuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2FuZGlkYXRlLWxpc3Qtb2YtbWVldGluZy9jYW5kaWRhdGUtbGlzdC1vZi1tZWV0aW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jYW5kaWRhdGUtbGlzdC1vZi1tZWV0aW5nL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1saXN0LW9mLW1lZXRpbmcvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXGFwcFxcY2FuZGlkYXRlLWNvbXBvbmVudHNcXGNhbmRpZGF0ZS1saXN0LW9mLW1lZXRpbmdcXGNhbmRpZGF0ZS1saXN0LW9mLW1lZXRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxVQUFXO0VBQ1gsY0FBYztBQ0RoQjs7QURJQTtFQUNFLG9DQUFrRDtFQUNsRCw0QkFBOEI7RUFDOUIsb0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixpQkFBaUI7QUNEbkI7O0FESUE7RUFDRSxrQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLGdCQUF3QjtFQUN4QixZQUFzQjtBQ0R4Qjs7QURJQTs7RUFFRSwrQkFBb0M7RUFBcEMsd0JBQW9DO0VBQ3BDLHlCQUEyQjtVQUEzQixtQkFBMkI7RUFDM0IsV0FBeUI7RUFDekIsV0FBeUI7RUFDekIsa0NBQXdDO0VB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L2NhbmRpZGF0ZS1jb21wb25lbnRzL2NhbmRpZGF0ZS1saXN0LW9mLW1lZXRpbmcvY2FuZGlkYXRlLWxpc3Qtb2YtbWVldGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4vdmFyaWFibGVzJztcclxuXHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoIDogOTAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlICAgOiB1cmwoJ2Fzc2V0cy9pbWcvUGF0dGVybi5zdmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdCAgOiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplICAgIDogMjAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDVweCAyMnB4O1xyXG59XHJcblxyXG5oZWFkZXIge1xyXG4gIHBvc2l0aW9uICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIG92ZXJmbG93ICAgICAgICA6IGhpZGRlbjtcclxuICBoZWlnaHQgICAgICAgICAgOiBhdXRvO1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSxcclxuLmJvcmRlci10aXRsZSB7XHJcbiAgZGlzcGxheSAgICAgICAgICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zICAgICAgICA6IGNlbnRlcjtcclxuICBmbG9hdCAgICAgICAgICAgICAgOiBsZWZ0O1xyXG4gIHdpZHRoICAgICAgICAgICAgICA6IDEwMCU7XHJcbiAgYm9yZGVyLWJvdHRvbSAgICAgIDogc29saWQgMC41cHggI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiAxNXB4IDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b20gICAgICA6IDA7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcbiAgLy8gei1pbmRleCAgICAgICAgIDogOTk7XHJcblxyXG4gIGgzIHtcclxuICAgIG1hcmdpbi1yaWdodCAgOiBhdXRvO1xyXG4gICAgZm9udC1mYW1pbHkgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZSAgICAgOiAyMnB4O1xyXG4gICAgZm9udC13ZWlnaHQgICA6IGJvbGQ7XHJcbiAgICBjb2xvciAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBwYWRkaW5nLXRvcCAgIDogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbSA6IDBweDtcclxuICB9XHJcblxyXG4gIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcblxyXG4gIH1cclxuXHJcbiAgLmpvYi1pcy5mdCB7XHJcbiAgICBtYXJnaW4gICAgICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgfVxyXG5cclxuICAmKy50YWJzLXdyYXBwZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLm1haW4td3JhcHBlciB7XHJcbiAgd2lkdGggIDogOTAlO1xyXG4gIG1hcmdpbiA6IDgwcHggYXV0byAwICFpbXBvcnRhbnQ7XHJcbiAgZmxvYXQgIDogbm9uZTtcclxuICBwYWRkaW5nOiA2MHB4IDA7XHJcbn1cclxuXHJcbi50YWJzLXdyYXBwZXIge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IDFweCBzb2xpZCAjZWRlZmY3O1xyXG4gIHBhZGRpbmcgICAgICAgICAgICA6IDVweCAwIDA7XHJcbiAgcG9zaXRpb24gICAgICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcCAgICAgICAgIDogMHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b20gICA6IDIwcHg7XHJcbiAgLy8gcG9zaXRpb24gICAgICAgIDogZml4ZWQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93ICAgICAgICAgOiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcclxuICAgIGNvbG9yOiAkc3RlZWw7XHJcblxyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxyXG4gIC5uYXYtcGlsbHMgLnNob3c+Lm5hdi1saW5rIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWluZGlnbztcclxuICAgIGJhY2tncm91bmQgICAgICA6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogJGRhcmstaW5kaWdvO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlOjphZnRlciB7XHJcbiAgICBjb250ZW50ICAgOiAnJztcclxuICAgIGRpc3BsYXkgICA6IGJsb2NrO1xyXG4gICAgd2lkdGggICAgIDogMTAwJTtcclxuICAgIGhlaWdodCAgICA6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICRvcmFuZ2U7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcblxyXG4gICAgICBhIHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplICAgOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgICAgIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0IDogMi41O1xyXG4gICAgICAgIHBhZGRpbmcgICAgIDogMDtcclxuICAgICAgICBmb250LWZhbWlseSA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gaW5wdXRzIHN0eWxlXHJcblxyXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3VwIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tICAgOiAwO1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkYm9yZGVyLWNvbG9yO1xyXG4gIHRleHQtYWxpZ24gICAgICA6IGxlZnQ7XHJcbiAgcGFkZGluZyAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgLy8gYm9yZGVyLWxlZnQgIDogMnB4IHNvbGlkICAkYm9yZGVyLWNvbG9yO1xyXG4gIGJhY2tncm91bmQgICAgICA6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICBib3JkZXItcmFkaXVzICAgOiAzcHg7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMTBweDtcclxuXHJcbiAgJjpmb2N1cy13aXRoaW4ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkdGVhbGlzaDtcclxuICAgIHRyYW5zaXRpb24gOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0IDogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0ICA6IDYwMDtcclxuICAgIGZvbnQtc3RyZXRjaCA6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICA6IDEuMzE7XHJcbiAgICBmb250LXdlaWdodCAgOiA1MDA7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDAwO1xyXG4gICAgZm9udC1mYW1pbHkgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG5cclxuICB9XHJcblxyXG4gIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQgICA6IDEwcHg7XHJcbiAgICBib3R0b20gIDogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0ICwgdGV4dGFyZWEgLCBzZWxlY3Qge1xyXG4gICAgYm9yZGVyICAgICAgICAgIDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tICAgOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZyAgICAgICAgIDogMHB4O1xyXG4gICAgbWFyZ2luICAgICAgICAgIDogMCA0cHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgaGVpZ2h0ICAgICAgICAgIDogMjJweDtcclxuICAgIGZvbnQtc2l6ZSAgICAgICA6IDEzcHg7XHJcbiAgICB3aWR0aCAgICAgICAgICAgOiAxMDAlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnRcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4uZGVzY3JpcHRpb24tdGV4dCB7XHJcbiAgbWFyZ2luICAgICAgICA6IC01cHggMCAzMHB4O1xyXG4gIGNvbG9yICAgICAgICAgOiBncmV5O1xyXG4gIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbn1cclxuXHJcbmZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIHRleHRhcmVhIHtcclxuICB3aWR0aCA6IDEwMCU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIGxhYmVsIHtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZSAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXkgICAgICAgOiBibG9jaztcclxuXHJcbn1cclxuXHJcbi5jdXN0b20tY29udHJvbCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4udGV4dC1kZWNvcmF0aW9uLW5vbmUge1xyXG4gIGNvbG9yOiAkd2FybS1ncmV5LXR3bztcclxufVxyXG5cclxuLnNlbGVjdC11c2VyLXRhYnMge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZS10d287XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogNXB4O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweDtcclxuICBkaXNwbGF5ICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gIHNwYW4ge1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBmbG9hdCAgICAgICAgICAgICAgICA6IG5vbmU7XHJcbiAgICBkaXNwbGF5ICAgICAgICAgICAgICA6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogMnB4IHNvbGlkO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICAgIC1tcy1ib3JkZXItcmFkaXVzICAgIDogNXB4O1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1cyAgICAgOiA1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICAgIGN1cnNvciAgICAgICAgICAgICAgIDogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZSAgICAgICAgICAgIDogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5ICAgICAgICAgIDogXCJtYWluRm9udE1lZGl1bVwiO1xyXG4gICAgZm9udC1zdHJldGNoICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgICAgICAgICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0ICAgICAgICAgIDogMS4zNjtcclxuICAgIGxldHRlci1zcGFjaW5nICAgICAgIDogbm9ybWFsO1xyXG4gICAgdGV4dC1hbGlnbiAgICAgICAgICAgOiBsZWZ0O1xyXG4gICAgY29sb3IgICAgICAgICAgICAgICAgOiAkd2FybS1ncmV5LXR3bztcclxuICAgIHBhZGRpbmcgICAgICAgICAgICAgIDogNXB4IDEwcHg7XHJcbiAgICB0cmFuc2l0aW9uICAgICAgICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDBweDtcclxuXHJcbiAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYuYWN0aXZlIHtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogI2ZmZmZmZjtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQgICAgIDogYm9sZCAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yICA6ICRib3JkZXItY29sb3I7XHJcbiAgb3BhY2l0eTogMTtcclxuICAvKiBGaXJlZm94ICovXHJcbn1cclxuXHJcbjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgY29sb3I6ICRib3JkZXItY29sb3I7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxyXG4uZmEtZXllOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5waWNrIHtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICBiYWNrZ3JvdW5kICAgIDogI2ZmZjtcclxuICBib3JkZXIgICAgICAgIDogbm9uZTtcclxuICBjb2xvciAgICAgICAgIDogJHRlYWxpc2g7XHJcbiAgZm9udC1zaXplICAgICA6IDE4cHg7XHJcbiAgd2lkdGggICAgICAgICA6IDQwcHg7XHJcbiAgcG9zaXRpb24gICAgICA6IGFic29sdXRlO1xyXG4gIC8vIHRvcDogMTZweDtcclxuICByaWdodCAgICAgICAgIDogNXB4O1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBjdXJzb3IgICAgIDogcG9pbnRlcjtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvciAgICAgICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XHJcbiAgb3BhY2l0eSA6IDA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcCAgICAgOiAxNnB4O1xyXG4gIHJpZ2h0ICAgOiA1cHg7XHJcbiAgd2lkdGggICA6IDQwcHg7XHJcbiAgY3Vyc29yICA6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5sYS5sYS1wbHVzIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvciAgICAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgZm9udC13ZWlnaHQgICAgIDogNjAwO1xyXG4gIH1cclxuXHJcbiAgLmFkZC1tb3JlLWJ0biB7XHJcbiAgICBjb2xvciAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplICAgIDogMTRweDtcclxuICAgIGJvcmRlciAgICAgICA6IDFweCBzb2xpZCAjMDA5REEwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBtYXJnaW46IDEwcHggMCAwO1xyXG5cclxuICAubW9kYWwtdGl0bGUge1xyXG4gICAgbWFyZ2luICAgICAgOiAwIGF1dG8gIWltcG9ydGFudDtcclxuICAgIHRleHQtYWxpZ24gIDogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHkgOiBTZWdvZVVJO1xyXG4gICAgZm9udC1zaXplICAgOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgIGZvbnQtc3R5bGUgIDogbm9ybWFsO1xyXG4gICAgbGluZS1oZWlnaHQgOiAxLjU7XHJcbiAgICBjb2xvciAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICB9XHJcblxyXG4gIC5jbG9zZSB7XHJcbiAgICBtYXJnaW4gOiAwO1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB3aWR0aCAgICAgICAgICA6IDEwMCU7XHJcbiAgLy8gcGFkZGluZzogMCAxNXB4O1xyXG4gIGRpc3BsYXkgICAgICAgIDogZmxleDtcclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIHBhZGRpbmcgICAgICAgOiA4cHggMjBweDtcclxuICAgIC8vIGxpbmUtaGVpZ2h0OiAxO1xyXG4gICAgaGVpZ2h0ICAgICAgICA6IGF1dG87XHJcbiAgICBmb250LXNpemUgICAgIDogMTRweCAhaW1wb3J0YW50O1xyXG5cclxuICAgICYuc2F2ZUJ0biB7XHJcbiAgICAgIGJvcmRlci1jb2xvciAgICA6ICRvcmFuZ2U7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgJi5jbG9zZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBib3JkZXIgICAgOjFweCBzb2xpZCAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tb2RhbC1ib2R5IHtcclxuICBmb3JtIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmVzdW1lYWRkLWZvcm0ge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmFkZE1vcmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3IgICAgIDogd2hpdGUgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3IgICAgICAgICA6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgY29sb3IgICAgICAgICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIC8vIGNvbG9yOiAjMDA5REEwICA7XHJcbiAgcGFkZGluZyAgICAgICAgICAgICAgOiA0cHggMTVweCA0cHggOHB4O1xyXG4gIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTAgIWltcG9ydGFudDtcclxuICAvLyBib3JkZXItcmlnaHQtY29sb3I6ICMwMDlEQTAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzICAgICAgICA6IDVweDtcclxuICBmb250LXdlaWdodCAgICAgICAgICA6IDYwMDtcclxufVxyXG5cclxuLnNhdmVCdG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2UgIWltcG9ydGFudDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgY29sb3IgICAgICAgICAgIDogd2hpdGVcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrQnRuIHtcclxuICBjb2xvciAgICAgICAgICAgOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyICAgICAgICAgIDogMXB4IHNvbGlkICRvcmFuZ2UgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcntcclxuICBwYWRkaW5nLXRvcDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBzcGFue1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgICAgZm9udC1zaXplOiAxMnJlbTtcclxuICAgICAgY29sb3I6ICR0ZWFsaXNoO1xyXG4gICAgICBsaW5lLWhlaWdodDogMTtcclxuICB9XHJcbiAgJl9jcmVhdGUtbmV3e1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gIH1cclxuICAuYnRuLmJ0bi1wcmltYXJ5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGJvcmRlci1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5pcy1pbnZhbGlke1xyXG4gIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlcXVpcmVkLWVycm9ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogcmVkO1xyXG4gIHRvcDogNSU7XHJcbiAgcmlnaHQ6NSU7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5lbXBseS1saXN0e1xyXG4gICY6aG92ZXJ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaGVscC1ibG9jayB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLXRvcDogLThweDtcclxufVxyXG5cclxuLnRhYi1jb250ZW50e1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn0iLCIuY29udGFpbmVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJhc3NldHMvaW1nL1BhdHRlcm4uc3ZnXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDIwJTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XG4gIHBhZGRpbmc6IDVweCAyMnB4O1xufVxuXG5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi5tYWluLXRpdGxlLFxuLmJvcmRlci10aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAwLjVweCAjZWRlZmY3O1xuICBwYWRkaW5nOiAxNXB4IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBib3gtc2hhZG93OiAtOHB4IDFweCA1cHggMCByZ2JhKDI1LCA0MiwgNzAsIDAuMTEpICFpbXBvcnRhbnQ7XG59XG5cbi5tYWluLXRpdGxlIGgzLFxuLmJvcmRlci10aXRsZSBoMyB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMwYjFiNDY7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBwYWRkaW5nLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5idG4uYnRuLXByaW1hcnksXG4uYm9yZGVyLXRpdGxlIC5idG4uYnRuLXByaW1hcnkge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm1haW4tdGl0bGUgLmpvYi1pcy5mdCxcbi5ib3JkZXItdGl0bGUgLmpvYi1pcy5mdCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5tYWluLXRpdGxlICsgLnRhYnMtd3JhcHBlcixcbi5ib3JkZXItdGl0bGUgKyAudGFicy13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi13cmFwcGVyIHtcbiAgd2lkdGg6IDkwJTtcbiAgbWFyZ2luOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgcGFkZGluZzogNjBweCAwO1xufVxuXG4udGFicy13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWRlZmY3O1xuICBwYWRkaW5nOiA1cHggMCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rIHtcbiAgY29sb3I6ICM4ODg3OTU7XG59XG5cbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAubmF2LWxpbmsuYWN0aXZlLFxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5zaG93ID4gLm5hdi1saW5rIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBiMWI0NjtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xuICBjb250ZW50OiAnJztcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDJweDtcbiAgYmFja2dyb3VuZDogI2U1OWExMjtcbn1cblxuLnRhYnMtd3JhcHBlciB1bCBsaSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkgYSB7XG4gIG1hcmdpbi1yaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMi41O1xuICBwYWRkaW5nOiAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG5mb3JtIHNlbGVjdC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NhY2FjYTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXA6Zm9jdXMtd2l0aGluIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjMjdiZmMwO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG4uZm9ybS1ncm91cCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuMzE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xufVxuXG4uZm9ybS1ncm91cCBpIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgYm90dG9tOiAxMHB4O1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dCwgLmZvcm0tZ3JvdXAgdGV4dGFyZWEsIC5mb3JtLWdyb3VwIHNlbGVjdCB7XG4gIGJvcmRlcjogMHB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDAgNHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBoZWlnaHQ6IDIycHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLCAuZm9ybS1ncm91cCB0ZXh0YXJlYTpmb2N1cywgLmZvcm0tZ3JvdXAgc2VsZWN0OmZvY3VzIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZGVzY3JpcHRpb24tdGV4dCB7XG4gIG1hcmdpbjogLTVweCAwIDMwcHg7XG4gIGNvbG9yOiBncmV5O1xuICBsZXR0ZXItc3BhY2luZzogMXB4O1xufVxuXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmZvcm0gdGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIGxhYmVsIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jdXN0b20tY29udHJvbCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcbiAgY29sb3I6ICM5ZTllOWU7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbiB7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBmbG9hdDogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXI6IDJweCBzb2xpZDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIC1tb3otYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbXMtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtby1ib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjM2O1xuICBsZXR0ZXItc3BhY2luZzogbm9ybWFsO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzllOWU5ZTtcbiAgcGFkZGluZzogNXB4IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyBzcGFuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogI2NhY2FjYTtcbiAgb3BhY2l0eTogMTtcbiAgLyogRmlyZWZveCAqL1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cbiAgY29sb3I6ICNjYWNhY2E7XG59XG5cbi5mYS1leWUtc2xhc2g6aG92ZXIsXG4uZmEtZXllOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGljayB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA1cHg7XG59XG5cbi5waWNrOjpiZWZvcmUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvciB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNnB4O1xuICByaWdodDogNXB4O1xuICB3aWR0aDogNDBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtYm9keSB7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLm1vZGFsLWJvZHkgLmxhLmxhLXBsdXMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOURBMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1vZGFsLWJvZHkgLmFkZC1tb3JlLWJ0biB7XG4gIGNvbG9yOiAjMDA5REEwO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOURBMDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDEwcHggMCAwO1xufVxuXG4ubW9kYWwtaGVhZGVyIC5tb2RhbC10aXRsZSB7XG4gIG1hcmdpbjogMCBhdXRvICFpbXBvcnRhbnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFNlZ29lVUk7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICMwYjFiNDY7XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cblxuLm1vZGFsLWhlYWRlciAuY2xvc2U6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOHB4IDIwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uc2F2ZUJ0biB7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1idG4td3JhcHBlciBidXR0b24uY2xvc2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMjtcbiAgY29sb3I6ICNlNTlhMTI7XG59XG5cbi5tb2RhbC1ib2R5IGZvcm0ge1xuICBwYWRkaW5nOiAxNXB4O1xufVxuXG4ucmVzdW1lYWRkLWZvcm0ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuLmFkZE1vcmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBib3JkZXItY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgY29sb3I6ICMyN2JmYzAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogNHB4IDE1cHggNHB4IDhweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc2F2ZUJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbn1cblxuLnNhdmVCdG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5iYWNrQnRuIHtcbiAgY29sb3I6ICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1OWExMiAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHtcbiAgcGFkZGluZy10b3A6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMTJyZW07XG4gIGNvbG9yOiAjMjdiZmMwO1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlcl9jcmVhdGUtbmV3IHtcbiAgd2lkdGg6IDI1JTtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgYm9yZGVyLWNvbG9yOiAjZTU5YTEyO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMTBweCAwO1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmlzLWludmFsaWQge1xuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCByZWQgIWltcG9ydGFudDtcbn1cblxuLnJlcXVpcmVkLWVycm9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogcmVkO1xuICB0b3A6IDUlO1xuICByaWdodDogNSU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVtcGx5LWxpc3Q6aG92ZXIge1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5oZWxwLWJsb2NrIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogcmVkO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAtOHB4O1xufVxuXG4udGFiLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4ubWFuYWdlLWpvYnMtc2VjID4gaDMge1xuICBmbG9hdDogbGVmdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjNTQ1ZjdkO1xufVxuXG4udGFibGUtbGlzdC10aXRsZSBzcGFuIHtcbiAgZmxvYXQ6IG5vbmU7XG59XG5cbi5ib3JkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5ib3JkZXItdGl0bGUgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uYm9yZGVyLXRpdGxlIC5qb2ItaXMuZnQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4udGFibGUtbGlzdC10aXRsZSBoMyB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICM0RDU5NzggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGFibGUtbGlzdC10aXRsZSBhIHtcbiAgY29sb3I6ICM0RDU5Nzg7XG59XG5cbi50eXBlLW9mLW1lZXRpbmcgaDMge1xuICBmb250LXNpemU6IDEuMTByZW07XG4gIC8qIGNvbG9yOiBibGFjazsgKi9cbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIG1hcmdpbjogNDBweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5tYWluLXdyYXBwZXIgdGFibGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5tYWluLXdyYXBwZXIgdGFibGUgdGhlYWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNGY5O1xufVxuXG4ubWFpbi13cmFwcGVyIHRhYmxlIHRoZWFkIHRkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICM3MDcwNzAgIWltcG9ydGFudDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmOTtcbiAgcGFkZGluZzogMTVweCAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDE2cHg7XG59XG5cbi5tYWluLXdyYXBwZXIgdGFibGUgdHIge1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1haW4td3JhcHBlciB0YWJsZSB0ciB0ZCB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubWFpbi13cmFwcGVyIHRhYmxlIHRyIHRkIGgzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEycHggYXV0bztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWFpbi13cmFwcGVyIHRhYmxlIHRyIHRkIGgzIHNwYW4ge1xuICBjb2xvcjogIzRENTk3ODtcbn1cblxuLm1haW4td3JhcHBlciB0YWJsZSB0ciB0ZCBoMyBhIHtcbiAgY29sb3I6ICM0RDU5Nzg7XG59XG5cbi5tYWluLXdyYXBwZXIgLm5vLWRhdGEtdmlldyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXNoYWRvdzogMnB4IDBweCAjZmZmZmZmO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgbWFyZ2luLXRvcDogMTUlO1xufVxuXG4uc3RhcnQtYnRuIHtcbiAgYmFja2dyb3VuZDogI0Y5QjUzNztcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y5QjUzNztcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zdGFydC1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgY29sb3I6ICNGOUI1MzcgIWltcG9ydGFudDtcbn1cblxuLmhpc3RvcnktYnRuIHtcbiAgYmFja2dyb3VuZDogIzI3YmZjMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3YmZjMDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDIwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XG59XG5cbi5oaXN0b3J5LWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xufVxuXG4uZGV0YWlscy1idG46aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZjI2OTU2O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuaSB7XG4gIGNvbG9yOiAjMDA4NDg3O1xufVxuXG4ucm93LmNhbmRpZGF0ZSB7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xufVxuXG4udGFibGUtbGlzdC10aXRsZSBoMyBhOmhvdmVyIHtcbiAgY29sb3I6ICMyNTlhYWI7XG59XG5cbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgcGFkZGluZzogMS4ycmVtO1xufVxuXG46Om5nLWRlZXAgLmF2YWlsYWJsZSB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBjb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmRvbmUge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgY29sb3I6ICMwZGM5MDAgIWltcG9ydGFudDtcbn1cbiIsIiRsaWdodC1ncmV5OiAjZmFmYWZhO1xyXG4kd2FybS1ncmV5IDojNzA3MDcwO1xyXG4kd2hpdGU6I2ZmZmZmZjtcclxuJHdhcm0tZ3JleS10d286ICM5ZTllOWU7XHJcbiRkYXJrLWluZGlnbyA6ICMwYjFiNDY7XHJcbiR3aGl0ZS10d286I2VmZWZlZjtcclxuJHRlYWxpc2ggOiMyN2JmYzA7XHJcbiRvcmFuZ2U6I2U1OWExMjtcclxuJGJvcmRlci1jb2xvcjojY2FjYWNhO1xyXG4kZHVzazojNTQ1ZjdkO1xyXG4kYmxhY2s6IzJhMmEyYTtcclxuJHN0ZWVsOiAjODg4Nzk1O1xyXG4kd2hpdGUtZm91cjojZmVmZWZlO1xyXG4kcGFsZS1ncmV5OiNmM2Y0Zjk7IiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vZ2VuZXJhbCc7XHJcblxyXG5cclxuLm1hbmFnZS1qb2JzLXNlYz5oMyB7XHJcbiAgZmxvYXQgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICA6IDEwMCU7XHJcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuICBmb250LXNpemUgIDogMjBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvciAgICAgIDogIzU0NWY3ZDtcclxufVxyXG5cclxuLnRhYmxlLWxpc3QtdGl0bGUgc3BhbntcclxuICBmbG9hdDogbm9uZTtcclxufVxyXG4uYm9yZGVyLXRpdGxlIHtcclxuICBkaXNwbGF5ICAgIDogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuXHJcblxyXG4gIC5idG4uYnRuLXByaW1hcnkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuXHJcbiAgfVxyXG5cclxuICAuam9iLWlzLmZ0IHtcclxuICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1saXN0LXRpdGxlIGgze1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzRENTk3OCFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRhYmxlLWxpc3QtdGl0bGUgYXtcclxuICBjb2xvcjogIzRENTk3ODtcclxufVxyXG5cclxuLnR5cGUtb2YtbWVldGluZyBoM3tcclxuICAgIGZvbnQtc2l6ZTogMS4xMHJlbTtcclxuICAgIC8qIGNvbG9yOiBibGFjazsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgfVxyXG4ubWFpbi13cmFwcGVye1xyXG4gIG1hcmdpbjogNDBweCBhdXRvIDAgIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwJTtcclxuICB0YWJsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICBtYXJnaW46IDA7XHJcbiAgICAgdGhlYWR7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwYWxlLWdyZXk7XHJcbiAgICAgIHRkIHtcclxuICAgICAgICBmb250LXdlaWdodCAgICAgOiA1MDA7XHJcbiAgICAgICAgY29sb3IgICAgICAgICAgIDogJHdhcm0tZ3JleSAhaW1wb3J0YW50O1xyXG4gICAgICAgIHBhZGRpbmcgICAgICAgICA6IDIwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBhbGUtZ3JleTtcclxuICAgICAgICBwYWRkaW5nICAgIDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgICAgZm9udC1zaXplICA6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICB9XHJcbiAgICAgdHJ7XHJcbiAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAgICAgICB0ZHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGgze1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBtYXJnaW46ICAxMnB4IGF1dG87XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBjb2xvciA6IzRENTk3ODtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiM0RDU5Nzg7XHJcbiAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICB9XHJcbiAgICAgXHJcbiB9XHJcbiAgIC5uby1kYXRhLXZpZXd7ICAgIFxyXG4gICAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgdGV4dC1zaGFkb3c6IDJweCAwcHggI2ZmZmZmZjtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIG1hcmdpbi10b3A6MTUlIDtcclxuICAgfVxyXG59XHJcbi5zdGFydC1idG57XHJcbiAgYmFja2dyb3VuZDogI0Y5QjUzNztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjRjlCNTM3O1xyXG4gIGNvbG9yOiB3aGl0ZSFpbXBvcnRhbnQ7XHJcbiAgLy8gZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCA7XHJcbiAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSA7XHJcbiAgICAgIGNvbG9yOiAjRjlCNTM3IWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmhpc3RvcnktYnRue1xyXG4gIGJhY2tncm91bmQ6JHRlYWxpc2g7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHRlYWxpc2g7XHJcbiAgY29sb3I6IHdoaXRlIWltcG9ydGFudDtcclxuICAvLyBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA4cHggMThweDtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIHdpZHRoOiAyMCU7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dCA7XHJcbiAgJjpob3ZlcntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZSA7XHJcbiAgICAgIGNvbG9yOiAkdGVhbGlzaCFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZGV0YWlscy1idG46aG92ZXJ7XHJcbiAgYmFja2dyb3VuZDogI2YyNjk1NjtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5pe1xyXG4gIGNvbG9yOiAjMDA4NDg3O1xyXG59XHJcblxyXG4ucm93LmNhbmRpZGF0ZXtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxufVxyXG5cclxuLnRhYmxlLWxpc3QtdGl0bGUgaDMgYTpob3ZlciB7XHJcbiAgY29sb3I6ICMyNTlhYWI7XHJcbn1cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRke1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgcGFkZGluZzogMS4ycmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmF2YWlsYWJsZXtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjokdGVhbGlzaCAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZG9uZXtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICBjb2xvcjogIzBkYzkwMCAhaW1wb3J0YW50O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CandidateListOfMeetingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-candidate-list-of-meeting',
          templateUrl: './candidate-list-of-meeting.component.html',
          styleUrls: ['./candidate-list-of-meeting.component.scss']
        }]
      }], function () {
        return [{
          type: services_candidate_list_of_meeting_service__WEBPACK_IMPORTED_MODULE_1__["ListOfMeetingService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/modules/components/candidate-module/list-of-meeting.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/components/candidate-module/list-of-meeting.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ListOfMeetingModuel */

  /***/
  function srcModulesComponentsCandidateModuleListOfMeetingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfMeetingModuel", function () {
      return ListOfMeetingModuel;
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


    var _routing_candidate_routing_list_of_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/candidate-routing/list-of-meeting-routing.module */
    "./src/routing/candidate-routing/list-of-meeting-routing.module.ts");
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


    var app_candidate_components_candidate_list_of_meeting_candidate_list_of_meeting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component */
    "./src/app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component.ts");

    var ListOfMeetingModuel = function ListOfMeetingModuel() {
      _classCallCheck(this, ListOfMeetingModuel);
    };

    ListOfMeetingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListOfMeetingModuel
    });
    ListOfMeetingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListOfMeetingModuel_Factory(t) {
        return new (t || ListOfMeetingModuel)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_list_of_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListOfMeetingRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListOfMeetingModuel, {
        declarations: [app_candidate_components_candidate_list_of_meeting_candidate_list_of_meeting_component__WEBPACK_IMPORTED_MODULE_7__["CandidateListOfMeetingComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_list_of_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListOfMeetingRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfMeetingModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_candidate_components_candidate_list_of_meeting_candidate_list_of_meeting_component__WEBPACK_IMPORTED_MODULE_7__["CandidateListOfMeetingComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_list_of_meeting_routing_module__WEBPACK_IMPORTED_MODULE_2__["ListOfMeetingRoutingModuel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], routing_user_managment_routing_list_users_routing_module__WEBPACK_IMPORTED_MODULE_4__["ListUsersRoutingModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/candidate-routing/list-of-meeting-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/routing/candidate-routing/list-of-meeting-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ListOfMeetingRoutingModuel */

  /***/
  function srcRoutingCandidateRoutingListOfMeetingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfMeetingRoutingModuel", function () {
      return ListOfMeetingRoutingModuel;
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


    var _app_candidate_components_candidate_list_of_meeting_candidate_list_of_meeting_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component */
    "./src/app/candidate-components/candidate-list-of-meeting/candidate-list-of-meeting.component.ts");

    var routes = [{
      path: "",
      component: _app_candidate_components_candidate_list_of_meeting_candidate_list_of_meeting_component__WEBPACK_IMPORTED_MODULE_2__["CandidateListOfMeetingComponent"]
    }];

    var ListOfMeetingRoutingModuel = function ListOfMeetingRoutingModuel() {
      _classCallCheck(this, ListOfMeetingRoutingModuel);
    };

    ListOfMeetingRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ListOfMeetingRoutingModuel
    });
    ListOfMeetingRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ListOfMeetingRoutingModuel_Factory(t) {
        return new (t || ListOfMeetingRoutingModuel)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ListOfMeetingRoutingModuel, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfMeetingRoutingModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/services/candidate/list-of-meeting.service.ts":
  /*!***********************************************************!*\
    !*** ./src/services/candidate/list-of-meeting.service.ts ***!
    \***********************************************************/

  /*! exports provided: ListOfMeetingService */

  /***/
  function srcServicesCandidateListOfMeetingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListOfMeetingService", function () {
      return ListOfMeetingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");

    var ListOfMeetingService =
    /*#__PURE__*/
    function () {
      function ListOfMeetingService(http) {
        _classCallCheck(this, ListOfMeetingService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURl;
      }

      _createClass(ListOfMeetingService, [{
        key: "getAllTestForCandidate",
        value: function getAllTestForCandidate() {
          // Real End Point => tests/find/candidate
          return this.http.get(this.baseUrl + 'tests');
        }
      }]);

      return ListOfMeetingService;
    }();

    ListOfMeetingService.ɵfac = function ListOfMeetingService_Factory(t) {
      return new (t || ListOfMeetingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ListOfMeetingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ListOfMeetingService,
      factory: ListOfMeetingService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListOfMeetingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-components-candidate-module-list-of-meeting-module-es5.js.map
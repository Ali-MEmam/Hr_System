function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-job-module-job-details"], {
  /***/
  "./src/app/business-components/job/job-details/job-details.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/business-components/job/job-details/job-details.component.ts ***!
    \******************************************************************************/

  /*! exports provided: JobDetailsComponent */

  /***/
  function srcAppBusinessComponentsJobJobDetailsJobDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDetailsComponent", function () {
      return JobDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_job_job_details_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../services/job/job-details.service */
    "./src/services/job/job-details.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function JobDetailsComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Description");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "contract type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "full-time");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "8 hours");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "td", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "salary");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Monthly");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "check job history");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r446.jobDetails.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r446.jobDetails.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r446.jobDetails.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r446.jobDetails.salary_from, "-", ctx_r446.jobDetails.salary_to, "");
      }
    }

    var JobDetailsComponent =
    /*#__PURE__*/
    function () {
      function JobDetailsComponent(jobService) {
        _classCallCheck(this, JobDetailsComponent);

        this.jobService = jobService;
        this.jobId = 1;
      }

      _createClass(JobDetailsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayJobDetails();
        }
      }, {
        key: "displayJobDetails",
        value: function displayJobDetails() {
          var _this = this;

          this.jobService.getjobDetails(this.jobId).subscribe(function (response) {
            console.log(response);
            _this.jobDetails = response;
            console.log(_this.jobDetails);
          });
        }
      }]);

      return JobDetailsComponent;
    }();

    JobDetailsComponent.ɵfac = function JobDetailsComponent_Factory(t) {
      return new (t || JobDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_job_job_details_service__WEBPACK_IMPORTED_MODULE_1__["JobDetailsService"]));
    };

    JobDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: JobDetailsComponent,
      selectors: [["app-job-details"]],
      decls: 1,
      vars: 1,
      consts: [["class", "job-details", 4, "ngIf"], [1, "job-details"], [1, "job-details_table"], [1, "job-details_table_heading"], ["colspan", "2", 1, "job-details_table_content"], [1, "job-details_table_content", "first"], [1, "job-details_table_content"], [1, "job-details_link"], ["router_link", "#"]],
      template: function JobDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobDetailsComponent_div_0_Template, 32, 5, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.jobDetails);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      styles: [".job-details[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n}\n\n.job-details_table_heading[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: bold;\n  width: 15%;\n  padding: 1.5%;\n}\n\n.job-details_table_content[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: normal;\n}\n\n.job-details_table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  width: 10%;\n}\n\n.job-details_link[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 3%;\n}\n\n.job-details_link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: auto;\n  margin: auto;\n  border-bottom: 1px solid #727b84;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy9qb2Ivam9iLWRldGFpbHMvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXGFwcFxcYnVzaW5lc3MtY29tcG9uZW50c1xcam9iXFxqb2ItZGV0YWlsc1xcam9iLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvam9iL2pvYi1kZXRhaWxzL2pvYi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMEJBQTBCO0FDQzlCOztBRENRO0VBQ0ksZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsYUFBYTtBQ0V6Qjs7QURBUTtFQUNJLGVBQWU7RUFDZixtQkFBbUI7QUNHL0I7O0FEWks7RUFZTyxVQUFVO0FDSXRCOztBRERJO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFdBQVc7QUNJbkI7O0FEUks7RUFNRyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixnQ0FBZ0M7QUNNeEMiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL2pvYi9qb2ItZGV0YWlscy9qb2ItZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qb2ItZGV0YWlsc3tcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgJl90YWJsZXtcclxuICAgICAgICAmX2hlYWRpbmd7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfY29udGVudHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZDpudGgtY2hpbGQoMil7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9saW5re1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAzJTtcclxuICAgICAgIGF7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyN2I4NDtcclxuICAgICAgIH1cclxuICAgIH1cclxufSIsIi5qb2ItZGV0YWlscyB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuXG4uam9iLWRldGFpbHNfdGFibGVfaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxNSU7XG4gIHBhZGRpbmc6IDEuNSU7XG59XG5cbi5qb2ItZGV0YWlsc190YWJsZV9jb250ZW50IHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uam9iLWRldGFpbHNfdGFibGUgdGQ6bnRoLWNoaWxkKDIpIHtcbiAgd2lkdGg6IDEwJTtcbn1cblxuLmpvYi1kZXRhaWxzX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMyU7XG59XG5cbi5qb2ItZGV0YWlsc19saW5rIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiBhdXRvO1xuICBtYXJnaW46IGF1dG87XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzI3Yjg0O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-job-details',
          templateUrl: './job-details.component.html',
          styleUrls: ['./job-details.component.scss']
        }]
      }], function () {
        return [{
          type: _services_job_job_details_service__WEBPACK_IMPORTED_MODULE_1__["JobDetailsService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/modules/components/job-module/job-details.ts":
  /*!**********************************************************!*\
    !*** ./src/modules/components/job-module/job-details.ts ***!
    \**********************************************************/

  /*! exports provided: jobDetailsModuel */

  /***/
  function srcModulesComponentsJobModuleJobDetailsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jobDetailsModuel", function () {
      return jobDetailsModuel;
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


    var routing_jobs_routing_job_details_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! routing/jobs-routing/job-details-routing */
    "./src/routing/jobs-routing/job-details-routing.ts");
    /* harmony import */


    var app_business_components_job_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! app/business-components/job/job-details/job-details.component */
    "./src/app/business-components/job/job-details/job-details.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var jobDetailsModuel = function jobDetailsModuel() {
      _classCallCheck(this, jobDetailsModuel);
    };

    jobDetailsModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: jobDetailsModuel
    });
    jobDetailsModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function jobDetailsModuel_Factory(t) {
        return new (t || jobDetailsModuel)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], routing_jobs_routing_job_details_routing__WEBPACK_IMPORTED_MODULE_2__["jobDetailsRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobDetailsModuel, {
        declarations: [app_business_components_job_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], routing_jobs_routing_job_details_routing__WEBPACK_IMPORTED_MODULE_2__["jobDetailsRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobDetailsModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [app_business_components_job_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_3__["JobDetailsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], routing_jobs_routing_job_details_routing__WEBPACK_IMPORTED_MODULE_2__["jobDetailsRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/jobs-routing/job-details-routing.ts":
  /*!*********************************************************!*\
    !*** ./src/routing/jobs-routing/job-details-routing.ts ***!
    \*********************************************************/

  /*! exports provided: jobDetailsRoutingModuel */

  /***/
  function srcRoutingJobsRoutingJobDetailsRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jobDetailsRoutingModuel", function () {
      return jobDetailsRoutingModuel;
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


    var app_business_components_job_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! app/business-components/job/job-details/job-details.component */
    "./src/app/business-components/job/job-details/job-details.component.ts");

    var routes = [{
      path: "",
      component: app_business_components_job_job_details_job_details_component__WEBPACK_IMPORTED_MODULE_2__["JobDetailsComponent"]
    }];

    var jobDetailsRoutingModuel = function jobDetailsRoutingModuel() {
      _classCallCheck(this, jobDetailsRoutingModuel);
    };

    jobDetailsRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: jobDetailsRoutingModuel
    });
    jobDetailsRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function jobDetailsRoutingModuel_Factory(t) {
        return new (t || jobDetailsRoutingModuel)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobDetailsRoutingModuel, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobDetailsRoutingModuel, [{
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
  "./src/services/job/job-details.service.ts":
  /*!*************************************************!*\
    !*** ./src/services/job/job-details.service.ts ***!
    \*************************************************/

  /*! exports provided: JobDetailsService */

  /***/
  function srcServicesJobJobDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JobDetailsService", function () {
      return JobDetailsService;
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

    var JobDetailsService =
    /*#__PURE__*/
    function () {
      function JobDetailsService(http) {
        _classCallCheck(this, JobDetailsService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURl;
      }

      _createClass(JobDetailsService, [{
        key: "getjobDetails",
        value: function getjobDetails(id) {
          return this.http.get(this.baseUrl + 'job' + '/' + id);
        }
      }]);

      return JobDetailsService;
    }();

    JobDetailsService.ɵfac = function JobDetailsService_Factory(t) {
      return new (t || JobDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    JobDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: JobDetailsService,
      factory: JobDetailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobDetailsService, [{
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
//# sourceMappingURL=modules-components-job-module-job-details-es5.js.map
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-test-managment-module-list-of-test-module"], {
  /***/
  "./src/app/business-components/test-managment/test-list/test-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/business-components/test-managment/test-list/test-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TestListComponent */

  /***/
  function srcAppBusinessComponentsTestManagmentTestListTestListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestListComponent", function () {
      return TestListComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../services/test-mangment/test-mangment.service */
    "./src/services/test-mangment/test-mangment.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/__ivy_ngcc__/fesm2015/ngx-translate-core.js");

    function TestListComponent_ngx_datatable_column_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-datatable-column", 16);
      }

      if (rf & 2) {
        var col_r660 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", col_r660.name)("prop", col_r660.prop);
      }
    }

    function TestListComponent_ng_template_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r664 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_ng_template_18_Template_a_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r664);

          var value_r662 = ctx.value;

          var ctx_r663 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r663.getSingleTest(value_r662);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " view ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_ng_template_18_Template_a_click_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r664);

          var value_r662 = ctx.value;

          var ctx_r665 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r665.sendInv(value_r662);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestListComponent_ng_template_18_Template_a_click_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r664);

          var value_r662 = ctx.value;

          var ctx_r666 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r666.removetest(value_r662);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return [a0];
    };

    var TestListComponent =
    /*#__PURE__*/
    function () {
      function TestListComponent(modalService, testMangmentService, route, toster) {
        _classCallCheck(this, TestListComponent);

        this.modalService = modalService;
        this.testMangmentService = testMangmentService;
        this.route = route;
        this.toster = toster; // Displayed DataTable Vars Start

        this.displayedRows = [];
        this.resetDisplayedRows = []; // Modal Vars Start

        this.FilterOptionLabel = 'Filter Option';
        this.FilterPlaceHolder = 'Type to filter the Test Name or Type ...';
        this.rows = [];
        this.resetRows = [];
        this.temp = []; // Table Column Titles

        this.columns = [{
          prop: 'test'
        }, {
          prop: 'created'
        }, {
          prop: 'type'
        }];
      }

      _createClass(TestListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.displayPreselectedtests();
        }
        /*            ----------------------------------------------------------------------           */

        /*            Displayed DataTable For the Selected test From Preselecting Start           */

        /*            ----------------------------------------------------------------------           */

      }, {
        key: "updateFilter",
        value: function updateFilter(event) {
          var val = event.target.value;
          console.log(val);
          this.displayedRows = this.resetDisplayedRows; // filter our data

          var temp = this.displayedRows.filter(function (e) {
            return e["description"].includes(val) || e["type of test"].includes(val);
          });
          console.log(temp);
          console.log(this.displayedRows); // update the rows

          this.displayedRows = temp;

          if (val == "") {
            this.displayedRows = this.resetDisplayedRows;
          } // Whenever the filter changes, always go back to the first page


          this.table.offset = 0;
        }
      }, {
        key: "getSingleTest",
        value: function getSingleTest(id) {
          // gettestById
          this.route.navigate(['pages', 'login', 'testslist', 'details', id]);
        }
      }, {
        key: "sendInv",
        value: function sendInv(value) {
          console.log(value);
        }
      }, {
        key: "removetest",
        value: function removetest(id) {
          var _this = this;

          this.testMangmentService.deleteTest(id).subscribe(function (data) {
            _this.toster.success("Profile Deleted", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });

            _this.displayPreselectedtests();
          }, function (err) {
            _this.toster.error("Wrong Move", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });
          });
        }
        /* -------------------------------------------------------------------------- */

        /*                              Display Selected tests                   */

        /* -------------------------------------------------------------------------- */

      }, {
        key: "displayPreselectedtests",
        value: function displayPreselectedtests() {
          var _this2 = this;

          this.testMangmentService.gettests().subscribe(function (data) {
            _this2.displayedRows = data;

            for (var i = 0; i < _this2.displayedRows.length; i++) {
              _this2.displayedRows[i]["test"] = _this2.displayedRows[i]["test"], _this2.displayedRows[i]["type"] = _this2.displayedRows[i]["type"];
            }

            console.log(_this2.displayedRows);
            _this2.resetDisplayedRows = _this2.displayedRows;
          });
        }
      }]);

      return TestListComponent;
    }();

    TestListComponent.ɵfac = function TestListComponent_Factory(t) {
      return new (t || TestListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_4__["TestMangmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]));
    };

    TestListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TestListComponent,
      selectors: [["app-test-list"]],
      viewQuery: function TestListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
        }
      },
      decls: 19,
      vars: 13,
      consts: [["id", "filter", 1, "mb-3"], [1, "row", "text-left"], [1, "col-12"], [1, "row"], [1, "col-sm-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-content"], [1, "card-body"], ["type", "text", 2, "padding", "8px", "margin", "15px auto", "width", "30%", 3, "placeholder", "keyup"], [1, "bootstrap", 3, "columns", "columnMode", "headerHeight", "footerHeight", "rowHeight", "limit", "rows"], ["table", ""], [3, "name", "prop", 4, "ngFor", "ngForOf"], ["name", "Actions", "sortable", "false", "prop", "id"], ["ngx-datatable-cell-template", ""], [3, "name", "prop"], ["data-original-title", "", "title", "", 1, "info", "p-0", 3, "click"], ["data-original-title", "", "title", "", 1, "success", "p-0", 3, "click"], [1, "ft-edit-2", "font-medium-3", "mr-2"], ["data-original-title", "", "title", "", 1, "success", "danger", "p-0", 3, "click"], [1, "ft-x", "font-medium-3", "mr-2"]],
      template: function TestListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "list of test");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TestListComponent_Template_input_keyup_11_listener($event) {
            return ctx.updateFilter($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "translate");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ngx-datatable", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "ngx-datatable-row-detail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TestListComponent_ngx_datatable_column_16_Template, 1, 2, "ngx-datatable-column", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-datatable-column", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TestListComponent_ng_template_18_Template, 6, 0, "ng-template", 15);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 9, ctx.FilterPlaceHolder)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("columnMode", "force")("headerHeight", 50)("footerHeight", 50)("rowHeight", "auto")("limit", 10)("rows", ctx.displayedRows);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        }
      },
      directives: [_swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DatatableRowDetailDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnDirective"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_1__["DataTableColumnCellDirective"]],
      pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslatePipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvdGVzdC1tYW5hZ21lbnQvdGVzdC1saXN0L3Rlc3QtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-test-list',
          templateUrl: './test-list.component.html',
          styleUrls: ['./test-list.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]
        }, {
          type: _services_test_mangment_test_mangment_service__WEBPACK_IMPORTED_MODULE_4__["TestMangmentService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
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
  "./src/modules/components/test-managment-module/list-of-test.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/modules/components/test-managment-module/list-of-test.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: TestListModule */

  /***/
  function srcModulesComponentsTestManagmentModuleListOfTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestListModule", function () {
      return TestListModule;
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


    var _app_business_components_test_managment_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../app/business-components/test-managment/test-list/test-list.component */
    "./src/app/business-components/test-managment/test-list/test-list.component.ts");
    /* harmony import */


    var _routing_test_managment_routing_list_of_tests_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../routing/test-managment-routing/list-of-tests-routing.module */
    "./src/routing/test-managment-routing/list-of-tests-routing.module.ts");
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

    var TestListModule = function TestListModule() {
      _classCallCheck(this, TestListModule);
    };

    TestListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TestListModule
    });
    TestListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TestListModule_Factory(t) {
        return new (t || TestListModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_list_of_tests_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestListRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestListModule, {
        declarations: [_app_business_components_test_managment_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__["TestListComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_list_of_tests_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestListRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_business_components_test_managment_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__["TestListComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_test_managment_routing_list_of_tests_routing_module__WEBPACK_IMPORTED_MODULE_3__["TestListRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_11__["FlexLayoutModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/test-managment-routing/list-of-tests-routing.module.ts":
  /*!****************************************************************************!*\
    !*** ./src/routing/test-managment-routing/list-of-tests-routing.module.ts ***!
    \****************************************************************************/

  /*! exports provided: TestListRoutingModule */

  /***/
  function srcRoutingTestManagmentRoutingListOfTestsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestListRoutingModule", function () {
      return TestListRoutingModule;
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


    var _app_business_components_test_managment_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/business-components/test-managment/test-list/test-list.component */
    "./src/app/business-components/test-managment/test-list/test-list.component.ts");

    var routes = [{
      path: "",
      component: _app_business_components_test_managment_test_list_test_list_component__WEBPACK_IMPORTED_MODULE_2__["TestListComponent"]
    }];

    var TestListRoutingModule = function TestListRoutingModule() {
      _classCallCheck(this, TestListRoutingModule);
    };

    TestListRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TestListRoutingModule
    });
    TestListRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TestListRoutingModule_Factory(t) {
        return new (t || TestListRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TestListRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TestListRoutingModule, [{
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
//# sourceMappingURL=modules-components-test-managment-module-list-of-test-module-es5.js.map
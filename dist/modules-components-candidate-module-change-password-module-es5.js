function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-candidate-module-change-password-module"], {
  /***/
  "./src/app/candidate-components/change-password/change-password.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/candidate-components/change-password/change-password.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppCandidateComponentsChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var services_core_services_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! services/core-services/authentication-services/auth.service */
    "./src/services/core-services/authentication-services/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var services_candidate_changepassword_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! services/candidate/changepassword.service */
    "./src/services/candidate/changepassword.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _services_helpers_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../services/helpers.service */
    "./src/services/helpers.service.ts");

    function ChangePasswordComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "password should be morethan 4 character");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ChangePasswordComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " password not match");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var ChangePasswordComponent =
    /*#__PURE__*/
    function () {
      function ChangePasswordComponent(http, authService, formBuilder, route, changePasswordService, router, toster, _location) {
        _classCallCheck(this, ChangePasswordComponent);

        this.http = http;
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.changePasswordService = changePasswordService;
        this.router = router;
        this.toster = toster;
        this._location = _location;
        this.isLoading = false;
        this.isAuthenticated = false;
        this.changedPswd = {};
      }
      /* -------------------------------------------------------------------------- */

      /*                               Submit TO ChangePassword                     */

      /* -------------------------------------------------------------------------- */


      _createClass(ChangePasswordComponent, [{
        key: "onSubmit",
        value: function onSubmit(changePassword) {
          var _this = this;

          var newPassword = changePassword.value.newPassword;
          var confirmPassword = changePassword.value.confirmPassword;
          var oldPassword = changePassword.value.oldPassword;
          this.changedPswd = {
            newPassword: newPassword,
            confirmPassword: confirmPassword,
            oldPassword: oldPassword
          };
          this.changePasswordService.changePassword(this.changedPswd).subscribe(function (data) {
            console.log(data);

            _this.toster.success("Password changed successfully", '', {
              timeOut: 3000,
              positionClass: 'toast-top-full-width',
              closeButton: true
            });
          }, function (err) {
            _this.toster.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true
            });

            _this.goback();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          /* -------------------------- loginForm Validation -------------------------- */
          this.changePasswordForm = this.formBuilder.group({
            oldPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            newPassword: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4)]],
            confirmPassword: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            userType: ["candiate"]
          }, {
            validators: this.password.bind(this),
            validator: Object(_services_helpers_service__WEBPACK_IMPORTED_MODULE_8__["MustMatch"])('newPassword', 'confirmPassword')
          });
          this.userSub = this.authService.user.subscribe(function (user) {
            _this2.isAuthenticated = !!user;
          });

          if (this.isAuthenticated) {// this.router.navigate(['pages/recruiter'], {relativeTo: this.route.parent});
          }
        }
        /* --------------------------checkif Password match confirmPassword -------------------------- */

      }, {
        key: "passwordConfirming",
        value: function passwordConfirming(c) {
          if (c.get('newPassword').value !== c.get('confirmPassword').value) {
            return {
              invalid: true
            };
          }
        }
      }, {
        key: "password",
        value: function password(formGroup) {
          var _formGroup$get = formGroup.get("newPassword"),
              password = _formGroup$get.value;

          var _formGroup$get2 = formGroup.get("confirmPassword"),
              confirmPassword = _formGroup$get2.value;

          return password === confirmPassword ? null : {
            passwordNotMatch: true
          };
        }
      }, {
        key: "goback",
        value: function goback() {
          this._location.back();
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ɵfac = function ChangePasswordComponent_Factory(t) {
      return new (t || ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_core_services_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_candidate_changepassword_service__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]));
    };

    ChangePasswordComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ChangePasswordComponent,
      selectors: [["app-change-password"]],
      decls: 34,
      vars: 19,
      consts: [[1, "resumme"], [1, "container"], [1, "row"], [1, "col-lg-12", "column"], [1, "padding-left"], [1, "manage-jobs-sec"], [1, "border-title"], [1, "change-password"], [3, "formGroup", "ngSubmit"], [1, "col-lg-6"], [1, "form-group", 3, "ngClass"], [1, "pf-title"], [1, "pf-field"], ["type", "password", "formControlName", "oldPassword", "id", "opwd", "autocomplete", "off", "name", "oldPassword", "required", "", "placeholder", "old Password"], [1, "pf-field", 3, "ngClass"], ["type", "password", "formControlName", "newPassword", "id", "npwd", "autocomplete", "off", "name", "newPassword", "placeholder", "Confirm Password", "placeholder", "new Password"], ["class", "help-block", 4, "ngIf"], ["type", "password", "placeholder", "Confirm Password", "formControlName", "confirmPassword", "id", "confirmpwd", "autocomplete", "off", 1, "form-control"], ["type", "submit", 1, "btn-style", "saveBtn", "mt-3", 3, "disabled"], [1, "la", "la-key", "big-icon"], [1, "help-block"]],
      template: function ChangePasswordComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Change Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ChangePasswordComponent_Template_form_ngSubmit_10_listener($event) {
            return ctx.onSubmit(ctx.changePasswordForm);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Old Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "New Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ChangePasswordComponent_div_23_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Confirm Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ChangePasswordComponent_div_29_Template, 2, 0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 19);

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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.changePasswordForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.changePasswordForm.get("oldPassword").errors && ctx.changePasswordForm.get("oldPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.changePasswordForm.get("newPassword").errors && ctx.changePasswordForm.get("newPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.changePasswordForm.get("newPassword").errors && ctx.changePasswordForm.get("newPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("newPassword").value.length < 4 && ctx.changePasswordForm.get("newPassword").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.changePasswordForm.get("confirmPassword").errors && ctx.changePasswordForm.get("confirmPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](17, _c0, ctx.changePasswordForm.get("confirmPassword").errors && ctx.changePasswordForm.get("confirmPassword").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.changePasswordForm.get("confirmPassword").value != ctx.changePasswordForm.get("newPassword").value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.changePasswordForm.invalid);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: [".container[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-image: url('Pattern.svg');\n  background-repeat: no-repeat;\n  background-size: 20%;\n  background-position: right;\n  padding: 5px 22px;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: black;\n  overflow: hidden;\n  height: auto;\n}\n\n.main-title[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: solid 0.5px #edeff7;\n  padding: 15px 0;\n  position: relative;\n  margin-top: 0px;\n  margin-bottom: 0;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.main-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: \"mainFontMedium\";\n  font-size: 22px;\n  font-weight: bold;\n  color: #0b1b46;\n  text-transform: capitalize;\n  padding-top: 0px;\n  margin-bottom: 0px;\n}\n\n.main-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.main-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.main-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%], .border-title[_ngcontent-%COMP%]    + .tabs-wrapper[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.main-wrapper[_ngcontent-%COMP%] {\n  width: 90%;\n  margin: 80px auto 0 !important;\n  float: none;\n  padding: 60px 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n  float: left;\n  width: 100%;\n  border-bottom: 1px solid #edeff7;\n  padding: 5px 0 0;\n  position: relative;\n  margin-top: 0px;\n  box-shadow: -8px 1px 5px 0 rgba(25, 42, 70, 0.11) !important;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #888795;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%], .tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]    > .nav-link[_ngcontent-%COMP%] {\n  background-color: #0b1b46;\n  background: transparent;\n  color: #0b1b46;\n  font-weight: 500;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   .nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]::after {\n  content: '';\n  display: block;\n  width: 100%;\n  height: 2px;\n  background: #e59a12;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.tabs-wrapper[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin-right: 60px;\n  font-size: 15px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 2.5;\n  padding: 0;\n  font-family: \"mainFontMedium\";\n}\n\nform[_ngcontent-%COMP%]   select.form-control[_ngcontent-%COMP%] {\n  border: 1px solid #eee;\n}\n\n.form-group[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 0;\n  border: 1px solid #cacaca;\n  text-align: left;\n  padding: 5px 10px;\n  background: #fff;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border-radius: 3px;\n  margin-bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]:focus-within {\n  border-left: 3px solid #27bfc0;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n.form-group[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding-left: 5px;\n  font-size: 13px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.31;\n  font-weight: 500;\n  color: #000;\n  font-family: \"mainFontMedium\";\n}\n\n.form-group[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%], .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border: 0px !important;\n  margin-bottom: 0 !important;\n  background-color: #fff;\n  padding: 0px;\n  margin: 0 4px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  height: 22px;\n  font-size: 13px;\n  width: 100%;\n}\n\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus, .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  box-shadow: none !important;\n}\n\n.description-text[_ngcontent-%COMP%] {\n  margin: -5px 0 30px;\n  color: grey;\n  letter-spacing: 1px;\n}\n\nform[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: none;\n}\n\nform[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  text-transform: capitalize !important;\n  display: block;\n}\n\n.custom-control[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.text-decoration-none[_ngcontent-%COMP%] {\n  color: #9e9e9e;\n}\n\n.select-user-tabs[_ngcontent-%COMP%] {\n  background-color: #efefef;\n  border-radius: 5px;\n  padding: 5px;\n  display: inline-block;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  border: none !important;\n  float: none;\n  display: inline-block;\n  border: 2px solid;\n  border-radius: 5px;\n  cursor: pointer;\n  font-size: 14px;\n  font-family: \"mainFontMedium\";\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.36;\n  letter-spacing: normal;\n  text-align: left;\n  color: #9e9e9e;\n  padding: 5px 10px;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n  border: 0px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 20px;\n}\n\n.select-user-tabs[_ngcontent-%COMP%]   span.active[_ngcontent-%COMP%] {\n  color: #ffffff;\n  background-color: #27bfc0 !important;\n  font-weight: bold !important;\n  -webkit-transition: 0.2s ease-in-out;\n  transition: 0.2s ease-in-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-moz-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]::placeholder {\n  color: #cacaca;\n  opacity: 1;\n  \n}\n\n[_ngcontent-%COMP%]:-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n[_ngcontent-%COMP%]::-ms-input-placeholder {\n  \n  color: #cacaca;\n}\n\n.fa-eye-slash[_ngcontent-%COMP%]:hover, .fa-eye[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.pick[_ngcontent-%COMP%] {\n  pointer-events: none;\n  background: #fff;\n  border: none;\n  color: #27bfc0;\n  font-size: 18px;\n  width: 40px;\n  position: absolute;\n  right: 5px;\n}\n\n.pick[_ngcontent-%COMP%]::before {\n  margin-left: 10px;\n  cursor: pointer;\n}\n\n.dateInput[_ngcontent-%COMP%] {\n  padding-right: 15px;\n  cursor: pointer;\n}\n\n[type=\"date\"][_ngcontent-%COMP%]::-webkit-calendar-picker-indicator {\n  opacity: 0;\n  position: absolute;\n  top: 16px;\n  right: 5px;\n  width: 40px;\n  cursor: pointer;\n}\n\n.modal-body[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n\n.modal-body[_ngcontent-%COMP%]   .la.la-plus[_ngcontent-%COMP%] {\n  background-color: transparent !important;\n  color: #009DA0;\n  font-weight: 600;\n}\n\n.modal-body[_ngcontent-%COMP%]   .add-more-btn[_ngcontent-%COMP%] {\n  color: #009DA0;\n  border-radius: 5px;\n  font-size: 14px;\n  border: 1px solid #009DA0;\n  margin-left: 5px;\n  padding: 5px;\n}\n\n.modal-header[_ngcontent-%COMP%] {\n  border: none;\n  margin: 10px 0 0;\n}\n\n.modal-header[_ngcontent-%COMP%]   .modal-title[_ngcontent-%COMP%] {\n  margin: 0 auto !important;\n  text-align: center;\n  font-family: SegoeUI;\n  font-size: 18px;\n  font-weight: 600;\n  font-stretch: normal;\n  font-style: normal;\n  line-height: 1.5;\n  color: #0b1b46;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 0.5rem;\n}\n\n.modal-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%] {\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 8px 20px;\n  height: auto;\n  font-size: 14px !important;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.saveBtn[_ngcontent-%COMP%] {\n  border-color: #e59a12;\n  color: #fff;\n  background-color: #e59a12;\n}\n\n.modal-btn-wrapper[_ngcontent-%COMP%]   button.close[_ngcontent-%COMP%] {\n  background-color: white;\n  border: 1px solid #e59a12;\n  color: #e59a12;\n}\n\n.modal-body[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  padding: 15px;\n}\n\n.resumeadd-form[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\n.addMoreBtn[_ngcontent-%COMP%] {\n  background-color: white !important;\n  border-color: #27bfc0 !important;\n  color: #27bfc0 !important;\n  padding: 4px 15px 4px 8px;\n  border-radius: 5px;\n  font-weight: 600;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  background-color: #e59a12 !important;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  background-color: #e59a12;\n  color: white;\n}\n\n.backBtn[_ngcontent-%COMP%] {\n  color: #e59a12 !important;\n  border: 1px solid #e59a12 !important;\n  background-color: white !important;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%] {\n  padding-top: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-family: \"mainFontMedium\";\n  font-size: 12rem;\n  color: #27bfc0;\n  line-height: 1;\n}\n\n.no-data-found-wrapper_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.no-data-found-wrapper[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #e59a12;\n  border-color: #e59a12;\n  color: white !important;\n  padding: 10px 0;\n  font-family: \"mainFontMedium\";\n  text-transform: capitalize;\n}\n\n.is-invalid[_ngcontent-%COMP%] {\n  border-color: red !important;\n  border: 1px solid red !important;\n}\n\n.required-error[_ngcontent-%COMP%] {\n  position: absolute;\n  color: red;\n  top: 5%;\n  right: 5%;\n  font-size: 12px;\n}\n\n.emply-list[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n\n.help-block[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: left;\n  color: red;\n  text-transform: capitalize;\n  position: relative;\n  margin-top: -8px;\n}\n\n.tab-content[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n.change-password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #009DA0;\n  color: #ffffff;\n}\n\n.change-password[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-color: #009DA0 !important;\n}\n\n.border-title[_ngcontent-%COMP%] {\n  display: -webkit-box !important;\n  display: flex !important;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.border-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-family: Quicksand;\n  font-size: 20px;\n  font-weight: bold;\n  color: #202020;\n  text-transform: capitalize;\n}\n\n.border-title[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.border-title[_ngcontent-%COMP%]   .job-is.ft[_ngcontent-%COMP%] {\n  margin: 0 !important;\n  border-radius: 8px;\n}\n\n.btn-style.btn-edited[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border: 1px solid #009DA0;\n  color: #009DA0;\n  margin-top: 12px;\n  font-family: Open Sans;\n  font-size: 14px;\n  border-radius: 22px;\n  background-color: white !important;\n}\n\n.btn-style.btn-edited[_ngcontent-%COMP%]:hover {\n  background-color: #009DA0 !important;\n  color: white;\n}\n\n.saveBtn[_ngcontent-%COMP%] {\n  border: 2px solid #009DA0;\n  color: #009DA0;\n  margin-left: 15px;\n}\n\n.saveBtn[_ngcontent-%COMP%]:hover {\n  color: white;\n  background: #009DA0;\n}\n\n.saveBtn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  background-color: white;\n  color: #009DA0;\n}\n\n.manage-jobs-sec[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  font-family: Quicksand;\n  font-size: 20px;\n  font-weight: bold;\n  color: #202020;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxfZ2VuZXJhbC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jYW5kaWRhdGUtY29tcG9uZW50cy9jaGFuZ2UtcGFzc3dvcmQvRDpcXHplaW4taXRcXGN2bWVldGluZy1oci1jaGF0LWJvdC1mcm9udGVuZFxcbWFzdGVyLWhyLXdlYi9zcmNcXF92YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvY2FuZGlkYXRlLWNvbXBvbmVudHMvY2hhbmdlLXBhc3N3b3JkL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGNhbmRpZGF0ZS1jb21wb25lbnRzXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFVBQVc7RUFDWCxjQUFjO0FDRGhCOztBRElBO0VBQ0Usb0NBQWtEO0VBQ2xELDRCQUE4QjtFQUM5QixvQkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLGlCQUFpQjtBQ0RuQjs7QURJQTtFQUNFLGtCQUEwQjtFQUMxQix1QkFBdUI7RUFDdkIsZ0JBQXdCO0VBQ3hCLFlBQXNCO0FDRHhCOztBRElBOztFQUVFLCtCQUFvQztFQUFwQyx3QkFBb0M7RUFDcEMseUJBQTJCO1VBQTNCLG1CQUEyQjtFQUMzQixXQUF5QjtFQUN6QixXQUF5QjtFQUN6QixrQ0FBd0M7RUFDeEMsZUFBMkI7RUFDM0Isa0JBQTZCO0VBQzdCLGVBQXdCO0VBQ3hCLGdCQUFzQjtFQUd0Qiw0REFBcUU7QUNIdkU7O0FE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QiIsImZpbGUiOiJzcmMvYXBwL2NhbmRpZGF0ZS1jb21wb25lbnRzL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuL3ZhcmlhYmxlcyc7XHJcblxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aCA6IDkwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZSAgIDogdXJsKCdhc3NldHMvaW1nL1BhdHRlcm4uc3ZnJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQgIDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZSAgICA6IDIwJTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodDtcclxuICBwYWRkaW5nOiA1cHggMjJweDtcclxufVxyXG5cclxuaGVhZGVyIHtcclxuICBwb3NpdGlvbiAgICAgICAgOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICBvdmVyZmxvdyAgICAgICAgOiBoaWRkZW47XHJcbiAgaGVpZ2h0ICAgICAgICAgIDogYXV0bztcclxufVxyXG5cclxuLm1haW4tdGl0bGUsXHJcbi5ib3JkZXItdGl0bGUge1xyXG4gIGRpc3BsYXkgICAgICAgICAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtcyAgICAgICAgOiBjZW50ZXI7XHJcbiAgZmxvYXQgICAgICAgICAgICAgIDogbGVmdDtcclxuICB3aWR0aCAgICAgICAgICAgICAgOiAxMDAlO1xyXG4gIGJvcmRlci1ib3R0b20gICAgICA6IHNvbGlkIDAuNXB4ICNlZGVmZjc7XHJcbiAgcGFkZGluZyAgICAgICAgICAgIDogMTVweCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICBtYXJnaW4tYm90dG9tICAgICAgOiAwO1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG4gIC8vIHotaW5kZXggICAgICAgICA6IDk5O1xyXG5cclxuICBoMyB7XHJcbiAgICBtYXJnaW4tcmlnaHQgIDogYXV0bztcclxuICAgIGZvbnQtZmFtaWx5ICAgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICBmb250LXNpemUgICAgIDogMjJweDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgOiBib2xkO1xyXG4gICAgY29sb3IgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgcGFkZGluZy10b3AgICA6IDBweDtcclxuICAgIG1hcmdpbi1ib3R0b20gOiAwcHg7XHJcbiAgfVxyXG5cclxuICAuYnRuLmJ0bi1wcmltYXJ5IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIC5qb2ItaXMuZnQge1xyXG4gICAgbWFyZ2luICAgICAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgJisudGFicy13cmFwcGVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5tYWluLXdyYXBwZXIge1xyXG4gIHdpZHRoICA6IDkwJTtcclxuICBtYXJnaW4gOiA4MHB4IGF1dG8gMCAhaW1wb3J0YW50O1xyXG4gIGZsb2F0ICA6IG5vbmU7XHJcbiAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG4udGFicy13cmFwcGVyIHtcclxuICBkaXNwbGF5ICAgICAgICAgICAgOiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXMgICAgICAgIDogY2VudGVyO1xyXG4gIGZsb2F0ICAgICAgICAgICAgICA6IGxlZnQ7XHJcbiAgd2lkdGggICAgICAgICAgICAgIDogMTAwJTtcclxuICBib3JkZXItYm90dG9tICAgICAgOiAxcHggc29saWQgI2VkZWZmNztcclxuICBwYWRkaW5nICAgICAgICAgICAgOiA1cHggMCAwO1xyXG4gIHBvc2l0aW9uICAgICAgICAgICA6IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3AgICAgICAgICA6IDBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tICAgOiAyMHB4O1xyXG4gIC8vIHBvc2l0aW9uICAgICAgICA6IGZpeGVkO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdyAgICAgICAgIDogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xyXG5cclxuICAubmF2LXBpbGxzIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogJHN0ZWVsO1xyXG5cclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcclxuICAubmF2LXBpbGxzIC5zaG93Pi5uYXYtbGluayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1pbmRpZ287XHJcbiAgICBiYWNrZ3JvdW5kICAgICAgOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yICAgICAgICAgICA6ICRkYXJrLWluZGlnbztcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDUwMDtcclxuICB9XHJcblxyXG4gIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgY29udGVudCAgIDogJyc7XHJcbiAgICBkaXNwbGF5ICAgOiBibG9jaztcclxuICAgIHdpZHRoICAgICA6IDEwMCU7XHJcbiAgICBoZWlnaHQgICAgOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAkb3JhbmdlO1xyXG4gIH1cclxuXHJcbiAgdWwge1xyXG4gICAgbGkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZSAgIDogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodCA6IDYwMDtcclxuICAgICAgICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgICAgICBsaW5lLWhlaWdodCA6IDIuNTtcclxuICAgICAgICBwYWRkaW5nICAgICA6IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHkgOiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIGlucHV0cyBzdHlsZVxyXG5cclxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgcG9zaXRpb24gICAgICAgIDogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbSAgIDogMDtcclxuICBib3JkZXIgICAgICAgICAgOiAxcHggc29saWQgJGJvcmRlci1jb2xvcjtcclxuICB0ZXh0LWFsaWduICAgICAgOiBsZWZ0O1xyXG4gIHBhZGRpbmcgICAgICAgICA6IDVweCAxMHB4O1xyXG4gIC8vIGJvcmRlci1sZWZ0ICA6IDJweCBzb2xpZCAgJGJvcmRlci1jb2xvcjtcclxuICBiYWNrZ3JvdW5kICAgICAgOiAjZmZmO1xyXG4gIHRyYW5zaXRpb24gICAgICA6IDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgIDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b20gICA6IDEwcHg7XHJcblxyXG4gICY6Zm9jdXMtd2l0aGluIHtcclxuICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgJHRlYWxpc2g7XHJcbiAgICB0cmFuc2l0aW9uIDogMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctbGVmdCA6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodCAgOiA2MDA7XHJcbiAgICBmb250LXN0cmV0Y2ggOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgOiAxLjMxO1xyXG4gICAgZm9udC13ZWlnaHQgIDogNTAwO1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwMDtcclxuICAgIGZvbnQtZmFtaWx5ICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuXHJcbiAgfVxyXG5cclxuICBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0ICAgOiAxMHB4O1xyXG4gICAgYm90dG9tICA6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBpbnB1dCAsIHRleHRhcmVhICwgc2VsZWN0IHtcclxuICAgIGJvcmRlciAgICAgICAgICA6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWJvdHRvbSAgIDogMCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmcgICAgICAgICA6IDBweDtcclxuICAgIG1hcmdpbiAgICAgICAgICA6IDAgNHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuICAgIGhlaWdodCAgICAgICAgICA6IDIycHg7XHJcbiAgICBmb250LXNpemUgICAgICAgOiAxM3B4O1xyXG4gICAgd2lkdGggICAgICAgICAgIDogMTAwJTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmRlc2NyaXB0aW9uLXRleHQge1xyXG4gIG1hcmdpbiAgICAgICAgOiAtNXB4IDAgMzBweDtcclxuICBjb2xvciAgICAgICAgIDogZ3JleTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG59XHJcblxyXG5mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSB0ZXh0YXJlYSB7XHJcbiAgd2lkdGggOiAxMDAlO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuZm9ybSBsYWJlbCB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5ICAgICAgIDogYmxvY2s7XHJcblxyXG59XHJcblxyXG4uY3VzdG9tLWNvbnRyb2wge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG5cclxuLnRleHQtZGVjb3JhdGlvbi1ub25lIHtcclxuICBjb2xvcjogJHdhcm0tZ3JleS10d287XHJcbn1cclxuXHJcbi5zZWxlY3QtdXNlci10YWJzIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkd2hpdGUtdHdvO1xyXG4gIGJvcmRlci1yYWRpdXMgICA6IDVweDtcclxuICBwYWRkaW5nICAgICAgICAgOiA1cHg7XHJcbiAgZGlzcGxheSAgICAgICAgIDogaW5saW5lLWJsb2NrO1xyXG5cclxuICBzcGFuIHtcclxuICAgIGJvcmRlciAgICAgICAgICAgICAgIDogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgZmxvYXQgICAgICAgICAgICAgICAgOiBub25lO1xyXG4gICAgZGlzcGxheSAgICAgICAgICAgICAgOiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXIgICAgICAgICAgICAgICA6IDJweCBzb2xpZDtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzICAgOiA1cHg7XHJcbiAgICAtbXMtYm9yZGVyLXJhZGl1cyAgICA6IDVweDtcclxuICAgIC1vLWJvcmRlci1yYWRpdXMgICAgIDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgICBjdXJzb3IgICAgICAgICAgICAgICA6IHBvaW50ZXI7XHJcbiAgICBmb250LXNpemUgICAgICAgICAgICA6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseSAgICAgICAgICA6IFwibWFpbkZvbnRNZWRpdW1cIjtcclxuICAgIGZvbnQtc3RyZXRjaCAgICAgICAgIDogbm9ybWFsO1xyXG4gICAgZm9udC1zdHlsZSAgICAgICAgICAgOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodCAgICAgICAgICA6IDEuMzY7XHJcbiAgICBsZXR0ZXItc3BhY2luZyAgICAgICA6IG5vcm1hbDtcclxuICAgIHRleHQtYWxpZ24gICAgICAgICAgIDogbGVmdDtcclxuICAgIGNvbG9yICAgICAgICAgICAgICAgIDogJHdhcm0tZ3JleS10d287XHJcbiAgICBwYWRkaW5nICAgICAgICAgICAgICA6IDVweCAxMHB4O1xyXG4gICAgdHJhbnNpdGlvbiAgICAgICAgICAgOiAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgYm9yZGVyICAgICAgICAgICAgICAgOiAwcHg7XHJcblxyXG4gICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yICAgICAgICAgICA6ICNmZmZmZmY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZWFsaXNoICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0ICAgICA6IGJvbGQgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogMC4ycyBlYXNlLWluLW91dDtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46OnBsYWNlaG9sZGVyIHtcclxuICBjb2xvciAgOiAkYm9yZGVyLWNvbG9yO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgLyogRmlyZWZveCAqL1xyXG59XHJcblxyXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xyXG4gIGNvbG9yOiAkYm9yZGVyLWNvbG9yO1xyXG59XHJcblxyXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgLyogTWljcm9zb2Z0IEVkZ2UgKi9cclxuICBjb2xvcjogJGJvcmRlci1jb2xvcjtcclxufVxyXG5cclxuLmZhLWV5ZS1zbGFzaDpob3ZlcixcclxuLmZhLWV5ZTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ucGljayB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgYmFja2dyb3VuZCAgICA6ICNmZmY7XHJcbiAgYm9yZGVyICAgICAgICA6IG5vbmU7XHJcbiAgY29sb3IgICAgICAgICA6ICR0ZWFsaXNoO1xyXG4gIGZvbnQtc2l6ZSAgICAgOiAxOHB4O1xyXG4gIHdpZHRoICAgICAgICAgOiA0MHB4O1xyXG4gIHBvc2l0aW9uICAgICAgOiBhYnNvbHV0ZTtcclxuICAvLyB0b3A6IDE2cHg7XHJcbiAgcmlnaHQgICAgICAgICA6IDVweDtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgY3Vyc29yICAgICA6IHBvaW50ZXI7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLmRhdGVJbnB1dCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBjdXJzb3IgICAgICAgOiBwb2ludGVyO1xyXG59XHJcblxyXG5cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHkgOiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3AgICAgIDogMTZweDtcclxuICByaWdodCAgIDogNXB4O1xyXG4gIHdpZHRoICAgOiA0MHB4O1xyXG4gIGN1cnNvciAgOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG5cclxuICAubGEubGEtcGx1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3IgICAgICAgICAgIDogIzAwOURBMDtcclxuICAgIGZvbnQtd2VpZ2h0ICAgICA6IDYwMDtcclxuICB9XHJcblxyXG4gIC5hZGQtbW9yZS1idG4ge1xyXG4gICAgY29sb3IgICAgICAgIDogIzAwOURBMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZSAgICA6IDE0cHg7XHJcbiAgICBib3JkZXIgICAgICAgOiAxcHggc29saWQgIzAwOURBMDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWwtaGVhZGVyIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgbWFyZ2luOiAxMHB4IDAgMDtcclxuXHJcbiAgLm1vZGFsLXRpdGxlIHtcclxuICAgIG1hcmdpbiAgICAgIDogMCBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduICA6IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5IDogU2Vnb2VVSTtcclxuICAgIGZvbnQtc2l6ZSAgIDogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0IDogNjAwO1xyXG4gICAgZm9udC1zdHJldGNoOiBub3JtYWw7XHJcbiAgICBmb250LXN0eWxlICA6IG5vcm1hbDtcclxuICAgIGxpbmUtaGVpZ2h0IDogMS41O1xyXG4gICAgY29sb3IgICAgICAgOiAkZGFyay1pbmRpZ287XHJcbiAgfVxyXG5cclxuICAuY2xvc2Uge1xyXG4gICAgbWFyZ2luIDogMDtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgd2lkdGggICAgICAgICAgOiAxMDAlO1xyXG4gIC8vIHBhZGRpbmc6IDAgMTVweDtcclxuICBkaXNwbGF5ICAgICAgICA6IGZsZXg7XHJcblxyXG4gIGJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nICAgICAgIDogOHB4IDIwcHg7XHJcbiAgICAvLyBsaW5lLWhlaWdodDogMTtcclxuICAgIGhlaWdodCAgICAgICAgOiBhdXRvO1xyXG4gICAgZm9udC1zaXplICAgICA6IDE0cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAmLnNhdmVCdG4ge1xyXG4gICAgICBib3JkZXItY29sb3IgICAgOiAkb3JhbmdlO1xyXG4gICAgICBjb2xvciAgICAgICAgICAgOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlO1xyXG4gICAgfVxyXG5cclxuICAgICYuY2xvc2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgYm9yZGVyICAgIDoxcHggc29saWQgJG9yYW5nZTtcclxuICAgICAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG4ubW9kYWwtYm9keSB7XHJcbiAgZm9ybSB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLnJlc3VtZWFkZC1mb3JtIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5hZGRNb3JlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yICAgICA6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yICAgICAgICAgOiAkdGVhbGlzaCAhaW1wb3J0YW50O1xyXG4gIGNvbG9yICAgICAgICAgICAgICAgIDogJHRlYWxpc2ggIWltcG9ydGFudDtcclxuICAvLyBjb2xvcjogIzAwOURBMCAgO1xyXG4gIHBhZGRpbmcgICAgICAgICAgICAgIDogNHB4IDE1cHggNHB4IDhweDtcclxuICAvLyBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1cyAgICAgICAgOiA1cHg7XHJcbiAgZm9udC13ZWlnaHQgICAgICAgICAgOiA2MDA7XHJcbn1cclxuXHJcbi5zYXZlQnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9yYW5nZTtcclxuICAgIGNvbG9yICAgICAgICAgICA6IHdoaXRlXHJcbiAgfVxyXG59XHJcblxyXG4uYmFja0J0biB7XHJcbiAgY29sb3IgICAgICAgICAgIDogJG9yYW5nZSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlciAgICAgICAgICA6IDFweCBzb2xpZCAkb3JhbmdlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJ7XHJcbiAgcGFkZGluZy10b3A6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgc3BhbntcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICAgIGNvbG9yOiAkdGVhbGlzaDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgfVxyXG4gICZfY3JlYXRlLW5ld3tcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICB9XHJcbiAgLmJ0bi5idG4tcHJpbWFyeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBib3JkZXItY29sb3I6ICRvcmFuZ2U7XHJcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uaXMtaW52YWxpZHtcclxuICBib3JkZXItY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXF1aXJlZC1lcnJvcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0b3A6IDUlO1xyXG4gIHJpZ2h0OjUlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZW1wbHktbGlzdHtcclxuICAmOmhvdmVye1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmhlbHAtYmxvY2sge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi10b3A6IC04cHg7XHJcbn1cclxuXHJcbi50YWItY29udGVudHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG59IiwiLmNvbnRhaW5lciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4ubmF2YmFyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiYXNzZXRzL2ltZy9QYXR0ZXJuLnN2Z1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiAyMCU7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xuICBwYWRkaW5nOiA1cHggMjJweDtcbn1cblxuaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ubWFpbi10aXRsZSxcbi5ib3JkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsb2F0OiBsZWZ0O1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMC41cHggI2VkZWZmNztcbiAgcGFkZGluZzogMTVweCAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgYm94LXNoYWRvdzogLThweCAxcHggNXB4IDAgcmdiYSgyNSwgNDIsIDcwLCAwLjExKSAhaW1wb3J0YW50O1xufVxuXG4ubWFpbi10aXRsZSBoMyxcbi5ib3JkZXItdGl0bGUgaDMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBcIm1haW5Gb250TWVkaXVtXCI7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMGIxYjQ2O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgcGFkZGluZy10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWFpbi10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5LFxuLmJvcmRlci10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5tYWluLXRpdGxlIC5qb2ItaXMuZnQsXG4uYm9yZGVyLXRpdGxlIC5qb2ItaXMuZnQge1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuXG4ubWFpbi10aXRsZSArIC50YWJzLXdyYXBwZXIsXG4uYm9yZGVyLXRpdGxlICsgLnRhYnMtd3JhcHBlciB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm1haW4td3JhcHBlciB7XG4gIHdpZHRoOiA5MCU7XG4gIG1hcmdpbjogODBweCBhdXRvIDAgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIHBhZGRpbmc6IDYwcHggMDtcbn1cblxuLnRhYnMtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VkZWZmNztcbiAgcGFkZGluZzogNXB4IDAgMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IC04cHggMXB4IDVweCAwIHJnYmEoMjUsIDQyLCA3MCwgMC4xMSkgIWltcG9ydGFudDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjODg4Nzk1O1xufVxuXG4udGFicy13cmFwcGVyIC5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSxcbi50YWJzLXdyYXBwZXIgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwYjFiNDY7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogIzBiMWI0NjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLnRhYnMtd3JhcHBlciAubmF2LXBpbGxzIC5uYXYtbGluay5hY3RpdmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICNlNTlhMTI7XG59XG5cbi50YWJzLXdyYXBwZXIgdWwgbGkge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udGFicy13cmFwcGVyIHVsIGxpIGEge1xuICBtYXJnaW4tcmlnaHQ6IDYwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zdHJldGNoOiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDIuNTtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuZm9ybSBzZWxlY3QuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYWNhY2E7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb3JtLWdyb3VwOmZvY3VzLXdpdGhpbiB7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzI3YmZjMDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbn1cblxuLmZvcm0tZ3JvdXAgcCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIHBhZGRpbmctbGVmdDogNXB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjMxO1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbn1cblxuLmZvcm0tZ3JvdXAgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIGJvdHRvbTogMTBweDtcbn1cblxuLmZvcm0tZ3JvdXAgaW5wdXQsIC5mb3JtLWdyb3VwIHRleHRhcmVhLCAuZm9ybS1ncm91cCBzZWxlY3Qge1xuICBib3JkZXI6IDBweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwIDRweDtcbiAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluLW91dDtcbiAgaGVpZ2h0OiAyMnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9ybS1ncm91cCBpbnB1dDpmb2N1cywgLmZvcm0tZ3JvdXAgdGV4dGFyZWE6Zm9jdXMsIC5mb3JtLWdyb3VwIHNlbGVjdDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmRlc2NyaXB0aW9uLXRleHQge1xuICBtYXJnaW46IC01cHggMCAzMHB4O1xuICBjb2xvcjogZ3JleTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuZm9ybSAuZm9ybS1jb250cm9sIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG5mb3JtIHRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuZm9ybSBsYWJlbCB7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY3VzdG9tLWNvbnRyb2wge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi50ZXh0LWRlY29yYXRpb24tbm9uZSB7XG4gIGNvbG9yOiAjOWU5ZTllO1xufVxuXG4uc2VsZWN0LXVzZXItdGFicyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5zZWxlY3QtdXNlci10YWJzIHNwYW4ge1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgZmxvYXQ6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm9yZGVyOiAycHggc29saWQ7XG4gIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4O1xuICAtbW96LWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW1zLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgLW8tYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXN0cmV0Y2g6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBsaW5lLWhlaWdodDogMS4zNjtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6ICM5ZTllOWU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xuICBib3JkZXI6IDBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3BhbjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLnNlbGVjdC11c2VyLXRhYnMgc3Bhbi5hY3RpdmUge1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI3YmZjMCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiAwLjJzIGVhc2UtaW4tb3V0O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6ICNjYWNhY2E7XG4gIG9wYWNpdHk6IDE7XG4gIC8qIEZpcmVmb3ggKi9cbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG46Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gIGNvbG9yOiAjY2FjYWNhO1xufVxuXG4uZmEtZXllLXNsYXNoOmhvdmVyLFxuLmZhLWV5ZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnBpY2sge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogNXB4O1xufVxuXG4ucGljazo6YmVmb3JlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmRhdGVJbnB1dCB7XG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICBvcGFjaXR5OiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTZweDtcbiAgcmlnaHQ6IDVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm1vZGFsLWJvZHkge1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5tb2RhbC1ib2R5IC5sYS5sYS1wbHVzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tb2RhbC1ib2R5IC5hZGQtbW9yZS1idG4ge1xuICBjb2xvcjogIzAwOURBMDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDlEQTA7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLm1vZGFsLWhlYWRlciB7XG4gIGJvcmRlcjogbm9uZTtcbiAgbWFyZ2luOiAxMHB4IDAgMDtcbn1cblxuLm1vZGFsLWhlYWRlciAubW9kYWwtdGl0bGUge1xuICBtYXJnaW46IDAgYXV0byAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBTZWdvZVVJO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc3RyZXRjaDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIGNvbG9yOiAjMGIxYjQ2O1xufVxuXG4ubW9kYWwtaGVhZGVyIC5jbG9zZSB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAwLjVyZW07XG59XG5cbi5tb2RhbC1oZWFkZXIgLmNsb3NlOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1vZGFsLWJ0bi13cmFwcGVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBoZWlnaHQ6IGF1dG87XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLnNhdmVCdG4ge1xuICBib3JkZXItY29sb3I6ICNlNTlhMTI7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYnRuLXdyYXBwZXIgYnV0dG9uLmNsb3NlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTI7XG4gIGNvbG9yOiAjZTU5YTEyO1xufVxuXG4ubW9kYWwtYm9keSBmb3JtIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnJlc3VtZWFkZC1mb3JtIHtcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5hZGRNb3JlQnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMjdiZmMwICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDRweCAxNXB4IDRweCA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnNhdmVCdG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG59XG5cbi5zYXZlQnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uYmFja0J0biB7XG4gIGNvbG9yOiAjZTU5YTEyICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNTlhMTIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLm5vLWRhdGEtZm91bmQtd3JhcHBlciB7XG4gIHBhZGRpbmctdG9wOiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm8tZGF0YS1mb3VuZC13cmFwcGVyIHNwYW4ge1xuICBmb250LWZhbWlseTogXCJtYWluRm9udE1lZGl1bVwiO1xuICBmb250LXNpemU6IDEycmVtO1xuICBjb2xvcjogIzI3YmZjMDtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXJfY3JlYXRlLW5ldyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5uby1kYXRhLWZvdW5kLXdyYXBwZXIgLmJ0bi5idG4tcHJpbWFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTlhMTI7XG4gIGJvcmRlci1jb2xvcjogI2U1OWExMjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggMDtcbiAgZm9udC1mYW1pbHk6IFwibWFpbkZvbnRNZWRpdW1cIjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5cbi5pcy1pbnZhbGlkIHtcbiAgYm9yZGVyLWNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XG59XG5cbi5yZXF1aXJlZC1lcnJvciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY29sb3I6IHJlZDtcbiAgdG9wOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5lbXBseS1saXN0OmhvdmVyIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaGVscC1ibG9jayB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgY29sb3I6IHJlZDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLXRvcDogLThweDtcbn1cblxuLnRhYi1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cblxuLmNoYW5nZS1wYXNzd29yZCBmb3JtIGJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDlEQTA7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4uY2hhbmdlLXBhc3N3b3JkIGZvcm0gYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XG59XG5cbi5ib3JkZXItdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ib3JkZXItdGl0bGUgaDMge1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjAyMDIwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLmJvcmRlci10aXRsZSAuYnRuLmJ0bi1wcmltYXJ5IHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5ib3JkZXItdGl0bGUgLmpvYi1pcy5mdCB7XG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG5cbi5idG4tc3R5bGUuYnRuLWVkaXRlZCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwOURBMDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ0bi1zdHlsZS5idG4tZWRpdGVkOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOURBMCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zYXZlQnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzAwOURBMDtcbiAgY29sb3I6ICMwMDlEQTA7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uc2F2ZUJ0bjpob3ZlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZDogIzAwOURBMDtcbn1cblxuLnNhdmVCdG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogIzAwOURBMDtcbn1cblxuLm1hbmFnZS1qb2JzLXNlYyA+IGgzIHtcbiAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyMDIwMjA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuIiwiJGxpZ2h0LWdyZXk6ICNmYWZhZmE7XHJcbiR3YXJtLWdyZXkgOiM3MDcwNzA7XHJcbiR3aGl0ZTojZmZmZmZmO1xyXG4kd2FybS1ncmV5LXR3bzogIzllOWU5ZTtcclxuJGRhcmstaW5kaWdvIDogIzBiMWI0NjtcclxuJHdoaXRlLXR3bzojZWZlZmVmO1xyXG4kdGVhbGlzaCA6IzI3YmZjMDtcclxuJG9yYW5nZTojZTU5YTEyO1xyXG4kYm9yZGVyLWNvbG9yOiNjYWNhY2E7XHJcbiRkdXNrOiM1NDVmN2Q7XHJcbiRibGFjazojMmEyYTJhO1xyXG4kc3RlZWw6ICM4ODg3OTU7XHJcbiR3aGl0ZS1mb3VyOiNmZWZlZmU7XHJcbiRwYWxlLWdyZXk6I2YzZjRmOTsiLCJAaW1wb3J0ICcuLi8uLi8uLi9fdmFyaWFibGVzJztcclxuQGltcG9ydCAnLi4vLi4vLi4vX2dlbmVyYWwnO1xyXG4uY2hhbmdlLXBhc3N3b3JkIGZvcm0gYnV0dG9uOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogIzAwOURBMDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uY2hhbmdlLXBhc3N3b3JkIGZvcm0gYnV0dG9ue1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3JkZXItdGl0bGUge1xyXG4gICAgZGlzcGxheSAgICA6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgICBoMyB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmJ0bi5idG4tcHJpbWFyeSB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuam9iLWlzLmZ0IHtcclxuICAgICAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4uYnRuLXN0eWxlLmJ0bi1lZGl0ZWR7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA5REEwO1xyXG4gICAgY29sb3I6ICMwMDlEQTA7XHJcbiAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgZm9udC1mYW1pbHk6IE9wZW4gU2FucztcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnRuLXN0eWxlLmJ0bi1lZGl0ZWQ6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5REEwICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcblxyXG5cclxufVxyXG4uc2F2ZUJ0biB7XHJcbiAgICBib3JkZXIgICAgIDogMnB4IHNvbGlkICMwMDlEQTA7XHJcbiAgICBjb2xvciAgICAgIDogIzAwOURBMDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG5cclxuICAgICY6aG92ZXIge1xyXG5cclxuICAgICAgICBjb2xvciAgICAgOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDA5REEwO1xyXG4gICAgfVxyXG5cclxuICAgICY6ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHkgICAgICAgICA6IDAuNjtcclxuICAgICAgICBjdXJzb3IgICAgICAgICAgOiBub3QtYWxsb3dlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBjb2xvciAgICAgICAgICAgOiAjMDA5REEwO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuLm1hbmFnZS1qb2JzLXNlYz5oM3tcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjAyMDIwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-change-password",
          templateUrl: "./change-password.component.html",
          styleUrls: ["./change-password.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: services_core_services_authentication_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: services_candidate_changepassword_service__WEBPACK_IMPORTED_MODULE_5__["ChangepasswordService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/modules/components/candidate-module/change-password.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/modules/components/candidate-module/change-password.module.ts ***!
    \***************************************************************************/

  /*! exports provided: ChangePasswordModuel */

  /***/
  function srcModulesComponentsCandidateModuleChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordModuel", function () {
      return ChangePasswordModuel;
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


    var _routing_candidate_routing_change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../routing/candidate-routing/change-password-routing.module */
    "./src/routing/candidate-routing/change-password-routing.module.ts");
    /* harmony import */


    var _app_candidate_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../app/candidate-components/change-password/change-password.component */
    "./src/app/candidate-components/change-password/change-password.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var ChangePasswordModuel = function ChangePasswordModuel() {
      _classCallCheck(this, ChangePasswordModuel);
    };

    ChangePasswordModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChangePasswordModuel
    });
    ChangePasswordModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChangePasswordModuel_Factory(t) {
        return new (t || ChangePasswordModuel)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordModuel, {
        declarations: [_app_candidate_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_app_candidate_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _routing_candidate_routing_change_password_routing_module__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordRoutingModuel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/routing/candidate-routing/change-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/routing/candidate-routing/change-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: ChangePasswordRoutingModuel */

  /***/
  function srcRoutingCandidateRoutingChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordRoutingModuel", function () {
      return ChangePasswordRoutingModuel;
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


    var _app_candidate_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../app/candidate-components/change-password/change-password.component */
    "./src/app/candidate-components/change-password/change-password.component.ts");

    var routes = [{
      path: "",
      component: _app_candidate_components_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_2__["ChangePasswordComponent"]
    }];

    var ChangePasswordRoutingModuel = function ChangePasswordRoutingModuel() {
      _classCallCheck(this, ChangePasswordRoutingModuel);
    };

    ChangePasswordRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ChangePasswordRoutingModuel
    });
    ChangePasswordRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ChangePasswordRoutingModuel_Factory(t) {
        return new (t || ChangePasswordRoutingModuel)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChangePasswordRoutingModuel, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChangePasswordRoutingModuel, [{
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
//# sourceMappingURL=modules-components-candidate-module-change-password-module-es5.js.map
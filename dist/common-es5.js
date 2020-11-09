function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/services/candidate/assessments.service.ts":
  /*!*******************************************************!*\
    !*** ./src/services/candidate/assessments.service.ts ***!
    \*******************************************************/

  /*! exports provided: AssessmentsService */

  /***/
  function srcServicesCandidateAssessmentsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AssessmentsService", function () {
      return AssessmentsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AssessmentsService =
    /*#__PURE__*/
    function () {
      function AssessmentsService(http) {
        _classCallCheck(this, AssessmentsService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURl;
        /*  not the real id_candidate */

        this.id_candidate = 30;
      }
      /* post info of candidte in register to get  candidate info and id_candidate  as :  _id */

      /*  getCandidate(candidateInfo){
         return this.http.post(this.baseUrl+'candidates/register', candidateInfo);
       } */


      _createClass(AssessmentsService, [{
        key: "getCandidateTestAssessments",
        value: function getCandidateTestAssessments() {
          return this.http.get("http://localhost:3000/assessments");
          "this.baseUrl+'tests/recruiter/candidate/passed/{id_candidate}"; //get candidates tests assessments
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get("http://localhost:3000/users/" + this.id_candidate);
          "this.baseUrl+'tests/findall/candidate/passed'";
        }
      }, {
        key: "getFirtContactTest",
        value: function getFirtContactTest() {
          return this.http.get("http://localhost:3000/passedTests/1");
        }
      }, {
        key: "getTecnical",
        value: function getTecnical() {
          return this.http.get("http://localhost:3000/passedTests/2");
        }
      }]);

      return AssessmentsService;
    }();

    AssessmentsService.ɵfac = function AssessmentsService_Factory(t) {
      return new (t || AssessmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AssessmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AssessmentsService,
      factory: AssessmentsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/services/meeting-services/invitatioin-without-screening.service.ts":
  /*!********************************************************************************!*\
    !*** ./src/services/meeting-services/invitatioin-without-screening.service.ts ***!
    \********************************************************************************/

  /*! exports provided: InvitatioinWithoutScreeningService */

  /***/
  function srcServicesMeetingServicesInvitatioinWithoutScreeningServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InvitatioinWithoutScreeningService", function () {
      return InvitatioinWithoutScreeningService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var InvitatioinWithoutScreeningService =
    /*#__PURE__*/
    function () {
      function InvitatioinWithoutScreeningService(http) {
        _classCallCheck(this, InvitatioinWithoutScreeningService);

        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURl;
      }

      _createClass(InvitatioinWithoutScreeningService, [{
        key: "getCandidates",
        value: function getCandidates() {
          return this.http.get('http://localhost:3000/candidate');
        } //  invitationWithoutSreening

      }, {
        key: "getPreselectedCandidates",
        value: function getPreselectedCandidates() {
          return this.http.get('http://localhost:3000/preselectedCandidate');
        }
      }, {
        key: "getInvitationWithoutSreeningCandidates",
        value: function getInvitationWithoutSreeningCandidates() {
          return this.http.get('http://localhost:3000/invitationWithoutSreening');
        }
      }, {
        key: "addInvitationWithoutSreeningCandidates",
        value: function addInvitationWithoutSreeningCandidates(candidateObj) {
          return this.http.post('http://localhost:3000/invitationWithoutSreening', candidateObj);
        }
      }, {
        key: "deleteInvitationWithoutSreeningCandidates",
        value: function deleteInvitationWithoutSreeningCandidates(id) {
          return this.http["delete"]('http://localhost:3000/invitationWithoutSreening/' + id);
        }
      }, {
        key: "deletePreSelectedCandidates",
        value: function deletePreSelectedCandidates(i) {
          return this.http["delete"]('http://localhost:3000/preselectedCandidate/' + i);
        }
      }, {
        key: "addPreselectedCandidates",
        value: function addPreselectedCandidates(obj) {
          return this.http.post('http://localhost:3000/preselectedCandidate', obj);
        }
      }, {
        key: "getAllTest",
        value: function getAllTest() {
          return this.http.get('http://localhost:3000/tests');
        }
      }]);

      return InvitatioinWithoutScreeningService;
    }();

    InvitatioinWithoutScreeningService.ɵfac = function InvitatioinWithoutScreeningService_Factory(t) {
      return new (t || InvitatioinWithoutScreeningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    InvitatioinWithoutScreeningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InvitatioinWithoutScreeningService,
      factory: InvitatioinWithoutScreeningService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvitatioinWithoutScreeningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/services/candidate/assessments.service.ts":
/*!*******************************************************!*\
  !*** ./src/services/candidate/assessments.service.ts ***!
  \*******************************************************/
/*! exports provided: AssessmentsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssessmentsService", function() { return AssessmentsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class AssessmentsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURl;
        /*  not the real id_candidate */
        this.id_candidate = 30;
    }
    /* post info of candidte in register to get  candidate info and id_candidate  as :  _id */
    /*  getCandidate(candidateInfo){
       return this.http.post(this.baseUrl+'candidates/register', candidateInfo);
     } */
    getCandidateTestAssessments() {
        return this.http.get("http://localhost:3000/assessments");
        "this.baseUrl+'tests/recruiter/candidate/passed/{id_candidate}";
        //get candidates tests assessments
    }
    getUser() {
        return this.http.get("http://localhost:3000/users/" + this.id_candidate);
        "this.baseUrl+'tests/findall/candidate/passed'";
    }
    getFirtContactTest() {
        return this.http.get("http://localhost:3000/passedTests/1");
    }
    getTecnical() {
        return this.http.get("http://localhost:3000/passedTests/2");
    }
}
AssessmentsService.ɵfac = function AssessmentsService_Factory(t) { return new (t || AssessmentsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AssessmentsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AssessmentsService, factory: AssessmentsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssessmentsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/services/meeting-services/invitatioin-without-screening.service.ts":
/*!********************************************************************************!*\
  !*** ./src/services/meeting-services/invitatioin-without-screening.service.ts ***!
  \********************************************************************************/
/*! exports provided: InvitatioinWithoutScreeningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitatioinWithoutScreeningService", function() { return InvitatioinWithoutScreeningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class InvitatioinWithoutScreeningService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseURl;
    }
    getCandidates() {
        return this.http.get('http://localhost:3000/candidate');
    }
    //  invitationWithoutSreening
    getPreselectedCandidates() {
        return this.http.get('http://localhost:3000/preselectedCandidate');
    }
    getInvitationWithoutSreeningCandidates() {
        return this.http.get('http://localhost:3000/invitationWithoutSreening');
    }
    addInvitationWithoutSreeningCandidates(candidateObj) {
        return this.http.post('http://localhost:3000/invitationWithoutSreening', candidateObj);
    }
    deleteInvitationWithoutSreeningCandidates(id) {
        return this.http.delete('http://localhost:3000/invitationWithoutSreening/' + id);
    }
    deletePreSelectedCandidates(i) {
        return this.http.delete('http://localhost:3000/preselectedCandidate/' + i);
    }
    addPreselectedCandidates(obj) {
        return this.http.post('http://localhost:3000/preselectedCandidate', obj);
    }
    getAllTest() {
        return this.http.get('http://localhost:3000/tests');
    }
}
InvitatioinWithoutScreeningService.ɵfac = function InvitatioinWithoutScreeningService_Factory(t) { return new (t || InvitatioinWithoutScreeningService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
InvitatioinWithoutScreeningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: InvitatioinWithoutScreeningService, factory: InvitatioinWithoutScreeningService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvitatioinWithoutScreeningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
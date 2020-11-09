(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-job-module-job-attachment"],{

/***/ "./src/app/business-components/job/job-attachments/job-attachments.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/business-components/job/job-attachments/job-attachments.component.ts ***!
  \**************************************************************************************/
/*! exports provided: JobAttachmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAttachmentsComponent", function() { return JobAttachmentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var services_attachments_job_attachment_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/attachments/job-attachment.service */ "./src/services/attachments/job-attachment.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var services_job_logs_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! services/job/logs.service */ "./src/services/job/logs.service.ts");















function JobAttachmentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r438 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Theire is no attachments right now !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobAttachmentsComponent_div_0_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r438); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r436.click(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Upload Attachment");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobAttachmentsComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobAttachmentsComponent_tr_17_Template_button_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r443); const _r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11); const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r442.openColapse(_r441); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobAttachmentsComponent_tr_17_Template_div_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r443); const attachment_r439 = ctx.$implicit; const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r444.deleteAttachment(attachment_r439.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attachment_r439 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attachment_r439.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attachment_r439.size, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", attachment_r439.date, " ");
} }
class JobAttachmentsComponent {
    constructor(formBuilder, modalService, toster, _location, attachmentService, logs) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toster = toster;
        this._location = _location;
        this.attachmentService = attachmentService;
        this.logs = logs;
        this.attachmentList = [];
        this.fileToUpload = null;
    }
    ngOnInit() {
        this.getAllAttachments();
    }
    /* -------------------------------------------------------------------------- */
    /*                             Modal Functions start                          */
    /* -------------------------------------------------------------------------- */
    open(content) {
        this.modalService.open(content, { size: 'lg' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    // This function is used in open
    getDismissReason(reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return `with: ${reason}`;
        }
    }
    openColapse(content) {
        console.log(content);
        //  let displayStyle =content.style.display
        if (content.style.display === 'none') {
            content.style.display = 'inline-block';
        }
        else {
            content.style.display = 'none';
        }
    }
    uploadFile(file) {
        console.log(file);
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var date = mm + '-' + dd + '-' + yyyy;
        this.fileToUpload = file.item(0);
        let fileObj = {
            title: this.fileToUpload.name,
            size: this.fileToUpload.size,
            date: date
        };
        console.log(fileObj);
        this.attachmentService.addAttachment(fileObj).subscribe(data => {
            this.getAllAttachments();
            console.log(data);
        });
        let logsObj = {
            full_name: "Mohamed Ahmed",
            username: "Mohamed Ahmed",
            type_user: "recruiter",
            description: `Attachment uploaded "${this.fileToUpload.name}"`,
            profile: "",
            created: date,
            type_activity: "Upload Attachment"
        };
        this.logs.addLogs(logsObj).subscribe;
    }
    getAllAttachments() {
        this.attachmentService.getAttachment().subscribe(data => {
            this.attachmentList = data;
            console.log(this.attachmentList);
        });
    }
    deleteAttachment(id) {
        console.log(id);
        sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.value) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Deleted!', 'Job has been deleted.', 'success');
                var today = new Date();
                var dd = String(today.getDate()).padStart(2, '0');
                var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                var yyyy = today.getFullYear();
                var date = mm + '-' + dd + '-' + yyyy;
                let attachmentfileName = this.attachmentList.find(x => x.id);
                let logsObj = {
                    full_name: "Mohamed Ahmed",
                    username: "Mohamed Ahmed",
                    type_user: "recruiter",
                    description: `Attachment deleted "${attachmentfileName.title}"`,
                    profile: "",
                    created: date,
                    type_activity: "Delete Attachment"
                };
                this.logs.addLogs(logsObj).subscribe();
                this.attachmentService.deleteAttachment(id).subscribe((data) => {
                    this.getAllAttachments();
                }, (err) => {
                    this.toster.error("We Have Problem Please Try Again", "", {
                        timeOut: 3000,
                        positionClass: "toast-top-full-width",
                        closeButton: true,
                    });
                });
            }
        });
    }
}
JobAttachmentsComponent.ɵfac = function JobAttachmentsComponent_Factory(t) { return new (t || JobAttachmentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_attachments_job_attachment_service__WEBPACK_IMPORTED_MODULE_5__["JobAttachmentService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_job_logs_service__WEBPACK_IMPORTED_MODULE_7__["LogsService"])); };
JobAttachmentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobAttachmentsComponent, selectors: [["app-job-attachments"]], decls: 20, vars: 2, consts: [["class", "note-list_no-data", 4, "ngIf"], [1, "note-list_with-data"], [1, "note-list_with-data_create-note", "container", 3, "click"], [1, "fas", "fa-plus-circle", "note-list_with-data_create-note_icon"], [1, "note-list_with-data_create-note_paragraph"], [1, "table", "note-list_with-data_table", "container"], ["id", "attachment.id", 4, "ngFor", "ngForOf"], ["type", "file", "id", "basicInputFile", 1, "form-control-file", 2, "display", "none", 3, "change"], ["file", ""], [1, "note-list_no-data"], [1, "note-list_no-data_icon"], [1, "fas", "fa-exclamation"], [1, "note-list_no-data_paragraph"], [1, "note-list_no-data_create-new"], [1, "btn", "btn-secondary", "btn-block", 3, "click"], ["id", "attachment.id"], ["type", "button", 1, "btn", "table", "note-list_with-data_table_delete-btn", 3, "click"], [1, "fas", "fa-ellipsis-v"], ["title", "Remove Notes", 1, "card", "card-body", "bg-danger", "table", "note-list_with-data_table_delete-btn_content", 2, "display", "none", 3, "click"], ["content", ""]], template: function JobAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
        const _r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobAttachmentsComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobAttachmentsComponent_Template_div_click_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r445); const _r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19); return _r436.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " title ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " size ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " date ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, JobAttachmentsComponent_tr_17_Template, 13, 3, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function JobAttachmentsComponent_Template_input_change_18_listener($event) { return ctx.uploadFile($event.target.files); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attachmentList.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attachmentList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: [".note-list_no-data[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding-top: 2rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.note-list_no-data_icon[_ngcontent-%COMP%] {\n  font-size: 15rem;\n  color: #727B84;\n}\n\n.note-list_no-data_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.note-list_with-data[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n\n.note-list_with-data_create-note[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 1px;\n  display: block;\n  box-shadow: 0px 1px 5px 0px #b5abab;\n  width: 100%;\n  margin: auto;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 1% 1%;\n}\n\n.note-list_with-data_create-note_icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #727B84;\n  font-size: 1.5rem;\n  margin-left: 10px;\n}\n\n.note-list_with-data_create-note_paragraph[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  display: inline-block;\n  margin: 0 !important;\n  margin-left: 10px !important;\n  padding: 0;\n  color: #727B84;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #727b84;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.note-list_with-data_table_delete-btn[_ngcontent-%COMP%] {\n  width: auto;\n  position: relative;\n}\n\n.note-list_with-data_table_delete-btn_content[_ngcontent-%COMP%] {\n  width: auto;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  display: none;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 8px 18px;\n}\n\n.table[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy9qb2Ivam9iLWF0dGFjaG1lbnRzL0Q6XFx6ZWluLWl0XFxjdm1lZXRpbmctaHItY2hhdC1ib3QtZnJvbnRlbmRcXG1hc3Rlci1oci13ZWIvc3JjXFxhcHBcXGJ1c2luZXNzLWNvbXBvbmVudHNcXGpvYlxcam9iLWF0dGFjaG1lbnRzXFxqb2ItYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvam9iL2pvYi1hdHRhY2htZW50cy9qb2ItYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQ0ExQjs7QURDSTtFQUNJLGdCQUFnQjtFQUNoQixjQUFjO0FDRXRCOztBREFJO0VBQ0ksVUFBVTtBQ0dsQjs7QURBQTtFQUNJLHlCQUF5QjtBQ0c3Qjs7QURGSTtFQUNJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxXQUFXO0VBQ1gsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGNBQWM7QUNLdEI7O0FESlE7RUFDSSxxQkFBcUI7RUFDckIsU0FBUztFQUNULFVBQVU7RUFDVixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQ083Qjs7QURMUTtFQUNJLDRCQUE0QjtFQUM1QixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ3BCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsY0FBYztBQ1ExQjs7QURMSTtFQUNJLGtCQUFrQjtBQ1ExQjs7QURUSztFQUdPLGdDQUFnQztBQ1U1Qzs7QURiSztFQUtXLFlBQVk7QUNZNUI7O0FEVFE7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0FDWTlCOztBRFhZO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUNWLGFBQWE7QUNjN0I7O0FEUEE7RUFDSSxpQkFBaUI7QUNVckI7O0FEUkE7RUFDSSxnQkFBZ0I7QUNXcEIiLCJmaWxlIjoic3JjL2FwcC9idXNpbmVzcy1jb21wb25lbnRzL2pvYi9qb2ItYXR0YWNobWVudHMvam9iLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdGUtbGlzdF9uby1kYXRhe1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgcGFkZGluZy10b3A6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICZfaWNvbntcclxuICAgICAgICBmb250LXNpemU6IDE1cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjNzI3Qjg0O1xyXG4gICAgfVxyXG4gICAgJl9jcmVhdGUtbmV3e1xyXG4gICAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICB9XHJcbn1cclxuLm5vdGUtbGlzdF93aXRoLWRhdGF7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgJl9jcmVhdGUtbm90ZXtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCAjYjVhYmFiO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMSUgMSU7XHJcbiAgICAgICAgJl9pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgY29sb3I6ICM3MjdCODQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJl9wYXJhZ3JhcGh7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3Qjg0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZfdGFibGV7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRye1xyXG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzcyN2I4NDtcclxuICAgICAgICAgICAgdGR7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJl9kZWxldGUtYnRue1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAmX2NvbnRlbnR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuXHJcbi5jYXJkLWJvZHl7XHJcbiAgICBwYWRkaW5nOiA4cHggMThweDtcclxufVxyXG4udGFibGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59IiwiLm5vdGUtbGlzdF9uby1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90ZS1saXN0X25vLWRhdGFfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVyZW07XG4gIGNvbG9yOiAjNzI3Qjg0O1xufVxuXG4ubm90ZS1saXN0X25vLWRhdGFfY3JlYXRlLW5ldyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfY3JlYXRlLW5vdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCAjYjVhYmFiO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMSUgMSU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX2NyZWF0ZS1ub3RlX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MjdCODQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfY3JlYXRlLW5vdGVfcGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MjdCODQ7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX3RhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm90ZS1saXN0X3dpdGgtZGF0YV90YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzI3Yjg0O1xufVxuXG4ubm90ZS1saXN0X3dpdGgtZGF0YV90YWJsZSB0ciB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfdGFibGVfZGVsZXRlLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX3RhYmxlX2RlbGV0ZS1idG5fY29udGVudCB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogOHB4IDE4cHg7XG59XG5cbi50YWJsZSB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobAttachmentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-job-attachments',
                templateUrl: './job-attachments.component.html',
                styleUrls: ['./job-attachments.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: services_attachments_job_attachment_service__WEBPACK_IMPORTED_MODULE_5__["JobAttachmentService"] }, { type: services_job_logs_service__WEBPACK_IMPORTED_MODULE_7__["LogsService"] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/job-module/job-attachment.ts":
/*!*************************************************************!*\
  !*** ./src/modules/components/job-module/job-attachment.ts ***!
  \*************************************************************/
/*! exports provided: jobAttachmentModuel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobAttachmentModuel", function() { return jobAttachmentModuel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var routing_jobs_routing_job_attachment_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routing/jobs-routing/job-attachment-routing-module */ "./src/routing/jobs-routing/job-attachment-routing-module.ts");
/* harmony import */ var app_business_components_job_job_attachments_job_attachments_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/business-components/job/job-attachments/job-attachments.component */ "./src/app/business-components/job/job-attachments/job-attachments.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









class jobAttachmentModuel {
}
jobAttachmentModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: jobAttachmentModuel });
jobAttachmentModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function jobAttachmentModuel_Factory(t) { return new (t || jobAttachmentModuel)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            routing_jobs_routing_job_attachment_routing_module__WEBPACK_IMPORTED_MODULE_2__["jobAttachmentRoutingModuel"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobAttachmentModuel, { declarations: [app_business_components_job_job_attachments_job_attachments_component__WEBPACK_IMPORTED_MODULE_3__["JobAttachmentsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        routing_jobs_routing_job_attachment_routing_module__WEBPACK_IMPORTED_MODULE_2__["jobAttachmentRoutingModuel"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobAttachmentModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [app_business_components_job_job_attachments_job_attachments_component__WEBPACK_IMPORTED_MODULE_3__["JobAttachmentsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    routing_jobs_routing_job_attachment_routing_module__WEBPACK_IMPORTED_MODULE_2__["jobAttachmentRoutingModuel"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/jobs-routing/job-attachment-routing-module.ts":
/*!*******************************************************************!*\
  !*** ./src/routing/jobs-routing/job-attachment-routing-module.ts ***!
  \*******************************************************************/
/*! exports provided: jobAttachmentRoutingModuel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobAttachmentRoutingModuel", function() { return jobAttachmentRoutingModuel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_business_components_job_job_attachments_job_attachments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/business-components/job/job-attachments/job-attachments.component */ "./src/app/business-components/job/job-attachments/job-attachments.component.ts");





const routes = [
    {
        path: "",
        component: app_business_components_job_job_attachments_job_attachments_component__WEBPACK_IMPORTED_MODULE_2__["JobAttachmentsComponent"],
    },
];
class jobAttachmentRoutingModuel {
}
jobAttachmentRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: jobAttachmentRoutingModuel });
jobAttachmentRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function jobAttachmentRoutingModuel_Factory(t) { return new (t || jobAttachmentRoutingModuel)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobAttachmentRoutingModuel, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobAttachmentRoutingModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/services/attachments/job-attachment.service.ts":
/*!************************************************************!*\
  !*** ./src/services/attachments/job-attachment.service.ts ***!
  \************************************************************/
/*! exports provided: JobAttachmentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAttachmentService", function() { return JobAttachmentService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class JobAttachmentService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURl;
    }
    getAttachment() {
        return this.http.get(this.baseUrl + 'attachments');
    }
    addAttachment(obj) {
        return this.http.post(this.baseUrl + 'attachments/', obj);
    }
    deleteAttachment(id) {
        // Real End Point => tests/find/candidate
        return this.http.delete(this.baseUrl + 'attachments/' + id);
    }
}
JobAttachmentService.ɵfac = function JobAttachmentService_Factory(t) { return new (t || JobAttachmentService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JobAttachmentService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobAttachmentService, factory: JobAttachmentService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobAttachmentService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-job-module-job-attachment-es2015.js.map
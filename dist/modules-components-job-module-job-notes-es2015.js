(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-components-job-module-job-notes"],{

/***/ "./src/app/business-components/job/job-note-list/job-note-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/business-components/job/job-note-list/job-note-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: JobNoteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobNoteListComponent", function() { return JobNoteListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services_job_job_notes_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../services/job/job-notes.service */ "./src/services/job/job-notes.service.ts");
/* harmony import */ var services_job_logs_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! services/job/logs.service */ "./src/services/job/logs.service.ts");














function JobNoteListComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Theire is no notes right now !");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_div_0_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r456); const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx_r455.open(_r453); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "create note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function JobNoteListComponent_div_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r462 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_div_1_tr_14_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r462); const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r461.openColapse(_r460); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_div_1_tr_14_Template_div_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r462); const note_r458 = ctx.$implicit; const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r463.removeNote(note_r458.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const note_r458 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r458.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", note_r458.note, " ");
} }
function JobNoteListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r465 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_div_1_Template_div_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r465); const ctx_r464 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r453 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx_r464.open(_r453); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "create new");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " title ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " create date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, JobNoteListComponent_div_1_tr_14_Template, 11, 2, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r452.notesData);
} }
function JobNoteListComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Candidate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_ng_template_4_Template_button_click_3_listener($event) { const d_r467 = ctx.dismiss; return d_r467("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function JobNoteListComponent_ng_template_4_Template_form_ngSubmit_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470); const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r469.onSubmit(ctx_r469.addNote); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "textarea", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobNoteListComponent_ng_template_4_Template_button_click_23_listener($event) { const c_r466 = ctx.close; return c_r466("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r454.addNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r454.addNote.invalid);
} }
class JobNoteListComponent {
    constructor(formBuilder, modalService, toster, _location, noteService, logs) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.toster = toster;
        this._location = _location;
        this.noteService = noteService;
        this.logs = logs;
        this.addNewNote = {};
    }
    ngOnInit() {
        this.displayNotes();
        this.addNote = this.formBuilder.group({
            title: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            note: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
    }
    /* -------------------------------------------------------------------------- */
    /*                           modal Inviteation start                          */
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
    displayNotes() {
        this.noteService.getAllNotes().subscribe(data => {
            console.log(data);
            console.log(this.notesData);
            this.notesData = data;
        });
    }
    /* -------------------------------------------------------------------------- */
    /*                           modal Inviteation end                            */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                      Submit TO modal Inviteation form                      */
    /* -------------------------------------------------------------------------- */
    onSubmit(addNote) {
        this.addNewNote = {
            title: addNote.value.title,
            note: addNote.value.note,
        };
        /* add logs */
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var date = mm + '-' + dd + '-' + yyyy;
        let logsObj = {
            full_name: "Mohamed Ahmed",
            username: "Mohamed Ahmed",
            type_user: "recruiter",
            description: `Note Added "${addNote.value.title}"`,
            profile: "",
            created: date,
            type_activity: "Add Note"
        };
        this.logs.addLogs(logsObj).subscribe();
        this.noteService.addNote(this.addNewNote).subscribe((data) => {
            console.log(data);
            this.toster.success("Note added successfully", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
            });
            this.displayNotes();
            addNote.reset();
            this.modalService.dismissAll();
        }, (err) => {
            this.toster.error("We Have Problem Please Try Again", "", {
                timeOut: 3000,
                positionClass: "toast-top-full-width",
                closeButton: true,
            });
            this.goback();
        });
    }
    goback() {
        this._location.back();
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
    // remove Notes
    removeNote(id) {
        console.log(id);
        /* add logs */
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        var date = mm + '-' + dd + '-' + yyyy;
        let noteName = this.notesData.find(x => x.value);
        let logsObj = {
            full_name: "Mohamed Ahmed",
            username: "Mohamed Ahmed",
            type_user: "recruiter",
            description: `Note deleted "${noteName.title}"`,
            profile: "",
            created: date,
            type_activity: "Delete Note"
        };
        this.logs.addLogs(logsObj).subscribe();
        this.noteService.deleteNote(id).subscribe(data => {
            console.log(data);
            this.toster.success("Note Removed Successfully", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
            });
            this.displayNotes();
        }, err => {
            this.toster.error("There is Error Please Try Again", '', {
                timeOut: 3000,
                positionClass: 'toast-top-full-width',
                closeButton: true
            });
        });
    }
}
JobNoteListComponent.ɵfac = function JobNoteListComponent_Factory(t) { return new (t || JobNoteListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_job_job_notes_service__WEBPACK_IMPORTED_MODULE_5__["JobNotesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](services_job_logs_service__WEBPACK_IMPORTED_MODULE_6__["LogsService"])); };
JobNoteListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobNoteListComponent, selectors: [["app-job-note-list"]], decls: 6, vars: 2, consts: [["class", "note-list_no-data", 4, "ngIf"], ["class", "note-list_with-data", 4, "ngIf"], [1, "card-content"], [1, "card-body"], ["note", ""], [1, "note-list_no-data"], [1, "note-list_no-data_icon"], [1, "fas", "fa-exclamation"], [1, "note-list_no-data_paragraph"], [1, "note-list_no-data_create-new"], [1, "btn", "btn-secondary", "btn-block", 3, "click"], [1, "note-list_with-data"], [1, "note-list_with-data_create-note", "container", 3, "click"], [1, "fas", "fa-plus-circle", "note-list_with-data_create-note_icon"], [1, "note-list_with-data_create-note_paragraph"], [1, "table", "note-list_with-data_table", "container"], ["id", "note.id", 4, "ngFor", "ngForOf"], ["id", "note.id"], ["type", "button", 1, "btn", "table", "note-list_with-data_table_delete-btn", 3, "click"], [1, "fas", "fa-ellipsis-v"], ["title", "Remove Notes", 1, "card", "card-body", "bg-danger", "table", "note-list_with-data_table_delete-btn_content", 2, "display", "none", 3, "click"], ["content", ""], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], ["id", "filter", 1, "mb-3"], [1, "modal-body"], [1, "row"], [1, "col-sm-12"], [3, "formGroup", "ngSubmit"], [1, "col-lg-12"], [1, "pf-title"], [1, "pf-field"], ["type", "text", "formControlName", "title", "id", "title", "autocomplete", "off", "name", "title"], ["type", "text", "formControlName", "note", "id", "note", "autocomplete", "off", "name", "note"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-secondary", "closeBtn", "btn-raised", 3, "click"], ["type", "submit", 1, "btn", "confirmBtn", "btn-raised", 3, "disabled"]], template: function JobNoteListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JobNoteListComponent_div_0_Template, 9, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, JobNoteListComponent_div_1_Template, 15, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JobNoteListComponent_ng_template_4_Template, 27, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesData.length == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.notesData.length > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".note-list_no-data[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n  padding-top: 2rem;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.note-list_no-data_icon[_ngcontent-%COMP%] {\n  font-size: 15rem;\n  color: #727B84;\n}\n\n.note-list_no-data_create-new[_ngcontent-%COMP%] {\n  width: 25%;\n}\n\n.note-list_with-data[_ngcontent-%COMP%] {\n  background-color: #f9f9f9;\n}\n\n.note-list_with-data_create-note[_ngcontent-%COMP%] {\n  cursor: pointer;\n  border-radius: 1px;\n  display: block;\n  box-shadow: 0px 1px 5px 0px #b5abab;\n  width: 100%;\n  margin: auto;\n  background-color: white;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 1% 1%;\n}\n\n.note-list_with-data_create-note_icon[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  color: #727B84;\n  font-size: 1.5rem;\n  margin-left: 10px;\n}\n\n.note-list_with-data_create-note_paragraph[_ngcontent-%COMP%] {\n  font-size: 1.5rem !important;\n  display: inline-block;\n  margin: 0 !important;\n  margin-left: 10px !important;\n  padding: 0;\n  color: #727B84;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #727b84;\n}\n\n.note-list_with-data_table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.note-list_with-data_table_delete-btn[_ngcontent-%COMP%] {\n  width: auto;\n  position: relative;\n}\n\n.note-list_with-data_table_delete-btn_content[_ngcontent-%COMP%] {\n  width: auto;\n  position: absolute;\n  top: 50%;\n  z-index: 2;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzaW5lc3MtY29tcG9uZW50cy9qb2Ivam9iLW5vdGUtbGlzdC9EOlxcemVpbi1pdFxcY3ZtZWV0aW5nLWhyLWNoYXQtYm90LWZyb250ZW5kXFxtYXN0ZXItaHItd2ViL3NyY1xcYXBwXFxidXNpbmVzcy1jb21wb25lbnRzXFxqb2JcXGpvYi1ub3RlLWxpc3RcXGpvYi1ub3RlLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvam9iL2pvYi1ub3RlLWxpc3Qvam9iLW5vdGUtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0FDQTFCOztBRENJO0VBQ0ksZ0JBQWdCO0VBQ2hCLGNBQWM7QUNFdEI7O0FEQUk7RUFDSSxVQUFVO0FDR2xCOztBREFBO0VBQ0kseUJBQXlCO0FDRzdCOztBREZJO0VBQ0ksZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsbUNBQW1DO0VBQ25DLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0FBYztBQ0t0Qjs7QURKUTtFQUNJLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsVUFBVTtFQUNWLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsaUJBQWlCO0FDTzdCOztBRExRO0VBQ0ksNEJBQTRCO0VBQzVCLHFCQUFxQjtFQUNyQixvQkFBb0I7RUFDcEIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixjQUFjO0FDUTFCOztBRExJO0VBQ0ksa0JBQWtCO0FDUTFCOztBRFRLO0VBR08sZ0NBQWdDO0FDVTVDOztBRGJLO0VBS1csWUFBWTtBQ1k1Qjs7QURUUTtFQUNJLFdBQVc7RUFDWCxrQkFBa0I7QUNZOUI7O0FEWFk7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsYUFBYTtBQ2M3QiIsImZpbGUiOiJzcmMvYXBwL2J1c2luZXNzLWNvbXBvbmVudHMvam9iL2pvYi1ub3RlLWxpc3Qvam9iLW5vdGUtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RlLWxpc3Rfbm8tZGF0YXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIHBhZGRpbmctdG9wOiAycmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAmX2ljb257XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXJlbTtcclxuICAgICAgICBjb2xvcjogIzcyN0I4NDtcclxuICAgIH1cclxuICAgICZfY3JlYXRlLW5ld3tcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgfVxyXG59XHJcbi5ub3RlLWxpc3Rfd2l0aC1kYXRhe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgICZfY3JlYXRlLW5vdGV7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggI2I1YWJhYjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDElIDElO1xyXG4gICAgICAgICZfaWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzI3Qjg0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfcGFyYWdyYXBoe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBjb2xvcjogIzcyN0I4NDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmX3RhYmxle1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0cntcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM3MjdiODQ7XHJcbiAgICAgICAgICAgIHRke1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICZfZGVsZXRlLWJ0bntcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgJl9jb250ZW50e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59IiwiLm5vdGUtbGlzdF9uby1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgcGFkZGluZy10b3A6IDJyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubm90ZS1saXN0X25vLWRhdGFfaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTVyZW07XG4gIGNvbG9yOiAjNzI3Qjg0O1xufVxuXG4ubm90ZS1saXN0X25vLWRhdGFfY3JlYXRlLW5ldyB7XG4gIHdpZHRoOiAyNSU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfY3JlYXRlLW5vdGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCAjYjVhYmFiO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMSUgMSU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX2NyZWF0ZS1ub3RlX2ljb24ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MjdCODQ7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfY3JlYXRlLW5vdGVfcGFyYWdyYXBoIHtcbiAgZm9udC1zaXplOiAxLjVyZW0gIWltcG9ydGFudDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogMDtcbiAgY29sb3I6ICM3MjdCODQ7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX3RhYmxlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubm90ZS1saXN0X3dpdGgtZGF0YV90YWJsZSB0ciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNzI3Yjg0O1xufVxuXG4ubm90ZS1saXN0X3dpdGgtZGF0YV90YWJsZSB0ciB0ZCB7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm5vdGUtbGlzdF93aXRoLWRhdGFfdGFibGVfZGVsZXRlLWJ0biB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5ub3RlLWxpc3Rfd2l0aC1kYXRhX3RhYmxlX2RlbGV0ZS1idG5fY29udGVudCB7XG4gIHdpZHRoOiBhdXRvO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICB6LWluZGV4OiAyO1xuICBkaXNwbGF5OiBub25lO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobNoteListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-job-note-list',
                templateUrl: './job-note-list.component.html',
                styleUrls: ['./job-note-list.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }, { type: _services_job_job_notes_service__WEBPACK_IMPORTED_MODULE_5__["JobNotesService"] }, { type: services_job_logs_service__WEBPACK_IMPORTED_MODULE_6__["LogsService"] }]; }, null); })();


/***/ }),

/***/ "./src/modules/components/job-module/job-notes.ts":
/*!********************************************************!*\
  !*** ./src/modules/components/job-module/job-notes.ts ***!
  \********************************************************/
/*! exports provided: jobNoteListModuel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobNoteListModuel", function() { return jobNoteListModuel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var routing_jobs_routing_job_notes_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! routing/jobs-routing/job-notes-routing */ "./src/routing/jobs-routing/job-notes-routing.ts");
/* harmony import */ var app_business_components_job_job_note_list_job_note_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/business-components/job/job-note-list/job-note-list.component */ "./src/app/business-components/job/job-note-list/job-note-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");









class jobNoteListModuel {
}
jobNoteListModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: jobNoteListModuel });
jobNoteListModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function jobNoteListModuel_Factory(t) { return new (t || jobNoteListModuel)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            routing_jobs_routing_job_notes_routing__WEBPACK_IMPORTED_MODULE_2__["jobNoteListRoutingModuel"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobNoteListModuel, { declarations: [app_business_components_job_job_note_list_job_note_list_component__WEBPACK_IMPORTED_MODULE_3__["JobNoteListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        routing_jobs_routing_job_notes_routing__WEBPACK_IMPORTED_MODULE_2__["jobNoteListRoutingModuel"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobNoteListModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [app_business_components_job_job_note_list_job_note_list_component__WEBPACK_IMPORTED_MODULE_3__["JobNoteListComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    routing_jobs_routing_job_notes_routing__WEBPACK_IMPORTED_MODULE_2__["jobNoteListRoutingModuel"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/routing/jobs-routing/job-notes-routing.ts":
/*!*******************************************************!*\
  !*** ./src/routing/jobs-routing/job-notes-routing.ts ***!
  \*******************************************************/
/*! exports provided: jobNoteListRoutingModuel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jobNoteListRoutingModuel", function() { return jobNoteListRoutingModuel; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var app_business_components_job_job_note_list_job_note_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/business-components/job/job-note-list/job-note-list.component */ "./src/app/business-components/job/job-note-list/job-note-list.component.ts");





const routes = [
    {
        path: "",
        component: app_business_components_job_job_note_list_job_note_list_component__WEBPACK_IMPORTED_MODULE_2__["JobNoteListComponent"],
    },
];
class jobNoteListRoutingModuel {
}
jobNoteListRoutingModuel.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: jobNoteListRoutingModuel });
jobNoteListRoutingModuel.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function jobNoteListRoutingModuel_Factory(t) { return new (t || jobNoteListRoutingModuel)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](jobNoteListRoutingModuel, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](jobNoteListRoutingModuel, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/services/job/job-notes.service.ts":
/*!***********************************************!*\
  !*** ./src/services/job/job-notes.service.ts ***!
  \***********************************************/
/*! exports provided: JobNotesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobNotesService", function() { return JobNotesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");





class JobNotesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseURl;
    }
    getAllNotes() {
        // Real End Point => tests/find/candidate
        return this.http.get(this.baseUrl + 'notes/');
    }
    addNote(noteObj) {
        // Real End Point => tests/find/candidate
        return this.http.post(this.baseUrl + 'notes/', noteObj);
    }
    deleteNote(id) {
        // Real End Point => tests/find/candidate
        return this.http.delete(this.baseUrl + 'notes/' + id);
    }
}
JobNotesService.ɵfac = function JobNotesService_Factory(t) { return new (t || JobNotesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
JobNotesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: JobNotesService, factory: JobNotesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JobNotesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-components-job-module-job-notes-es2015.js.map
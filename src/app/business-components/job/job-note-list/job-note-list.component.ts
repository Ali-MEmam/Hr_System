import { log } from 'util';
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { JobNotesService } from "../../../../services/job/job-notes.service";
import { LogsService } from "services/job/logs.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { JobDetailsService } from 'services/job/job-details.service';
import { UserService } from 'services/user-managment-services/user.service';
import Swal from "sweetalert2";
declare let swal: any;

@Component({
  selector: "app-job-note-list",
  templateUrl: "./job-note-list.component.html",
  styleUrls: ["./job-note-list.component.scss"],
})
export class JobNoteListComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  addNote: FormGroup;
  addNewNote = {};
  CurrentJobIdResevd;
  currentUserId;
  userName;
  noteDeleteTitle;
  noteEditForm: FormGroup;
  closeResult: string;
  rows = [];
  newJob;
  temp = [];
  resetRows = [];
  editId;
  notesData;
  noteDetails;
  currentJob;
  noteId;
  deleteNote;

  // Table Column Titles
  columns = [
    { prop: "title", name: "Title" },
    { prop: "note", name: "description" },
    { prop: "created", name: "Created Date" },
    // { prop: "action" },
    /* { prop: "Compatibilty of Matching" }, */
  ];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toster: ToastrService,
    private _location: Location,
    private noteService: JobNotesService,
    private logs: LogsService,
    private JobDetailsService: JobDetailsService,
    private UserService: UserService
  ) {
    this.JobDetailsService.currentJobId.subscribe(data => this.CurrentJobIdResevd = data);
  }

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.getUserId();
    // this.getUserName();
    this.displayNotes();
    this.addNote = this.formBuilder.group({
      title: ["", Validators.required],
      note: ["", Validators.required],
    });

    this.noteEditForm = this.formBuilder.group({
      title: ["", Validators.required],
      note: ["", Validators.required],
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                   Get JobId - RecuriterId - RecuriterName                  */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = window.sessionStorage.getItem("jobId");
  }

  getUserId() {
    this.currentUserId = window.sessionStorage.getItem("token");
  }

  // getUserName() {
  //   this.UserService.getUsers().subscribe(user => {
  //     let userName = user.filter(user => user.id == this.currentUserId);
  //     this.userName = userName[0].username;
  //   })
  // }

  /* -------------------------------------------------------------------------- */
  /*                              Display All Notes                             */
  /* -------------------------------------------------------------------------- */

  displayNotes() {
    this.noteService.getAllNotes(this.currentJob).subscribe(
      (data) => {
        this.notesData = data;
        this.rows = data;
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["title"] = this.rows[i]["title"];
          this.rows[i]["created"] = this.rows[i]["created"].slice(0, 10);
          this.rows[i]["note"] = this.rows[i]["note"];
        }
        this.resetRows = this.rows;
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                      Submit TO modal Inviteation form                      */
  /* -------------------------------------------------------------------------- */

  onSubmit(addNote) {
    this.addNewNote = {
      title: addNote.value.title,
      note: addNote.value.note,
      type:'job'
    };
    this.noteService.addNote(this.currentJob, this.addNewNote).subscribe(
      (data) => {
        this.rows = data;
        this.resetRows = this.rows;

        this.toster.success("Note added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.displayNotes();
        addNote.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.goback();
      }
    );
  }

  goback() {
    this._location.back();
  }

  openColapse(content) {
    //  let displayStyle =content.style.display
    if (content.style.display === "none") {
      content.style.display = "inline-block";
    } else {
      content.style.display = "none";
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              View Note Details                             */
  /* -------------------------------------------------------------------------- */

  ViewNotesValue(selectedRow) {
    this.noteDetails = selectedRow;
  }

  /* -------------------------------------------------------------------------- */
  /*                                Remove  Note                                */
  /* -------------------------------------------------------------------------- */

  removeNote(row) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        Swal.fire("Deleted!", "note has been deleted.", "success");

        this.noteService.deleteNote(row._id).subscribe(
          (data) => {
            this.displayNotes();
          },
          (err) => {
            this.toster.error("There is Error Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
          }
        );
      }
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Edit  Note                                 */
  /* -------------------------------------------------------------------------- */

  editNotesValue(selectedRow) {
    this.noteId = selectedRow._id;
    this.noteEditForm.patchValue({
      title: selectedRow.title,
      note: selectedRow.note,
    });
  }

  onSubmitEdit(form) {
    var objNoteEdit = {
      // id: this.noteId,
      title: form.value.title,
      note: form.value.note,
    };

    this.noteService.editNote(this.noteId, objNoteEdit).subscribe(
      (data) => {
        this.rows = data;
        this.resetRows = this.rows;
        this.notesData = data;

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.displayNotes();
        this.noteEditForm.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error(err.message, "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                                Fillter Notes                               */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["title"].toUpperCase().includes(val.toUpperCase()) || e["title"].toLowerCase().includes(val.toLowerCase());
    });
    // update the rows
    this.rows = temp;
    if (val == "") {
      this.rows = this.resetRows;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */

  open(content) {
    this.modalService.open(content, { size: "md" }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  // This function is used in open
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }
}

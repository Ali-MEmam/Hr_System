import { log } from 'util';
import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { JobAttachmentService } from "services/attachments/job-attachment.service";
import Swal from "sweetalert2";
import { LogsService } from "services/job/logs.service";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { UserService } from 'services/user-managment-services/user.service';
import { JobListService } from "../../../../services/job/jobs-list.service";
import { JobDetailsService } from 'services/job/job-details.service';

declare let swal: any;

@Component({
  selector: "app-job-attachments",
  templateUrl: "./job-attachments.component.html",
  styleUrls: ["./job-attachments.component.scss"],
})

export class JobAttachmentsComponent implements OnInit {
  @ViewChild(DatatableComponent) table: DatatableComponent;
  fileImage;
  uploadedFilesType;
  currentUserId;
  currentJob;
  userName;
  CurrentJobIdResevd;
  attachmentList = [];
  fileToUpload: File = null;
  temp = [];
  closeResult: string;
  fileSize;
  attachDeleteName;
  files: any[] = [];
  public fileString;
  fileSrc: string | ArrayBuffer;
  testing;
  rows = [];
  resetRows = [];
  columns = [{ prop: "type", name: "Type" },
  // { prop: "Title", name: "title" },
  { prop: "size", name: "Size" },
  { prop: "upload_date", name: "Date" }];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toster: ToastrService,
    private _location: Location,
    private attachmentService: JobAttachmentService,
    private logs: LogsService,
    private UserService: UserService,
    private JobListService: JobListService,
    private JobDetailsService: JobDetailsService
  ) {
    this.JobDetailsService.currentJobId.subscribe(data => this.CurrentJobIdResevd = data);
  }

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.getAllAttachments();
    this.getUserId();
    // this.getUserName();
    console.log(this.CurrentJobIdResevd);
  }

  /* -------------------------------------------------------------------------- */
  /*                   Get JobId - RecuriterId - RecuriterName                  */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = window.sessionStorage.getItem("jobId");
  }

  getUserId() {
    this.currentUserId = window.sessionStorage.getItem("token");
    console.log("user_id = " + this.currentUserId);
  }

  // getUserName() {
  //   this.UserService.getUsers().subscribe(user => {
  //     let userName = user.filter(user => user.id == this.currentUserId);
  //     this.userName = userName[0].username;
  //     // console.log(userName[0]);
  //     console.log("user_name = " + this.userName);
  //   })
  // }

  /* -------------------------------------------------------------------------- */
  /*                               Get Attachments                              */
  /* -------------------------------------------------------------------------- */

  getAllAttachments() {
    this.attachmentService.getAttachment(this.currentJob).subscribe((data) => {
      console.log(data);
      this.attachmentList = data;
      this.rows = data;
      for (let i = 0; i < this.rows.length; i++) {
        if (this.rows[i]["type"] == "image/png") {
          this.rows[i]["type"] = ['<div class="attachment-icon-wrapper"><img src="../../../../assets/img/attachment-icons/jpg-image-file-format.svg" alt="" class="attachment-icon"></div>'] + this.rows[i]["title"];
        } else if (this.rows[i]["type"] == "application/pdf") {
          this.rows[i]["type"] = ['<div class="attachment-icon-wrapper"><img src="../../../../assets/img/attachment-icons/pdf-file-format-symbol.svg" alt="" class="attachment-icon"></div>'] + this.rows[i]["title"];
        } else if (this.rows[i]["type"] == "text/plain") {
          this.rows[i]["type"] = ['<div class="attachment-icon-wrapper"><img src="../../../../assets/img/attachment-icons/doc-file-format-symbol.svg" alt="" class="attachment-icon"></div>'] + this.rows[i]["title"];
        } else {
          this.rows[i]["type"] = ['<div class="attachment-icon-wrapper"><img src="../../../../assets/img/attachment-icons/doc-file-format-symbol.svg" alt="" class="attachment-icon"></div>'] + this.rows[i]["title"];
        }
        // this.rows[i]["title"] = this.rows[i]["title"];
        this.rows[i]["size"] = this.rows[i]["size"];
        this.rows[i]["upload_date"] = this.rows[i]["upload_date"].slice(0, 10);
        // this.rows[i]["formate"] = this.rows[i]["formate"];
      }
      this.resetRows = this.rows;
      console.log(this.attachmentList);
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                               Upload Attachment                            */
  /* -------------------------------------------------------------------------- */

  uploadFile(file,base64) {
    console.log(file);
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var date = mm + "-" + dd + "-" + yyyy;
    let createdDate = new Date();
    let createdHour = createdDate.getHours();
    let CreatedMin = createdDate.getUTCMinutes();
    let createdTime = createdHour + ":" + CreatedMin;

    this.fileToUpload = file.item(0);
    let fileObj = {
      file: base64,
      title: this.fileToUpload.name,
      size: this.formatBytes(this.fileToUpload.size),
      type: this.fileToUpload.type,
    };
    console.log(fileObj);

    this.attachmentService.addAttachment(this.currentJob, fileObj).subscribe((data) => {
      this.getAllAttachments();
      console.log(data);

      // let logsObj = {
      //   full_name: this.userName,
      //   username: this.userName,
      //   type_user: "recruiter",
      //   description: "Added Attachment " + data.title,
      //   time: createdTime,
      //   created: date,
      //   type_activity: "Create Attachment",
      //   job_id: this.currentJob,
      //   user_id: this.currentUserId,
      //   attachment_id: data.id
      // };
      // this.logs.addLogs(logsObj).subscribe();
      // console.log(logsObj);
    });
  }

  formatBytes(bytes, decimals = 2) {
    if (bytes === 0) {
      return "0 Bytes";
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  /****************** Convert Files list to normal array list *******************/
  prepareFilesList(files: Array<any>) {
    console.log(this.files);

    // this.prepareFilesList(files);
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
      console.log(files);
      console.log(files[i]);

      let mimeType = files[i].type;
      if (mimeType.match(/image||text\/*/) == null) {
        return;
      }

      /****************** Browsing files and convert it to Base64 *******************/

      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (event) => {
        this.fileSrc = reader.result;
        this.testing = this.fileSrc;
        console.log(files[i].name);
        console.log(files[i].size);
        console.log(files[i].type);
        this.uploadedFilesType = files[i].type
        console.log(this.testing);
        this.uploadFile(files,this.testing);
      };
    }
  }

  /* -------------------------------------------------------------------------- */
  /*                              Delete Attachment                             */
  /* -------------------------------------------------------------------------- */

  removeAttachment(row) {
    console.log(row)
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();
    var date = mm + "-" + dd + "-" + yyyy;
    let createdDate = new Date();
    let createdHour = createdDate.getHours();
    let CreatedMin = createdDate.getUTCMinutes();
    let createdTime = createdHour + ":" + CreatedMin;

    // this.attachmentService.getAttachment(this.currentJob).subscribe(data => {
    // let deleteAttach = data.filter(data => data.id == id);
    // console.log(deleteAttach);
    // this.attachDeleteName = deleteAttach[0].title;
    // let logsObj = {
    //   full_name: this.userName,
    //   username: this.userName,
    //   type_user: "recruiter",
    //   description: "Delete Attachment " + this.attachDeleteName,
    //   time: createdTime,
    //   created: date,
    //   type_activity: "Delete Attachment",
    //   job_id: this.currentJob,
    //   user_id: this.currentUserId,
    //   attachment_id: id
    // };
    // this.logs.addLogs(logsObj).subscribe();
    // console.log(logsObj);
    // })

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
        Swal.fire("Deleted!", "Job has been deleted.", "success");
        this.attachmentService.deleteAttachment(row._id).subscribe(
          (data) => {
            this.getAllAttachments();
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
  /*                            Fillter Attachments                             */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["title"].toUpperCase().includes(val.toUpperCase()) || e["title"].toLowerCase().includes(val.toLowerCase());
    });
    console.log(temp);
    console.log(this.rows);

    // update the rows
    this.rows = temp;
    if (val == "") {
      this.rows = this.resetRows;
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                             Modal Functions start                          */
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

  openColapse(content) {
    console.log(content);
    //  let displayStyle =content.style.display
    if (content.style.display === "none") {
      content.style.display = "inline-block";
    } else {
      content.style.display = "none";
    }
  }
}






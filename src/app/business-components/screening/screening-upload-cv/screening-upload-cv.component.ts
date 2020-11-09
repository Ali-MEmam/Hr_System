import { log } from 'util';
import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { ChangeDetectionStrategy } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UploadCvService } from "../../../../services/screening/upload-cv.service";
import { ToastrService } from "ngx-toastr";
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: "app-screening-upload-cv",
  templateUrl: "./screening-upload-cv.component.html",
  styleUrls: ["./screening-upload-cv.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,  
})
export class ScreeningUploadCvComponent implements OnInit {

  /****************** variables *******************/

  sendFileArr = [];
  uploadedData: boolean;
  progressValue = 0;
  files: any[] = [];
  public fileString;
  fileSrc: string | ArrayBuffer;
  testing;
  filesData = [];
  queLength = 0;
  showFiles = false;
  rows = [];
  resetRows = [];
  columns = [
    { prop: "file_name", name: "fileName" },
    // { prop: "file_size", name: "fileSize" },
  ];


  ngOnInit(): void {
    this.getAllFiles()
    // this.uploadCvService.getFiles().subscribe(data => {
    //   this.filesData = data
    //   console.log(this.filesData);
    // })
    // console.log(this.filesData);
    // this.swichingFileShow();
  }

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private uploadCvService: UploadCvService,
    private toster: ToastrService
  ) { }

  @ViewChild("fileDropRef", { static: false }) fileDropEl: ElementRef;



  /****************** on drag and drop files *******************/
  onFileDropped($event) {
    console.log($event);
    this.progressValue = 0;
    this.prepareFilesList($event);
    console.log(this.files);
  }

  /****************** remove one file from being uploaded *******************/
  // deleteFile(index: number) {
  //   this.files.splice(index, 1);
  //   console.log(this.files);
  // }

  /****************** Browsing files and convert it to Base64 *******************/
  fileBrowseHandler(event, files) {
    this.progressValue = 0;
    this.prepareFilesList(files);
    console.log(this.files);
  }

  /****************** Convert Files list to normal array list *******************/
  prepareFilesList(files: Array<any>) {
    console.log(this.files);

    this.progressValue = 0;
    // this.prepareFilesList(files);
    for (let i = 0; i < files.length; i++) {
      this.files.push(files[i]);
      console.log(files);
      console.log(files[i]);
      let mimeType = files[i].type;
      if (mimeType.match(/image||text\/*/) == null) {
        return;
      }

      let reader = new FileReader();
      reader.readAsDataURL(files[i]);
      reader.onload = (event) => {
        this.fileSrc = reader.result;
        this.testing = this.fileSrc;
        console.log(files[i].name);
        console.log(files[i].size);

        // console.log(this.testing)
        this.prepareObjectWhenSendData(
          this.testing,
          files[i].name,
          files[i].size
        );
      };
    }
  }

  /****************** format bytes *******************/
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


  /****************** prepeare objects to send in db *******************/
  prepareObjectWhenSendData(fileFormat, fileName, fileSize) {
    // console.log(event.target.files[0]);
    let sendFileObj = {
      file_format: fileFormat,
      file_name: fileName,
      file_size: fileSize,
    };
    this.sendFileArr.push(sendFileObj);
    console.log(this.sendFileArr);
    console.log(sendFileObj);
    console.log(this.files);
    this.uploadAll();
  }


  /****************** upload all files *******************/
  uploadAll() {
    for (let i = 0; i < this.sendFileArr.length; i++) {
      console.log(this.sendFileArr);
      const filesObj = {
        file_name: this.sendFileArr[i].file_name,
        file_format: this.sendFileArr[i].file_format, //for base64
        file_size: this.sendFileArr[i].file_size,
      };
      console.log(filesObj);
      this.uploadCvService.addFiles(filesObj).subscribe(
        (data) => {
          console.log("adding success");
          this.uploadedData = true;
          this.toster.success("File Added Successfully", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });
          this.getAllFiles();
        },
        (error) => {
          this.toster.error("We Have Problem Please Try Again", "", {
            timeOut: 3000,
            positionClass: "toast-top-full-width",
            closeButton: true,
          });  
          this.uploadedData = false;
        },
        () => {
          console.log(this.uploadedData);

          console.log(this.progressValue);
        }
      );
      this.progressIncrease();
    }
  }

  /****************** Progressbar in upload *******************/

  progressIncrease() {
    while (this.progressValue < 100) {
      this.progressValue += 5;
      // console.log(this.progressValue);
    }
    this.files = [];
  }

  /****************** get all files *******************/
  getAllFiles() {
    this.uploadCvService.getFiles().subscribe(
      (data) => {
        console.log(data);
        console.log(this.filesData);
        this.filesData = data;
        this.rows = data;
        console.log(this.rows);
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["file_name"] = this.rows[i]["file_name"];
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
    // this.uploadCvService.getFiles().subscribe((response) => {
    //   // console.log(response);
    //   this.filesData = response;
    //   this.rows = this.filesData;
    //   for (let i = 0; i < this.rows.length; i++) {
    //     this.rows[i]["file_name"] = this.rows[i]["file_name"];
    //     // this.rows[i]["file_size"] = this.rows[i]["file_size"];
    //   }
    //   this.resetRows = this.rows;
    //   console.log("get successfully");
    //   console.log(this.filesData);
    //   console.log("length = " + this.filesData.length);
    // });
  }

  imgURL: any;
  pdffile;
  closeResult: string;
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
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  uploadedcv(row) {
    this.imgURL="";
    this.pdffile="";
    var mimeType = row.file_format;
    if (mimeType.match(/image\/*/) == null) {;
      this.pdffile = row.file_format;
    }else{
      this.imgURL = row.file_format;
    }
  }
  /****************** delete one file from db *******************/

  deleteFileFromDb(id) {
    // console.log(event);
    // this.uploadCvService.deletFiles(id).subscribe((data) => {
    //   // this.filesData = data;
    //   console.log(data);
    //   console.log(id);
    //   // this.getAllFiles();
    // });
    // this.getAllFiles();
    this.uploadCvService.deletFile(id).subscribe(
      (data) => {
        console.log(data);

        this.toster.success("File Removed Successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.getAllFiles();
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

  /****************** delete all files *******************/

  // deleteAll() {
  // this.files = [];
  // this.progressValue = 0;
  // this.getAllFiles();
  // for (let i = 0; i < this.filesData.length; i++) {
  //   console.log(this.filesData[i].id);
  //   this.uploadCvService.deletFiles(this.filesData[i].id).subscribe(data => {
  //     console.log(data);
  //     console.log("deleted successfully");
  //   },erroe=>{
  //     console.log("error happend in delete");
  //   })
  //   console.log(this.filesData);
  // }
  // console.log("ondelete get data" + this.filesData);

  // this.getAllFiles();
  // }

  swichingFileShow() {
    if (this.filesData.length < 0) {
      this.showFiles = false;
    } else {
      this.showFiles = true;
    }
  }
}

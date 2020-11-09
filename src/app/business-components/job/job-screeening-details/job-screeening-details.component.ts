import { Component, OnInit } from '@angular/core';
import{JobScreeningDetailsService} from '../../../../services/job/job-screening-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-screeening-details',
  templateUrl: './job-screeening-details.component.html',
  styleUrls: ['./job-screeening-details.component.scss']
})
export class JobScreeeningDetailsComponent implements OnInit {

  constructor(
    
    private toster: ToastrService,
    private jobScreeningDetailsService:JobScreeningDetailsService,
    ) { }

  ngOnInit(): void {
    this.displayJobScreening();
    this.CurrentSelectedJob();
    }

  currentJob;
  CurrentSelectedJob() {
    this.currentJob = JSON.parse(window.sessionStorage.getItem("jobId"))
  }
    /* -------------------------------------------------------------------------- */
  /*                              Display All job screening                      */
  /* -------------------------------------------------------------------------- */
  jobScreeningDetails;
  cvsArray =[]
  selectedCvsArray=[]
  screeningId=1;
  displayJobScreening() {
    this.jobScreeningDetailsService.getjobDetails(this.screeningId).subscribe(data => {
      console.log(data);
      
      this.jobScreeningDetails=data
      this.cvsArray=this.jobScreeningDetails.uploaded_cvs
      this.selectedCvsArray =this.jobScreeningDetails.selected_cvs
      console.log(this.cvsArray);
      console.log(this.cvsArray[1].cv_name);
    }
    )
  }
  
  openColapse(content){
    console.log(content);
    //  let displayStyle =content.style.display
    if(content.style.display ==='none'){
      content.style.display = 'inline-block'
    } else{
      content.style.display = 'none'
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
//  // remove Notes
//  removeJobScreening(id) {
//   console.log(id);
//   this.jobScreeningService.deleteJobScreening(id).subscribe(data => {
//     console.log(data);
    
//     this.toster.success("Note Removed Successfully", '', {
//       timeOut: 3000,
//       positionClass: 'toast-top-full-width',
//       closeButton: true
//     })
//     this.displayJobScreening()
//   }, err => {
//     this.toster.error("There is Error Please Try Again", '', {
//       timeOut: 3000,
//       positionClass: 'toast-top-full-width',
//       closeButton: true
//     })
//   })

// }

}

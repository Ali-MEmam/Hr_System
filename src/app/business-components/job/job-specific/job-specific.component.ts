import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobListService } from 'services/job/jobs-list.service';
import { JobDetailsService } from "../../../../services/job/job-details.service";

@Component({
  selector: 'app-job-specific',
  templateUrl: './job-specific.component.html',
  styleUrls: ['./job-specific.component.scss']
})

export class JobSpecificComponent implements OnInit {
  id;
  CurrentJobIdResevd;
  jobDetails;
  jobName;
  currentJob;

  constructor(private router: Router,
    private jobListService: JobListService,
    private jobService: JobDetailsService,
  ) {
    this.id = this.jobListService.id;
    this.jobService.currentJobId.subscribe(data => this.CurrentJobIdResevd = data);
    this.jobName;
  }

  ngOnInit(): void {
    this.CurrentSelectedJob();
    this.jobService.getjobDetails(this.currentJob).subscribe((response) => {
      this.jobName = response.name;
    });
    this.displayJobDetails();
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Get JobId                                 */
  /* -------------------------------------------------------------------------- */

  CurrentSelectedJob() {
    this.currentJob = window.sessionStorage.getItem("jobId");
  }
  /* -------------------------------------------------------------------------- */
  /*                             Display Job Details                            */
  /* -------------------------------------------------------------------------- */

  displayJobDetails() {
    this.jobService.getjobDetails(this.CurrentJobIdResevd).subscribe((response) => {
      this.jobDetails = response;
    }, (error) => {
    });
  }
}

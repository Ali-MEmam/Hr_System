import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from 'services/user-managment-services/profile.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import Swal from "sweetalert2";
import { UserService } from '../../../../../services/user-managment-services/user.service';

declare let swal: any;

@Component({
  selector: 'app-list-profils',
  templateUrl: './list-profils.component.html',
  styleUrls: ['./list-profils.component.scss']
})
export class ListProfilsComponent implements OnInit {
  rows = [];
  temp = [];
  resetRows = [];
  columns = [
    { prop: "title", name: "Profile Title" },
    { prop: "description", name: "Description" },
  ];
  profileData;
  closeResult: string;
  profileDetails;

  @ViewChild(DatatableComponent) table: DatatableComponent;

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(public translate: TranslateService,
    private profileService: ProfileService,
    private route: Router,
    private toster: ToastrService,
    private modalService: NgbModal,
    private UserService: UserService,
  ) {
  }

  /* -------------------------------------------------------------------------- */
  /*                              NgInit LifeCycle                              */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.displayProfiles()
  }

  /* -------------------------------------------------------------------------- */
  /*                          Navigate TO Another Pages                         */
  /* -------------------------------------------------------------------------- */



  /* -------------------------------------------------------------------------- */
  /*                                 Delete User                                */
  /* -------------------------------------------------------------------------- */
  numberUsers;
  deleteProfile(row) {
    console.log(row._id)
    this.UserService.getMembers().subscribe(data => {
      let user = data.filter(user => user.profile['profile_id'] == row._id)
      console.log(user)
      console.log(user.length)
      this.numberUsers = user.length;
    })


    // Swal.fire({
    //   title: "Are you sure?",
    //   text: "You won't be able to revert this!",
    //   icon: "warning",
    //   showCancelButton: true,
    //   confirmButtonColor: "#3085d6",
    //   cancelButtonColor: "#d33",
    //   confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //   if (result.value) {
    //     Swal.fire("Deleted!", "Member has been deleted.", "success");

    //     this.profileService.deleteProfile(row._id).subscribe(data => {
    //       this.toster.success("Profile Deleted", '', {
    //         timeOut: 3000,
    //         positionClass: 'toast-top-full-width',
    //         closeButton: true
    //       })
    //       this.displayProfiles();

    //     }, err => {
    //       this.toster.error("Wrong Move", '', {
    //         timeOut: 3000,
    //         positionClass: 'toast-top-full-width',
    //         closeButton: true
    //       })
    //     })
    //   }
    // });
  }

  /* -------------------------------------------------------------------------- */
  /*                              display Profiles                              */
  /* -------------------------------------------------------------------------- */

  displayProfiles() {
    this.profileService.getProfiles().subscribe(data => {
      this.profileData = data;
      this.rows = data;
      console.log(this.rows);
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i]["title"] = this.rows[i]["title"];
        this.rows[i]["description"] = this.rows[i]["description"];
      }
      this.resetRows = this.rows;
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Profile Details                           */
  /* -------------------------------------------------------------------------- */

  showProfileDetails(selectedRow) {
    this.profileDetails = selectedRow;
    this.profileDetails.roles = this.profileDetails.roles.filter(role => role != false);
    console.log(this.profileDetails)
  }

  /* -------------------------------------------------------------------------- */
  /*                          display Edit Profile                              */
  /* -------------------------------------------------------------------------- */

  EditJobVal(row) {
    console.log(row);
    sessionStorage.setItem('profileId', row.id);
  }

  /* -------------------------------------------------------------------------- */
  /*                              filter Profiles                               */
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
  /*                           Modal Functions start                          */
  /* -------------------------------------------------------------------------- */
  public openField(event: any, row: any, firstChild: any , modaltitle): void {
    event.stopPropagation();
    firstChild && firstChild.parentElement && firstChild.parentElement.parentElement &&
      firstChild.parentElement.parentElement.blur();
    // open delete modal
    this.modalService.open(modaltitle);
}
  open(content) {
    content && content.parentElement && content.parentElement.parentElement &&
    content.parentElement.parentElement.blur();

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

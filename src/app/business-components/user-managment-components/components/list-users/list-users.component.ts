import { log } from 'util';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { TranslateService } from '@ngx-translate/core';
import { ProfileService } from 'services/user-managment-services/profile.service';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from '../../../../../services/user-managment-services/user.service';
import Swal from "sweetalert2";
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import { data } from 'app/shared/data/smart-data-table';
import { ImageService } from 'services/image/image.service';
import { DomSanitizer } from '@angular/platform-browser';

declare let swal: any;

@Component({
    selector: 'app-list-users',
    templateUrl: './list-users.component.html',
    styleUrls: ['./list-users.component.scss',
    ]
})

export class ListUsersComponent implements OnInit {
    rows = [];
    temp = [];
    resetRows = [];
    columns = [
        { prop: "image", name: '' },
        { prop: "Name" },
        { prop: "Profile" },
        { prop: "status" },
        { prop: "Last Active Date" },
        { prop: "Created Date" },
    ];
    profileData;
    closeResult: string;
    profileDetails;
    inviteMember: FormGroup;
    profiles;
    inviteMemberNew;
    @ViewChild(DatatableComponent) table: DatatableComponent;

    /* -------------------------------------------------------------------------- */
    /*                                 Constructor                                */
    /* -------------------------------------------------------------------------- */

    constructor(public translate: TranslateService,
        private profileService: ProfileService,
        private UserService: UserService,
        private route: Router,
        private toster: ToastrService,
        private modalService: NgbModal,
        private _location: Location,
        private formBuilder: FormBuilder,
        private ImageService: ImageService,
        private domSanitizer: DomSanitizer

    ) {
    }

    /* -------------------------------------------------------------------------- */
    /*                              NgInit LifeCycle                              */
    /* -------------------------------------------------------------------------- */

    ngOnInit(): void {
        this.displayProfiles()
        this.inviteMember = this.formBuilder.group({
            email: ["", Validators.required],
            profile: ["", Validators.required],
        });
        this.profileService.getProfiles().subscribe(profiles => {
            this.profiles = profiles
        })
    }


    /* -------------------------------------------------------------------------- */
    /*                              display Profiles                              */
    /* -------------------------------------------------------------------------- */
    base64Image;
    safeImage;
    photoURL(imageUrl) {
        console.log(this.domSanitizer.bypassSecurityTrustResourceUrl(imageUrl))
        return this.domSanitizer.bypassSecurityTrustUrl(imageUrl);
    }
    displayProfiles() {
        this.UserService.getMembers().subscribe(data => {
            console.log(data)
            this.profileData = data;
            this.rows = this.profileData;
            console.log(this.rows);

            for (let i = 0; i < this.rows.length; i++) {
                this.base64Image = this.domSanitizer.bypassSecurityTrustUrl(this.rows[i]["image"]);
                this.safeImage = this.base64Image.changingThisBreaksApplicationSecurity;
                if (this.rows[i]["image"] != null) {
                    this.rows[i]["image"] = '<img src=' + this.safeImage + ' alt="" class="member-image">'
                } else if (this.rows[i]["image"] == null) {
                    this.rows[i]["image"] = '<img src="../../../../../assets/img/user-placeholder.png" alt="" class="member-image">'
                }
                this.rows[i]["Name"] = this.rows[i]["username"];
                this.rows[i]["Profile"] = this.rows[i].profile["profile_title"];
                // this.rows[i]["status"] = this.rows[i]["status"];
                if (this.rows[i]["status"] == "pending") {
                    this.rows[i]["status"] = ['<div class="member-label member-pending">'] + this.rows[i]["status"] + ["</div>"];
                } else if (this.rows[i]["status"] == "activate") {
                    this.rows[i]["status"] = ['<div class="member-label member-active">'] + this.rows[i]["status"] + ["</div>"];
                } else if (this.rows[i]["status"] == "blocked") {
                    this.rows[i]["status"] = ['<div class="member-label member-blocked">'] + this.rows[i]["status"] + ["</div>"];
                }
                if (this.rows[i]["last_activate_date"] != null) {
                    this.rows[i]["Last Active Date"] = this.rows[i]["last_activate_date"].slice(0, 10);
                } else {
                    this.rows[i]["Last Active Date"] = "Not Activate";
                }

                this.rows[i]["Created Date"] = this.rows[i]["created"].slice(0, 10);
            }
            this.resetRows = this.rows;
        })
    }

    /* -------------------------------------------------------------------------- */
    /*                                Invite user                                 */
    /* -------------------------------------------------------------------------- */

    onSubmitinviteMember(form) {
        console.log(form.value);

        let profileId = (this.profiles.find(data => {
            return data.title === this.inviteMember.value.profile
        }))._id
        console.log(profileId);

        let inviteObj = {
            "email": form.value.email,
            "profile_title": form.value.profile,
            "profile_id": profileId
        };

        console.log(inviteObj);
        this.UserService.inviteMember(inviteObj).subscribe(data => {
            console.log(data);
            this.toster.success("User Invite successfully", "", {
                timeOut: 3000,
                positionClass: "toast-top-full-width",
                closeButton: true,
            });
            form.reset();
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

    /* -------------------------------------------------------------------------- */
    /*                            display users Details                           */
    /* -------------------------------------------------------------------------- */

    showProfileDetails(selectedRow) {
        this.profileDetails = selectedRow;
        console.log(this.profileDetails)
    }

    /* -------------------------------------------------------------------------- */
    /*                            display Edit users                              */
    /* -------------------------------------------------------------------------- */

    EditJobVal(row) {
        console.log(row);
        sessionStorage.setItem('profileId', row.id);
    }

    /* -------------------------------------------------------------------------- */
    /*                                 Delete User                                */
    /* -------------------------------------------------------------------------- */

    deleteMembeer(row) {
        console.log(row._id);
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
                Swal.fire("Deleted!", "Member has been deleted.", "success");
                this.UserService.deleteMember(row._id).subscribe(data => {
                    console.log(data);
                    this.ImageService.deleteImage(row._id).subscribe(image => {
                        console.log(image);
                    })
                    this.displayProfiles();
                }, err => {
                    this.toster.error("Wrong Move", '', {
                        timeOut: 3000,
                        positionClass: 'toast-top-full-width',
                        closeButton: true
                    })
                })
            }
        });
    }

    /* -------------------------------------------------------------------------- */
    /*                                 filter users                               */
    /* -------------------------------------------------------------------------- */

    updateFilter(event) {
        const val = event.target.value;
        console.log(val);

        this.rows = this.resetRows;
        // filter our data
        let temp = this.rows.filter(function (e) {
            return e["Profile Name"].toUpperCase().includes(val.toUpperCase()) || e["Profile Name"].toLowerCase().includes(val.toLowerCase());
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
        this.modalService.open(content, { size: "sm" }).result.then(
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

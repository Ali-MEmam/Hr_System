import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { ProfileService } from 'services/user-managment-services/profile.service';
import { RoleService } from 'services/user-managment-services/role.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from "@angular/common";
import { ToastrService } from 'ngx-toastr';
import * as _ from "lodash";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  newProfile;
  currentProfile;
  profileEdit;
  rolesData = [];
  isSelected = "type"
  isLoading = false;
  rolesArr = [
    { name: "Create Department", value: "Create Department", check: false, group: "departments" },
    { name: "Delete Department", value: "Delete Department", check: false, group: "departments" },
    { name: "Edit Department", value: "Edit Department", check: false, group: "departments" },
    { name: "View Details", value: "View Details", check: false, group: "departments" },
    { name: "Add Attachment", value: "Add Attachment", check: false, group: "attachments" },
    { name: "Delete Attachment", value: "Delete Attachment", check: false, group: "attachments" },
    { name: "Create Note", value: "Create Note", check: false, group: "notes" },
    { name: "Delete Note", value: "Delete Note", check: false, group: "notes" },
    { name: "Edit Note", value: "Edit Note", check: false, group: "notes" },
    { name: "View Notes", value: "View Notes", check: false, group: "notes" },
    { name: "Create Criteria", value: "Create Criteria", check: false, group: "criteria" },
    { name: "Edit Note", value: "Edit Note", check: false, group: "criteria" },
    { name: "View Criteria", value: "View Criteria", check: false, group: "criteria" },
    { name: "View Screening", value: "View Screening", check: false, group: "screening" },
    { name: "View Tasks", value: "View Tasks", check: false, group: "tasks" }
  ];
  selectedRolesNames = [];
  allRoles = [];
  recieveRole = [];

  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  editProfileForm: FormGroup;
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private roleService: RoleService,
    private profileService: ProfileService,
    private route: ActivatedRoute,
    private _location: Location,
    private toster: ToastrService
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                          Ng OnInit LifeCycle hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit() {


    this.createFormInputs();

    this.profileService.getProfileById(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.editProfileForm.patchValue({
        title: data.title,
        description: data.description,
      })
      this.rolesData = data.roles;
      for (let role of this.rolesData) {
        for (let i in this.rolesArr) {
          if (this.rolesArr[i].name == role) {
            this.rolesArr[i].check = true;
            this.recieveRole.push(role);
          }
        }
      }
      console.log(this.rolesData);
      console.log(this.rolesArr);
      console.log(this.rolesArr.map(role => role.check))
      this.createRoles(this.rolesArr);
    }, err => {
      this.toster.error("We Have Problem Please Try Again", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
      this.goback()
    })

  }

  createFormInputs() {
    this.editProfileForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'roles': this.createRoles(this.rolesArr)
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                            Add Profile  Roles                              */
  /* -------------------------------------------------------------------------- */


  createRoles(rolesInputs) {
    const arr = rolesInputs.map(role => {
      return new FormControl(role.check);
    });
    return new FormArray(arr);
  }


  getSelectedRoles(role) {
    // this.selectedRolesNames = _.map(
    //   this.editProfileForm.controls.roles["controls"],
    //   (role, i) => {
    //     return role.value && this.rolesArr[i].value;
    //   }
    // );
    // console.log(this.selectedRolesNames);
    // this.selectedRolesNames = this.selectedRolesNames.filter(role => role !== false);
    // console.log(this.selectedRolesNames);
    // console.log(this.recieveRole)

    // this.allRoles = [...this.recieveRole, ...this.selectedRolesNames];
    // console.log(this.allRoles);

    if (role.check == true) {
      this.recieveRole = this.recieveRole.filter(item => item !== role.name);
    }
    this.selectedRolesNames = _.map(
      this.editProfileForm.controls.roles["controls"],
      (role, i) => {
        return role.value && this.rolesArr[i].value;
      }
    );
    this.selectedRolesNames = this.selectedRolesNames.filter(role => role !== false);

    this.allRoles = [...this.recieveRole, ...this.selectedRolesNames];

    console.log(this.allRoles);
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Get Profile                               */
  /* -------------------------------------------------------------------------- */

  getProfileDetails() {
    this.profileService.getProfileById(this.route.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.editProfileForm.patchValue({
        title: data.title,
        description: data.description,
      })
      this.rolesData = data.roles;
      for (let role of this.rolesData) {
        for (let i in this.rolesArr) {
          if (this.rolesArr[i].name == role) {
            this.rolesArr[i].check = true;
            this.recieveRole.push(role);
          }
        }
      }
      console.log(this.rolesData);
      console.log(this.rolesArr);
    }, err => {
      this.toster.error("We Have Problem Please Try Again", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      })
      this.goback()
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                               Update Profile                               */
  /* -------------------------------------------------------------------------- */

  onSubmitProfile() {
    if (this.editProfileForm.valid) {
      this.isLoading = true;

      const updateProfile = {
        "title": this.editProfileForm.value.title,
        "description": this.editProfileForm.value.description,
        "roles": this.allRoles,
      }
      console.log(updateProfile);

      this.profileService.updateProfile(this.route.snapshot.params['id'], updateProfile).subscribe(data => {
        console.log(data);
        this.toster.success("User Updated", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.goback()
      }, err => {
        this.toster.error("Wrong Move", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.isLoading = false
      })
    }

  }

  /* -------------------------------------------------------------------------- */
  /*                            Go Back To Last Page                            */
  /* -------------------------------------------------------------------------- */

  goback() {
    this._location.back()
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from "@angular/forms";
import { RoleService } from 'services/user-managment-services/role.service';
import { ProfileService } from 'services/user-managment-services/profile.service';
import { Profil } from './../../../../../models/user-managment-models/ProfilRequest';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common'
import * as _ from "lodash";

@Component({
  selector: 'app-add-profile',
  templateUrl: './add-profile.component.html',
  styleUrls: ['./add-profile.component.scss']
})
export class AddProfileComponent implements OnInit {
  // public isCollapsed = false;
  newProfile;
  currentProfile;
  profileEdit;
  rolesData = [];
  // depVal = [];
  // attachVal = [];
  // noteVal = [];
  // screenVal = [];
  // criteriaVal = [];
  // taskVal = [];
  isSelected = "type"
  isLoading = false;
  rolesArr = [
    { name: "Create Department", value: "Create Department", id: 1, group: 'departments' },
    { name: "Delete Department", value: "Delete Department", id: 2, group: 'departments' },
    { name: "Edit Department", value: "Edit Department", id: 3, group: 'departments' },
    { name: "View Details", value: "View Details", id: 4, group: 'departments' },
    { name: "Add Attachment", value: "Add Attachment", id: 5, group: 'attachments' },
    { name: "Delete Attachment", value: "Delete Attachment", id: 6, group: 'attachments' },
    { name: "Create Note", value: "Create Note", id: 7, group: 'notes' },
    { name: "Delete Note", value: "Delete Note", id: 8, group: 'notes' },
    { name: "Edit Note", value: "Edit Note", id: 9, group: 'notes' },
    { name: "View Notes", value: "View Notes", id: 10, group: 'notes' },
    { name: "Create Criteria", value: "Create Criteria", id: 11, group: 'criteria' },
    { name: "Edit Criteria", value: "Edit Criteria", id: 12, group: 'criteria' },
    { name: "View Criteria", value: "View Criteria", id: 13, group: 'criteria' },
    { name: "View Screening", value: "View Screening", id: 14, group: 'screening' },
    { name: "View Tasks", value: "View Tasks", id: 15, group: 'tasks' }
  ];
  selectedRolesNames= [];

  // departments = [
  //   { name: "Create Department", check: false },
  //   { name: "Delete Department", check: false },
  //   { name: "Edit Department", check: false },
  //   { name: "View Details", check: false }
  // ];
  // attachments = [
  //   { name: "Add Attachment", check: false },
  //   { name: "Delete Attachment", check: false },
  // ];
  // notes = [
  //   { name: "Create Note", check: false },
  //   { name: "Delete Note", check: false },
  //   { name: "Edit Note", check: false },
  //   { name: "View Notes", check: false }
  // ];
  // criteria = [
  //   { name: "Create Criteria", check: false },
  //   { name: "Edit Note", check: false },
  //   { name: "View Criteria", check: false }
  // ];
  // screening = [
  //   { name: "View Screening", check: false }
  // ];
  // tasks = [
  //   { name: "View Tasks", check: false }
  // ];
  // departments = ["Create Department", "Delete Department", "Edit Department", "View Details"];
  // attachments = ["Add Attachment", "Delete Attachment"];
  // notes = ["Create Note", "Delete Note", "Edit Note", "View Notes"];
  // criteria = ["Create Criteria", "Edit Note", "View Criteria"];
  // screening = ["View Screening"];
  // tasks = ["View Tasks"];
  @ViewChild('f') floatingLabelForm: NgForm;
  @ViewChild('vform') validationForm: FormGroup;
  addProfileForm: FormGroup;

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private roleService: RoleService,
    private profileService: ProfileService,
    private toast: ToastrService,
    private _location: Location,
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                             NgONInt LifeCyclce                             */
  /* -------------------------------------------------------------------------- */

  ngOnInit() {
    this.createFormInputs();
  }
  
  createFormInputs() {
    this.addProfileForm = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'roles': this.createRoles(this.rolesArr)
    });
  }

  createRoles(rolesInputs) {
    const arr = rolesInputs.map(role => {
      return new FormControl(role.selected || false);
    });
    return new FormArray(arr);
  }

  getSelectedRoles() {
    this.selectedRolesNames = _.map(
      this.addProfileForm.controls.roles["controls"],
      (role, i) => {
        return role.value && this.rolesArr[i].value;
      }
    );
    // console.log(this.rolesData)
    this.selectedRolesNames = this.selectedRolesNames.filter(role => role !== false);
    console.log(this.selectedRolesNames);
    this.rolesData = this.selectedRolesNames;
    console.log(this.rolesData)

  }

  /* -------------------------------------------------------------------------- */
  /*                               Create New User                              */
  /* -------------------------------------------------------------------------- */

  onSubmitProfile(form) {
    if (this.addProfileForm.valid) {
      // this.isLoading = true;
      console.log(form.value)
      this.newProfile = {
        description: form.value.description,
        title: form.value.title,
        roles: this.rolesData
        // roles: {
        //   departments: this.depVal,
        //   attachments: this.attachVal,
        //   notes: this.noteVal,
        //   criteria: this.criteriaVal,
        //   screening: this.screenVal,
        //   tasks: this.taskVal
        // }
      };
      console.log(this.newProfile);
      this.profileService.createProfile(this.newProfile).subscribe(data => {
        // this.isLoading = false;
        console.log(data)
        this.toast.success("Profile Added", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.addProfileForm.reset();
      }, err => {
        // this.isLoading = false;
        this.toast.error("Profile Error", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
      })
    }
  }
  toggle(event, role) {
    console.log(role);
    role.check = event.checked
    this.rolesData.push(role);
    console.log(this.rolesData)
  }

  // toggle(val) {
  //   console.log(val);
  //   if (val.includes("Department")) {
  //     if(!val.includes(this.depVal)){
  //       this.depVal.push(val);
  //     }
  //   } else if (val.includes("Attach")) {
  //     if(!val.includes(this.attachVal)){
  //       this.attachVal.push(val);
  //     }
  //   } else if (val.includes("Note")) {
  //     this.noteVal.push(val);
  //   } else if (val.includes("Screen")) {
  //     this.screenVal.push(val);
  //   } else if (val.includes("Criteria")) {
  //     this.criteriaVal.push(val);
  //   } else if (val.includes("Task")) {
  //     this.taskVal.push(val);
  //   }
  // }

  // CurrentSelectedProfile() {
  //   this.currentProfile = JSON.parse(window.sessionStorage.getItem("profileId"))
  //   console.log(this.currentProfile);
  //   if(this.currentProfile){
  //     this.profileService.getProfileById(this.currentProfile).subscribe(data => {
  //       console.log(data);
  //       this.profileEdit = data;
  //     })
  //   }
  // }


  goback() {
    this._location.back()
  }
}

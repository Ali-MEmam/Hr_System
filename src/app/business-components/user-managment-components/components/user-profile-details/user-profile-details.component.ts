import { Component, OnInit } from '@angular/core';
import { UserService } from 'services/user-managment-services/user.service';
import { ActivatedRoute } from '@angular/router';
import { ProfileService } from 'services/user-managment-services/profile.service';
import { Location } from '@angular/common';
import { RoleService } from 'services/user-managment-services/role.service';
import { ImageService } from 'services/image/image.service';


@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.scss']
})
export class UserProfileDetailsComponent implements OnInit {
  currentPage: string = "About"
  currentUser;
  currentUserProfile;
  id;
  profile_image;
  profileDetails;
  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(private userService: UserService,
    private currentRoute: ActivatedRoute,
    private profileService: ProfileService,
    private _location: Location,
    private RoleService: RoleService,
    private ImageService: ImageService,
  ) { }

  /* -------------------------------------------------------------------------- */
  /*                          NgonInit Life Cycle Hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.getImage();
    this.getUser();
  }

  /* -------------------------------------------------------------------------- */
  /*                                Get Image                                   */
  /* -------------------------------------------------------------------------- */

  getImage() {
    this.ImageService.getImage(this.currentRoute.snapshot.params['id']).subscribe(data => {
      return this.profile_image = data.file
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                             Get User From BackEnd                          */
  /* -------------------------------------------------------------------------- */

  getUser() {
    this.userService.getMemberById(this.currentRoute.snapshot.params['id']).subscribe(data => {
      console.log(data);
      this.id = data.id;
      this.currentUser = data;
      this.currentUserProfile = data.profile["profile_title"];
      this.profileService.getProfiles().subscribe(profile => {
        console.log(profile);
        let role = profile.filter(role => role.title == this.currentUserProfile);
        console.log(role[0])
        console.log(this.currentUser);
        this.currentUser.roles = role[0].roles;
        this.currentUser.roles = this.currentUser.roles.filter(role => role != false);
        console.log(this.currentUser.roles)
        this.viewUserDetails();
      })
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                             Display User Details                           */
  /* -------------------------------------------------------------------------- */

  viewUserDetails() {
    this.profileDetails = {
      image: this.profile_image,
      roles: this.currentUser.roles,
      first_name: this.currentUser.first_name,
      last_name: this.currentUser.last_name,
      email: this.currentUser.email,
      phone_number: this.currentUser.phone_number,
      description: this.currentUser.description,
      profile_title: this.currentUserProfile,
      status: this.currentUser.status
    }
    console.log(this.profileDetails);
  }

  /* -------------------------------------------------------------------------- */
  /*                             Return To Last page                            */
  /* -------------------------------------------------------------------------- */

  goback() {
    this._location.back()
  }
}

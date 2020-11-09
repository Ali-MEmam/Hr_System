import { Component, OnInit, ViewChild } from "@angular/core";
import {
  FormGroup,
  FormBuilder,

} from "@angular/forms";
import { ProfileService } from "../../../../services/candidate/profile.service";
import { ActivatedRoute } from "@angular/router";
import {ToastrService} from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CompleteProfileService } from 'services/candidate/complete-profile.service';

@Component({
  selector: 'app-candidate-social-networks',
  templateUrl: './candidate-social-networks.component.html',
  styleUrls: ['./candidate-social-networks.component.scss']
})
export class CandidateSocialNetworksComponent implements OnInit {
  userId;
  socialNetworksForm: FormGroup
  constructor(
    private fb: FormBuilder,
    private candidateUpdateProfileService: CompleteProfileService,
    private currentRoute: ActivatedRoute,
    private profileInfoPercentage: ProfileService,
    private toast:ToastrService,
    private modalService: NgbModal,
  ) {

  }
 
  editProfileError = false;
  editProfileErrorMsg;
  editForm = true;
  updatedFormData;
  profileData;
  candidateId; //we will get it from login
  editProfileForm = true;
  editEducationForm = true;
  userCompelete = 0
  /* -------------------------------------------------------------------------- */
  /*                          NGON INit LifeCycle Hook                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.tokenTransform()
    this.candidateId = this.currentRoute.parent.parent.snapshot.params["id"]
  
    // social Networks Form
    this.socialNetworksForm = this.fb.group({
      facebook: [''],
      linkedin: [''],
      behance: [''],
      github: [''],
    })

    // display personal data
    this.displayPersonalInfo();
  }
  /* -------------------------------------------------------------------------- */
  /*                         Get Personal Info Function                         */
  /* -------------------------------------------------------------------------- */

  displayPersonalInfo() {
    // get data from api
    this.candidateUpdateProfileService.getProfileCandidate(this.candidateId).subscribe(response => {
      console.log(`data here ${response}`);
      console.log(response);
      this.profileData = response;
      // console.log(this.profileData);
      localStorage.setItem("userId", response.id);
      this.userId = localStorage.getItem("userId");
    }, error => { 
      // console.log(error + 'this is error')
    })
  }


  /* -------------------------------------------------------------------------- */
  /*                     Form Social Networks Information                       */
  /* -------------------------------------------------------------------------- */


  addSocialNetworksInfoEditMode = true;

  currentUserId;
  tokenTransform(){
    this.currentUserId =  window.sessionStorage.getItem("token")
  }

  onSubmitSocialNetworks(form) {

    let editSocailNetworks = {
      id: this.userId,
        link: this.socialNetworksForm.value.facebook,
        website: this.socialNetworksForm.value.linkedin,
      
    }
    this.candidateUpdateProfileService.editProfileCandidate(
      editSocailNetworks ,this.currentUserId ).subscribe(data => {
        // console.log("success social");
        this.displayPersonalInfo();
        this.onCancelSocailNetworks();
        this.toast.success("social Networks updated successfully",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
          this.candidateUpdateProfileService.sidebarChart.next(0)
      }, error => {
        this.toast.error("Error , Please try again",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
        // console.log("there is error in social");
      })
    // social Networks form

  }
  onCancelSocailNetworks() {
    this.addSocialNetworksInfoEditMode = true;
    this.displayPersonalInfo();
  }
  startEditSocailNetworks() {
    this.addSocialNetworksInfoEditMode = false;
  }


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


  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation end                            */
  /* -------------------------------------------------------------------------- */



}

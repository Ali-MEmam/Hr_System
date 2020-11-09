import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators, FormArray } from "@angular/forms";
import { DomSanitizer } from "@angular/platform-browser";
import { EducationService } from "services/candidate/education.service";
import { SkillsService } from "services/candidate/skills.service";
import { AwardService } from "services/candidate/award.service";
import { ExperienceService } from "services/candidate/experience.service";
import { PortfolioService } from "services/candidate/portfolio.service";
import { observable } from "rxjs";
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "services/user-managment-services/user.service";
import { CompleteProfileService } from "services/candidate/complete-profile.service";
import { HttpClient } from "@angular/common/http";
import { ToastrService } from "ngx-toastr";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";

import Swal from "sweetalert2";
declare let swal: any;

@Component({
  selector: "app-new-resume",
  templateUrl: "./new-resume.component.html",
  styleUrls: ["./new-resume.component.scss"],
})
export class NewResumeComponent implements OnInit {
  /* -------------------------------------------------------------------------- */
  /*                                Our Variable                                */
  /* -------------------------------------------------------------------------- */
  activeTab = "info";
  urlLink;

  resumeForm: FormGroup;
  testing;
  loading = false;
  activeFormType: string = "education";
  currentUser;
  currentUserImage;

  // education

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private candidateUpdateProfileService: CompleteProfileService,
    private fb: FormBuilder,
    private sanitizer: DomSanitizer,
    private educationService: EducationService,
    private skillService: SkillsService,
    private awardService: AwardService,
    private experienceService: ExperienceService,
    private PortfolioService: PortfolioService,
    private router: Router,
    private currentRoute: ActivatedRoute,

    private modalService: NgbModal,
    private http: HttpClient,
    private toast: ToastrService,
    private user: UserService
  ) {}
  public fileString;
  fileData: any;
  fileSrc: string | ArrayBuffer;
  file: any;

  education: any = [];
  // educationClicked = false;
  educationForm: FormGroup;
  eduEditing = false;
  eduId: any;
  eduEdit: FormGroup;
  // experiencr
  experience: any = [];
  experienceForm: FormGroup;
  expEditing = false;
  expId: any;
  expEdit: FormGroup;
  // skills
  skills: any = [];
  skillsForm: FormGroup;
  skillsEditing = false;
  skillsId: any;
  skillsEdit: FormGroup;

  currentUserId;
  currentUserIdProfile;
  /* -------------------------------------------------------------------------- */
  /*                           NGONINIT LIFECYCLE HOOK                          */
  /* -------------------------------------------------------------------------- */

  ngOnInit(): void {
    this.tokenTransform();
    this.toggleActiveForm("info");

    this.educationForm = this.fb.group({
      educations: this.fb.array([this.createEduForm()]),
    });

    this.experienceForm = this.fb.group({
      experience: this.fb.array([this.createExpForm()]),
    });
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkillsForm()]),
    });

    /****************** the real EndPoints **********************/
    /*    this.educationService.getAlleducationsForUser(this.candidateID)
       .subscribe(education=>{
         this.education=education
       })*/
    /********** the fake endpoints ******************/
    // this.getAllEducation().subscribe((data) => {
    //   this.education = data;
    // });
    // this.getAllExperience().subscribe((data) => {
    //   this.experience = data;
    // });
    // this.getAllSkills().subscribe((data) => {
    //   this.skills = data;
    // });
  }
  // education

  /* test for getting and viewing fake data from http://localhost:3000/ */
  getAllEducation() {
    return this.http.get("http://localhost:3000/education");
  }
  getAllExperience() {
    return this.http.get("http://localhost:3000/experience");
  }
  getAllSkills() {
    return this.http.get("http://localhost:3000/skills");
  }

  /**************            Cycle of AddEducation            **************/
  /* to create new form for user to add more education */
  createEduForm() {
    return this.fb.group({
      title: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      institute: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  addNewEduForm() {
    const addEducations = this.educationForm.get("educations") as FormArray;
    addEducations.push(this.createEduForm());
  }

  /* Submit new Education From */

  onSubmitEducation(form) {
    for (let i = 0; i < form.value.educations.length; i++) {
      let addedEducationObj = {
        date_from: form.value.educations[i].dateFrom,
        date_to: form.value.educations[i].dateTo,
        description: form.value.educations[i].description,
        institute: form.value.educations[i].institute,
        title: form.value.educations[i].title,
      };
      console.log(addedEducationObj);

      this.addEducation(addedEducationObj).subscribe((data) => {
        console.log(data);
        if (i + 1 === form.value.educations.length) {
          this.update();
        }
        this.toast.success("resume Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      });
      this.candidateUpdateProfileService.sidebarChart.next(0);
      this.activeFormType = "social";
    }

    // this.educationForm = this.fb.group({
    //   educations: this.fb.array([this.createEduForm()]),
    // });

    // this.educationClicked = false;
  }

  /* post for each object in educations formArray */

  addEducation(eduObj) {
    return this.http.post("http://localhost:3000/education", eduObj);
  }

  CancelAddEducation() {
    this.educationForm = this.fb.group({
      educations: this.fb.array([this.createEduForm()]),
    });

    // this.educationClicked = false;
  }
  deleteEducationFormArray(i) {
    var deleteSkills = <FormArray>this.educationForm.controls["educations"];
    deleteSkills.removeAt(i);

    if (this.educationForm.value.educations.length == 0) {
      // this.educationClicked = false;
    }
  }

  update() {
    this.getAllEducation().subscribe(
      (data) => {
        //to listen in sidebar chart
        this.education = data;
        console.log(this.education);

        this.educationService.sidebarChart.next(0);
      },
      (error) => {
        this.education.length = 1;
      }
    );
  }

  onDeleteEdu(eduId) {
    this.deleteEdu(eduId).subscribe((data) => {
      // console.log(data);
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          this.update();

          this.modalService.dismissAll();
        }
      });
    });
  }
  deleteEdu(id) {
    return this.http.delete("http://localhost:3000/education/" + id);
  }

  /*  edit cycle for education   */

  cancelEditEdu() {
    this.eduEditing = false;
    this.eduEdit.reset();
  }

  // start experience

  /**************            Cycle of AddEducation            **************/
  /* to create new form for user to add more education */
  createExpForm() {
    return this.fb.group({
      title: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      companyName: ["", Validators.required],
      description: ["", Validators.required],
    });
  }
  addNewExpForm() {
    const addExperience = this.experienceForm.get("experience") as FormArray;
    addExperience.push(this.createExpForm());
  }

  /* Submit new Education From */

  onSubmitExperience(form) {
    for (let i = 0; i < form.value.experience.length; i++) {
      let addedExperienceObj = {
        date_from: form.value.experience[i].dateFrom,
        date_to: form.value.experience[i].dateTo,
        description: form.value.experience[i].description,
        company_name: form.value.experience[i].companyName,
        title: form.value.experience[i].title,
      };
      console.log(addedExperienceObj);

      this.addEexperience(addedExperienceObj).subscribe((data) => {
        console.log(data);
        if (i + 1 === form.value.experience.length) {
          this.update();
        }
        this.toast.success("resume Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      });
      this.candidateUpdateProfileService.sidebarChart.next(0);
      this.activeFormType = "contact";
    }

    // this.experienceForm = this.fb.group({
    //   experience: this.fb.array([this.createExpForm()]),
    // });

    // this.educationClicked = false;
  }

  /* post for each object in educations formArray */

  addEexperience(expObj) {
    return this.http.post("http://localhost:3000/experience", expObj);
  }

  CancelAddExperience() {
    this.experienceForm = this.fb.group({
      experience: this.fb.array([this.createExpForm()]),
    });

    // this.educationClicked = false;
  }
  deleteExperienceFormArray(i) {
    var deleteExperience = <FormArray>(
      this.experienceForm.controls["experience"]
    );
    deleteExperience.removeAt(i);

    if (this.experienceForm.value.experience.length == 0) {
      // this.educationClicked = false;
    }
  }

  getEduId(id) {
    this.eduId = id;
    this.eduEditing = true;
    let filtered = this.education.filter(function (item) {
      return item.id == id;
    });
    this.eduEdit.patchValue({
      title: filtered[0].title,
      dateFrom: filtered[0].date_from,
      dateTo: filtered[0].date_to,
      institute: filtered[0].institute,
      description: filtered[0].description,
    });
  }

  getSkillId(id) {
    this.skillsId = id;
    this.skillsEditing = true;
    let filtered = this.skills.filter(function (item) {
      return item.id == id;
    });
    this.skillsEdit.patchValue({
      skill: filtered[0].skill,
      percentage: filtered[0].percentage,
    });
  }

  getExpId(id) {
    this.expId = id;
    this.expEditing = true;
    let filtered = this.experience.filter(function (item) {
      return item.id == id;
    });
    this.expEdit.patchValue({
      title: filtered[0].title,
      dateFrom: filtered[0].date_from,
      dateTo: filtered[0].date_to,
      company_name: filtered[0].company_name,
      description: filtered[0].description,
    });
  }
  // start skills
  // start skills
  // start skills
  // start skills

  // start experience

  /**************            Cycle of AddEducation            **************/
  /* to create new form for user to add more education */
  createSkillsForm() {
    return this.fb.group({
      skills: ["", Validators.required],
      percentage: ["", Validators.required],
    });
  }
  addNewSkillsForm() {
    const addSkills = this.skillsForm.get("skills") as FormArray;
    addSkills.push(this.createSkillsForm());
  }

  /* Submit new Education From */

  onSubmitSkills(form) {
    console.log(form);

    for (let i = 0; i < form.value.skills.length; i++) {
      let addedSkillseObj = {
        skill: form.value.skills[i].skills,
        percentage: form.value.skills[i].percentage,
      };
      console.log(addedSkillseObj);

      this.addSkills(addedSkillseObj).subscribe((data) => {
        console.log(data);
        if (i + 1 === form.value.skills.length) {
          this.update();
        }
        this.toast.success("resume Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      });
    }

    // this.skillsForm = this.fb.group({
    //   skills: this.fb.array([this.createSkillsForm()]),
    // });

    // this.educationClicked = false;
  }

  /* post for each object in educations formArray */

  addSkills(skillsObj) {
    return this.http.post("http://localhost:3000/skills", skillsObj);
  }

  CancelAddSkills() {
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createExpForm()]),
    });

    // this.educationClicked = false;
  }
  deleteSkillsFormArray(i) {
    var deleteSkills = <FormArray>this.skillsForm.controls["skills"];
    deleteSkills.removeAt(i);

    if (this.skillsForm.value.skills.length == 0) {
      // this.educationClicked = false;
    }
  }

  deleteSkills(id) {
    return this.http.delete("http://localhost:3000/skills/" + id);
  }

  toggleActiveForm(formtype) {
    this.activeFormType = formtype;
  }
  nextToSecondForm() {
    switch (this.activeFormType) {
      case "info":
        this.activeFormType = "info";
        break;
      case "social":
        this.activeFormType = "social";
      case "contact":
        this.activeFormType = "contact";
    }
  }

  tokenTransform() {
    this.currentUserId = JSON.parse(
      atob(window.sessionStorage.getItem("token").split(".")[1])
    ).sub;
    console.log(this.currentUserId);
    this.currentUserIdProfile = `/candidate/pages/${this.currentUserId}/dashboard`;
  }
}

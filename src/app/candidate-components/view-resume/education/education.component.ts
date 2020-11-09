import { Component, OnInit } from "@angular/core";
import { EducationService } from "services/candidate/education.service";
import { PortfolioService } from "services/candidate/portfolio.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray,
} from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import Swal from "sweetalert2";
declare let swal: any;
import { ToastrService } from "ngx-toastr";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.scss"],
})
export class EducationComponent implements OnInit {
  education: any = [];
  // educationClicked = false;
  educationForm: FormGroup;
  eduEditing = false;
  eduId: any;
  eduEdit: FormGroup;

  constructor(
    private modalService: NgbModal,
    private educationService: EducationService,
    private fb: FormBuilder,
    private http: HttpClient,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.educationForm = this.fb.group({
      educations: this.fb.array([this.createEduForm()]),
    });
    this.eduEdit = this.fb.group({
      title: ["", Validators.required],
      dateFrom: ["", Validators.required],
      dateTo: ["", Validators.required],
      institute: ["", Validators.required],
      description: ["", Validators.required],
    });

    /****************** the real EndPoints **********************/
    /*    this.educationService.getAlleducationsForUser(this.candidateID)
       .subscribe(education=>{
         this.education=education
       })*/
    /********** the fake endpoints ******************/
    this.getAllEducation().subscribe((data) => {
      this.education = data;
    });
  }
  currentUserId;
  tokenTransform() {
    this.currentUserId = JSON.parse(
      atob(window.sessionStorage.getItem("token").split(".")[1])
    ).sub;
  }
  /* test for getting and viewing fake data from http://localhost:3000/ */
  getAllEducation() {
    return this.http.get("http://localhost:3000/education");
  }

  /* on add more education  */
  // onAddEducation() {
  //   this.educationClicked = !this.educationClicked
  // }
  // cancelAddEducation() {
  //   this.educationClicked = false
  // }

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
    }

    this.educationForm = this.fb.group({
      educations: this.fb.array([this.createEduForm()]),
    });

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
    this.getAllEducation().subscribe((data) => {
      //to listen in sidebar chart
      this.education = data;
      this.educationService.sidebarChart.next(0);
    });
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

  onSubmitEduEdit(form, id) {
    console.log(form);
    var eduObj = {
      title: this.eduEdit.value.title,
      date_from: this.eduEdit.value.dateFrom,
      date_to: this.eduEdit.value.dateTo,
      institute: this.eduEdit.value.institute,
      description: this.eduEdit.value.description,
    };

    this.http.patch("http://localhost:3000/education/" + id, eduObj).subscribe(
      (data) => {
        console.log(data);
        this.update();
        this.eduEdit.reset();
        this.eduEditing = false;
        this.toast.success("resume Updated successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.modalService.dismissAll();
      },
      (err) => {
        this.toast.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  closeResult: string;

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation start                          */
  /* -------------------------------------------------------------------------- */
  open(content) {
    this.modalService.open(content, { size: "lg" }).result.then(
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

  /* -------------------------------------------------------------------------- */
  /*                           modal Inviteation end                            */
  /* -------------------------------------------------------------------------- */
}

import { Component, OnInit } from '@angular/core';
import { ExperienceService } from 'services/candidate/experience.service';
import { PortfolioService } from 'services/candidate/portfolio.service';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare let swal: any;
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { SkillsService } from 'services/candidate/skills.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: any = [];
  volunteer: any = [];
  experienceClicked = false;
  expEditing = false;
  volExpEditing = false
  experienceForm: FormGroup;
  volExperienceForm: FormGroup;
  expId: any;
  expEdit: FormGroup
  volExpEdit: FormGroup
  volExpId: any;

  constructor(

    private modalService: NgbModal,
    private experienceService: ExperienceService,
    private fb: FormBuilder,
    private http: HttpClient,
    private skillsService:SkillsService,
    private toast: ToastrService

  ) { }

  ngOnInit(): void {

    /*****************  FormGroup *****************/
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExpForm()])

    });
    this.volExperienceForm = this.fb.group({
      volunteer: this.fb.array([this.createVolExpForm()])
    });


    this.expEdit = this.fb.group({
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      description: ['', Validators.required],
      company_name: ['', Validators.required],
      title: ['', Validators.required],
    })

    this.volExpEdit = this.fb.group({
      date_from: ['', Validators.required],
      date_to: ['', Validators.required],
      description: ['', Validators.required],
      organization_name: ['', Validators.required],
      title: ['', Validators.required],
    })
    this.getAllExp().subscribe(data => {
      this.experience = data
    })
    this.getAllVolunteer().subscribe(data => {
      this.volunteer = data
    })
  }

  getAllExp() {
    return this.http.get('http://localhost:3000/experience')
  }

  /**************            Cycle of Add Experience            **************/

  createExpForm() {
    return this.fb.group({
      dateFrom: ['', Validators.required],
      dateTo: ['', Validators.required],
      description: ['', Validators.required],
      company_name: ['', Validators.required],
      title: ['', Validators.required],
    })
  }
  addNewExpForm() {
    const addExps = this.experienceForm.get('experiences') as FormArray;
    addExps.push(this.createExpForm())
  }

  onSubmitExp(form) {
    console.log(form);

    for (let i = 0; i < form.value.experiences.length; i++) {
      let addedExpObj = {
        date_from: form.value.experiences[i].dateFrom,
        date_to: form.value.experiences[i].dateTo,
        description: form.value.experiences[i].description,
        company_name: form.value.experiences[i].company_name,
        title: form.value.experiences[i].title
      }
      this.addExp(addedExpObj).subscribe(data => {
        // console.log(data);
        if ((i + 1) === form.value.experiences.length) {
          this.update()
        }
        this.toast.success("resume Updated successfully", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        this.modalService.dismissAll()
        this.update()
      });
    }
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExpForm()])

    });
    this.experienceClicked = false

  }
  addExp(expObj) {
    return this.http.post('http://localhost:3000/experience', expObj);
  }

  canacelAddExp() {
    this.experienceForm = this.fb.group({
      experiences: this.fb.array([this.createExpForm()])

    });
    this.experienceClicked = false
  }
  deleteExpFormArray(i) {
    var deleteExp = <FormArray>this.experienceForm.controls["experiences"];
    deleteExp.removeAt(i);

    if (this.experienceForm.value.experiences.length == 0) {
      this.experienceClicked = false
    }
  }

  update() {
    this.getAllExp().subscribe(data => {
      
      //to listen in sidebar chart
      this.experience = data
      this.experienceService.sidebarChart.next(0)
    })
   this.getAllVolunteer().subscribe(data => {
      this.volunteer = data
      this.experienceService.sidebarChart.next(0)
    })
  }

  onDeleteExp(Id) {
    this.deleteExp(Id).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.modalService.dismissAll()
          this.update()
        }
      })
    })
  }
  deleteExp(id) {
    return this.http.delete('http://localhost:3000/experience/' + id)
  }

  /*  edit cycle for experiance   */

  cancelEditExp() {
    this.expEditing = false;
    this.expEdit.reset()
  }

  getExpId(id) {
    this.expId = id
   this.expEditing = true;
    let filtered = this.experience.filter(function (item) {
      return item.id == id
    })
   this.expEdit.patchValue({
      title: filtered[0].title,
     dateFrom: filtered[0].date_from,
     dateTo: filtered[0].date_to,
     company_name: filtered[0].company_name,
      description: filtered[0].description
    })
}

  onSubmitExpEdit(form, id) {

    console.log(form);

    var expObj = {
      title: this.expEdit.value.title,
      date_from: this.expEdit.value.dateFrom,
      date_to: this.expEdit.value.dateTo,
      company_name: this.expEdit.value.company_name,
      description: this.expEdit.value.description
    }

    this.http.patch('http://localhost:3000/experience/' + id, expObj).subscribe(data => {
      this.update()
      this.expEdit.reset()
      this.expEditing = false;
      this.toast.success("Experience Updated successfully", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      });
      this.modalService.dismissAll()
      this.update();
    }, (err) => {
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









  /* -------------------------------------------------------------------------- */
  /*                         start volunteer experience                         */
  /* -------------------------------------------------------------------------- */

  getAllVolunteer() {
    return this.http.get('http://localhost:3000/volunteer')
  }

  cancelvolExp() {
    this.volExpEditing = false;
    this.volExpEdit.reset()
  }
  getvolExpId(id) {
    this.volExpId = id
   this.volExpEditing = true;
    let filtered = this.volunteer.filter(function (item) {
      return item.id == id
    })
   this.volExpEdit.patchValue({
      title: filtered[0].title,
      date_from: filtered[0].date_from,
      date_to: filtered[0].date_to,
     organization_name: filtered[0].organization_name,
      description: filtered[0].description
    })
    console.log(filtered);
    
}

  onSubmitVolExpEdit(form, id) {
    console.log(form);
    console.log(this.expEdit.value.title);
    
    var volExpObj = {
      title: this.volExpEdit.value.title,
      date_from: this.volExpEdit.value.date_from,
      date_to: this.volExpEdit.value.date_to,
      organization_name: this.volExpEdit.value.organization_name,
      description: this.volExpEdit.value.description
    }

    this.http.patch('http://localhost:3000/volunteer/' + id, volExpObj).subscribe(data => {
      
      this.toast.success("Experience Updated successfully", '', {
        timeOut: 3000,
        positionClass: 'toast-top-full-width',
        closeButton: true
      });
      this.modalService.dismissAll()
      this.update()
      this.volExpEdit.reset()
    }, (err) => {
      this.toast.error("We Have Problem Please Try Again", "", {
        timeOut: 3000,
        positionClass: "toast-top-full-width",
        closeButton: true,
      });
    }
    );
  }
  onDeleteVolExp(id) {
    this.deleteVolExp(id).subscribe(data => {
      console.log(data);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.update()
          this.modalService.dismissAll()
        }
      })
    })
  }
  deleteVolExp(id) {
    return this.http.delete('http://localhost:3000/volunteer/' + id)
  }
  createVolExpForm() {
    return this.fb.group({
      date_from: ['', Validators.required],
      date_to: ['', Validators.required],
      description: ['', Validators.required],
      organization_name: ['', Validators.required],
      title: ['', Validators.required],
    })
  }
  addNewVolExpForm() {
    const addExps = this.volExperienceForm.get('volunteer') as FormArray;
    addExps.push(this.createVolExpForm())
  }
  addVolExp(volExpObj) {
    return this.http.post('http://localhost:3000/volunteer', volExpObj);
  }

  canacelVolAddExp() {
    this.experienceForm = this.fb.group({
      volunteer: this.fb.array([this.createVolExpForm()])
    });
    this.modalService.dismissAll()

  }



  onSubmitvolExp(form) {
    console.log(form);

    for (let i = 0; i < form.value.volunteer.length; i++) {
      let volExpObj = {
        date_from: form.value.volunteer[i].date_from,
        date_to: form.value.volunteer[i].date_to,
        description: form.value.volunteer[i].description,
        organization_name: form.value.volunteer[i].organization_name,
        title: form.value.volunteer[i].title
      }
      this.addVolExp(volExpObj).subscribe(data => {
        // console.log(data);
        if ((i + 1) === form.value.volunteer.length) {
          this.update()
        }
        this.toast.success("Resume Updated successfully", '', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton: true
        })
        
        this.modalService.dismissAll()
      });
    }
    this.volExperienceForm = this.fb.group({
      volunteer: this.fb.array([this.createVolExpForm()])
    });

  }

  deleteVolExpFormArray(i) {
    var deleteVolExp = <FormArray>this.volExperienceForm.controls["volunteer"];
    deleteVolExp.removeAt(i);
    if (this.volExperienceForm.value.volunteer.length == 0) {
    }
  }
}

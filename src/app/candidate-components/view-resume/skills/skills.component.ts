import { Component, OnInit } from '@angular/core';
import { SkillsService } from 'services/candidate/skills.service';
import { FormBuilder, FormGroup, FormControl , Validators, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare let swal: any;
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills:any=[];
  skillsClicked=false;
  skillEditing=false;
  skillsForm: FormGroup;
  skillEdit: FormGroup;
  skillId: any;

  constructor(    
    private modalService: NgbModal,
    private skillsService:SkillsService,
    private fb: FormBuilder,
    private http:HttpClient,
    private toast:ToastrService
    ) { }

  ngOnInit(): void {
        /*****************  FormGroup *****************/

    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkillForm()])
    });
    this.skillEdit = this.fb.group({
      skill: ['',Validators.required],
      percentage: ['',[Validators.required,Validators.max(100), Validators.min(0),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]]
    })
    this.getAllSkills().subscribe(data=>{
      this.skills=data
    }) 
  }


  getAllSkills(){
    return this.http.get('http://localhost:3000/skills')
  } 

  getSkillById(id){
    return this.http.get('http://localhost:3000/skills/'+id)
  }


  /**************            Cycle of Add Skill            **************/

  onAddSkill(){
    this.skillsClicked = !this.skillsClicked
  }
  createSkillForm(){
    return this.fb.group({
      skill: ['',Validators.required],
      percentage: ['',[Validators.required,Validators.max(100), Validators.min(0),Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    })
  }
  addNewSkillForm(){
    const addSkills = this.skillsForm.get('skills') as FormArray;
    addSkills.push(this.createSkillForm())
  }
  onSubmitSkill(form){
    console.log(form);
    for(let i = 0 ; i<form.value.skills.length ; i++){
      let addedSkillObj={
        "skill" : form.value.skills[i].skill,
        "percentage" : +form.value.skills[i].percentage,
      }
      console.log(addedSkillObj);
      this.addSkill(addedSkillObj).subscribe(data=>{
        console.log(data);
        if((i + 1) === form.value.skills.length){
          this.update()
        }
        this.toast.success("resume Updated successfully",'', {
          timeOut: 3000,
          positionClass: 'toast-top-full-width',
          closeButton:true
          })
      });
      
      this.modalService.dismissAll()
    } 
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkillForm()])
    });
    this.skillsClicked = false
    
    
  }
   addSkill(skillObj){
    return this.http.post('http://localhost:3000/skills',skillObj);
  } 
 
  cancelAddSkill(){
    this.skillsForm = this.fb.group({
      skills: this.fb.array([this.createSkillForm()])
    });
    this.skillsClicked = false
  }
  getEduId(id) {
    this.skillId = id
   this.skillEditing = true;
    let filtered = this.skills.filter(function (item) {
      return item.id == id
    })
   this.skillEdit.patchValue({
      skill: filtered[0].skill,
     percentage: filtered[0].percentage,
    })
}

  update(){

    this.getAllSkills().subscribe(data=>{
      
      this.skills=data
      //to listen in sidebar chart
      this.skillsService.sidebarChart.next(0)
    }) 
  }

  deleteSkillsFormArray(i){
    var deleteSkills = <FormArray>this.skillsForm.controls["skills"];
    deleteSkills.removeAt(i);
    console.log(this.skillsForm.value.skills.length);
    
    if(this.skillsForm.value.skills.length == 0){
      this.skillsClicked = false
    }
  }

  /* deleting specific data */
  onDeleteSkill(skillId){
    this.deleteSkill(skillId).subscribe(data=>{
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
deleteSkill(id){
  return this.http.delete('http://localhost:3000/skills/'+ id )
}

 /*  edit cycle for skill   */
 cancelEditSkill(){
  this.skillEditing=false;
  this.skillEdit.reset()
}
getSkillId(id){
  this.skillId = id
  this.skillEditing=true;
  let filtered = this.skills.filter(function(item){
    return item.id == id
  })
  this.skillEdit.patchValue({
    skill:filtered[0].skill,
    percentage:filtered[0].percentage
  })
}
onSubmitSkillEdit(form, id){

  console.log(form);

  var skillObj={
    skill: this.skillEdit.value.skill,
    percentage: this.skillEdit.value.percentage
  }

  this.http.patch('http://localhost:3000/skills/'+id,skillObj).subscribe(data=>{
    this.toast.success("Skill Updated successfully", '', {
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    });
    this.modalService.dismissAll()
    this.update()
    this.skillEdit.reset()
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


}

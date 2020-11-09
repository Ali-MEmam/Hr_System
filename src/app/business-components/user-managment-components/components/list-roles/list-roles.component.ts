import {Component, OnInit, ViewChild} from '@angular/core';
import {DatatableComponent} from "@swimlane/ngx-datatable";
import {TranslateService} from "@ngx-translate/core";
import { RoleService } from 'services/user-managment-services/role.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-list-roles',
  templateUrl: './list-roles.component.html',
  styleUrls: ['./list-roles.component.scss']
})
export class ListRolesComponent implements OnInit {

  rows = [];
  temp = [];
  resetRows = [];
  columns = [
    { prop: "title", name: "Title" },
    { prop: "description", name: "Description" },
  ];
  rolesData;
  closeResult: string;
  rolesDetails;
  roles= [
    {
      "title": "Create",
      "description": "can create",
    },
    {
      "title": "Delete",
      "description": "can Delete",
    },
    {
      "title": "View",
      "description": "can View",
    },
    {
      "title": "Edit",
      "description": "can Edit",
    }
  ]
  @ViewChild(DatatableComponent) table: DatatableComponent;

/* -------------------------------------------------------------------------- */
/*                           Constructor Life Cycle                           */
/* -------------------------------------------------------------------------- */

  constructor(
    public translate: TranslateService,
    private rolesService:RoleService,
    private route:Router,
    private router:ActivatedRoute,
    private toster:ToastrService,
    private modalService: NgbModal,

    ) {}
  
/* -------------------------------------------------------------------------- */
/*                             ngOninit Life Cycle                            */
/* -------------------------------------------------------------------------- */

ngOnInit(): void {
 this.displayRoles()
}


/* -------------------------------------------------------------------------- */
/*                              Display All Roles                             */
/* -------------------------------------------------------------------------- */

  displayRoles(){
      this.rolesData = this.roles;
      this.rows = this.roles;
      console.log(this.rows);
      for (let i = 0; i < this.rows.length; i++) {
        this.rows[i]["title"] = this.rows[i]["title"];
        this.rows[i]["description"] = this.rows[i]["description"];
      }
      this.resetRows = this.rows;
  //   this.rolesService.getRoles().subscribe(data =>{
  //     this.rolesData = data;
  //     this.rows = data;
  //     console.log(this.rows);
  //     for (let i = 0; i < this.rows.length; i++) {
  //       this.rows[i]["title"] = this.rows[i]["title"];
  //       this.rows[i]["description"] = this.rows[i]["description"];
  //     }
  //     this.resetRows = this.rows;
  //   },err =>{
  //     this.toster.error("Problem To Get Data Please Try Again Later",'', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-full-width',
  //       closeButton:true
  //   })
  // })
}

  /* -------------------------------------------------------------------------- */
  /*                          display Roles Details                             */
  /* -------------------------------------------------------------------------- */
  
  showRoleDetails(selectedRow) {
    this.rolesDetails = selectedRow;
    console.log(this.rolesDetails)
  }

  /* -------------------------------------------------------------------------- */
  /*                              filter Roles                                  */
  /* -------------------------------------------------------------------------- */
  
  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["title"].toUpperCase().includes(val.toUpperCase())|| e["title"].toLowerCase().includes(val.toLowerCase());
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
  
/* -------------------------------------------------------------------------- */
/*                            navigate To edit ROle                           */
/* -------------------------------------------------------------------------- */

  // getElement(data){
  //   this.route.navigate(['/pages','login','list-roles','update-role',data])
  // }

/* -------------------------------------------------------------------------- */
/*                                 Delete Roles                                */
/* -------------------------------------------------------------------------- */

  // deleteRole(data){
  //   this.rolesService.deleterole(data).subscribe(data => {
  //     this.toster.success("Role Deleted",'', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-full-width',
  //       closeButton:true
  //       })
  //       this.displayRoles()
  //   },err =>{
  //     this.toster.error("Wrong Move",'', {
  //       timeOut: 3000,
  //       positionClass: 'toast-top-full-width',
  //       closeButton:true
  //       })
  //   })
  // }
}

import { Component, OnInit , ViewEncapsulation, Input, ViewChild  } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TestMangmentService } from '../../../../services/test-mangment/test-mangment.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-job-tests',
  templateUrl: './job-tests.component.html',
  styleUrls: ['./job-tests.component.scss']
})
export class JobTestsComponent implements OnInit {
 // Displayed DataTable Vars Start
 displayedRows=[];
 resetDisplayedRows=[];


 // Modal Vars Start
 FilterOptionLabel = 'Filter Option';
 FilterPlaceHolder = 'Type to filter the Test Name or Type ...';
 rows = [];
 resetRows=[];
 temp = [];

 // Table Column Titles
 columns = [

   { prop: 'test' },
   { prop: 'created' },
   { prop: 'type' },
 ];
 @ViewChild(DatatableComponent) table: DatatableComponent;

 closeResult: string;

 constructor(private modalService: NgbModal,
   private testMangmentService: TestMangmentService,
   private route:Router
   ,private toster:ToastrService) { }

 ngOnInit(): void {
   this.CurrentSelectedJob();
   this.displayPreselectedtests();
 }

 currentJob;
 CurrentSelectedJob() {
   this.currentJob = JSON.parse(window.sessionStorage.getItem("jobId"))
 }

/*            ----------------------------------------------------------------------           */
/*            Displayed DataTable For the Selected test From Preselecting Start           */
/*            ----------------------------------------------------------------------           */

updateFilter(event) {
 const val = event.target.value;
 console.log(val);

 this.displayedRows = this.resetDisplayedRows
 // filter our data
 let temp = this.displayedRows.filter(function (e) {
   return e["test"].includes(val)
 });
 console.log(temp);
 console.log(this.displayedRows);


 // update the rows
 this.displayedRows = temp
 if(val == ""){
   this.displayedRows=this.resetDisplayedRows
 }
 // Whenever the filter changes, always go back to the first page
 this.table.offset = 0;
}
getSingleTest(id){
 // gettestById
 this.route.navigate(['pages','login','testslist','details',id])
 
}
sendInv(value){
 console.log(value);
 
}
removetest(id){
this.testMangmentService.deleteTest(id).subscribe(data => {
 this.toster.success("Profile Deleted",'', {
   timeOut: 3000,
   positionClass: 'toast-top-full-width',
   closeButton:true
   })
 this.displayPreselectedtests()
},err =>{
 this.toster.error("Wrong Move",'', {
   timeOut: 3000,
   positionClass: 'toast-top-full-width',
   closeButton:true
   })
})

}

/* -------------------------------------------------------------------------- */
/*                              Display Selected tests                   */
/* -------------------------------------------------------------------------- */

displayPreselectedtests() {
 this.testMangmentService.gettests().subscribe(data => {

   this.displayedRows = data
   for (let i = 0; i < this.displayedRows.length; i++) {
     this.displayedRows[i]["test"] = this.displayedRows[i] ["test"]  ,
     this.displayedRows[i]["type"] = this.displayedRows[i] ["type"]  

     }
   console.log(this.displayedRows);
   this.resetDisplayedRows=this.displayedRows
 }
 )
}



}
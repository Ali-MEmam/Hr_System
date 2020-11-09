import { Component, OnInit , ViewEncapsulation, Input, ViewChild  } from '@angular/core';
import { DatatableComponent, id } from "@swimlane/ngx-datatable";
import { ToastrService } from "ngx-toastr";
import { TestMangmentService } from 'services/test-mangment/test-mangment.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { InvitatioinWithoutScreeningService } from 'services/meeting-services/invitatioin-without-screening.service';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';

/**********               ***************             ******************/
/**********           FOR MODAL Componant Start       ******************/
/**********               ****************            ******************/
@Component({
  selector: 'ngbd-modal-content',
  template: `
  <div class="modal-header">
    <h4 class="modal-title">Hi there!</h4>
    <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Hello, {{name}}!</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary btn-raised" (click)="activeModal.close('Close click')">Close</button>
  </div>
`
})

export class NgbdModalContent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) { }
}

/**********               ***************             ******************/
/**********           FOR MODAL Componant End         ******************/
/**********               ****************            ******************/



@Component({
  selector: 'app-affect-meeting',
  templateUrl: './affect-meeting.component.html',
  styleUrls: ['./affect-meeting.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class AffectMeetingComponent implements OnInit {
  
  // Displayed DataTable Vars Start
  displayedRows=[];
  resetDisplayedRows=[];
  // Modal Vars Start
  FilterOptionLabel = 'Filter Option';
  FilterPlaceHolder = 'Type to by name ...';
  rows = [];
  resetRows=[];
  temp = [];

  assignTasksObj;
  assignedTaskData = {}
  selected = [];
  SelectionType = SelectionType;
  restTestsRows = []
  // Displayed DataTable Vars Start
  displayTestsRows = [];
  closeResult: string;
  // Table Column Titles
  columns = [

    { prop: 'full name' },
    { prop: 'job title' },

  ];
  // Table Column Titles
  columnsTestsTable = [
    { prop: 'test' },
    { prop: 'created' },
    { prop: 'type' },
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;
  @ViewChild(DatatableComponent) testsTable: DatatableComponent;


  constructor(
    private modalService: NgbModal,
    private invService: InvitatioinWithoutScreeningService,
    private testMangmentService: TestMangmentService,
    private toster: ToastrService,
    ) { }

  ngOnInit(): void {
    this.displayTests()
    this.displayCandidates()
    this.displayPreselectedCandidates()
  }


/*           ---------------------        */
/*           Modal functions Start        */
/*           ---------------------        */
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
/*           -------------------          */
/*           Modal functions End          */
/*           -------------------          */





/*           -------------------------                */
/*           DataTable For modal Start                */
/*           -------------------------                */
updateFilterForModal(event) {
  const val = event.target.value;
  console.log(val);

  this.rows = this.resetRows
  // filter our data
  let temp = this.rows.filter(function (e) {
    return e["full name"].includes(val)
  });
  console.log(temp);
  console.log(this.rows);


  // update the rows
  this.rows = temp
  if(val == ""){
    this.rows=this.resetRows
  }
  // Whenever the filter changes, always go back to the first page
  this.table.offset = 0;
}


addCandidate(value) {
  console.log(value);
 let selectedCandidate = this.rows.filter(x => x.id === value);

  console.log("obj of candidate",selectedCandidate[0]);

  if(this.displayedRows.findIndex(obj=> obj.id == selectedCandidate[0].id) ==-1){

    this.invService.addPreselectedCandidates(selectedCandidate[0]).subscribe()

    /* this.displayedRows.push(selectedCandidate[0]) */
    console.log("added");

  }else{
    console.log("was added befor")
  }

  console.log(this.displayedRows);
  this.displayPreselectedCandidates();
}

/* -------------------------------------------------------------------------- */
/*                              Display All Candidates                        */
/* -------------------------------------------------------------------------- */

displayCandidates() {
  this.invService.getCandidates().subscribe(data => {

    this.rows = data
    for (let i = 0; i < this.rows.length; i++) {
      this.rows[i]["full name"] = this.rows[i].first_name + " " + this.rows[i].last_name
      this.rows[i]["job title"] = this.rows[i]["job_title"]
    }
    console.log(this.rows);
    this.resetRows=this.rows
  }
  )
}

/*           -----------------------                */
/*           DataTable For modal End                */
/*           -----------------------                */






/*            ----------------------------------------------------------------------           */
/*            Displayed DataTable For the Selected Candidate From Preselecting Start           */
/*            ----------------------------------------------------------------------           */

updateFilter(event) {
  const val = event.target.value;
  console.log(val);

  this.displayedRows = this.resetDisplayedRows
  // filter our data
  let temp = this.displayedRows.filter(function (e) {
    return e["full name"].includes(val)
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

sendInv(value){
  console.log(value);
  console.log("send inv for candidate with id" + value);
  
}
removeCandidate(value){
  console.log(value);
  this.invService.deletePreSelectedCandidates(value).subscribe(data=>{
    this.displayCandidates()
    this.displayPreselectedCandidates()
  })
  
}

/* -------------------------------------------------------------------------- */
/*                              Display Selected Candidates                   */
/* -------------------------------------------------------------------------- */

displayPreselectedCandidates() {
  this.invService.getPreselectedCandidates().subscribe(data => {

    this.displayedRows = data
    for (let i = 0; i < this.displayedRows.length; i++) {
      this.displayedRows[i]["full name"] = this.displayedRows[i].first_name + " " + this.displayedRows[i].last_name
      this.displayedRows[i]["job title"] = this.displayedRows[i]["job_title"]
    }
    console.log(this.displayedRows);
    this.resetDisplayedRows=this.displayedRows
  }
  )
  console.log(this.displayedRows);
}


  /* -------------------------------------------------------------------------- */
  /*                               Open Tests Modal                             */
  /* -------------------------------------------------------------------------- */

  /* -------------------------------------------------------------------------- */
  /*                              Display Selected tests                        */
  /* -------------------------------------------------------------------------- */

  displayTests() {
    this.testMangmentService.gettests().subscribe(data => {
      console.log(data);

      this.displayTestsRows = data
      for (let i = 0; i < this.displayTestsRows.length; i++) {
        this.displayTestsRows[i]["test"] = this.displayTestsRows[i].test,
          this.displayTestsRows[i]["type"] = this.displayTestsRows[i].type,
          this.displayTestsRows[i]["created"] = this.displayTestsRows[i].created
      }
      console.log(this.displayTestsRows);
      this.restTestsRows = this.displayTestsRows
    }
    )
  }



  onSelect({ selected }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }


  /* -------------------------------------------------------------------------- */
  /*                                Checkbox Display                            */
  /* -------------------------------------------------------------------------- */
  displayCheck(row) {
    return row.name !== 'Ethel Price';
  }
  
  /* -------------------------------------------------------------------------- */
  /*                            Tests Table Filtration                          */
  /* -------------------------------------------------------------------------- */
  updateTestsFilter(event) {
    const val = event.target.value;
    this.displayTestsRows = this.restTestsRows
    // filter our data
    let temp = this.displayTestsRows.filter(function (e) {
      return e["test"].includes(val)
    });

    // update the rows
    this.displayTestsRows = temp
    if (val == "") {
      this.displayTestsRows = this.restTestsRows
    }
    // Whenever the filter changes, always go back to the first page
    this.testsTable.offset = 0;
  }



  /* -------------------------------------------------------------------------- */
  /*                              Confirm Assign Tests                          */
  /* -------------------------------------------------------------------------- */
  confirmAssignTasks(event) {
    this.toster.success("Tests Assigned Successfully", '', {
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      closeButton: true
    })
    this.selected = []
    this.modalService.dismissAll()
  }

}

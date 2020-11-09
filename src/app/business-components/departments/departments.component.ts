import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Location } from "@angular/common";
import { DepartmentService } from 'services/department/department.service';
import { data } from 'app/shared/data/smart-data-table';
import { Observable, Subscription } from 'rxjs';
import { CountriesService } from 'services/candidate/countries.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
declare let swal: any;

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  subscription: Subscription;
  departmentForm: FormGroup;
  departmentEditForm: FormGroup;
  closeResult: string;
  editId
  rows = [];
  resetRows = [];
  temp = [];
  departmentList = []
  FilterPlaceHolder = 'Type to Filter ';
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryName;
  stateName;
  selectedjobData;
  filteredCountry;
  filteredCity;

  // Table Column Titles

  columns = [
    { prop: "name", name: "Department" },
    { prop: "country", name: "Country" },
    { prop: "city", name: "City" },
    { prop: "created", name: "Date" },
  ];
  @ViewChild(DatatableComponent) table: DatatableComponent;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private toster: ToastrService,
    private _location: Location,
    private departmenService: DepartmentService,
    private country: CountriesService,
    private http: HttpClient,

  ) { }

  ngOnInit(): void {
    this.getDepartments();
    this.getCountries();
    this.departmentForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        country: ["", Validators.required],
        city: ["", Validators.required],
      });
    this.departmentEditForm = this.formBuilder.group(
      {
        name: ["", Validators.required],
        country: ["", Validators.required],
        city: ["", Validators.required],
      });
  }

  /* -------------------------------------------------------------------------- */
  /*                                 Get Departments                            */
  /* -------------------------------------------------------------------------- */

  getDepartments() {
    this.departmenService.getDepartment().subscribe(
      (data) => {
        this.departmentList = data;
        this.rows = data;
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["name"] = this.rows[i]["name"];
          this.rows[i]["country"] = this.rows[i]["country"];
          this.rows[i]["city"] = this.rows[i]["city"];
          this.rows[i]["created"] = this.rows[i]["created"].slice(0,10);
        }
        this.resetRows = this.rows;
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                              Submit Modal Form                             */
  /* -------------------------------------------------------------------------- */
  
  onSubmit(form) {
    var objDepartment = {
      name: form.value.name,
      city: this.stateName,
      country: this.countryName,
      description: '',
    }

    this.departmenService.addDepartment(objDepartment).subscribe(
      (data) => {
        this.rows = data;
        this.resetRows = this.rows
        this.departmentList = data

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.getDepartments();
        this.departmentForm.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  goback() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                               Delete Department                            */
  /* -------------------------------------------------------------------------- */

  deleteDepartment(value) {
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
          'Job has been deleted.',
          'success'
        )
        this.departmenService.deleteDepartment(value._id).subscribe(
          (data) => {
            this.rows = data;
            this.departmentList = data
            this.getDepartments();
          },
          (err) => {
            this.toster.error("We Have Problem Please Try Again", "", {
              timeOut: 3000,
              positionClass: "toast-top-full-width",
              closeButton: true,
            });
          }
        );
      }
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                               Edit Despartment                             */
  /* -------------------------------------------------------------------------- */

  editDepartmentVal(selectedrow) {
    this.filteredCountry = this.countryInfo.find(x => {
      return x.CountryName == selectedrow.country
    });
    this.filteredCity = this.filteredCountry.States.find(x => {
      return x.StateName == selectedrow.city
    });
    this.editId = selectedrow._id;
    this.selectedjobData = selectedrow;
    this.departmentEditForm.patchValue({
      name: selectedrow.name,
      city: this.filteredCountry.States.indexOf(this.filteredCity),
      country: this.countryInfo.indexOf(this.filteredCountry),
    });

  }

  onSubmitEdit(form) {
    var objDepartmentEdit = {
      id: this.editId,
      name: form.value.name,
      city: this.stateName,
      country: this.countryName,
      description: '',
      created: form.value.created
    }

    this.departmenService.editDepartment(objDepartmentEdit).subscribe(
      (data) => {
        this.rows = data;
        this.resetRows = this.rows
        this.departmentList = data

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.getDepartments();
        this.departmentForm.reset();
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                               Get Countries                                */
  /* -------------------------------------------------------------------------- */

  // start select countries and city
  countryUrl: string = "https://raw.githubusercontent.com/sagarshirbhate/Country-State-City-Database/master/Contries.json";


  allCountries(): Observable<any> {
    return this.http.get(this.countryUrl);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  getCountries() {
    this.country.allCountries().
      subscribe(
        data2 => {
          this.countryInfo = data2.Countries;
        },
        err => console.log(err),
        () => console.log('complete')
      )
  }

  onChangeCountry(countryValue) {
    this.countryName = this.countryInfo[countryValue].CountryName
    this.stateInfo = this.countryInfo[countryValue].States;
    this.cityInfo = this.stateInfo[0].Cities;
  }

  onChangeState(stateValue) {
    this.cityInfo = this.stateInfo[stateValue].Cities;
    this.stateName = this.stateInfo[stateValue].StateName
  }

  /* -------------------------------------------------------------------------- */
  /*                                  Fillter                                   */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    this.rows = this.resetRows
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["name"].toUpperCase().includes(val.toUpperCase())|| e["name"].toLowerCase().includes(val.toLowerCase());
    });
    // update the rows
    this.rows = temp
    if (val == "") {
      this.rows = this.resetRows
    }
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  /* -------------------------------------------------------------------------- */
  /*                           Modal Functions start                            */
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


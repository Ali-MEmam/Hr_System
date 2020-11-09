import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
import { DatatableComponent } from "@swimlane/ngx-datatable";
import { ToastrService } from "ngx-toastr";
import { Location } from "@angular/common";
import { COMMA, ENTER, F } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { NgbTimepickerConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { TaskService } from '../.././../services/Tasks/task.service';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'services/user-managment-services/user.service';
import { map, startWith } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent, MatAutocomplete } from '@angular/material/autocomplete';
import Swal from 'sweetalert2';
import { Observable } from 'rxjs';

declare let swal: any;

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  visible = true;
  selectable = true;
  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  filteredFruits: Observable<string[]>;
  fruits: string[] = ['Lemon'];
  allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;






  // visible = true;
  // selectable = true;
  // removable = true;
  // separatorKeysCodes: number[] = [ENTER, COMMA];
  // filteredFruits: Observable<string[]>;
  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  // @ViewChild('assignInput') assignInput: ElementRef<HTMLInputElement>;
  // @ViewChild('auto') matAutocomplete: MatAutocomplete;


  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private toster: ToastrService,
    private _location: Location,
    config: NgbTimepickerConfig,
    private TaskService: TaskService,
    private UserService: UserService,
  ) {
    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allFruits.slice()));
    config.seconds = false;
    config.spinners = false;
  }
  numEmail = [];
  numCall = [];
  numMeeting = [];
  numInterview = [];
  numOther = [];
  rows = [];
  resetRows = [];
  temp = [];
  TaksList = []
  FilterPlaceHolder = 'Type to Filter ';
  closeResult: string;
  addTask: FormGroup;
  editTask: FormGroup;
  taskId;
  editId;
  currentUserId;
  userName;
  selectedTaskData;
  taskDetails;
  addNewTask = {};
  assignTo = [];

  // visible = true;
  // selectable = true;
  // removable = true;


  addOnBlur = true;
  timeFrom: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };
  timeTo: NgbTimeStruct = { hour: 13, minute: 30, second: 0 };

  // readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  @ViewChild(DatatableComponent) table: DatatableComponent;

  ngOnInit(): void {
    this.getUserId();
    this.getUserName();
    this.getAllUser();
    this.getAllTasks();


    this.addTask = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'assign_to': new FormControl(null, [Validators.required]),
      'related_to': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'timeFrom': new FormControl(null, [Validators.required]),
      'timeTo': new FormControl(null, [Validators.required]),
      'url': new FormControl(null),
      'importance': new FormControl(null, [Validators.required]),
    });

    this.filteredUsers = this.addTask.controls['assign_to'].valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => fruit ? this._filter(fruit) : this.allUser.slice()));
    console.log(this.filteredUsers)


    this.editTask = new FormGroup({
      'title': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'description': new FormControl(null, [Validators.required]),
      'assign_to': new FormControl(null, [Validators.required]),
      'related_to': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'timeFrom': new FormControl(null, [Validators.required]),
      'timeTo': new FormControl(null, [Validators.required]),
      'url': new FormControl(null),
      'importance': new FormControl(null, [Validators.required]),
    });
  }

  /* -------------------------------------------------------------------------- */
  /*                         get username who create Task                       */
  /* -------------------------------------------------------------------------- */
  filteredUsers: Observable<string[]>;
  allUser;
  getUserId() {
    this.currentUserId = window.localStorage.getItem("userId");
    console.log("user_id = " + this.currentUserId);
  }

  getUserName() {
    this.userName = window.sessionStorage.getItem('username');
    console.log("user_name = " + this.userName);
  }

  getAllUser() {
    this.UserService.getMembers().subscribe(data => {
      this.filteredUsers = data.map(user => user.username)
      console.log(this.filteredUsers)
      this.allUser = this.filteredUsers;
    })
  }

  /* -------------------------------------------------------------------------- */
  /*                                   get Task                                 */
  /* -------------------------------------------------------------------------- */

  // Table Column Titles
  columns = [
    { prop: "Type" },
    { prop: "Title" },
    { prop: "Date" },
    { prop: "Time" },
    { prop: "duration" },
  ];

  checkTasksInfo(type) {
    const val = type;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["Type"].toLowerCase().includes(val.toLowerCase());
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
  showUrl;
  getType(value) {
    console.log(value)
    if (value == 'Interview' || value == 'Meeting') {
      this.showUrl = value;
    } else {
      this.showUrl = undefined;
    }
  }


  getAllTasks() {
    this.TaskService.getTasks(this.userName).subscribe(
      (data) => {
        console.log(data);
        this.TaksList = data;
        this.resetRows = this.rows
        this.rows = data;
        for (let i = 0; i < this.rows.length; i++) {
          this.rows[i]["Type"] = this.rows[i]["type_task"];
          this.rows[i]["Title"] = this.rows[i]["title"];
          this.rows[i]["Date"] = this.rows[i]["date"]["day"] + " - " + this.rows[i]["date"]["month"] + " - " + this.rows[i]["date"]["year"];
          this.rows[i]["Time"] = this.rows[i]["time_from"]["hour"] + ":" + this.rows[i]["time_from"]["minute"] + " - " + this.rows[i]["time_to"]["hour"] + ":" + this.rows[i]["time_to"]["minute"];
          this.rows[i]["Location"] = this.rows[i]["city"] + " - " + this.rows[i]["country"];
          switch (this.rows[i]["type_task"]) {
            case "Email":
              this.numEmail.push(this.rows[i]);
              break;
            case "Call":
              this.numCall.push(this.rows[i]);
              break;
            case "Meeting":
              this.numMeeting.push(this.rows[i]);
              console.log(this.numMeeting.length)
              break;
            case "Interview":
              this.numInterview.push(this.rows[i]);
              break;
            case "Other":
              this.numOther.push(this.rows[i]);
              break;
          }
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
  /*                                   delete Task                              */
  /* -------------------------------------------------------------------------- */

  deleteTask(row) {
    // console.log(data);
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
          'task has been deleted.',
          'success'
        )
        this.TaskService.deleteTask(row._id).subscribe(
          (data) => {
            console.log(data);
            this.numEmail = [];
            this.numCall = [];
            this.numMeeting = [];
            this.numInterview = [];
            this.numOther = [];
            this.getAllTasks();
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
  /*                          display tasks Details                             */
  /* -------------------------------------------------------------------------- */

  viewtaskDetails(row) {
    this.TaskService.getTaskById(row._id).subscribe(
      (data) => {
        console.log(data);
        this.taskDetails = data;

        if (this.taskDetails.type_task == 'Meeting' || this.taskDetails.type_task == 'Interview') {
          this.showUrl = this.taskDetails.type_task;
        } else {
          this.showUrl = undefined;
        }
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
  /*                                   Add Task                                 */
  /* -------------------------------------------------------------------------- */

  clearData() {
    this.addTask.patchValue({
      assign_to: "",
    });
    this.assignTo = [];
  }
  onSubmit(addTask) {
    console.log(addTask);
    this.addNewTask = {
      title: addTask.value.title,
      type_task: addTask.value.type,
      description: addTask.value.description,
      assign_to: this.assignTo,
      related_to: addTask.value.related_to,
      date: addTask.value.date,
      time_from: addTask.value.timeFrom,
      time_to: addTask.value.timeTo,
      links: addTask.value.url,
      importance: addTask.value.importance,
      // username: this.userName
    };

    this.TaskService.createTask(this.addNewTask).subscribe(
      (data) => {
        console.log(data);
        this.rows = data;
        this.resetRows = this.rows;

        this.toster.success("Note added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.numEmail = [];
        this.numCall = [];
        this.numMeeting = [];
        this.numInterview = [];
        this.numOther = [];
        this.getAllTasks();
        addTask.reset();
        this.assignTo = [];
        this.modalService.dismissAll();
      },
      (err) => {
        this.toster.error("We Have Problem Please Try Again", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.goback();
      }
    );
  }

  goback() {
    this._location.back();
  }

  /* -------------------------------------------------------------------------- */
  /*                                Add Assign To                               */
  /* -------------------------------------------------------------------------- */

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.fruits.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.fruitCtrl.setValue(null);
  }

  remove(fruit: string): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.fruits.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allFruits.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  }

  
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our fruit
  //   if ((value || '').trim()) {
  //     this.assignTo.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }

  //   this.addTask.controls['assign_to'].setValue(null);
  // }

  // remove(fruit: string): void {
  //   const index = this.assignTo.indexOf(fruit);

  //   if (index >= 0) {
  //     this.assignTo.splice(index, 1);
  //   }
  // }

  // selected(event: MatAutocompleteSelectedEvent): void {
  //   this.assignTo.push(event.option.viewValue);
  //   this.assignInput.nativeElement.value = '';
  //   this.addTask.controls['assign_to'].setValue(null);
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.allUser.filter(fruit => fruit.toLowerCase().indexOf(filterValue) === 0);
  // }


  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our skill
  //   if ((value || '').trim()) {
  //     this.assignTo.push(value.trim());
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  //   console.log(this.assignTo);
  // }

  // remove(skill): void {
  //   const index = this.assignTo.indexOf(skill);

  //   if (index >= 0) {
  //     this.assignTo.splice(index, 1);
  //   }
  //   console.log(this.assignTo);
  // }


  /* -------------------------------------------------------------------------- */
  /*                                  Edit Task                                 */
  /* -------------------------------------------------------------------------- */

  EditTaskVal(selectedrow) {
    console.log(selectedrow)
    if (selectedrow.type_task == 'Meeting' || selectedrow.type_task == 'Interview') {
      this.showUrl = selectedrow.type_task;
    } else {
      this.showUrl = undefined;
    }
    this.editId = selectedrow._id;
    this.selectedTaskData = selectedrow;
    this.assignTo = selectedrow.assign_to;
    // this.TaskService.getTaskById(this.editId).subscribe(data => {
    //   console.log(data);
    //   this.selectedTaskData = data;
    //   this.assignTo = data.assign_to
    // })

    this.editTask.patchValue({
      title: this.selectedTaskData.title,
      type: this.selectedTaskData.type_task,
      description: this.selectedTaskData.description,
      assign_to: this.assignTo,
      related_to: this.selectedTaskData.related_to,
      date: this.selectedTaskData.date,
      timeFrom: this.selectedTaskData.time_from,
      timeTo: this.selectedTaskData.time_to,
      url: this.selectedTaskData.links,
      importance: this.selectedTaskData.importance
    });
  }

  onSubmitEdit(form) {
    console.log(form);
    var taskEditObj = {
      // id: this.editId,
      title: form.value.title,
      type_task: form.value.type,
      description: form.value.description,
      assign_to: this.assignTo,
      related_to: form.value.related_to,
      date: form.value.date,
      time_from: form.value.timeFrom,
      time_to: form.value.timeTo,
      links: form.value.url,
      importance: form.value.importance,
      username: this.userName
    };
    console.log(taskEditObj);

    this.TaskService.updateTask(this.editId, taskEditObj).subscribe(
      (data) => {
        console.log(data);
        this.rows = data;
        this.resetRows = data;

        this.toster.success(" added successfully", "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
        this.numEmail = [];
        this.numCall = [];
        this.numMeeting = [];
        this.numInterview = [];
        this.numOther = [];
        this.getAllTasks();
        this.editTask.reset();
        this.assignTo = [];
        this.modalService.dismissAll();
      },
      (err) => {
        console.log(err);
        this.toster.error(err.message, "", {
          timeOut: 3000,
          positionClass: "toast-top-full-width",
          closeButton: true,
        });
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                              filter Tasks                                  */
  /* -------------------------------------------------------------------------- */

  updateFilter(event) {
    const val = event.target.value;
    console.log(val);

    this.rows = this.resetRows;
    // filter our data
    let temp = this.rows.filter(function (e) {
      return e["title"].toUpperCase().includes(val.toUpperCase()) || e["title"].toLowerCase().includes(val.toLowerCase());
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
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { TestMangmentService } from '../../../../../services/test-mangment/test-mangment.service';
import { flatMap } from "rxjs/operators";
import { Location } from "@angular/common";
import { RoleService } from "services/user-managment-services/role.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-single-test",
  templateUrl: "./single-test.component.html",
  styleUrls: ["./single-test.component.scss"],
})
export class SingleTestComponent implements OnInit {
  data;
  allRoles = [];
  id = "1";
  questionsForm = [];

  /* -------------------------------------------------------------------------- */
  /*                                 Constructor                                */
  /* -------------------------------------------------------------------------- */

  constructor(
    private route: ActivatedRoute,
    private testMangmentService: TestMangmentService,
    private rolesServerice: RoleService,
    private _location: Location,
    private toster: ToastrService,

  ) {}

  /* -------------------------------------------------------------------------- */
  /*                             ngOnInit LifeCycle                             */
  /* -------------------------------------------------------------------------- */
  ngOnInit(): void {
    
    this.testMangmentService.gettestById(this.route.snapshot.params["id"]).subscribe(
      (data) => {
        console.log(data);
        this.data = data;
      this.questionsForm = this.data.questions
            console.log(this.questionsForm);
      },
      (err) => {
        console.log("not comming");
      }
    );
  }

  /* -------------------------------------------------------------------------- */
  /*                            Go Back To last Page                            */
  /* -------------------------------------------------------------------------- */

  goback() {
    this._location.back();
  }
}

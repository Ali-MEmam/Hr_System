import { Component, OnInit } from '@angular/core';
import { AuthService } from 'services/core-services/authentication-services/auth.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-candidate-header',
  templateUrl: './candidate-header.component.html',
  styleUrls: ['./candidate-header.component.scss']
})
export class CandidateHeaderComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout().subscribe(
      (data) => {
        console.log(data);
        console.log("----------logout-------");
        this.auth.removelogoutToken().subscribe(
          (data) => {
            console.log("---------logout-refreeeeeeeesh-Token---------");
            // window.sessionStorage.removeItem("token");
            // window.sessionStorage.removeItem("refresh_token");
            // window.sessionStorage.removeItem("id");
            // window.sessionStorage.removeItem("UserName");
            // window.sessionStorage.removeItem("CompanyId");
            this.router.navigate([""]);
            console.log(data);
          }, (error) => {
            console.log(error);
          })
      }, (error) => {
        console.log(error);
      })
  }
}

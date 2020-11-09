import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-candidate-dashboard",
  templateUrl: "./candidate-dashboard.component.html",
  styleUrls: ["./candidate-dashboard.component.scss"],
})
export class CandidateDashboardComponent implements OnInit {
  constructor(private currentRoute: ActivatedRoute) {}
  CurrentUser;
  ngOnInit(): void {
    this.CurrentUser = this.currentRoute.parent.parent.snapshot.params["id"];
  }
}

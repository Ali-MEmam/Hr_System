import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ResultOfPreselectingService } from "services/screening/result-of-preselecting.service";
import { flatMap } from "rxjs/operators";
import { Location } from "@angular/common";
import { RoleService } from "services/user-managment-services/role.service";
import { ToastrService } from "ngx-toastr";
import * as chartsData from "../../../../shared/data/chartjs";

@Component({
  selector: "app-statistic-of-matching",

  templateUrl: "./statistic-of-matching.component.html",
  styleUrls: ["./statistic-of-matching.component.scss"],
})
export class StatisticOfMatchingComponent implements OnInit {
  id = "3";
  data;

  constructor(
    private route: ActivatedRoute,
    private resultOfPreselectingService: ResultOfPreselectingService,
    private rolesServerice: RoleService,
    private _location: Location,
    private toster: ToastrService
  ) {}

  ngOnInit(): void {
    this.displayProfiles();
  }
  displayProfiles() {
    this.resultOfPreselectingService
      .getPreselectingListById(this.id)
      .subscribe((data) => {
        this.data = data;
        // for (let i = 0; i < this.displayedRows.length; i++) {
        //   this.displayedRows[i]["full_name"] = this.displayedRows[i] ["full_name"]
        //   }
        // console.log(this.displayedRows);
        // this.resetDisplayedRows=this.displayedRows
      });
  }
  // lineChart
  public lineChartData = chartsData.lineChartData;
  public lineChartLabels = chartsData.lineChartLabels;
  public lineChartOptions = chartsData.lineChartOptions;
  public lineChartColors = chartsData.lineChartColors;
  public lineChartLegend = chartsData.lineChartLegend;
  public lineChartType = chartsData.lineChartType;

  // barChart
  public statisticOfMatchingbarChartOptions = chartsData.barChartOptions;
  public statisticOfMatchingbarChartLabels = chartsData.barChartLabels;
  public statisticOfMatchingbarChartType = chartsData.barChartType;
  public statisticOfMatchingbarChartLegend = chartsData.barChartLegend;
  public statisticOfMatchingbarChartData = chartsData.barChartData;
  public statisticOfMatchingbarChartColors = chartsData.barChartColors;

  // events
  public chartClicked(e: any): void {
    //your code here
  }

  public chartHovered(e: any): void {
    //your code here
  }

  goback() {
    this._location.back();
  }
}

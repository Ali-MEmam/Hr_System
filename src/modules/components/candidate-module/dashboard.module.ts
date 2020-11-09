import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModuel } from "../../../routing/candidate-routing/dashboard-routing.module";
import { RouterModule } from "@angular/router";
import { CandidateDashboardComponent } from "../../../app/candidate-components/candidate-dashboard/candidate-dashboard.component";
@NgModule({
  declarations: [CandidateDashboardComponent],
  imports: [CommonModule, DashboardRoutingModuel, RouterModule],
})
export class DashboardModuel {}

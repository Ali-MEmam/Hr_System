import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FirstContactRoutingModuel } from "../../../routing/candidate-routing/first-contact-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListUsersRoutingModule } from "routing/user-managment-routing/list-users-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FirstContactComponent } from "app/candidate-components/list-of-assessments/first-contact/first-contact.component";
// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [FirstContactComponent],
  imports: [
    CommonModule,
    FirstContactRoutingModuel,
    NgbModule,
    ListUsersRoutingModule, 
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      maxPercent: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#e59a12",
      outerStrokeGradient:false,
      innerStrokeColor: "transparent",
      animationDuration: 600,
      clockwise: true,
      showBackground: false,
      showTitle: true,
      showUnits: true,
      showSubtitle: false,
      unitsFontSize: "40",
      titleFontSize :'40',
      titleColor :'#e59a12',
      unitsColor:"#e59a12",
      // outerStrokeLinecap : "inherit"
    }),
  ],
})
export class FirstContactModuel {}

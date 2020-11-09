import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ListOfAssessmentsRoutingModuel } from "../../../routing/candidate-routing/list-of-assessment-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { ListUsersRoutingModule } from "routing/user-managment-routing/list-users-routing.module";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ListOfAssessmentsComponent } from "app/candidate-components/list-of-assessments/list-of-assessments.component";
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [ListOfAssessmentsComponent],
  imports: [
    CommonModule,
    ListOfAssessmentsRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    ListUsersRoutingModule,
    FlexLayoutModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      maxPercent: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      showInnerStroke:false,
      outerStrokeColor: "#e59a12",
      outerStrokeGradient:false,
      animationDuration: 600,
      clockwise: true,
      showBackground: false,
      showTitle: true,
      showUnits: true,
      showSubtitle: false,
      unitsFontSize: "40",
      titleFontSize :'40',
      titleColor :'#fff',
      unitsColor:"#fff",
      // outerStrokeLinecap : "inherit"
    }),
  ],
})
export class ListOfAssessmentsModuel {}

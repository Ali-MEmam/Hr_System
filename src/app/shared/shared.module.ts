import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";

//COMPONENTS
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotificationSidebarComponent } from "./notification-sidebar/notification-sidebar.component";
import { CandidateHeaderComponent } from "./candidate-header/candidate-header.component";
import { CandidateSidebarComponent } from "./candidate-sidebar/candidate-sidebar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

//DIRECTIVES
import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";
import { SidebarDirective } from "./directives/sidebar.directive";
import { SidebarLinkDirective } from "./directives/sidebarlink.directive";
import { SidebarListDirective } from "./directives/sidebarlist.directive";
import { SidebarAnchorToggleDirective } from "./directives/sidebaranchortoggle.directive";
import { SidebarToggleDirective } from "./directives/sidebartoggle.directive";

// import { CandidateNewSidebarComponent } from './candidate-new-sidebar/candidate-new-sidebar/candidate-new-sidebar.component';

// import { CandidateHeaderComponent } from './candidate-header/candidate-header.component';
// import { CandidateSidebarComponent } from './candidate-sidebar/candidate-sidebar.component';

@NgModule({
  exports: [
    CommonModule,
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CandidateHeaderComponent,
    CandidateSidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    NgbModule,
    TranslateModule,
  ],
  imports: [
    FormsModule, ReactiveFormsModule,
    RouterModule,
    CommonModule,
    NgbModule,
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
    TranslateModule,
    PerfectScrollbarModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    SidebarComponent,
    CandidateHeaderComponent,
    CandidateSidebarComponent,
    NotificationSidebarComponent,
    ToggleFullscreenDirective,
    SidebarDirective,
    SidebarLinkDirective,
    SidebarListDirective,
    SidebarAnchorToggleDirective,
    SidebarToggleDirective,
    // CandidateStepsSidebarComponent,
    // CandidateStepsNavbarComponent,
    // CandidateNewSidebarComponent,
  ],
})
export class SharedModule {}

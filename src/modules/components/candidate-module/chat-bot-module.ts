import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { chatBootRoutingModuel } from 'routing/candidate-routing/chat-boot-routing';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ChatBootComponent } from 'app/candidate-components/chat-boot/chat-boot.component';

@NgModule({
  declarations: [ChatBootComponent],
  imports: [
    CommonModule,
    chatBootRoutingModuel,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    FlexLayoutModule,
  ],
})
export class chatBootModuel {}
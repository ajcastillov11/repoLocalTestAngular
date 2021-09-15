import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';


@NgModule({
  declarations: [
    MessagesFormComponent,
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule
  ]
})
export class MessagesModule { }

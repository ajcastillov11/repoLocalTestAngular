import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesFormComponent } from './messages-form/messages-form.component';
import { MessagesListComponent } from './messages-list/messages-list.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'messagesList', component: MessagesListComponent
      },
      {
        path: 'messagesForm', component: MessagesFormComponent
      },
      {
        path: '**', redirectTo: 'messagesList'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }

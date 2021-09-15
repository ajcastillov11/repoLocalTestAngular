import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'messages', component: MessageComponent
      },
      {
        path: '**', redirectTo: 'messages'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }

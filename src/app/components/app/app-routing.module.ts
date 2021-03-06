import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'messages',
    loadChildren: () => import('../messages/messages.module').then(msg => msg.MessagesModule)
  },
  {
    path: '**', redirectTo: 'messages'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

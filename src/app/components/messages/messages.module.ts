import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';

import { MessageComponent } from './message/message.component';
import { EditarComponent } from './message/modales/editar/editar.component';
import { NuevoComponent } from './message/modales/nuevo/nuevo.component';
import { EliminarComponent } from './message/modales/eliminar/eliminar.component';
import { SharedModule } from 'src/app/modules/common/compartida.module';


@NgModule({
  declarations: [
    MessageComponent,
    EditarComponent,
    NuevoComponent,
    EliminarComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ]
})
export class MessagesModule { }

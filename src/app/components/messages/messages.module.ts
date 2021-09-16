import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';

import { MessageComponent } from './message/message.component';
import { SharedModule } from 'src/app/modules/common/compartida.module';
import { NuevoMensajeComponent } from './message/modales/nuevo/nuevo-mensaje.component';
import { EliminarMensajeComponent } from './message/modales/eliminar/eliminar-mensaje.component';
import { EditarMensajeComponent } from './message/modales/editar/editar-mensaje.component';


@NgModule({
  declarations: [
    MessageComponent,
    NuevoMensajeComponent,
    EliminarMensajeComponent,
    EditarMensajeComponent,
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    SharedModule
  ]
})
export class MessagesModule { }

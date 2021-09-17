import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageModel, tipoMessage } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  listMessages: MessageModel[] = [
    {
      id: 1,
      codigo: 'msj500',
      mensaje: 'mensaje 0001',
      tipo: 1
    },
    {
      id: 2,
      codigo: 'msj1500',
      mensaje: 'mensaje 0002',
      tipo: 2
    },
    {
      id: 3,
      codigo: 'msj1600',
      mensaje: 'mensaje 0003',
      tipo: 2
    },
    {
      id: 4,
      codigo: 'msj1800',
      mensaje: 'mensaje 0004',
      tipo: 3
    },
    {
      id: 5,
      codigo: 'msj5500',
      mensaje: 'mensaje 0005',
      tipo: 3
    },
    {
      id: 6,
      codigo: 'msj6600',
      mensaje: 'mensaje 0006',
      tipo: 2
    },
  ];

  listTipoMensaje: tipoMessage[] = [
    {
      id: 1,
      tipoMensaje: 'Informativo'
    },
    {
      id: 2,
      tipoMensaje: 'Error'
    },
    {
      id: 3,
      tipoMensaje: 'Otro'
    },
  ];

  getListTiposMensajes(): tipoMessage[] {
    return this.listTipoMensaje;
  }

  getTipoMensaje(id: number) {

  }

  getMessages(): MessageModel[] {
    return this.listMessages;
  }

  updateMessage(data: MessageModel): void {
    console.log('Actualizado');
    console.log(data);
  }

  addMessage(data: MessageModel): void {
    console.log(data);
  }


  deleteMessage(id: number) {
    console.log('Eliminado ' + id);
  }

}

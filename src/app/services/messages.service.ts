import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message, tipoMessage } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(private http: HttpClient) { }

  listMessages: Message[] = [
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
}

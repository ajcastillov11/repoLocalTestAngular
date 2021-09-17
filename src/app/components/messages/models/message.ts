import { IMessages } from "../interfaces/imessages";

export class MessageModel implements IMessages {
    id: number = 0;
    codigo: string = '';
    mensaje: string = '';
    tipo: number = 0;
}


export class tipoMessage {
    id: number = 0;
    tipoMensaje: string = '';
}


import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageModel } from 'src/app/components/messages/models/message';
import { MessagesService } from 'src/app/components/messages/services/messages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-eliminar-mensaje',
  templateUrl: './eliminar-mensaje.component.html',
  styleUrls: ['./eliminar-mensaje.component.css']
})
export class EliminarMensajeComponent implements OnInit {

  data: MessageModel | any;

  constructor(public dialogRef: MatDialogRef<EliminarMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public Datos: any,
    private servive: MessagesService) { }

  ngOnInit(): void {
    this.data = this.Datos.row;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.servive.deleteMessage(this.data.id);
    Swal.fire({
      title: 'Mensaje eliminado!',
      text: 'El mensaje '+ this.data.codigo +' ha sido eliminado correctamente! ',
      position: 'top-end',
      icon: 'info',
      showConfirmButton: false,
      timer: 1500
    });
  }

}

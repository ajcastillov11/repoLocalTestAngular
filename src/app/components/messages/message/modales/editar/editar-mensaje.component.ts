import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageModel, tipoMessage } from 'src/app/components/messages/models/message';
import { MessagesService } from 'src/app/components/messages/services/messages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-mensaje',
  templateUrl: './editar-mensaje.component.html',
  styleUrls: ['./editar-mensaje.component.css']
})
export class EditarMensajeComponent implements OnInit {

  data: MessageModel | any;
  tiposMensajes: tipoMessage[] = [];

  constructor(public dialogRef: MatDialogRef<EditarMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public datos: any,
    private servive: MessagesService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
      '';
  }

  confirmUpdate(): void {
    this.servive.updateMessage(this.data);
    Swal.fire({
      title: 'Mensaje modificado!',
      text: 'El mensaje ha sido actualizado correctamente! ',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });
  }

  ngOnInit(): void {
    this.data = this.datos.row;
    this.tiposMensajes = this.servive.getListTiposMensajes();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

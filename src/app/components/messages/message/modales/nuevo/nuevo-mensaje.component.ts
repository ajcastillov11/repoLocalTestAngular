import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MessageModel, tipoMessage } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-nuevo-mensaje',
  templateUrl: './nuevo-mensaje.component.html',
  styleUrls: ['./nuevo-mensaje.component.css']
})
export class NuevoMensajeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NuevoMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageModel,
    public httpService: MessagesService) { }

    tiposMensajes: tipoMessage[] = [];

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
      this.formControl.hasError('email') ? 'No es un email valido' :
        '';
  }


  
  ngOnInit(): void {
    this.tiposMensajes = this.httpService.getListTiposMensajes();
  }


  onNoClick():void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.httpService.addMessage(this.data);
    Swal.fire({
      title: 'Mensaje guardado!',
      text: 'El mensaje ha sido registrado correctamente! ',
      icon: 'success',
      confirmButtonText: 'Aceptar',
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500
    });
  }

}

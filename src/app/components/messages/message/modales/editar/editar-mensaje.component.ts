import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MessageModel } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-editar-mensaje',
  templateUrl: './editar-mensaje.component.html',
  styleUrls: ['./editar-mensaje.component.css']
})
export class EditarMensajeComponent implements OnInit {

  data: MessageModel | any;

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
  }

  ngOnInit(): void {
    this.data = this.datos.row;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

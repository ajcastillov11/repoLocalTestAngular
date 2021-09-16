import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { MessageModel } from 'src/app/models/message';
import { MessagesService } from 'src/app/services/messages.service';

@Component({
  selector: 'app-nuevo-mensaje',
  templateUrl: './nuevo-mensaje.component.html',
  styleUrls: ['./nuevo-mensaje.component.css']
})
export class NuevoMensajeComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NuevoMensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MessageModel,
    public httpService: MessagesService) { }

  formControl = new FormControl('', [
    Validators.required
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Campo Requerido' :
      this.formControl.hasError('email') ? 'No es un email valido' :
        '';
  }


  submit(){

  }

  ngOnInit(): void {
  }


  onNoClick():void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.httpService.addMessage(this.data);
  }

}

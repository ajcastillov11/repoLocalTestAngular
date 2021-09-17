import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/components/messages/services/messages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageModel } from 'src/app/components/messages/models/message';
import { MatDialog } from '@angular/material/dialog';
import { NuevoMensajeComponent } from './modales/nuevo/nuevo-mensaje.component';
import { EditarMensajeComponent } from './modales/editar/editar-mensaje.component';
import { EliminarMensajeComponent } from './modales/eliminar/eliminar-mensaje.component';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'codigo', 'mensaje', 'tipo', 'actions'];
  dataSource: MatTableDataSource<MessageModel> | any;

  listMessages : MessageModel[] = [];
 

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    public _service: MessagesService,
    public dialog: MatDialog,
  ) {
    
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.listMessages);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
  this.reloadList();  
  }

  reloadList(){
    this.listMessages = this._service.getMessages();
    this.dataSource.data = this.listMessages;
  }

  addNew(): void {
    const dialogRef = this.dialog.open(NuevoMensajeComponent, {
      width: '60%',
       data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Proceso realizado!');
        this.reloadList(); 

      }
    });
  }

  startEdit(row: MessageModel) {
    const dialogRef = this.dialog.open(EditarMensajeComponent, {
      width: '60%',
      data: { row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Proceso realizado!');
        this.reloadList(); 
      }
    });
  }

  deleteItem(row: MessageModel) {
    const dialogRef = this.dialog.open(EliminarMensajeComponent, {
      width: '60%',
      data: { row }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Proceso realizado!');
        this.reloadList(); 
      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

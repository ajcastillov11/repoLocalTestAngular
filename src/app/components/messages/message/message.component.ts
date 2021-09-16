import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MessagesService } from 'src/app/services/messages.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MessageModel } from 'src/app/models/message';
import { MatDialog } from '@angular/material/dialog';
import { NuevoMensajeComponent } from './modales/nuevo/nuevo-mensaje.component';


const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Gabriel Se tira el codigo', 'Elizabeth'
];


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'codigo', 'mensaje', 'tipo', 'actions'];
  dataSource: MatTableDataSource<MessageModel> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    private _service: MessagesService,
    public dialog: MatDialog,
    ) {
    // Carga Lista Mensajes
    const listMensajes = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(listMensajes);
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {

  }

  addNew(): void {
    const dialogRef = this.dialog.open(NuevoMensajeComponent, {
      width: '70%',
      //height: '70%',
      data: { }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('Proceso realizado!');
      }
    });
  }

  startEdit(id: number, nombre: string, mensaje: string) {
    console.log('Actualiza ' + id);
  }

  deleteItem(id: number, nombre: string, mensaje: string) {
    console.log('Elimina ' + id);
  }

  refresh() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}


/** Builds and returns a new User. */
function createNewUser(id: number): MessageModel {
  const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' + NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0);

  return {
    id: id,
    codigo: name,
    mensaje: name,
    tipo: Math.round(Math.random() * 100)
  };
}

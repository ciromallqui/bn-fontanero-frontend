import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material';

@Component({
  selector: 'app-emergencia',
  templateUrl: './emergencia.component.html',
  styleUrls: ['./emergencia.component.css']
})
export class EmergenciaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EmergenciaComponent>,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

  cerrar(){
    this.dialogRef.close({ data: null, estado: "CERRAR" });
  }

}

import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { EmergenciaComponent } from '../emergencia/emergencia.component';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  quienesSomos: boolean;
  catalogo: boolean;
  servicio: boolean;
  emergencia: boolean;
  cotizacion: boolean;

  casco: boolean = true;

  ngOnInit() {
    this.mostrarDialogo({});
  }

  facebook(){
    window.open('https://www.facebook.com/', '_blank');
  }

  youtube(){
    window.open('https://www.youtube.com/watch?v=x0j08Q_c0hI', '_blank');
  }

  twitter(){
    window.open('https://twitter.com/', '_blank');
  }

  instagram(){
    window.open('https://www.instagram.com/accounts/login/?hl=es-la', '_blank');
  }

  onClickCatalogo(){
    window.open('https://elbuenfontanero.000webhostapp.com/assets/catalogo.html', '_blank');
  }

  onClickReclamo(){
    window.open('https://elbuenfontanero.000webhostapp.com/assets/reclamo.html', '_blank');
  }

  onClickUnete(){
    window.open('https://elbuenfontanero.000webhostapp.com/assets/unete.html', '_blank');
  }

  onCLickDireccion(){
    window.open('https://www.google.com/maps/place/Plaza+De+Armas+Huaraz/@-9.528577,-77.5240683,16.09z/data=!4m21!1m15!4m14!1m6!1m2!1s0x91a90d0e2fd69969:0x89950cf26668d6be!2sHuaraz!2m2!1d-77.5287792!2d-9.5261154!1m6!1m2!1s0x9105c8137c30393f:0x5268cb2b1c4b162b!2sMiraflores!2m2!1d-77.0315913!2d-12.111062!3m4!1s0x91a90d10123aadab:0xecbc2f3bde900d17!8m2!3d-9.5297762!4d-77.5283061', '_blank');
  }

  onClickEmergencia(){

  }

  onClickIngresar(){
    
  }

  mostrarDialogo(params) {
    const dialogRef = this.dialog.open(EmergenciaComponent, {
      width: '850px',
      height: '100px',
      panelClass: "xs-dlg-base",
      disableClose: true,
      data: params,
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}

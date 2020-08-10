import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ExploreComponent implements OnInit {

  constructor() { }

  quienesSomos: boolean;
  catalogo: boolean;
  servicio: boolean;
  emergencia: boolean;
  cotizacion: boolean;

  casco: boolean = true;

  ngOnInit() {
    console.log(screen.width);
  }

  facebook(){
    console.log("FACEBOOK");
  }

  youtube(){
    console.log("YOUTUBE");
  }

  onClickQS(){
    this.servicio = false;
    this.catalogo = false;
    this.emergencia = false;
    this.quienesSomos = true;
  }

  onClickCatalogo(){
    this.servicio = false;
    this.quienesSomos = false;
    this.emergencia = false;
    this.catalogo = true;
  }

  onClickServicio(){
    this.quienesSomos = false;
    this.catalogo = false;
    this.emergencia = false;
    this.servicio = true;
  }

  onClickEmergencia(){
    this.quienesSomos = false;
    this.catalogo = false;
    this.servicio = false;
    this.emergencia = true
  }

  onClickIngresar(){
    this.casco = false;
    this.cotizacion = true;
  }
}

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

  onClickCatalogo(){
    
  }

  onClickServicio(){
    
  }

  onClickEmergencia(){

  }

  onClickIngresar(){
    
  }
}

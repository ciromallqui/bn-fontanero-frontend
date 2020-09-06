import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { ExploreComponent } from './plugins/explore/explore.component';
import { QuienesSomosComponent } from './plugins/quienes-somos/quienes-somos.component';
import { CatalogoMaterialComponent } from './plugins/catalogo-material/catalogo-material.component';
import { NuestroServicioComponent } from './plugins/nuestro-servicio/nuestro-servicio.component';
import { EmergenciaComponent } from './plugins/emergencia/emergencia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ExploreComponent,
    QuienesSomosComponent,
    CatalogoMaterialComponent,
    NuestroServicioComponent,
    EmergenciaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    MatTabsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  entryComponents: [
    EmergenciaComponent
  ],
  providers: [
    {provide: "BASE_URL", useFactory: getBaseUrl}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}

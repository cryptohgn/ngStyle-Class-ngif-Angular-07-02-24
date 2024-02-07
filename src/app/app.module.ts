import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EstilosComponent } from './componentes/estilos/estilos.component';
import { ClasesComponent } from './componentes/clases/clases.component';
import { CondicionalComponent } from './componentes/condicional/condicional.component';

@NgModule({
  declarations: [
    AppComponent,
    EstilosComponent,
    ClasesComponent,
    CondicionalComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

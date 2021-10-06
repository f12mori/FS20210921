import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemosComponent } from './demos/demos.component';
import { FormsModule } from '@angular/forms';
import { ElipsisPipe } from './compartidos/cadenas.pipe';
import { SizerComponent } from './compartidos/sizer.component';
import { DinamicoComponent } from './dinamico/dinamico.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LOCATION_INITIALIZED } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemosComponent,
    ElipsisPipe,
    SizerComponent,
    DinamicoComponent,
    CalculadoraComponent,
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
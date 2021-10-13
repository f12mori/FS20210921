import { Component, ComponentRef, OnInit } from '@angular/core';
import { CalculadoraComponent } from '../calculadora/calculadora.component';
import { ClienteFormularioComponent } from '../cliente-formulario/cliente-formulario.component';
import { ContactosComponent,   } from '../contactos/componente.component';
import { DemosComponent } from '../demos/demos.component';
import { FormularioComponent } from '../formulario/formulario.component';
import { HomeComponent } from '../main';

@Component({
  selector: 'app-dinamico',
  templateUrl: './dinamico.component.html',
  styleUrls: ['./dinamico.component.scss']
})
export class DinamicoComponent implements OnInit {
  menu = [

    { texto: 'Contactos', icono: '',  componente: ContactosComponent},
    { texto: 'fCliente', icono: '',  componente: ClienteFormularioComponent},
    { texto: 'formulario', icono: '',  componente: FormularioComponent},
    { texto: 'calculadora', icono: '', componente: CalculadoraComponent},
    { texto: 'inicio', icono: '', componente: HomeComponent },
    { texto: 'demos', icono: '', componente: DemosComponent },
  ];

  actual = this.menu[0].componente;

  constructor() { }

  seleccionar(indice: number): void {
    this.actual = this.menu[indice].componente;
  }

  ngOnInit(): void {
  }

}

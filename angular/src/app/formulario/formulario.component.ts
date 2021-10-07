import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';

export interface Persona {
  id: number | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  edad: number | null;
  dni: string | null;
}
@Injectable({ providedIn: 'root' })
export class PersonasViewModel {
  Listado: Array<Persona> = [
    {
      id: null,
      nombre: 'Ppepito',
      apellidos: 'Grillo',
      correo: 'pei@grillo',
      edad: 99,
      dni: '12345678z',
    },
  ];
  Elemento: Persona = {
    id: null,
    nombre: 'Ppepito',
    apellidos: 'Grillo',
    correo: 'pei@grillo',
    edad: 99,
    dni: '12345678z',
  }
  IsAdd = true;

  constructor(private notify: NotificationService) {
    this.add();
  }
  public list() {}
  public add() {
    this.Elemento = {
      id: null,
      nombre: 'Ppepito',
      apellidos: 'Grillo',
      correo: null,
      edad: null,
      dni: null,
    };
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = true;
  }
  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = true;
  }

  public delete() {}

  public cancel() {}
  public send() {
    this.notify.add((this.IsAdd ? 'Nuevos: ' : 'Modificados: ') + JSON.stringify(this.Elemento), NotificationType.info)
  }


}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  constructor(public vm: PersonasViewModel) {}

  ngOnInit(): void {}
}

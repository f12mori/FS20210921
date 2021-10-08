import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';

export interface Cliente {
  id: number | null;
  tienda: number | null;
  nombre: string | null;
  apellidos: string;
  correo: string | null;
  ubicacion: number | null;
  activo: boolean | null;
  fecha: Date | null;
  edad: number | null;
  dni: string | null;
}

@Injectable({ providedIn: 'root' })
export class ClientesViewModel {
  Listado: Array<Cliente> = [
    {
      id: 1,
      nombre: 'Pepito',
      apellidos: 'Grillo',
      tienda: 1,
      ubicacion: 1,
      activo: true,
      fecha: null,
      correo: 'pepito@grillo',
      edad: 99,
      dni: '12345678Z',
    },
  ];
  Elemento: Cliente = {
    id: null,
    tienda: null,
    nombre: '',
    apellidos: '',
    ubicacion: 1,
    activo: true,
    fecha: null,
    correo: null,
    edad: null,
    dni: null,
  };
  IsAdd = true;

  constructor(private notify: NotificationService) {
    this.add();
  }

  public list() {}

  public add() {
    this.Elemento = {
      id: null,
      tienda: null,
      nombre: '',
      apellidos: '',
      ubicacion: 1,
      activo: true,
      fecha: null,
      correo: null,
      edad: null,
      dni: null,
    };
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete() {}
  public send() {
    this.notify.add(
      (this.IsAdd ? 'Nuevos: ' : 'Modificados: ') +
        JSON.stringify(this.Elemento),
      NotificationType.info
    );
  }

  public cancel() {
    this.Elemento = {
      id: null,
      tienda: null,
      nombre: '',
      apellidos: '',
      ubicacion: 1,
      activo: true,
      fecha: null,
      correo: null,
      edad: null,
      dni: null,
    };
  }
}

@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss'],
})
export class ClienteFormularioComponent implements OnInit {
  constructor(public vm: ClientesViewModel) {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  pantalla: string;
  private acum: number;
  private operador: string;
  private limpiar: boolean;

  constructor(private log: LoggerService) {
    this.acum = 0;
    this.operador = '+';
    this.limpiar = true;
    this.pantalla = '0';
  }

  inicia() {
    this.acum = 0;
    this.operador = '+';
    this.pantalla = '0';
    this.limpiar = true;
  }

  ponerDigito(num: string): void {
    if (this.pantalla == '0' || this.limpiar) {
      this.pantalla = num;
      this.limpiar = false;
    } else {
      this.pantalla += num;
    }
  }

  Operaciones(operacion: string): void {
    let valor = parseFloat(this.pantalla);
    switch (this.operador) {
      case '+':
        this.acum += valor;
        break;
      case '-':
        this.acum -= valor;
        break;
      case '*':
        this.acum *= valor;
        break;
      case '/':
        this.acum /= valor;
        break;
    }
    this.operador = operacion;
    this.limpiar = true;
    this.pantalla = this.acum.toString();
  }

  ponerComa(): void {
    if (this.limpiar) {
      this.pantalla = '0.';
      this.limpiar = false;
    } else if (this.pantalla.indexOf('.') === -1) {
      this.pantalla += '.';
    }
  }

  borrarNum(): void {
    if (
      this.limpiar ||
      this.pantalla.length == 1 ||
      (this.pantalla.length == 2 && this.pantalla.startsWith('-'))
    ) {
      this.pantalla = '0';
      this.limpiar = true;
    } else this.pantalla = this.pantalla.substr(0, this.pantalla.length - 1);
  }

  cambiaSigno(): void {
    this.pantalla = (-this.pantalla).toString();
    if (this.limpiar) {
      this.acum = -this.acum;
    }
  }
  ngOnInit(): void {}
}

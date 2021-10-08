import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-errors-messages',
  templateUrl: './show-errors-messages.component.html',
  styleUrls: ['./show-errors-messages.component.scss']
})
export class ShowErrorsMessagesComponent implements OnInit {

  max = 'max';
  min = 'min';
  maxlength = 'maxlength';
  minlength='minlength';
  email = 'email';
  required = 'required';

  type: string [] = [
    this.max, this.min, this.maxlength, this.minlength, this.email, this.required
   ];
   lista = [
      'El máximo valor es {{item}}'  ,
      'El mínimo valor es {{item}}'  ,
      'El maximo de caracteres es {{item}}',
      'El minimo de caracteres es {{item}}' ,
      'Tiene que ser un email'  ,
      'Es obligatorio' ,
   ];
 @Input() cntr_errors: string = '';
  constructor() { }


  public errores(): string {
    let errores:string = '';
    for(let i of this.type){

       if(i == 'max'){
         errores = this.lista[0];
         break;
       }
       if(i === 'min'){
         errores = this.lista[1];
         break;
        }
       if(i === 'maxlength'){
          errores = this.lista[2];
          break;
          }
       if(i === 'minlength'){
          errores = this.lista[3];
          break;
        }
       if(i === 'email'){
         errores = this.lista[4];
         break;
        }
       if(i === 'required'){
          errores = this.lista[5];
          break;
        }

     }
     return errores;

    }

  ngOnInit(): void {
  }

}

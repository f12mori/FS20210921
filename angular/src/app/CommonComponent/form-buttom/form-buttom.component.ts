import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttom',
  templateUrl: './form-buttom.component.html',
  styleUrls: ['./form-buttom.component.scss']
})
export class FormButtomComponent {

  constructor() { }
  @Output () send: EventEmitter<any> = new EventEmitter();
  @Output () cancel: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {
  }

}

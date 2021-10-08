import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-buttons',
  templateUrl: './form-buttom.component.html',
  styleUrls: ['./form-buttom.component.scss']
})
export class FormButtonsComponent {
  @Input('send-disabled') sendDisabled: boolean | null = false;
  @Output() send: EventEmitter<any> = new EventEmitter<any>();
  @Output() cancel: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();

  get hasSend(): boolean { return this.send.observers.length > 0; }
  get hasCancel(): boolean { return this.cancel.observers.length > 0; }
  get hasDelete(): boolean { return this.delete.observers.length > 0; }
}

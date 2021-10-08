import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormButtonsComponent } from './form-buttom/form-buttom.component';
import { ShowErrorsMessagesComponent } from './show-errors-messages/show-errors-messages.component';



@NgModule({
  declarations: [
    FormButtonsComponent,
    ShowErrorsMessagesComponent,
  ],
  exports: [
    FormButtonsComponent,
    ShowErrorsMessagesComponent,
  ],
  imports: [

    CommonModule
  ]
})
export class CommonComponentModule { }

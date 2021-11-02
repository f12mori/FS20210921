import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonServicesModule } from '../common-services';
import { CommonComponentModule } from '../common-component/common-component.module';
import { ActoresComponentes } from './actores.component';

@NgModule({
  declarations: [
    ActoresComponentes,
  ],
  exports: [
    ActoresComponentes,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]), CommonServicesModule, CommonComponentModule
  ]
})
export class ActorModule { }

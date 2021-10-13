import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTACTOS_COMPONENTES } from './componente.component';
import { CommonServicesModule } from '../common-services';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';

@NgModule({
  declarations: [[CONTACTOS_COMPONENTES]],
  exports: [CONTACTOS_COMPONENTES],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
   MyCoreModule, CommonServicesModule,
    ]
})
export class ContactosModule {}

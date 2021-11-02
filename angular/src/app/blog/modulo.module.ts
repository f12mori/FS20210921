import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { BlogComponentes } from './componente.component';
import { PaginatorModule } from 'primeng/paginator';
import { CommonComponentModule } from '../common-component';

@NgModule({
  declarations: [BlogComponentes],
  exports: [BlogComponentes],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([]),
    MyCoreModule,
    CommonServicesModule,
    PaginatorModule,
    CommonComponentModule,
    MyCoreModule,
  ],
})
export class BlogModule {}

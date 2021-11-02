import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActoresComponent } from './actores/actores.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { IdiomasComponent } from './idiomas/idiomas.component';
import { ERROR_LEVEL, LoggerService } from './my-core/services/logger.service';
import { environment } from 'src/environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjaxWaitInterceptor, MainModule } from './main';
import { AuthInterceptor } from './security/services/seguridad.service';
import { CommonComponentModule } from './common-component';
import { CommonServicesModule } from './common-services';
import { FormsModule } from '@angular/forms';
import { MyCoreModule } from './my-core';
import { SecurityModule } from './security';
import { ActorModule } from './actores/modulo.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule, MyCoreModule, MainModule, CommonServicesModule, CommonComponentModule,
    SecurityModule,ActorModule,
  ],
  providers: [LoggerService,
    // { provide: LoggerService, useClass: LoggerHTTPService },
    { provide: ERROR_LEVEL, useValue: environment.ERROR_LEVEL },
    { provide: LOCALE_ID, useValue: 'es-ES'},
    { provide: HTTP_INTERCEPTORS, useClass: AjaxWaitInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true, },],
  bootstrap: [AppComponent]
})
export class AppModule { }

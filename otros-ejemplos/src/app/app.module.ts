import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EjBootstrapComponent } from './ej-bootstrap/ej-bootstrap.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routing } from './app.routes';
import { DatosComponent } from './datos/datos.component';
import { AuthInterceptor } from './datos/auth.interceptor';
import { Cmp1Component } from './ej-bootstrap/cmp1/cmp1.component';
import { Cmp2Component } from './ej-bootstrap/cmp2/cmp2.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    EjBootstrapComponent,
    DatosComponent,
    Cmp1Component,
    Cmp2Component
  ],
  imports: [
    BrowserModule,
    NgbModule,
    Routing,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    // { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

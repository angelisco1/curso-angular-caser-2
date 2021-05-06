import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { ContadorComponent } from './contador/contador.component';
import { AcordeonComponent } from './acordeon/acordeon.component';

@NgModule({
  declarations: [
    ContadorComponent,
    AcordeonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {

  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const contadorWC = createCustomElement(ContadorComponent, { injector: this.injector });
    customElements.define('mi-contador', contadorWC);

    const acordeonWC = createCustomElement(AcordeonComponent, { injector: this.injector });
    customElements.define('mi-acordeon', acordeonWC);
  }
}

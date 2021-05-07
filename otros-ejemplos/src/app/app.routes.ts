import { RouterModule, Routes } from '@angular/router';
import { DatosComponent } from './datos/datos.component';
import { EjBootstrapComponent } from './ej-bootstrap/ej-bootstrap.component';

const APP_ROUTES: Routes = [
  { path: '', component: EjBootstrapComponent },
  { path: 'datos', component: DatosComponent },
  // { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(modulo => modulo.AdminModule) }
]

export const Routing = RouterModule.forRoot(APP_ROUTES);
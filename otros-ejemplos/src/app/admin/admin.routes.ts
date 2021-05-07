import { RouterModule, Routes } from '@angular/router';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';

const ADMIN_ROUTES: Routes = [
  { path: '', component: PanelAdminComponent },
]

export const AdminRouting = RouterModule.forChild(ADMIN_ROUTES);
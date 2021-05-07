import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelAdminComponent } from './panel-admin/panel-admin.component';
import { AdminRouting } from './admin.routes';



@NgModule({
  declarations: [
    PanelAdminComponent
  ],
  imports: [
    CommonModule,
    AdminRouting
  ]
})
export class AdminModule { }

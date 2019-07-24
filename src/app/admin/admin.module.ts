import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { ManageHeaderComponent } from './manage-header/manage-header.component';
import { ManageMapComponent } from './manage-map/manage-map.component';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageHeaderComponent,
    ManageMapComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }

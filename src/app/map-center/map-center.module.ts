import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MapCenterRoutingModule } from './map-center-routing.module';
import { MapCenterComponent } from './map-center/map-center.component';
import { MapCenterHomeComponent } from './map-center-home/map-center-home.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapDetailComponent } from './map-detail/map-detail.component';


@NgModule({
  declarations: [
    MapCenterComponent,
    MapCenterHomeComponent,
    MapListComponent,
    MapDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MapCenterRoutingModule
  ]
})
export class MapCenterModule { }

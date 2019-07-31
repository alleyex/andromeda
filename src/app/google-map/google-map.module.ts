import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoogleMapRoutingModule } from './google-map-routing.module';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [GoogleMapComponent],
  imports: [
    CommonModule,
    GoogleMapRoutingModule
  ]
})
export class GoogleMapModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MapCenterComponent } from './map-center/map-center.component';
import { MapListComponent } from './map-list/map-list.component';
import { MapDetailComponent } from './map-detail/map-detail.component';
import { MapCenterHomeComponent } from './map-center-home/map-center-home.component';


const mapCenterRoutes: Routes = [
  {
    path: 'map-center',
    component: MapCenterComponent,
    children: [
      {
        path: '',
        component: MapListComponent,
        children: [
          {
            path: ':id',
            component: MapDetailComponent
          },
          {
            path: '',
            component: MapCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(mapCenterRoutes)],
  exports: [RouterModule]
})
export class MapCenterRoutingModule { }

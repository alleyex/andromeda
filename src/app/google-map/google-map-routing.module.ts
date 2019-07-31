import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapComponent } from './google-map/google-map.component';
import { AuthGuard } from '../auth/auth.guard';


const googleMapRoutes: Routes = [
  {
    path: 'google-map',
    canActivate: [AuthGuard],
    component: GoogleMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(googleMapRoutes)],
  exports: [RouterModule]
})
export class GoogleMapRoutingModule { }

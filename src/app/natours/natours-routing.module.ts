import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatoursComponent } from './natours/natours.component';


const natoursRoutes: Routes = [
  { path: 'natours', component: NatoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(natoursRoutes)],
  exports: [RouterModule]
})
export class NatoursRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatoursComponent } from './natours/natours.component';


const advancedCssRoutes: Routes = [
  { path: 'natours', component: NatoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(advancedCssRoutes)],
  exports: [RouterModule]
})
export class AdvancedCssRoutingModule { }

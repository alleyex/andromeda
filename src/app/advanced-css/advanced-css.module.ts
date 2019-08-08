import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatoursComponent } from './natours/natours.component';
import { AdvancedCssRoutingModule } from './advanced-css-routing.module';


@NgModule({
  declarations: [
    NatoursComponent
  ],
  imports: [
    CommonModule,
    AdvancedCssRoutingModule
  ]
})
export class AdvancedCssModule { }

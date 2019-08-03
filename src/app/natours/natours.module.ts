import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NatoursRoutingModule } from './natours-routing.module';
import { NatoursComponent } from './natours/natours.component';


@NgModule({
  declarations: [
    NatoursComponent
  ],
  imports: [
    CommonModule,
    NatoursRoutingModule
  ]
})
export class NatoursModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModernJavascriptRoutingModule } from './modern-javascript-routing.module';
import { DomComponent } from './dom/dom.component';
import { FormComponent } from './form/form.component';
import { ArrayComponent } from './array/array.component';
import { DateTimeComponent } from './date-time/date-time.component';


@NgModule({
  declarations: [DomComponent, FormComponent, ArrayComponent, DateTimeComponent],
  imports: [
    CommonModule,
    ModernJavascriptRoutingModule
  ]
})
export class ModernJavascriptModule { }

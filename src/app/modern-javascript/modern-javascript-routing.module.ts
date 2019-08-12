import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomComponent } from './dom/dom.component';
import { FormComponent } from './form/form.component';
import { ArrayComponent } from './array/array.component';
import { DateTimeComponent } from './date-time/date-time.component';


const modernJavascriptRoutes: Routes = [
  { path: 'date-time', component: DateTimeComponent },
  { path: 'dom', component: DomComponent },
  { path: 'form', component: FormComponent },
  { path: 'array', component: ArrayComponent }
];

@NgModule({
  imports: [RouterModule.forChild(modernJavascriptRoutes)],
  exports: [RouterModule]
})
export class ModernJavascriptRoutingModule { }

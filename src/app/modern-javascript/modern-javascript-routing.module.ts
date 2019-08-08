import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomComponent } from './dom/dom.component';
import { FormComponent } from './form/form.component';


const modernJavascriptRoutes: Routes = [
  {path:'dom', component: DomComponent},
  {path:'form', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(modernJavascriptRoutes)],
  exports: [RouterModule]
})
export class ModernJavascriptRoutingModule { }

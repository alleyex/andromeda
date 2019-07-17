import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';

const headerRoutes: Routes = [
  { path: 'items',  component: HeaderListComponent },
  { path: 'item/:id', component: HeaderDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

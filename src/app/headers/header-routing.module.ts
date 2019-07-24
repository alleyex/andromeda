import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderListComponent } from './header-list/header-list.component';
import { HeaderDetailComponent } from './header-detail/header-detail.component';

const headerRoutes: Routes = [
  { path: 'items', component: HeaderListComponent, data: { animation: 'items' } },
  { path: 'item/:id', component: HeaderDetailComponent, data: { animation: 'item' } }
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }

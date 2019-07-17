import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderDetailComponent } from './header-detail/header-detail.component';
import { HeaderListComponent } from './header-list/header-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderDetailComponent, 
    HeaderListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeaderRoutingModule
  ]
})
export class HeaderModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; 
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/header/search/search.component';
import { UserNavComponent } from './layout/header/user-nav/user-nav.component';
import { LogoComponent } from './layout/header/logo/logo.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HotelViewComponent } from './layout/hotel-view/hotel-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    SearchComponent,
    LogoComponent,
    SidebarComponent,
    UserNavComponent,
    HotelViewComponent 
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComposeMessageComponent } from './compose-message/compose-message.component';

const appRoutes: Routes = [
  { path: 'compose', component: ComposeMessageComponent, outlet: 'popup' },
  { path: '', redirectTo: '/natours', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes, { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
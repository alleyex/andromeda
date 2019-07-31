import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthCenterComponent } from './auth-center/auth-center.component';

const authRoutes: Routes = [
  {
    path: 'auth-center',
    component: AuthCenterComponent,
    children: [
      {
        path: 'sign-up',
        component: SignUpComponent,
        data: { animation: 'sign-up' }

      },
      {
        path: 'sign-in',
        component: SignInComponent,
        data: { animation: 'sign-in' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(authRoutes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

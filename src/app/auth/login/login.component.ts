import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.authService.loginWithEmail('alleyex@gmail.com', 'abc123')
      .then(state => {
        this.authService.isLoggedIn = false;
        const redirect = this.authService.redirectUrl ? this.router.parseUrl(this.authService.redirectUrl) : '/admin';
        this.router.navigateByUrl(redirect);
      })
      .catch((error) => {
        this.message = 'error:' + error;
      });
  }

  logout() {
    this.authService.signOut()
      .then(() =>
        this.authService.isLoggedIn = false
      );
    this.setMessage();
  }



}

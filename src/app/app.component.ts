import { Component, OnInit } from '@angular/core';

import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { AuthenticationService } from './firebase/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  displayName: string;

  constructor(private authService: AuthenticationService) {
    firebase.initializeApp(environment.firebase);

  }

  ngOnInit(): void {
    this.authService.getCurrentUser().then(user => {
      if (user) {
        this.displayName = user.email;
      } else {

      }
    }).catch(error => console.log('status: ', error));
  }

  getAnimationData(outlet: RouterOutlet) {
    // console.log(outlet);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

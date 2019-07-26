import { Component, OnInit, ElementRef } from '@angular/core';

import { slideInAnimation } from './animations';
import { RouterOutlet } from '@angular/router';

import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation]
})
export class AppComponent implements OnInit {

  constructor(private element: ElementRef) {
    firebase.initializeApp(environment.firebase);
  }

  ngOnInit(): void {
  }

  getAnimationData(outlet: RouterOutlet) {
    // console.log(outlet);
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

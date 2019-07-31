import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { authAnimation } from '../auth-animations';

@Component({
  selector: 'app-auth-center',
  templateUrl: './auth-center.component.html',
  styleUrls: ['./auth-center.component.scss'],
  animations: [authAnimation]
})
export class AuthCenterComponent {
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}

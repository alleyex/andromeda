import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Coords } from './coords';
import { CloudFirestoreService } from '../firebase/cloud-firestore.service';
import { AuthenticationService } from '../firebase/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements OnDestroy {
  private coords: Coords;
  private lastTimestamp = 0;
  private locations$: Subscription;

  constructor(private authService: AuthenticationService, private dbService: CloudFirestoreService) { }

  private watchPosition = new Observable((observer) => {
    const onSuccess: PositionCallback = (pos: Position) => { observer.next(pos); };
    const onError: PositionErrorCallback | any = (error: any) => { observer.error(error); };

    let watchId: number;

    if ('geolocation' in navigator) {
      watchId = navigator.geolocation.watchPosition(onSuccess, onError);
    } else {
      onError();
    }
    return { unsubscribe() { navigator.geolocation.clearWatch(watchId); } };
  });

  setCurrentLocation() {
    if (this.coords) {
      this.dbService.set('current-position', this.authService.getUser().uid, this.coords);
    }
  }

  getCurrentLocation() {
    this.locations$ = this.watchPosition.subscribe((position: Position) => {
      this.coords = {
        accuracy: position.coords.accuracy,
        timestamp: position.timestamp,
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      };

      this.authService.getCurrentUser().then(user => {
        if ((position as any).timestamp - this.lastTimestamp > 5000) {
          this.lastTimestamp = position.timestamp;
          this.setCurrentLocation();
        }
      }).catch(error => console.log(error));
    });
  }

  ngOnDestroy() {
    this.locations$.unsubscribe();
  }
}

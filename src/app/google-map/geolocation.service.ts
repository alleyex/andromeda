import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Coords } from './coords';


@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements OnDestroy {

  coords: Coords;
  private locations$: Subscription;

  private currentPosition = new Observable((observer) => {
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

  getCurrentLocation() {
    this.locations$ = this.currentPosition.subscribe(position => {
      this.coords = {
        accuracy: (position as any).coords.accuracy,
        location: {
          lat: (position as any).coords.latitude,
          lng: (position as any).coords.longitude
        }
      };

      console.log(position);
    });
  }

  ngOnDestroy() {
    this.locations$.unsubscribe();
  }
}

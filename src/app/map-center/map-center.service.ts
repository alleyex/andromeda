import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Map } from './map';
import { MAPS } from './mock-maps';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MapCenterService {

  constructor() { }

  getMaps(): Observable<Map[]> {
    // TODO: send the message _after_ fetching the heroes
    //  this.messageService.add('headerService: fetched items');
    return of(MAPS);
  }

  getMap(id: number | string) {
    return this.getMaps().pipe(
      // (+) before `id` turns the string into a number
      map((maps: Map[]) => maps.find(item => {
        return item.id === +id;
      }))
    );
  }
}

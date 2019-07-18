import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Item } from './Item';
import { MessageService } from '../message.service';
import { ITEMS } from './mock-items';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private messageService: MessageService) { }

  getItems(): Observable<Item[]> {
    // TODO: send the message _after_ fetching the heroes
    //  this.messageService.add('headerService: fetched items');
    return of(ITEMS);
  }

  getItem(id: number | string) {
    return this.getItems().pipe(
      // (+) before `id` turns the string into a number
      map((items: Item[]) => items.find(item => item.id === +id))
    );
  }
}

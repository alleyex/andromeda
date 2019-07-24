import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { HeaderService } from '../header.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {


  // selectedItem: Item;

  items: Item[];
  items$: Observable<Item[]>;
  selectedId: number;

  constructor(private route: ActivatedRoute, private headerService: HeaderService) { }

  ngOnInit() {
    this.items$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.headerService.getItems();
      })
    );
    // this.getItems();

  }

  // onSelect(item: Item): void {
  //   this.selectedItem = item;
  // }

  getItems(): void {
    this.headerService.getItems()
      .subscribe(items => this.items = items);
  }

}

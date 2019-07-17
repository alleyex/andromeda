import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.scss']
})
export class HeaderListComponent implements OnInit {

  
  selectedItem: Item;

  items: Item[];

  constructor(private headerService: HeaderService) { }

  ngOnInit() {
     this.getItems();
  }

  onSelect(item: Item): void {
    this.selectedItem = item;
  }

  getItems(): void {
    this.headerService.getItems()
        .subscribe(items => this.items = items);
  }

}

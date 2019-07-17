import { Component, Input } from '@angular/core';
import { Item } from '../Item';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss']
})
export class HeaderDetailComponent {

  @Input() item: Item;
  
}

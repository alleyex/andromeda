import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { HeaderService } from '../header.service';

import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-detail',
  templateUrl: './header-detail.component.html',
  styleUrls: ['./header-detail.component.scss']
})
export class HeaderDetailComponent implements OnInit {

  @Input() item: Item;
  item$: Observable<Item>;

  constructor(private route: ActivatedRoute, private router: Router, private service: HeaderService) { }

  ngOnInit() {
    this.item$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getItem(params.get('id')))
    );
  }

  gotoItems(item: Item) {

    let itemId = item ? item.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/items', { id: itemId, foo: 'foo' }]);
  }
}

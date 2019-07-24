import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Map } from '../map';
import { ActivatedRoute } from '@angular/router';
import { MapCenterService } from '../map-center.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-map-list',
  templateUrl: './map-list.component.html',
  styleUrls: ['./map-list.component.scss']
})
export class MapListComponent implements OnInit {

  maps: Map[];
  maps$: Observable<Map[]>;
  selectedId: number;

  constructor(private route: ActivatedRoute, private service: MapCenterService) { }

  ngOnInit() {
    this.maps$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getMaps();
      })
    );
  }

  getItems(): void {
    this.service.getMaps()
      .subscribe(maps => this.maps = maps);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Map } from '../map';
import { MapCenterService } from '../map-center.service';

@Component({
  selector: 'app-map-detail',
  templateUrl: './map-detail.component.html',
  styleUrls: ['./map-detail.component.scss']
})
export class MapDetailComponent implements OnInit {


  map$: Observable<Map>;

  constructor(private route: ActivatedRoute, private router: Router, private service: MapCenterService) { }

  ngOnInit() {
    this.map$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getMap(params.get('id')))
    );
  }

  gotoItems(map: Map) {

    let mapId = map ? map.id : null;
    this.router.navigate(['../', { id: mapId, foo: 'foo' }], { relativeTo: this.route });
  }

}

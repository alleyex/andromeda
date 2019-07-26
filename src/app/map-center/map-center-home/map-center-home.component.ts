import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapLoaderService } from '../../google-map/map-loader.service';

@Component({
  selector: 'app-map-center-home',
  templateUrl: './map-center-home.component.html',
  styleUrls: ['./map-center-home.component.scss']
})
export class MapCenterHomeComponent implements OnInit {

  constructor(private service: MapLoaderService) { }
  @ViewChild('map', {static: true}) mapRef: ElementRef;


  ngOnInit() {
    this.service.initMap(this.mapRef.nativeElement, {
      center: {lat: 10.746207, lng: 106.696663},
      scrollwheel: true,
      zoom: 8
    });
  }

}

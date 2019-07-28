import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapLoaderService } from '../../google-map/map-loader.service';
import { GeolocationService } from 'src/app/google-map/geolocation.service';

@Component({
  selector: 'app-map-center-home',
  templateUrl: './map-center-home.component.html',
  styleUrls: ['./map-center-home.component.scss']
})
export class MapCenterHomeComponent implements OnInit {

  constructor(private service: MapLoaderService, private posService: GeolocationService) { }
  @ViewChild('map', { static: true }) mapRef: ElementRef;


  geolocationPosition: any;

  ngOnInit() {
    this.service.initMap(this.mapRef.nativeElement, {
      center: { lat: 10.7353791, lng: 106.68809549999999 },
      scrollwheel: true,
      zoom: 16
    });

    this.posService.getCurrentLocation();
  }

  getPos() {
    console.log(this.posService.coords);
  }


}

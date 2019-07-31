import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MapLoaderService } from '../map-loader.service';
import { GeolocationService } from '../geolocation.service';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent implements OnInit {

  constructor(private service: MapLoaderService, private posService: GeolocationService) { }

  @ViewChild('map', { static: true }) mapRef: ElementRef;

  ngOnInit() {
    this.service.initMap(this.mapRef.nativeElement, {
      center: { lat: 10.7353791, lng: 106.68809549999999 },
      scrollwheel: true,
      zoom: 16
    });

    this.posService.getCurrentLocation();
  }
}

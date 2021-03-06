import { Injectable } from '@angular/core';


const getMapsApi = (initMap: string) =>
  `https://maps.googleapis.com/maps/api/js?key=AIzaSyAXbjP-YQ-qwhOCqYRlfc_dx6DZYHG1uv8&callback=${initMap}`;

@Injectable({
  providedIn: 'root'
})
export class MapLoaderService {

  constructor() {
    this.loadScriptLoadingPromise();
    this.onReady().then(() => {
      this.geocoder = new google.maps.Geocoder();
    });
  }
  private map: google.maps.Map;
  private geocoder: google.maps.Geocoder;
  private scriptLoadingPromise: Promise<void>;

  onReady(): Promise<void> {
    return this.scriptLoadingPromise;
  }

  private loadScriptLoadingPromise() {
    const script = window.document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.defer = true;
    const callback = 'UNIQUE_NAME_HERE';

    script.src = getMapsApi(callback);

    this.scriptLoadingPromise = new Promise<void>((resolve, reject) => {
      (window as any)[callback] = () => { resolve(); };

      script.onerror = (error: Event) => { reject(error); };
    });
    window.document.body.appendChild(script);
  }

  public async initMap(mapHtmlElement: HTMLElement, options: google.maps.MapOptions): Promise<google.maps.Map> {
    await this.onReady();
    this.map = new google.maps.Map(mapHtmlElement, options);
    return this.map;
  }

  public async currentPostion(lat: number, lng: number) {
    await this.onReady();
    const marker = new google.maps.Marker({
      position: { lat, lng},
      title: 'Hello World!'
    });

    marker.setMap(this.map);
  }
}

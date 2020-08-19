import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.css']
})
export class MapsWidgetComponent implements OnInit {
  env = environment.GOOGLE_MAPS_API_KEY;
  center = undefined;
  zoom = 8;

  @ViewChild('mapContainer') gmap: ElementRef;
  map: google.maps.Map;

  mapInitializer() {
    const mapOptions: google.maps.MapOptions = {
      center: this.center,
      zoom: this.zoom
    };

    const marker = new google.maps.Marker({
      position: this.center,
      map: this.map,
    });

    this.map = new google.maps.Map(this.gmap.nativeElement,
      mapOptions);
    marker.setMap(this.map);
  }

  async ngOnInit() {
    this.getCurrentLocation(() => this.mapInitializer());
  }

  async getCurrentLocation(callback) {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      callback();
    });
  }

  watchCurrentLocation() {
    navigator.geolocation.watchPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });
  }

}

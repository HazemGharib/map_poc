import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {MapInitializer, Marker} from './mapInitializer';
import {MapUtils} from './map-utils';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.css']
})
export class MapsWidgetComponent implements OnInit {
  @Input() provider: 'googleMaps' | 'here' | 'openStreetMap';
  @Input() zoom;
  @Input() center;
  @Input() markers: Marker[];

  @ViewChild('mapContainer') gmap: ElementRef;

  // Static
  async ngOnInit() {
    this.provider = this.provider || 'googleMaps';

    const providerOptions = {
      gmapElement: this.gmap,
      center: this.center,
      markers: this.markers,
      zoom: this.zoom
    };

    if (this.center) { return MapInitializer.initialize(this.provider, providerOptions); }
    this.getCurrentLocation(() => MapInitializer.initialize(this.provider, providerOptions));
    // MapUtils.getCurrentLocation((position) => {
    //   this.center = {
    //     lat: position.coords.latitude,
    //     lng: position.coords.longitude
    //   };
    //   MapInitializer.initialize(this.provider, providerOptions);
    // });
  }

  getCurrentLocation(callback) {
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

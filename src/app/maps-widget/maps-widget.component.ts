import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import {MapInitializer} from './mapInitializer';
import {MapUtils} from './map-utils';
import {Marker} from './@types/marker';
import {MapProviders} from './@types/map-providers';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.css']
})
export class MapsWidgetComponent implements OnInit {
  @Input() provider: MapProviders;
  @Input() zoom;
  @Input() center;
  @Input() markers: Marker[];

  @ViewChild('mapContainer') gmap: ElementRef;

  async ngOnInit() {
    const providerOptions = {
      gmapElement: this.gmap,
      center: this.center,
      markers: this.markers,
      zoom: this.zoom
    };

    if (this.center) { return MapInitializer.initialize(this.provider, providerOptions); }
    MapUtils.getCurrentLocation((position) => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      MapInitializer.initialize(this.provider, providerOptions);
    });
  }
}

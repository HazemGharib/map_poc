import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.css']
})
export class MapsWidgetComponent implements OnInit {
  env = environment.GOOGLE_MAPS_API_KEY;

  @ViewChild('mapContainer') gmap: ElementRef;
  map: google.maps.Map;

  @Input() zoom;
  @Input() center;
  @Input() markers: {position: object, icon: string}[];

  mapInitializer() {
    const mapOptions: google.maps.MapOptions = {
      center: this.center,
      zoom: this.zoom || 8
    };

    const currentPosition = new google.maps.Marker({
      position: this.center,
      map: this.map,
      title: `You're here!`
    });

    this.map = new google.maps.Map(this.gmap.nativeElement,
      mapOptions);
    currentPosition.setMap(this.map);

    this.markers.forEach(marker => {
      this.addMarker(this.map, marker.position, marker.icon).setMap(this.map);
    });
  }

  async ngOnInit() {
    if (this.center) { return this.mapInitializer(); }
    this.getCurrentLocation(() => this.mapInitializer());
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

  addMarker(map, position, color) {
    let url = 'http://maps.google.com/mapfiles/ms/icons/';
    url += color + '-dot.png';

    return new google.maps.Marker({
      map,
      position,
      icon: {
        url
      }
    });
  }
}

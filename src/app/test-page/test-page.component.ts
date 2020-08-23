import {Component} from '@angular/core';
import {MapProviders} from '../maps-widget/@types/map-providers';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent {
  provider: MapProviders = {provider: 'openStreetMap'};
  zoom = 3;
  center = {lng: 32.3, lat: 30.6};
  markers = [
    {position: {lng: 33, lat: 36}, color: 'blue'},
    {position: {lng: 20, lat: 20}, color: 'pink'},
    {position: {lng: -10, lat: 1}, color: 'yellow'},
    {position: {lng: -38, lat: -10}, color: 'green'},
    {position: {lng: -36, lat: -8}, color: 'teal'},
    {position: {lng: -34, lat: -6}, color: 'brown'},
    {position: {lng: -32, lat: -4}, color: 'orange'},
    {position: {lng: -30, lat: -2}, color: 'maroon'},
  ];

  dropDownData = [
    {provider: 'openStreetMap', text: 'Open Street Map'},
    {provider: 'googleMaps', text: 'Google Maps'},
    {provider: 'here', text: 'Here'},
  ];

  onOptionsSelected(value) {
    this.provider = {provider: value};
  }

}

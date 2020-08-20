import { Component, OnInit } from '@angular/core';
import { MapProviders } from '../maps-widget/@types/map-providers';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  provider: MapProviders = {provider: 'openStreetMap'};
  zoom = 15;
  center = {lng: 32.3, lat: 30.6};
  markers = [
    {position: {lng: 33, lat: 36}, color: 'blue'},
    {position: {lng: 20, lat: 20}, color: 'pink'},
    {position: {lng: -10, lat: 1}, color: 'yellow'},
    {position: {lng: -38, lat: -10}, color: 'green'},
  ];

  dropDownData = [
    {provider: 'googleMaps', text: 'Google Maps'},
    {provider: 'here', text: 'Here'},
    {provider: 'openStreetMap', text: 'Open Street Map'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onOptionsSelected(value) {
    this.provider = {provider: value};
  }

}

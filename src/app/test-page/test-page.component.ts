import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.css']
})
export class TestPageComponent implements OnInit {
  provider;
  zoom = 3;
  center = {lng: 32.3, lat: 30.6};
  markers = [
    {position: {lng: 33, lat: 36}, color: 'blue'},
    {position: {lng: 20, lat: 20}, color: 'pink'},
    {position: {lng: -10, lat: 1}, color: 'yellow'},
    {position: {lng: -38, lat: -10}, color: 'green'},
  ];

  dropDownData = [
    {seo_val: 'googleMaps', text_val: 'Google Maps'},
    {seo_val: 'here', text_val: 'Here'},
    {seo_val: 'openStreetMap', text_val: 'Open Street Map'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onOptionsSelected(value: string) {
    this.provider = value;
  }

}

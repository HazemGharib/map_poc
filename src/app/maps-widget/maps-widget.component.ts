import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-maps-widget',
  templateUrl: './maps-widget.component.html',
  styleUrls: ['./maps-widget.component.css']
})
export class MapsWidgetComponent implements OnInit {
  env = environment.GOOGLE_MAPS_API_KEY;

  constructor() { }

  ngOnInit() {
  }

}

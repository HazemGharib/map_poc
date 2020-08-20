import {ElementRef} from '@angular/core';
import {Coords} from './coords';
import {Marker} from './marker';

export interface MapProviderOptions {
    gmapElement: ElementRef;
    center: Coords;
    zoom: number;
    markers: Marker[];
}

import {ElementRef} from '@angular/core';

export interface Coords {
   lat: number;
   lng: number;
}

export interface Marker {
    position: Coords;
    color: string;
}

export interface MapProviderOptions {
    gmapElement: ElementRef;
    center: Coords;
    zoom: number;
    markers: Marker[];
}

export class MapInitializer {
    private static provider;

    public static initialize(provider, providerOptions: MapProviderOptions) {
        // Provider based
        const mapOptions: google.maps.MapOptions = {
            center: providerOptions.center || {lng: 0, lat: 0},
            zoom: providerOptions.zoom || 8
        };

        // Provider based
        const map = new google.maps.Map(providerOptions.gmapElement.nativeElement,
            mapOptions);

        this.addCurrentMarker(map, providerOptions.center);


        providerOptions.markers.forEach(marker => {
            this.addMarker(map, marker.position, marker.color);
        });
    }

    // Provider based
    private static addCurrentMarker = (map, center) => new google.maps.Marker({
        map,
        position: center,
        title: `You're here!`
    })

    // Provider based
    private static addMarker(map, position, color) {
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

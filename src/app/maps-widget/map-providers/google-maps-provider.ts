import {MapProviderOptions} from '../@types/map-provider-options';

export class GoogleMapsProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const mapOptions: google.maps.MapOptions = {
            center: providerOptions.center || {lng: 0, lat: 0},
            zoom: providerOptions.zoom || 8
        };

        const map = new google.maps.Map(providerOptions.gmapElement.nativeElement,
            mapOptions);

        this.addCurrentMarker(map, providerOptions.center);


        providerOptions.markers.forEach(marker => {
            this.addMarker(map, marker.position, marker.color);
        });
    }

    private static addCurrentMarker = (map, center) => {
        return GoogleMapsProvider.addMarker(map, center, '');
    }

    private static addMarker = (map, position, color) => {
        let url = 'http://maps.google.com/mapfiles/ms/icons/';
        url += color + '-dot.png';

        return new google.maps.Marker({
            map,
            position,
            icon: {
                url: `assets/${color || 'black'}.svg`
            }
        });
    }
}

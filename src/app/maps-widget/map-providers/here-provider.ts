// tslint:disable: max-line-length
import {MapProviderOptions} from '../@types/map-provider-options';

declare var H: any;

export class HereProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const platform = new H.service.Platform({
            apiKey: '_RAg0IhBIOFgPeAHt2vfdBQlbnycdhc7CJymruc6qEQ'
        });

        const defaultLayers = platform.createDefaultLayers();

        const mapOptions = {
            zoom: providerOptions.zoom,
            center: providerOptions.center
        };

        const map = new H.Map(
            document.getElementById('map'),
            platform.createDefaultLayers().vector.normal.map,
            mapOptions
        );

        const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
        const ui = H.ui.UI.createDefault(map, defaultLayers);

        this.addCurrentMarker(map, providerOptions.center);

        providerOptions.markers.forEach(marker => {
            this.addMarker(map, marker.position, marker.color);
        });
    }

    private static addCurrentMarker = (map, center) => {
        HereProvider.addMarker(map, center, '');
    }

    private static addMarker(map, position, color) {
        const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="26px" height="30px" >
        <path d="M 13 2.2 C 6 2.2 2.3 7.2 2.1 12.8 C 2.1 16.1 3.1 18.4 5.2 20.5 L 13 28.2 L 20.8 20.5 C 22.9 18.4 23.8 16.2 23.8 12.8 C 23.6 7.07 20 2.2 13 2.2 Z" fill="${color || 'black'}"></path>
</svg>`;
        const markerIcon = new H.map.Icon(svgMarkup);
        const marker = new H.map.Marker(position, {icon: markerIcon});
        map.addObject(marker);
    }
}

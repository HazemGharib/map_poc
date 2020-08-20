import {MapProviderOptions} from '../@types/map-provider-options';

declare var H: any;

export class HereProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const platform = new H.service.Platform({
            // app_id: 'r0yif3gQUjJv1G7DjWVw',
            apiKey: 'GvAqRO0JZMjAZELSH88-OeAa96TwMGEU14wAn0mqPaM'
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
        const marker = new H.map.Marker(position);
        map.addObject(marker);
    }
}

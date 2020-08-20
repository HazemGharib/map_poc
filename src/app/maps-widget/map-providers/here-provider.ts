import {MapProviderOptions} from '../@types/map-provider-options';

export class HereProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const mapOptions = {};

        const map = {};

        this.addCurrentMarker(map, providerOptions.center);

        providerOptions.markers.forEach(marker => {
            this.addMarker(map, marker.position, marker.color);
        });
    }

    private static addCurrentMarker = (map, center) => {
        return;
    }

    private static addMarker(map, position, color) {
        return;
    }
}

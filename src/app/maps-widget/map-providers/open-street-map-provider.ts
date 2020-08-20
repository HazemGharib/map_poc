import {MapProviderOptions} from '../@types/map-provider-options';

declare var ol: any;

export class OpenStreetMapProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const mapOptions = {};

        const map = new ol.Map({
            target: 'map',
            layers: [
                new ol.layer.Tile({
                source: new ol.source.OSM()
                })
            ],
            view: new ol.View({
                center: ol.proj.fromLonLat([providerOptions.center.lng, providerOptions.center.lat]),
                zoom: providerOptions.zoom
            })
        });

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

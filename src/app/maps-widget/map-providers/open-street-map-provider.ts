import {MapProviderOptions} from '../@types/map-provider-options';
import Point from 'ol/geom/Point';
declare var ol: any;

export class OpenStreetMapProvider {
    static initialize(providerOptions: MapProviderOptions) {
        const mapOptions = {
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
        };

        const map = new ol.Map(mapOptions);

        this.addCurrentMarker(map, providerOptions.center);

        providerOptions.markers.forEach(marker => {
            this.addMarker(map, marker.position, marker.color);
        });
    }

    private static addCurrentMarker = (map, center) => {
        OpenStreetMapProvider.addMarker(map, center, '');
    }

    private static addMarker(map, position, color) {
        const layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [
                    new ol.Feature({
                        geometry: new Point(ol.proj.fromLonLat([position.lng, position.lat]))
                    })
                ]
            })
        });
        map.addLayer(layer);
    }
}

// tslint:disable: max-line-length
import {MapProviderOptions} from '../@types/map-provider-options';
import Point from 'ol/geom/Point';
import {Style, Icon} from 'ol/style';
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
        const point = new ol.Feature({
            geometry: new Point(ol.proj.fromLonLat([position.lng, position.lat]))
        });

        point.setStyle(
            new Style({
                image: new Icon({
                    crossOrigin: 'anonymous',
                    src: `assets/${color || 'black'}.svg`,
                }),
            })
        );

        const layer = new ol.layer.Vector({
            source: new ol.source.Vector({
                features: [point]
            })
        });
        map.addLayer(layer);
    }
}

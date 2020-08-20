import {MapProviderOptions} from './@types/map-provider-options';
import {GoogleMapsProvider} from './map-providers/google-maps-provider';
import {HereProvider} from './map-providers/here-provider';
import {OpenStreetMapProvider} from './map-providers/open-street-map-provider';
import {MapProviders} from './@types/map-providers';

export class MapInitializer {
    public static initialize({provider}: MapProviders, providerOptions: MapProviderOptions) {
        switch (provider) {
            case 'googleMaps':
                GoogleMapsProvider.initialize(providerOptions);
                break;
            case 'here':
                HereProvider.initialize(providerOptions);
                break;
            case 'openStreetMap':
                OpenStreetMapProvider.initialize(providerOptions);
                break;
            default: // Defaults to GoogleMaps
                GoogleMapsProvider.initialize(providerOptions);
                break;
        }
    }
}

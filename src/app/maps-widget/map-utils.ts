export class MapUtils {
    public static getCurrentLocation(callback) {
        navigator.geolocation.getCurrentPosition(position => {
            callback(position);
        });
    }

    public static watchCurrentLocation(callback) {
        navigator.geolocation.watchPosition(position => {
            callback(position);
        });
    }
}

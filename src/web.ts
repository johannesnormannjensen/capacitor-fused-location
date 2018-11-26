import {WebPlugin} from '@capacitor/core';
import {
    FusedLocationOptions,
    FusedLocationPlugin,
    FusedLocationPosition,
    FusedLocationWatchCallback
} from './definitions';
import {PermissionsRequestResult} from "@capacitor/core/dist/esm/definitions";
import {extend} from "@capacitor/core/dist/esm/util";

export class FusedLocationPluginWeb extends WebPlugin implements FusedLocationPlugin {
    constructor() {
        super({
            name: 'FusedLocation',
            platforms: ['web']
        });
    }

    getCurrentPosition(options?: FusedLocationOptions): Promise<FusedLocationPosition> {
        return new Promise((resolve, reject) => {
            return this.requestPermissions().then((_result: PermissionsRequestResult) => {
                window.navigator.geolocation.getCurrentPosition((pos) => {
                    resolve(pos);
                }, (err) => {
                    reject(err);
                }, extend({
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                }, options));
            });
        });
    }

    watchPosition(options: FusedLocationOptions, callback: FusedLocationWatchCallback): string {
        let id = window.navigator.geolocation.watchPosition((pos) => {
            callback(pos);
        }, (err) => {
            callback(null, err);
        }, extend({
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }, options));

        return `${id}`;
    }

    clearWatch(options: { id: string }) {
        window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
        return Promise.resolve();
    }
}

const FusedLocation = new FusedLocationPluginWeb();

export {FusedLocation};

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { WebPlugin } from '@capacitor/core';
import { extend } from "@capacitor/core/dist/esm/util";
export class FusedLocationPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'FusedLocation',
            platforms: ['web']
        });
    }
    getCurrentPosition(options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                return this.requestPermissions().then((_result) => {
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
        });
    }
    watchPosition(options, callback) {
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
    clearWatch(options) {
        return __awaiter(this, void 0, void 0, function* () {
            window.navigator.geolocation.clearWatch(parseInt(options.id, 10));
            return Promise.resolve();
        });
    }
}
const FusedLocation = new FusedLocationPluginWeb();
export { FusedLocation };
//# sourceMappingURL=web.js.map
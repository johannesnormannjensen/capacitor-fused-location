import { CallbackID, WebPlugin } from '@capacitor/core';
import { FusedLocationOptions, FusedLocationPlugin, FusedLocationPosition, FusedLocationWatchCallback } from './definitions';
export declare class FusedLocationPluginWeb extends WebPlugin implements FusedLocationPlugin {
    constructor();
    getCurrentPosition(options?: FusedLocationOptions): Promise<FusedLocationPosition>;
    watchPosition(options: FusedLocationOptions, callback: FusedLocationWatchCallback): CallbackID;
    clearWatch(options: {
        id: string;
    }): Promise<void>;
}
declare const FusedLocation: FusedLocationPluginWeb;
export { FusedLocation };

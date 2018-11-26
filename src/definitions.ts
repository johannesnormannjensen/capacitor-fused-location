import {CallbackID} from "@capacitor/core";
import {Plugin} from "@capacitor/core/dist/esm/definitions";

declare global {
  interface PluginRegistry {
    FusedLocation?: FusedLocationPlugin;
  }
}

export interface FusedLocationPlugin extends Plugin {
    /**
     * Get the current GPS location of the device
     */
    getCurrentPosition(options?: FusedLocationOptions): Promise<FusedLocationPosition>;
    /**
     * Set up a watch for location changes. Note that watching for location changes
     * can consume a large amount of energy. Be smart about listening only when you need to.
     */
    watchPosition(options: FusedLocationOptions, callback: FusedLocationWatchCallback): CallbackID;

    /**
     * Clear a given watch
     */
    clearWatch(options: { id: string }): Promise<void>;
}

export interface FusedLocationPosition {
    /**
     * The GPS coordinates along with the accuracy of the data
     */
    coords: {
        latitude: number;
        longitude: number;
        accuracy: number;
        /**
         * The altitude the user is at (if available)
         */
        altitude?: number;
        /**
         * The speed the user is traveling (if available)
         */
        speed?: number;
        /**
         * The heading the user is facing (if available)
         */
        heading?: number;
    };
}

export interface FusedLocationOptions {
    enableHighAccuracy?: boolean; // default: false
    timeout?: number; // default: 10000,
    maximumAge?: number; // default: 0
    requireAltitude?: boolean; // default: false
}

export type FusedLocationWatchCallback = (position: FusedLocationPosition, err?: any) => void;


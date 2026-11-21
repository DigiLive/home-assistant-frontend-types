import type { Connection } from "home-assistant-js-websocket";
import { MAP_TILES_PATH } from "../common/map/map-style-transforms";
export { MAP_TILES_PATH };
export declare const ensureMapTilesToken: (connection: Connection) => Promise<string | undefined>;
/**
 * Forces a new token, for when the current one is refused. Deduplicated: a
 * refused map produces one of these per tile.
 */
export declare const refreshMapTilesToken: () => Promise<void>;
/** Leaflet bakes its URL template at layer creation, so it needs telling. */
export declare const subscribeMapTilesToken: (listener: (token: string) => void) => (() => void);
/**
 * Prefixes a proxy path with the instance that serves it. Concatenated rather
 * than resolved, so `{z}` and `{fontstack}` survive instead of being encoded.
 */
export declare const mapTilesUrl: (path: string) => string;
export interface MapTilesRequest {
    url: string;
    headers?: Record<string, string>;
}
/**
 * MapLibre hands tile URLs to a worker, which has no document to resolve a
 * relative URL against, so the result has to be absolute.
 */
export declare const withMapTilesToken: (url: string) => MapTilesRequest;

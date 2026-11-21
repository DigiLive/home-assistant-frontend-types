import type { Map as LeafletMap } from "leaflet";
import type { setWorkerUrl, StyleSpecification } from "maplibre-gl";
import type { LeafletModuleType } from "../dom/setup-leaflet-map";
import type { ResolvedMapStyle } from "./map-styles";
export declare const CONTEXT_RESTORE_GRACE = 2000;
export declare const RECOVERY_THROTTLE = 30000;
export declare const MAP_MIN_ZOOM = 1;
export declare const MAP_MAX_ZOOM = 20;
export interface MapBaseLayer {
    setMapStyle: (style: ResolvedMapStyle) => void;
}
export declare const supportsWebGL2: () => boolean;
export declare const supportsVectorMaps: () => boolean;
export declare const loadStyle: (mapStyle: ResolvedMapStyle) => Promise<StyleSpecification>;
export declare const ensureWorkerUrl: (setUrl: typeof setWorkerUrl) => void;
export declare const createBaseLayer: (leaflet: LeafletModuleType, map: LeafletMap, mapStyle: ResolvedMapStyle, token: string | undefined, rasterOnly?: boolean) => Promise<MapBaseLayer>;

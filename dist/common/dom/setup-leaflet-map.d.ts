import type { Map } from "leaflet";
import type { MapBaseLayer } from "../map/base-layer";
import type { ResolvedMapStyle } from "../map/map-styles";
export type LeafletModuleType = typeof import("leaflet");
export interface LeafletMapSetup {
    map: Map;
    leaflet: LeafletModuleType;
    baseLayer: MapBaseLayer;
}
export declare const setupLeafletMap: (mapElement: HTMLElement, initialView?: {
    latitude: number;
    longitude: number;
    zoom?: number;
    mapStyle?: ResolvedMapStyle;
    token?: string;
}) => Promise<LeafletMapSetup>;

import type { Map } from "leaflet";
import type { LeafletModuleType } from "../../dom/setup-leaflet-map";
import type { MapClusterOptions, MapCircleHandle, MapCircleOptions, MapControlPosition, MapEngine, MapEngineOptions, MapFitOptions, MapLatLng, MapMarkerHandle, MapMarkerOptions, MapPath, MapPathHandle, MapView } from "../map-engine";
import type { ResolvedMapStyle } from "../map-styles";
/** The Leaflet engine: raster viewing fallback without WebGL2, no editing */
export declare class LeafletMapEngine implements MapEngine {
    /** For the ha-map jsdom tests only */
    leafletMap?: Map;
    Leaflet?: LeafletModuleType;
    private _baseLayer?;
    private _clusterable;
    private _cluster?;
    private _clusterOptions;
    private _scaleControl?;
    init(container: HTMLElement, options: MapEngineOptions): Promise<void>;
    destroy(): void;
    invalidateSize(): void;
    hasUsableSize(): boolean;
    setMapStyle(style: ResolvedMapStyle): void;
    setZoomControlPosition(position: MapControlPosition): void;
    setScaleRuler(options: {
        metric: boolean;
    } | null): void;
    setView(center: MapLatLng, zoom?: number): void;
    getView(): MapView | undefined;
    setZoom(zoom: number): void;
    private _getZoom;
    private _project;
    fitBounds(points: MapLatLng[], options?: MapFitOptions): void;
    panTo(location: MapLatLng): void;
    containsLocation(location: MapLatLng): boolean;
    addMarker(element: HTMLElement, location: MapLatLng, options: MapMarkerOptions): MapMarkerHandle;
    addCircle(center: MapLatLng, options: MapCircleOptions): MapCircleHandle;
    addPath(path: MapPath): MapPathHandle;
    private _drawPath;
    setClustering(options: MapClusterOptions | null): void;
    refreshClusters(): void;
}

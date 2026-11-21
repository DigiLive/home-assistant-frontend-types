import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { MapLatLng, MapView } from "../../common/map/map-engine";
import type { ThemeMode } from "../../types";
import "../ha-alert";
import "../ha-input-helper-text";
import "./ha-map";
declare global {
    interface HASSDomEvents {
        "location-updated": {
            id: string;
            location: [number, number];
        };
        "markers-updated": undefined;
        "radius-updated": {
            id: string;
            radius: number;
        };
        "marker-clicked": {
            id: string;
        };
    }
}
export interface MarkerLocation {
    latitude: number;
    longitude: number;
    radius?: number;
    name?: string;
    id: string;
    icon?: string;
    iconPath?: string;
    radius_color?: string;
    /** Draw as a zone marker, without a radius */
    zone_marker?: boolean;
    location_editable?: boolean;
    radius_editable?: boolean;
    /** Clicking or activating the marker fires marker-clicked */
    clickable?: boolean;
    /** Counts toward the map fit; defaults to true */
    fit?: boolean;
}
/**
 * A map with draggable markers and zone circles, drawn by ha-map. Without
 * editing support (the Leaflet fallback) they are static, with a notice.
 */
export declare class HaLocationsEditor extends LitElement {
    locations?: MarkerLocation[];
    helper?: string;
    autoFit: boolean;
    zoom: number;
    themeMode: ThemeMode;
    pinOnClick: boolean;
    private map;
    private _editingAvailable;
    private _themes?;
    private _i18n?;
    fitMap(options?: {
        zoom?: number;
        pad?: number;
    }): void;
    getView(): MapView | undefined;
    fitBounds(boundingbox: MapLatLng[], options?: {
        zoom?: number;
        pad?: number;
    }): void;
    fitMarker(id: string, options?: {
        zoom?: number;
    }): Promise<void>;
    protected render(): TemplateResult;
    private _editableLocations;
    private _elements;
    private _elementsThemes?;
    private _elementFor;
    private _createZoneMarker;
    private _createIcon;
    updated(changedProps: PropertyValues): void;
    private _editingAvailableChanged;
    private _normalizeLongitude;
    private _locationMoved;
    private _radiusChanged;
    private _markerClicked;
    private _mapClicked;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-locations-editor": HaLocationsEditor;
    }
}

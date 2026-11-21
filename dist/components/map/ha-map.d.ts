import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
import type { MapControlPosition, MapFitPadding, MapLatLng, MapView } from "../../common/map/map-engine";
import type { MapStyleConfig } from "../../common/map/map-styles";
import "../ha-tooltip";
import type { ThemeMode } from "../../types";
declare global {
    interface HASSDomEvents {
        "map-clicked": {
            location: [number, number];
        };
    }
}
export interface HaMapPathPoint {
    point: MapLatLng;
    timestamp: Date;
}
export interface HaMapPaths {
    points: HaMapPathPoint[];
    color?: string;
    name?: string;
    gradualOpacity?: number;
    fullDatetime?: boolean;
}
export declare const MAP_CARD_MARKER_LABEL_MODES: readonly ["name", "state", "attribute", "icon"];
export type MapCardMarkerLabelMode = (typeof MAP_CARD_MARKER_LABEL_MODES)[number];
/** A location drawn for editing: a draggable marker, or a circle with a moveable center and radius */
export interface HaMapEditableLocation {
    id: string;
    location: MapLatLng;
    radius?: number;
    /** Element shown at the location, e.g. a named icon */
    element?: HTMLElement;
    elementSize?: [width: number, height: number];
    title?: string;
    color?: string;
    locationEditable?: boolean;
    radiusEditable?: boolean;
    /** Activating the marker fires editable-location-clicked; otherwise it is not a button */
    activatable?: boolean;
    /** Counts toward the map fit; defaults to true */
    fit?: boolean;
}
declare global {
    interface HASSDomEvents {
        "editable-location-moved": {
            id: string;
            location: MapLatLng;
        };
        "editable-location-resized": {
            id: string;
            radius: number;
        };
        "editable-location-clicked": {
            id: string;
        };
        /** Whether the loaded engine can edit; false on the Leaflet fallback */
        "editing-available-changed": {
            available: boolean;
        };
    }
}
export interface HaMapEntity {
    entity_id: string;
    color: string;
    label_mode?: MapCardMarkerLabelMode;
    attribute?: string;
    unit?: string;
    name?: string;
    focus?: boolean;
    hide_accuracy?: boolean;
    hide_radius?: boolean;
    selected?: boolean;
}
/**
 * @csspart marker - The frame of an entity marker or cluster avatar.
 * @csspart picture - The entity picture inside the frame.
 * @csspart marker-<entity-id> - The frame for one entity, e.g. `marker-person-anne`.
 * @csspart picture-<entity-id> - The picture for one entity.
 */
export declare class HaMap extends ReactiveElement {
    private _states;
    private _config;
    private _ui;
    private _i18n;
    private _formatters;
    private _connection;
    entities?: string[] | HaMapEntity[];
    paths?: HaMapPaths[];
    /** Locations drawn with drag handles for editing (ha-locations-editor) */
    editableLocations?: HaMapEditableLocation[];
    clickable: boolean;
    autoFit: boolean;
    renderPassive: boolean;
    interactiveZones: boolean;
    fitZones: boolean;
    /** Part of the map an overlay covers; automatic fits keep clear of it */
    fitPadding?: MapFitPadding;
    zoomPosition: MapControlPosition;
    private _zonePositions;
    private _zoneRadii;
    themeMode: ThemeMode;
    /** Cartography to draw; the theme mode picks its light or dark palette */
    mapStyle?: MapStyleConfig;
    zoom: number;
    clusterMarkers: boolean;
    scaleRuler: boolean;
    private _loaded;
    private _mapElement?;
    private _engine?;
    private _editableHandles;
    private _resizeObserver?;
    private _entityReg;
    private _registryConsumer?;
    private _entityHandles;
    private _tooltipCount;
    private _entityMarkers;
    private _clusterAvatars;
    private _zoneHandles;
    private _zoneCircleHandles;
    private _pathHandles;
    private _focusPoints;
    private _focusZonePoints;
    private _clickCount;
    private _isProgrammaticFit;
    private _pauseAutoFit;
    private _pendingFit?;
    connectedCallback(): void;
    private _watchRegistry;
    private _handleVisibilityChange;
    disconnectedCallback(): void;
    protected update(changedProps: PropertyValues): void;
    private get _darkMode();
    private _resolveMapStyle;
    private _themeColors?;
    private _readThemeColors;
    private get _resolvedMapStyle();
    private _updateMapAppearance;
    private _mapDrawn;
    private _drawnFallback?;
    private _markDrawn;
    private _loading;
    private _forceLeaflet;
    private _startingEngine?;
    private _setupAttempt;
    /** Whether the next engine is the vector one: only it draws a globe */
    private get _vectorEngine();
    private _createEngine;
    private _loadMap;
    private _setUpEngine;
    private _handleEngineFatal;
    private _handleEngineClick;
    private _hasFitted;
    private _withProgrammaticFit;
    fitMap(options?: {
        zoom?: number;
        pad?: number;
        padding?: MapFitPadding;
        unpause_autofit?: boolean;
    }): void;
    private _deferIfUnsized;
    private _runPendingFit;
    panTo(location: MapLatLng): void;
    containsLocation(location: MapLatLng): boolean;
    setView(center: MapLatLng, zoom?: number): void;
    getView(): MapView | undefined;
    fitBounds(boundingbox: MapLatLng[], options?: {
        zoom?: number;
        pad?: number;
        padding?: MapFitPadding;
        fly?: boolean;
    }): void;
    private _drawEditableLocations;
    private _attachTooltip;
    private _removeEditableLocations;
    private _computePathTooltip;
    private _drawPaths;
    private _drawEntities;
    private _zoneContaining;
    private _createClusterBubble;
    private _drawScaleRuler;
    private _getMarkerSize;
    private _attachObserver;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-map": HaMap;
    }
}

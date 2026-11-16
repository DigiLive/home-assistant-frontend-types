import type { StyleSpecification } from "maplibre-gl";
/** Where core proxies the tiles and glyphs */
export declare const MAP_TILES_PATH = "/api/map_tiles";
/** Everything a freshly built style needs before it is handed to MapLibre */
export declare const finalizeMapStyle: (name: string, style: StyleSpecification) => StyleSpecification;

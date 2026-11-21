import type { StyleSpecification } from "maplibre-gl";
import type { MapPalette } from "./map-styles";
export declare const buildMapStyle: (palette: MapPalette, options: Record<string, unknown>, baseColors?: Record<string, string>) => Promise<StyleSpecification>;

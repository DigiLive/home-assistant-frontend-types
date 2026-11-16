import type { AreaRegistryEntry } from "../../data/area/area_registry";
import type { FloorRegistryEntry } from "../../data/floor_registry";
export interface AreasFloorHierarchy {
    floors: {
        id: string;
        areas: string[];
    }[];
    areas: string[];
}
export declare const getAreasFloorHierarchy: (floors: FloorRegistryEntry[], areas: AreaRegistryEntry[]) => AreasFloorHierarchy;
export declare const getAreasOrder: (hierarchy: AreasFloorHierarchy) => string[];
export declare const getFloorOrder: (hierarchy: AreasFloorHierarchy) => string[];

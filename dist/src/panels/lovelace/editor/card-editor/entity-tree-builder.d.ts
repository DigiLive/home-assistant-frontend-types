import type { FuseIndex } from "fuse.js";
import type { HomeAssistant } from "../../../../types";
export interface DeviceNode {
    id: string;
    name: string;
    entityIds: string[];
    children: DeviceNode[];
}
export interface AreaNode {
    id: string;
    name: string;
    icon?: string;
    directEntityIds: string[];
    devices: DeviceNode[];
}
export interface FloorNode {
    id: string;
    name: string;
    icon: string | null;
    level: number | null;
    areas: AreaNode[];
}
export interface DomainGroup {
    domain: string;
    name: string;
    entityIds: string[];
}
export interface SearchableEntity {
    id: string;
    name: string;
    area: string;
    parentDevice: string;
    device: string;
    domain: string;
    search_labels: {
        entityName: string | null;
        friendlyName: string | null;
        deviceName: string | null;
        parentDeviceName: string | null;
        areaName: string | null;
        domainName: string | null;
        entityId: string;
    };
}
export interface UnassignedSection {
    id: "entities" | "helpers" | "devices" | "services";
    label: string;
    iconPath: string;
    domains?: DomainGroup[];
    devices?: DeviceNode[];
}
export interface EntityTree {
    floors: FloorNode[];
    otherAreas: AreaNode[];
    unassignedSections: UnassignedSection[];
    searchableEntities: SearchableEntity[];
}
export type EntityFuseIndex = FuseIndex<SearchableEntity>;
export declare const buildSearchIndex: (entities: SearchableEntity[]) => EntityFuseIndex;
export declare const OTHER_AREAS_ID = "__other_areas__";
export declare const floorKey: (id: string) => string;
export declare const unassignedKey: (id: string) => string;
export declare const areaKey: (parent: string, id: string) => string;
export declare const deviceKey: (parent: string, id: string) => string;
export declare const domainKey: (parent: string, domain: string) => string;
export declare const childKeyPrefix: (key: string) => string;
export interface BuildEntityTreeInput {
    states: HomeAssistant["states"];
    entities: HomeAssistant["entities"];
    devices: HomeAssistant["devices"];
    areas: HomeAssistant["areas"];
    floors: HomeAssistant["floors"];
    language: string | undefined;
    localize: HomeAssistant["localize"];
}
export declare function buildEntityTree(input: BuildEntityTreeInput): EntityTree;
export declare function pathToEntity(tree: EntityTree, entityId: string): string[];
export declare function searchEntities(entities: SearchableEntity[], index: EntityFuseIndex, filter: string, limit?: number): SearchableEntity[];

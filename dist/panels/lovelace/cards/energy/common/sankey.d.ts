import type { Link, Node } from "../../../../../components/chart/ha-sankey-chart";
import type { DeviceConsumptionEnergyPreference } from "../../../../../data/energy";
import type { HomeAssistant, HomeAssistantRegistries } from "../../../../../types";
export declare const MIN_SANKEY_THRESHOLD_FACTOR = 0.001;
export declare const DEFAULT_MAX_SANKEY_DEVICES = 20;
export type SankeyDeviceNode = Node & {
    parent?: string;
};
/** Open more-info for a clicked sankey node that maps to an entity. */
export declare const fireSankeyNodeMoreInfo: (el: HTMLElement, node: Node) => void;
export interface FindDevicesOverCapOptions {
    devices: DeviceConsumptionEnergyPreference[];
    /** Max named children per parent. Falsy or non-positive disables the cap. */
    maxDevices: number | undefined;
    rootNodeId: string;
    renderedIds: ReadonlySet<string>;
    deviceValues: ReadonlyMap<string, number>;
    getId: (device: DeviceConsumptionEnergyPreference) => string | undefined;
    /** First ancestor rendered as its own node, else undefined. */
    getEffectiveParent: (device: DeviceConsumptionEnergyPreference) => string | undefined;
}
/**
 * Node ids to drop from the rendered set because their parent has more rendered
 * children than `maxDevices`. Callers group the result into the parent's "Other"
 * node, so the smallest devices merge instead of disappearing.
 */
export declare const findDevicesOverCap: ({ devices, maxDevices, rootNodeId, renderedIds, deviceValues, getId, getEffectiveParent, }: FindDevicesOverCapOptions) => Set<string>;
export interface BuildSankeyDeviceNodesOptions {
    devices: DeviceConsumptionEnergyPreference[];
    computedStyle: CSSStyleDeclaration;
    localize: HomeAssistant["localize"];
    /** Node small consumers and untracked flow attach to (usually "home"). */
    rootNodeId: string;
    /** Flows below this value are grouped into an "Other" node. */
    minThreshold: number;
    /**
     * Max named child nodes per parent. Once a parent has more rendered children
     * than this, the smallest are grouped into that parent's "Other" node.
     * Undefined means no cap.
     */
    maxDevices?: number;
    /** Per-parent untracked residual only shown when above this value. */
    untrackedFloor: number;
    /** Round the "Other" node value up (instantaneous cards only). */
    ceilOtherValue: boolean;
    /** Starting untracked total (the home/root value). */
    initialUntracked: number;
    getId: (device: DeviceConsumptionEnergyPreference) => string | undefined;
    getValue: (id: string) => number;
    getLabel: (id: string, name: string | undefined) => string;
    getEntityId: (id: string) => string | undefined;
}
/**
 * Build the device layer of a sankey card: one node per device, small devices
 * folded into per-parent "Other" nodes, and per-parent untracked residuals.
 * Value/label/id/entityId are supplied via callbacks so both cumulative
 * (statistic growth) and instantaneous (live power/flow) cards can share it.
 */
export declare const buildSankeyDeviceNodes: (options: BuildSankeyDeviceNodesOptions) => {
    deviceNodes: SankeyDeviceNode[];
    parentLinks: Record<string, string>;
    links: Link[];
    untrackedConsumption: number;
};
/** Bucket device nodes by their entity's area and floor. */
export declare const groupSankeyDevicesByFloorAndArea: (states: HomeAssistant["states"], registries: HomeAssistantRegistries, deviceNodes: Node[]) => {
    areas: Record<string, {
        value: number;
        devices: Node[];
    }>;
    floors: Record<string, {
        value: number;
        areas: string[];
    }>;
};
/**
 * Organize device nodes into hierarchical sections based on parent-child
 * relationships (top-level parents first, then their children, recursively).
 */
export declare const getSankeyDeviceSections: (parentLinks: Record<string, string>, deviceNodes: Node[]) => Node[][];
export interface BuildSankeyLayoutOptions {
    states: HomeAssistant["states"];
    registries: HomeAssistantRegistries;
    computedStyle: CSSStyleDeclaration;
    localize: HomeAssistant["localize"];
    deviceNodes: SankeyDeviceNode[];
    parentLinks: Record<string, string>;
    rootNodeId: string;
    groupByFloor: boolean;
    groupByArea: boolean;
    untrackedConsumption: number;
    untrackedFloor: number;
}
/**
 * Build the floor/area grouping layer, emit the device section nodes with
 * their final section indices, and add the top-level untracked node.
 */
export declare const buildSankeyLayout: (options: BuildSankeyLayoutOptions) => {
    nodes: Node[];
    links: Link[];
};

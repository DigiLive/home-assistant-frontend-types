import type { EntityCategory } from "../entity/entity_registry";
export declare const DEVICE_ENTITY_CATEGORIES: readonly ["control", "sensor", "notify", "event", "assist", "config", "diagnostic"];
export type DeviceEntityCategory = (typeof DEVICE_ENTITY_CATEGORIES)[number];
export declare const computeDeviceEntityCategory: (entry: {
    entity_id: string;
    entity_category?: EntityCategory | null;
}) => DeviceEntityCategory;

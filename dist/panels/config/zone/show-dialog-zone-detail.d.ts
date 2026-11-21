import type { Zone, ZoneMutableParams } from "../../../data/zone";
export interface ZoneDetailDialogParams {
    entry?: Zone;
    /** Where a new zone starts when nothing else names a location */
    location?: [latitude: number, longitude: number];
    createEntry: (values: ZoneMutableParams) => Promise<unknown>;
    updateEntry?: (updates: Partial<ZoneMutableParams>) => Promise<unknown>;
    removeEntry?: () => Promise<boolean>;
}
export declare const loadZoneDetailDialog: () => Promise<typeof import("./dialog-zone-detail")>;
export declare const showZoneDetailDialog: (element: HTMLElement, systemLogDetailParams: ZoneDetailDialogParams) => void;

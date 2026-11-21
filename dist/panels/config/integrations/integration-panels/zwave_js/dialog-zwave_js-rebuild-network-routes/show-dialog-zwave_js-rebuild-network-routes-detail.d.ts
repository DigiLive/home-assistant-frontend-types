import type { LitElement } from "lit";
export interface ZWaveJSRebuildNetworkRoutesDetailDialogParams {
    type: "pending" | "skipped" | "failed" | "done";
    configEntryId: string;
}
export declare const loadRebuildNetworkRoutesDialog: () => Promise<typeof import("./dialog-zwave_js-rebuild-network-routes-detail")>;
export declare const showZWaveJSRebuildNetworkRoutesDetailDialog: (element: LitElement, dialogParams: ZWaveJSRebuildNetworkRoutesDetailDialogParams) => void;

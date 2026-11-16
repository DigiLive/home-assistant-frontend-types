import type { ReactiveController, ReactiveControllerHost } from "lit";
declare global {
    interface HASSDomEvents {
        "hass-panel-ready": undefined;
    }
}
export declare const panelIsReady: (element: HTMLElement) => Promise<void>;
export type RegisterChildPanelReady = (ready: Promise<void>) => void;
export declare const childPanelReadyContext: {
    __context__: RegisterChildPanelReady;
};
export declare class ChildPanelReady implements ReactiveController {
    private _promises;
    private _host;
    private _resolveReady?;
    private _completing;
    ready: Promise<void>;
    constructor(host: ReactiveControllerHost & HTMLElement);
    hostUpdated(): void;
    private _complete;
    private _waitForPromises;
}
export declare class PanelReady {
    ready?: Promise<void>;
    track(element: HTMLElement, waitForReady?: boolean): void;
}

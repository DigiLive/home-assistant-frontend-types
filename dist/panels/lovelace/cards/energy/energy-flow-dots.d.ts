import type { LitElement, ReactiveController } from "lit";
export interface EnergyFlowDot {
    path: string;
    className: string;
    duration: number;
    reverse?: boolean;
}
export declare const renderEnergyFlowDots: (dots: (EnergyFlowDot | false | null | undefined | 0)[]) => import("lit-html").TemplateResult<1>;
export declare class EnergyFlowDotsController implements ReactiveController {
    private _host;
    private _running;
    private _resizeObserver?;
    constructor(_host: LitElement);
    hostConnected(): void;
    hostUpdated(): void;
    hostDisconnected(): void;
    private _sync;
    private _stop;
    private _animate;
}
export declare const energyFlowDotsStyles: import("lit").CSSResult;

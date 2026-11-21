import type { ReactiveControllerHost } from "lit";
export declare const fitInRows: (widths: number[], moreWidth: number, rowWidth: number, gap: number, maxRows: number) => number;
export declare class LegendFitController {
    fit?: number;
    private _host;
    private _element?;
    private _more?;
    private _widths;
    private _rowWidth?;
    private _resizeObserver?;
    constructor(host: ReactiveControllerHost);
    target(): any;
    refit(): void;
    private _setElement;
    private _fit;
}

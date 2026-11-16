import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { BlueprintDomain, Blueprints } from "../data/blueprint";
import "./ha-select";
declare class HaBluePrintPicker extends LitElement {
    label?: string;
    value: string;
    domain: BlueprintDomain;
    blueprints?: Blueprints;
    disabled: boolean;
    private _select?;
    private _i18n;
    private _api;
    open(): void;
    private _processedBlueprints;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _blueprintChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-blueprint-picker": HaBluePrintPicker;
    }
}
export {};

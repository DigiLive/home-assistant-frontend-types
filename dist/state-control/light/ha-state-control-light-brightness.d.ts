import type { TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-control-slider";
import type { LightEntity } from "../../data/light";
export declare class HaStateControlLightBrightness extends LitElement {
    private _api;
    private _formatters;
    private _i18n;
    stateObj: LightEntity;
    value?: number;
    protected updated(changedProp: PropertyValues<this>): void;
    private _valueChanged;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-control-light-brightness": HaStateControlLightBrightness;
    }
}

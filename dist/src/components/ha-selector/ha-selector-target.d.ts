import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TargetSelector } from "../../data/selector";
import type { HassServiceTargetWithExclude } from "../../data/target";
import type { HomeAssistant } from "../../types";
import "../ha-target-picker";
export declare class HaTargetSelector extends LitElement {
    hass: HomeAssistant;
    selector: TargetSelector;
    value?: HassServiceTargetWithExclude;
    label?: string;
    helper?: string;
    disabled: boolean;
    private _entitySources?;
    private _createDomains;
    private _deviceIntegrationLookup;
    private _hasIntegration;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _entityFilter;
    private _deviceFilter;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-target": HaTargetSelector;
    }
}

import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import type { HomeAssistant } from "../../../../types";
import "../conditions/ha-card-conditions-editor";
import "../conditions/ha-visibility-status";
export declare class HuiBadgeVisibilityEditor extends LitElement {
    hass: HomeAssistant;
    config: LovelaceCardConfig;
    entityId?: string;
    private _contextProvider;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-visibility-editor": HuiBadgeVisibilityEditor;
    }
}

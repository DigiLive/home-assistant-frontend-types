import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import type { HumidifierEntity } from "../../../data/humidifier";
import "../../../state-control/humidifier/ha-state-control-humidifier-humidity";
import "../components/ha-more-info-control-select-container";
declare class MoreInfoHumidifier extends LitElement {
    stateObj?: HumidifierEntity;
    private _localize;
    private _api;
    private _formatters;
    _mode?: string;
    private _renderModeIcon;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleStateChanged;
    private _handleModeChanged;
    private _callServiceHelper;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-humidifier": MoreInfoHumidifier;
    }
}
export {};

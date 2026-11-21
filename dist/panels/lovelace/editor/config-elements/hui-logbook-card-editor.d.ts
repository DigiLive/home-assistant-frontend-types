import type { HassServiceTarget } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import "../../../../components/ha-target-picker";
import type { HomeAssistant } from "../../../../types";
import type { LogbookCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiLogbookCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _schema;
    setConfig(config: LogbookCardConfig): void;
    get _targetPicker(): HassServiceTarget;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _data;
    private _filterFunc;
    private _entitiesChanged;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-logbook-card-editor": HuiLogbookCardEditor;
    }
}

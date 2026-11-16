import { LitElement } from "lit";
import type { IconSelector } from "../../data/selector";
import "../ha-icon-picker";
import "../ha-state-icon";
export declare class HaIconSelector extends LitElement {
    selector: IconSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        icon_entity?: string;
    };
    private _stateObj?;
    private _entities?;
    private _config?;
    private _connection?;
    private _placeholderTask;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-icon": HaIconSelector;
    }
}

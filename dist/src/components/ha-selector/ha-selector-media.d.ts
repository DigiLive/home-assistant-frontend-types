import { LitElement, type TemplateResult } from "lit";
import type { MediaSelector, MediaSelectorValue } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import "../ha-media-item-picker";
export declare class HaMediaSelector extends LitElement {
    hass: HomeAssistant;
    selector: MediaSelector;
    value?: MediaSelectorValue | MediaSelectorValue[];
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: {
        filter_entity?: string | string[];
    };
    private _renderPicker;
    private _multiValueChanged;
    protected render(): TemplateResult[] | TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-media": HaMediaSelector;
    }
}

import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { ChooseSelector } from "../../data/selector";
import type { HomeAssistant } from "../../types";
import type { LocalizeFunc } from "../../common/translations/localize";
import "../ha-button-toggle-group";
import "./ha-selector";
export declare class HaChooseSelector extends LitElement {
    hass: HomeAssistant;
    selector: ChooseSelector;
    value?: any;
    label?: string;
    helper?: string;
    context?: Record<string, any>;
    localizeValue?: (key: string) => string;
    disabled: boolean;
    required: boolean;
    protected _localize?: LocalizeFunc;
    _activeChoice?: string;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _toggleButtons;
    private _choiceChanged;
    private _handleValueChanged;
    private _selector;
    private _value;
    private _setActiveChoice;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-choose": HaChooseSelector;
    }
}

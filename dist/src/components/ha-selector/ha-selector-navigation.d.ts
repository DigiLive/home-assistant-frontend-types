import { LitElement } from "lit";
import type { NavigationSelector } from "../../data/selector";
import type { ActionRelatedContext } from "../../panels/lovelace/components/hui-action-editor";
import "../ha-navigation-picker";
export declare class HaNavigationSelector extends LitElement {
    selector: NavigationSelector;
    value?: string;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    context?: ActionRelatedContext;
    protected render(): import("lit-html").TemplateResult<1>;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-navigation": HaNavigationSelector;
    }
}

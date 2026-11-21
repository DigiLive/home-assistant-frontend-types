import type { TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "./ha-dropdown";
import "./ha-dropdown-item";
import "./ha-icon";
import "./ha-svg-icon";
export interface SelectOption {
    label: string;
    value: string;
    iconPath?: string;
    icon?: string;
}
export declare class HaControlSelectMenu extends LitElement {
    showArrow: boolean;
    hideLabel: boolean;
    disabled: boolean;
    required: boolean;
    label?: string;
    value?: string;
    options: SelectOption[];
    renderIcon?: (value: string) => TemplateResult<1> | typeof nothing;
    private _triggerButton;
    render(): TemplateResult<1>;
    private _renderTrigger;
    private _renderOption;
    private _renderArrow;
    private _renderIcon;
    private _showDropdown;
    private getValueObject;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-control-select-menu": HaControlSelectMenu;
    }
}

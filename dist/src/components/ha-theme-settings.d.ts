import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { ThemeSettings } from "../types";
import "./ha-button";
import "./item/ha-list-item-base";
import "./list/ha-list-base";
import "./ha-theme-picker";
import "./input/ha-input";
import "./radio/ha-radio-group";
import "./radio/ha-radio-option";
export interface ThemeSettingsLabels {
    theme?: string;
    noTheme?: string;
    mode?: string;
    autoMode?: string;
    lightMode?: string;
    darkMode?: string;
    colors?: string;
    primaryColor?: string;
    accentColor?: string;
    reset?: string;
}
export declare class HaThemeSettings extends LitElement {
    private _ui;
    selectedTheme?: ThemeSettings | null;
    labels?: ThemeSettingsLabels;
    description?: TemplateResult | string;
    heading?: string;
    narrow: boolean;
    includeDefault: boolean;
    showThemePicker: boolean;
    themePickerDisabled: boolean;
    protected render(): TemplateResult;
    private _handleColorChange;
    private _resetColors;
    private _supportsModeSelection;
    private _handleDarkMode;
    private _handleThemeSelection;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "theme-settings-changed": Partial<ThemeSettings>;
    }
    interface HTMLElementTagNameMap {
        "ha-theme-settings": HaThemeSettings;
    }
}

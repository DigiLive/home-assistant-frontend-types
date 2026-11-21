import { LitElement } from "lit";
import "../../../components/ha-icon";
import "../../../components/ha-navigation-picker";
import "../../../components/ha-settings-row";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../../../components/ha-switch";
import { type ShortcutItem } from "../../../data/home_shortcuts";
import type { HomeAssistant } from "../../../types";
import "./home-shortcut-list-item";
export declare class HomeShortcutsEditor extends LitElement {
    hass: HomeAssistant;
    shortcuts: ShortcutItem[];
    private _resolveShortcuts;
    private get _resolved();
    private _itemKey;
    protected render(): import("lit-html").TemplateResult<1>;
    private _getSummaryLabel;
    private _summaryMeta;
    private _valueChanged;
    private _moved;
    private _summaryToggleChanged;
    private _addShortcut;
    private _editShortcut;
    private _deleteShortcut;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "home-shortcuts-editor": HomeShortcutsEditor;
    }
}

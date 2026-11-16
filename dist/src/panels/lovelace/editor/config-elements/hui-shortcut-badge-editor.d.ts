import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { ShortcutBadgeConfig } from "../../badges/types";
import type { LovelaceBadgeEditor } from "../../types";
export declare class HuiShortcutBadgeEditor extends LitElement implements LovelaceBadgeEditor {
    hass?: HomeAssistant;
    private _config?;
    private _navInfo;
    private _serviceInfo;
    setConfig(config: ShortcutBadgeConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-shortcut-badge-editor": HuiShortcutBadgeEditor;
    }
}

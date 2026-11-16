import { LitElement, nothing, type PropertyValues } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { ShortcutCardConfig } from "../../cards/types";
import type { LovelaceCardEditor } from "../../types";
export declare class HuiShortcutCardEditor extends LitElement implements LovelaceCardEditor {
    hass?: HomeAssistant;
    private _config?;
    private _navInfo;
    private _serviceInfo;
    setConfig(config: ShortcutCardConfig): void;
    protected willUpdate(changedProps: PropertyValues): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-shortcut-card-editor": HuiShortcutCardEditor;
    }
}

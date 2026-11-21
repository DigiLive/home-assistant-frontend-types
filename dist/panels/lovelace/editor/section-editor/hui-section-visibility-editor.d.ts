import { LitElement } from "lit";
import type { LovelaceSectionRawConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
import "../conditions/ha-card-conditions-editor";
import "../conditions/ha-visibility-status";
export declare class HuiDialogEditSection extends LitElement {
    hass: HomeAssistant;
    config: LovelaceSectionRawConfig;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
    private _valueChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-visibility-editor": HuiDialogEditSection;
    }
}

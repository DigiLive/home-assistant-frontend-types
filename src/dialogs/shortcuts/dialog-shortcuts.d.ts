import { LitElement, nothing } from "lit";
import "../../components/ha-button";
import type { HomeAssistant } from "../../types";
import "../../components/ha-alert";
import "../../components/chips/ha-assist-chip";
declare class DialogShortcuts extends LitElement {
    hass: HomeAssistant;
    private _opened;
    showDialog(): Promise<void>;
    closeDialog(): Promise<void>;
    private _renderShortcut;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "dialog-shortcuts": DialogShortcuts;
    }
}
export {};

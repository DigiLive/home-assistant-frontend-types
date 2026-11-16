import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-settings-row";
export declare class HaAutomationNote extends LitElement {
    note: string;
    private _i18n;
    protected render(): import("lit-html").TemplateResult<1>;
    private _handleClick;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-note": HaAutomationNote;
    }
    interface HASSDomEvents {
        "edit-note": undefined;
    }
}

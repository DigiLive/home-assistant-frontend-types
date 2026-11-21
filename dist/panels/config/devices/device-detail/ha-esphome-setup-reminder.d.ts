import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
export declare class HaESPHomeSetupReminder extends LitElement {
    private _i18n?;
    remaining: number;
    count: number;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _setup;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-esphome-setup-reminder": HaESPHomeSetupReminder;
    }
}

import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-svg-icon";
import type { AddonState } from "../../../../data/hassio/addon";
declare class SupervisorAppsState extends LitElement {
    state: Exclude<AddonState, null>;
    private _i18n;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-apps-state": SupervisorAppsState;
    }
}
export {};

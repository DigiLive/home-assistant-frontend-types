import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-button";
declare class SupervisorAppSystemManaged extends LitElement {
    narrow: boolean;
    private i18n;
    hideButton: boolean;
    protected render(): TemplateResult;
    private _takeControl;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-app-system-managed": SupervisorAppSystemManaged;
    }
    interface HASSDomEvents {
        "system-managed-take-control": undefined;
    }
}
export {};

import "@home-assistant/webawesome/dist/components/tag/tag";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-svg-icon";
declare class SupervisorAppsTag extends LitElement {
    variant: "brand" | "success" | "warning" | "danger" | "neutral";
    iconPath?: string;
    label: string;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-apps-tag": SupervisorAppsTag;
    }
}
export {};

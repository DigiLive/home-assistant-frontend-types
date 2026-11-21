import "@home-assistant/webawesome/dist/components/tag/tag";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-app-icon";
import "../../../../components/ha-svg-icon";
import type { AddonStage, AddonState } from "../../../../data/hassio/addon";
import type { HomeAssistant } from "../../../../types";
import "./supervisor-apps-state";
import "./supervisor-apps-tag";
export interface AppTag {
    label: string;
    variant: "brand" | "success" | "warning" | "danger" | "neutral";
    iconPath?: string;
}
declare class SupervisorAppsCardContent extends LitElement {
    hass: HomeAssistant;
    title: string;
    stage: AddonStage;
    state?: AddonState;
    installed: boolean;
    description?: string;
    available: boolean;
    tags?: AppTag[];
    iconTitle?: string;
    iconClass?: string;
    icon: string;
    appSlug?: string;
    hasAppIcon?: boolean;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-apps-card-content": SupervisorAppsCardContent;
    }
}
export {};

import type { PropertyValues } from "lit";
import type { AutomationEntity } from "../../../data/automation";
import type { CloudStatus } from "../../../data/cloud";
import type { RouterOptions } from "../../../layouts/hass-router-page";
import { HassRouterPage } from "../../../layouts/hass-router-page";
import type { HomeAssistant } from "../../../types";
import "./ha-automation-editor";
import "./ha-automation-picker";
declare class HaConfigAutomation extends HassRouterPage {
    hass: HomeAssistant;
    narrow: boolean;
    isWide: boolean;
    cloudStatus?: CloudStatus;
    automations: AutomationEntity[];
    private _debouncedUpdateAutomations;
    protected routerOptions: RouterOptions;
    private _getAutomations;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected updatePageEl(pageEl: any, changedProps: PropertyValues): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-automation": HaConfigAutomation;
    }
}
export {};

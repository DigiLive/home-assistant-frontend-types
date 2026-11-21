import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import type { HassioAddonRepository } from "../../../data/hassio/addon";
import type { StoreAddon } from "../../../data/supervisor/store";
import type { HomeAssistant } from "../../../types";
import "./components/supervisor-apps-card-content";
export declare class SupervisorAppsRepositoryEl extends LitElement {
    hass: HomeAssistant;
    repo: HassioAddonRepository;
    addons: StoreAddon[];
    filter: string;
    private _getAddons;
    protected render(): TemplateResult;
    private _addonTapped;
    private _getAppTags;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-apps-repository": SupervisorAppsRepositoryEl;
    }
}

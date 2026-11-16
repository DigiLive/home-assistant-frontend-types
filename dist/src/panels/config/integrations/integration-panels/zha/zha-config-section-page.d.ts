import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/buttons/ha-progress-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-form/ha-form";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../../../types";
declare class ZHAConfigSectionPage extends LitElement {
    hass: HomeAssistant;
    route: Route;
    narrow: boolean;
    isWide: boolean;
    sectionId: string;
    private _configuration?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _fetchConfiguration;
    protected render(): TemplateResult;
    private _dataChanged;
    private _updateConfiguration;
    private _computeLabelCallback;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-config-section-page": ZHAConfigSectionPage;
    }
}
export {};

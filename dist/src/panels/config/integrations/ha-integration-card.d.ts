import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-card";
import "../../../components/ha-ripple";
import "../../../components/ha-spinner";
import "../../../components/ha-svg-icon";
import "../../../components/ha-tooltip";
import "../../../components/item/ha-row-item";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { IntegrationLogInfo, IntegrationManifest } from "../../../data/integration";
import type { ConfigEntryExtended } from "./ha-config-integrations";
export declare class HaIntegrationCard extends LitElement {
    domain: string;
    items: ConfigEntryExtended[];
    manifest?: IntegrationManifest;
    entityRegistryEntries: EntityRegistryEntry[];
    logInfo?: IntegrationLogInfo;
    domainEntities: string[];
    private _localize;
    private _devices;
    private _darkMode?;
    private _hassUrl;
    private _brandsAccessToken?;
    private _lastPointerType?;
    protected render(): TemplateResult;
    private _computeStatus;
    private _computeSupportingText;
    private _renderSupportingText;
    private _renderIcons;
    private _handleTooltipPointerDown;
    private _handleTooltipClick;
    private _onImageLoad;
    private _onImageError;
    private _getEntityCount;
    private _getDevices;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-integration-card": HaIntegrationCard;
    }
}

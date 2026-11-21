import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-code-editor";
import "../../../../../components/ha-empty-state";
import "../../../../../components/ha-icon-next";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-switch";
import "../../../../../components/input/ha-input";
import "../../../../../components/item/ha-list-item-button";
import "../../../../../components/list/ha-list-base";
import "../../../../../components/list/ha-list-nav";
import "../../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../../types";
import "./mqtt-subscribe-card";
export declare class MQTTConfigPanel extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _topic;
    private _payload;
    private _qos;
    private _retain;
    private _configEntry?;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    private _MQTTDeviceIds;
    private _entityCount;
    protected render(): TemplateResult | typeof nothing;
    private _renderNotConfigured;
    private _renderNetworkStatus;
    private _renderMyNetworkCard;
    private _renderNavigationCard;
    private _renderPublishCard;
    private _fetchConfigEntry;
    private _handleTopic;
    private _handlePayload;
    private _handleQos;
    private _handleRetain;
    private _publish;
    private _openOptionFlow;
    private _openConfigFlow;
    private _setUp;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-config-panel": MQTTConfigPanel;
    }
}

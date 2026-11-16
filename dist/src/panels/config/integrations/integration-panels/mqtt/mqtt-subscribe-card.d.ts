import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-button";
import "../../../../../components/ha-card";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-markdown";
import "../../../../../components/ha-select";
import "../../../../../components/input/ha-input";
import type { HomeAssistant } from "../../../../../types";
import "../../../../../components/ha-switch";
declare class MqttSubscribeCard extends LitElement {
    hass: HomeAssistant;
    private _topic;
    private _qos;
    private _json_format;
    private _subscribed?;
    private _messages;
    private _messageCount;
    disconnectedCallback(): void;
    protected render(): TemplateResult;
    private _handleTopic;
    private _handleQos;
    private _handleJSONFormat;
    private _handleCopyClick;
    private _handleSubmit;
    private _handleMessage;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "mqtt-subscribe-card": MqttSubscribeCard;
    }
}
export {};

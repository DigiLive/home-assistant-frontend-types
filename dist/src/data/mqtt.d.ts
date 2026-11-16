import type { HomeAssistant } from "../types";
export interface MQTTMessage {
    topic: string;
    payload: string;
    qos: number;
    retain: boolean;
}
export interface MQTTLoggedMessage extends MQTTMessage {
    time: string;
}
export interface MQTTTopicDebugInfo {
    topic: string;
    messages: MQTTLoggedMessage[];
}
export interface MQTTDiscoveryDebugInfo {
    topic: string;
    payload: Record<string, unknown> | string;
}
export interface MQTTEntityDebugInfo {
    entity_id: string;
    discovery_data: MQTTDiscoveryDebugInfo;
    subscriptions: MQTTTopicDebugInfo[];
    transmitted: MQTTTopicDebugInfo[];
}
export interface MQTTTriggerDebugInfo {
    discovery_data: MQTTDiscoveryDebugInfo | null;
}
export interface MQTTDeviceDebugInfo {
    entities: MQTTEntityDebugInfo[];
    triggers: MQTTTriggerDebugInfo[];
}
export declare const subscribeMQTTTopic: (hass: HomeAssistant, topic: string, callback: (message: MQTTMessage) => void, qos?: number) => Promise<() => Promise<void>>;
export declare const fetchMQTTDebugInfo: (hass: HomeAssistant, deviceId: string) => Promise<MQTTDeviceDebugInfo>;

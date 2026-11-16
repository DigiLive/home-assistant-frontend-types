import type { HomeAssistant } from "../types";
export interface Webhook {
    webhook_id: string;
    domain: string;
    name: string;
    local_only: boolean;
    allowed_methods: string[];
}
export interface WebhookError {
    code: number;
    message: string;
}
export declare const fetchWebhooks: (hass: HomeAssistant) => Promise<Webhook[]>;
export declare const isActiveCloudWebhook: (hook: Webhook) => boolean;

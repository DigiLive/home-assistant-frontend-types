import type { EntityDomainFilter } from "../common/entity/entity_domain_filter";
import type { HomeAssistant } from "../types";
export interface CloudAutoLogin {
    email: string;
    failed: string | null;
}
interface CloudStatusNotLoggedIn {
    logged_in: false;
    cloud: "disconnected" | "connecting" | "connected";
    http_use_ssl: boolean;
    auto_login: CloudAutoLogin | null;
}
export interface CertificateInformation {
    common_name: string;
    expire_date: string;
    fingerprint: string;
    alternative_names: string[];
}
export interface CloudPreferences {
    google_enabled: boolean;
    alexa_enabled: boolean;
    remote_enabled: boolean;
    remote_allow_remote_enable: boolean;
    google_secure_devices_pin: string | null;
    cloudhooks: Record<string, CloudWebhook>;
    alexa_default_expose: string[] | null;
    alexa_report_state: boolean;
    google_default_expose: string[] | null;
    google_report_state: boolean;
    tts_default_voice: [string, string];
    cloud_ice_servers_enabled: boolean;
    onboarded_items: string[];
    onboarding_postponed_until: string | null;
}
export type RemoteCertificateStatus = "error" | "generating" | "loading" | "loaded" | "ready";
export interface CloudStatusLoggedIn {
    logged_in: true;
    auto_login: null;
    cloud: "disconnected" | "connecting" | "connected";
    cloud_last_disconnect_reason: {
        clean: boolean;
        reason: string;
    } | null;
    email: string;
    google_registered: boolean;
    google_local_connected: boolean;
    google_entities: EntityDomainFilter;
    alexa_registered: boolean;
    alexa_entities: EntityDomainFilter;
    prefs: CloudPreferences;
    remote_domain: string | null;
    remote_connected: boolean;
    remote_certificate: CertificateInformation | null;
    remote_certificate_status: RemoteCertificateStatus | null;
    http_use_ssl: boolean;
    active_subscription: boolean;
    onboarding_postponed: boolean;
    onboarding_completed: boolean;
}
export type CloudStatus = CloudStatusNotLoggedIn | CloudStatusLoggedIn;
export declare const cloudStatusAutoLogin: (status: CloudStatus | undefined) => CloudAutoLogin | null;
export declare const ONBOARDING_ITEMS: readonly ["remote", "backup", "voice", "streaming"];
export type CloudOnboardingItem = (typeof ONBOARDING_ITEMS)[number];
type SubscriptionStatus = "active" | "canceled" | "expired" | "trialing" | "unknown";
export interface SubscriptionInfo {
    human_description: string;
    provider: string;
    plan_renewal_date?: number;
    subscription?: {
        status?: SubscriptionStatus;
    };
}
export interface CloudWebhook {
    webhook_id: string;
    cloudhook_id: string;
    cloudhook_url: string;
    managed?: boolean;
}
interface CloudLoginBase {
    hass: HomeAssistant;
    email: string;
    check_connection?: boolean;
}
export interface CloudLoginPassword extends CloudLoginBase {
    password: string;
}
export interface CloudLoginMFA extends CloudLoginBase {
    code: string;
}
export type CloudEvent = {
    type: "login" | "logout" | "auto_login_cancelled";
} | {
    type: "auto_login_failed";
    translation_key: string | null;
};
export declare const cloudLogin: ({ hass, ...rest }: CloudLoginPassword | CloudLoginMFA) => Promise<{
    success: boolean;
}>;
export declare const cloudLogout: (hass: HomeAssistant) => Promise<unknown>;
export declare const cloudForgotPassword: (hass: HomeAssistant, email: string) => Promise<unknown>;
export declare const cloudRegisterAutoLogin: (hass: HomeAssistant, email: string, password: string) => Promise<unknown>;
export declare const attemptCloudAutoLoginNow: (hass: HomeAssistant) => Promise<unknown>;
export declare const resendCloudAutoLoginConfirm: (hass: HomeAssistant) => Promise<unknown>;
export declare const cancelCloudAutoLogin: (hass: HomeAssistant) => Promise<unknown>;
export declare const subscribeCloudEvents: (hass: HomeAssistant, callback: (event: CloudEvent) => void) => Promise<() => Promise<void>>;
export declare const fetchCloudStatus: (callWS: HomeAssistant["callWS"]) => Promise<CloudStatus>;
export declare const createCloudhook: (hass: HomeAssistant, webhookId: string) => Promise<CloudWebhook>;
export declare const deleteCloudhook: (hass: HomeAssistant, webhookId: string) => Promise<unknown>;
export declare const connectCloudRemote: (hass: HomeAssistant) => Promise<unknown>;
export declare const disconnectCloudRemote: (hass: HomeAssistant) => Promise<unknown>;
export declare const fetchCloudSubscriptionInfo: (hass: HomeAssistant) => Promise<SubscriptionInfo>;
export declare const updateCloudPref: (hass: HomeAssistant, prefs: {
    google_enabled?: CloudPreferences["google_enabled"];
    alexa_enabled?: CloudPreferences["alexa_enabled"];
    alexa_report_state?: CloudPreferences["alexa_report_state"];
    google_report_state?: CloudPreferences["google_report_state"];
    google_secure_devices_pin?: CloudPreferences["google_secure_devices_pin"];
    tts_default_voice?: CloudPreferences["tts_default_voice"];
    remote_allow_remote_enable?: CloudPreferences["remote_allow_remote_enable"];
    cloud_ice_servers_enabled?: CloudPreferences["cloud_ice_servers_enabled"];
}) => Promise<unknown>;
export declare const postponeCloudOnboarding: (hass: HomeAssistant) => Promise<CloudStatusLoggedIn>;
export declare const completeCloudOnboarding: (hass: HomeAssistant, items: CloudOnboardingItem[]) => Promise<CloudStatusLoggedIn>;
export declare const removeCloudData: (hass: HomeAssistant) => Promise<unknown>;
export declare const updateCloudGoogleEntityConfig: (hass: HomeAssistant, entity_id: string, disable_2fa: boolean) => Promise<unknown>;
export declare const cloudSyncGoogleAssistant: (hass: HomeAssistant) => Promise<unknown>;
export declare const fetchSupportPackage: (hass: HomeAssistant) => Promise<string>;
export {};

import type { Connection } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
export declare const integrationsWithPanel: {
    bluetooth: string;
    dhcp: string;
    infrared: string;
    matter: string;
    mqtt: string;
    ssdp: string;
    thread: string;
    zeroconf: string;
    zha: string;
    zwave_js: string;
};
/**
 * The panel an integration is configured in, if it has one of its own.
 *
 * An integration can register a panel at runtime; the built-in ones above are
 * the fallback for those that do not.
 */
export declare const getConfigPanelPath: (domain: string, panels: HomeAssistant["panels"]) => string | undefined;
export type IntegrationType = "device" | "helper" | "hub" | "service" | "hardware" | "entity" | "system" | "virtual";
export type DomainManifestLookup = Record<string, IntegrationManifest>;
export interface IntegrationManifest {
    is_built_in: boolean;
    overwrites_built_in?: boolean;
    domain: string;
    name: string;
    config_flow?: boolean;
    documentation?: string;
    issue_tracker?: string;
    dependencies?: string[];
    after_dependencies?: string[];
    codeowners?: string[];
    requirements?: string[];
    ssdp?: {
        manufacturer?: string;
        modelName?: string;
        st?: string;
    }[];
    zeroconf?: (string | {
        type: string;
        macaddress?: string;
        manufacturer?: string;
        model?: string;
        name?: string;
        properties?: Record<string, string>;
    })[];
    homekit?: {
        models?: string[];
    };
    integration_type?: IntegrationType;
    loggers?: string[];
    quality_scale?: "bronze" | "silver" | "gold" | "platinum" | "no_score" | "internal" | "legacy" | "custom";
    iot_class?: "assumed_state" | "calculated" | "cloud_polling" | "cloud_push" | "local_polling" | "local_push";
    single_config_entry?: boolean;
    version?: string;
}
export interface IntegrationSetup {
    domain: string;
    seconds?: number;
}
export interface IntegrationLogInfo {
    domain: string;
    level?: number;
}
export declare enum LogSeverity {
    CRITICAL = 50,
    ERROR = 40,
    WARNING = 30,
    INFO = 20,
    DEBUG = 10,
    NOTSET = 0
}
export type IntegrationLogPersistance = "none" | "once" | "permanent";
export declare const integrationIssuesUrl: (domain: string, manifest: IntegrationManifest) => string;
export declare const domainToName: (localize: LocalizeFunc, domain: string, manifest?: IntegrationManifest) => string;
export declare const fetchIntegrationManifests: (hass: HomeAssistant, integrations?: string[]) => Promise<IntegrationManifest[]>;
export declare const fetchIntegrationManifestsCollection: (connection: Connection, setValue: (value: DomainManifestLookup) => void) => Promise<() => void>;
export declare const fetchIntegrationManifest: (hass: Pick<HomeAssistant, "callWS">, integration: string) => Promise<IntegrationManifest>;
export declare const fetchIntegrationSetups: (hass: HomeAssistant) => Promise<IntegrationSetup[]>;
export declare const fetchIntegrationLogInfo: (conn: any) => any;
export declare const setIntegrationLogLevel: (hass: HomeAssistant, integration: string, level: string, persistence: IntegrationLogPersistance) => Promise<unknown>;
export declare const subscribeLogInfo: (conn: Connection, onChange: (devices: IntegrationLogInfo[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
export declare const waitForIntegrationSetup: (hass: HomeAssistant, domain: string) => Promise<{
    integration_loaded: boolean;
}>;

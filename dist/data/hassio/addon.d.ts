import type { HaFormSchema } from "../../components/ha-form/types";
import type { CallWS, HomeAssistant, HomeAssistantApi, TranslationDict } from "../../types";
import type { StoreAddonDetails } from "../supervisor/store";
import type { Supervisor, SupervisorArch } from "../supervisor/supervisor";
import type { HassioResponse } from "./common";
export type AddonCapability = Exclude<keyof TranslationDict["ui"]["panel"]["config"]["apps"]["dashboard"]["capability"], "label" | "role" | "stages">;
export type AddonStage = "stable" | "experimental" | "deprecated";
export type AddonAppArmour = "disable" | "default" | "profile";
export type AddonRole = "default" | "homeassistant" | "backup" | "manager" | "admin";
export type AddonStartup = "initialize" | "system" | "services" | "application" | "once";
export type AddonState = "startup" | "started" | "stopped" | "unknown" | "error";
export type AddonRepository = "core" | "local" | string;
interface AddonFieldTranslation {
    name?: string;
    description?: string;
    fields?: Record<string, AddonFieldTranslation>;
}
interface AddonTranslations {
    network?: Record<string, string>;
    configuration?: Record<string, AddonFieldTranslation>;
}
export interface HassioAddonInfo {
    advanced: boolean;
    available: boolean;
    build: boolean;
    description: string;
    detached: boolean;
    homeassistant: string | null;
    icon: boolean;
    logo: boolean;
    name: string;
    repository: AddonRepository;
    slug: string;
    stage: AddonStage;
    state: AddonState;
    system_managed: boolean;
    update_available: boolean;
    url: string | null;
    version_latest: string;
    version: string;
}
export interface HassioAddonDetails extends HassioAddonInfo {
    apparmor: AddonAppArmour;
    arch: SupervisorArch[];
    audio_input: null | string;
    audio_output: null | string;
    audio: boolean;
    auth_api: boolean;
    auto_update: boolean;
    boot: "auto" | "manual";
    boot_config: "auto" | "manual" | "manual_only";
    changelog: boolean;
    devices: string[];
    devicetree: boolean;
    discovery: string[];
    dns: string[];
    docker_api: boolean;
    documentation: boolean;
    full_access: boolean;
    gpio: boolean;
    hassio_api: boolean;
    hassio_role: AddonRole;
    hostname: string;
    homeassistant_api: boolean;
    host_dbus: boolean;
    host_ipc: boolean;
    host_network: boolean;
    host_pid: boolean;
    host_uts: boolean;
    ingress_entry: null | string;
    ingress_panel: boolean | null;
    ingress_port: number | null;
    ingress_url: null | string;
    ingress: boolean;
    ip_address: string;
    kernel_modules: boolean;
    long_description: null | string;
    machine: any;
    network_description: null | Record<string, string>;
    network: null | Record<string, number | null>;
    options: Record<string, unknown>;
    privileged: any;
    protected: boolean;
    rating: number;
    schema: HaFormSchema[] | null;
    services: string[];
    signed: boolean;
    slug: string;
    startup: AddonStartup;
    stdin: boolean;
    system_managed_config_entry: string | null;
    translations: Record<string, AddonTranslations>;
    uart: boolean;
    udev: boolean;
    usb: boolean;
    video: boolean;
    watchdog: boolean;
    webui: null | string;
}
export interface HassioAddonsInfo {
    addons: HassioAddonInfo[];
}
export interface HassioAddonSetSecurityParams {
    protected?: boolean;
}
export interface HassioAddonRepository {
    slug: string;
    name: string;
    source: string;
    url: string;
    maintainer: string;
}
export interface HassioAddonSetOptionParams {
    audio_input?: string | null;
    audio_output?: string | null;
    options?: Record<string, unknown> | null;
    boot?: "auto" | "manual";
    auto_update?: boolean;
    ingress_panel?: boolean;
    network?: Record<string, unknown> | null;
    watchdog?: boolean;
}
export declare const reloadHassioAddons: (hass: HomeAssistant) => Promise<void>;
export declare const fetchHassioAddonsInfo: (hass: {
    callWS: CallWS;
}) => Promise<HassioAddonsInfo>;
export declare const fetchHassioAddonInfo: (callWS: CallWS, slug: string) => Promise<HassioAddonDetails>;
export declare const fetchHassioAddonChangelog: (api: HomeAssistantApi, slug: string) => Promise<string>;
export declare const fetchHassioAddonLogs: (hass: HomeAssistant, slug: string) => Promise<string>;
export declare const fetchHassioAddonDocumentation: (hass: HomeAssistant, slug: string) => Promise<string>;
export declare const setHassioAddonOption: (callWS: CallWS, slug: string, data: HassioAddonSetOptionParams) => Promise<HassioResponse<any>>;
export declare const validateHassioAddonOption: (callWS: CallWS, slug: string, data?: any) => Promise<{
    message: string;
    valid: boolean;
    pwned: boolean | null;
}>;
export declare const startHassioAddon: (callWS: CallWS, slug: string) => Promise<unknown>;
export declare const stopHassioAddon: (callWS: CallWS, slug: string) => Promise<unknown>;
export declare const setHassioAddonSecurity: (callWS: CallWS, slug: string, data: HassioAddonSetSecurityParams) => Promise<void>;
export declare const installHassioAddon: (callWS: CallWS, slug: string) => Promise<void>;
export declare const updateHassioAddon: (hass: HomeAssistant, slug: string, backup: boolean) => Promise<void>;
export declare const restartHassioAddon: (callWS: CallWS, slug: string) => Promise<void>;
export declare const uninstallHassioAddon: (callWS: CallWS, slug: string, removeConfig: boolean) => Promise<void>;
export declare const fetchAddonInfo: (hass: HomeAssistant, supervisor: Supervisor, addonSlug: string) => Promise<HassioAddonDetails | StoreAddonDetails>;
export declare const rebuildLocalAddon: (callWS: CallWS, slug: string) => Promise<void>;
export {};

import type { LocalizeKeys } from "../common/translations/localize";
import type { ConfigEntry } from "./config_entries";
import type { DataEntryFlowProgress } from "./data_entry_flow";
import type { ESPHomeDeviceCapabilities, ESPHomeDeviceWizard, ESPHomeSerialProxy } from "./esphome";
import type { ESPHomeFrontendUserData } from "./frontend";
import type { SerialPortUsage } from "./usb";
export declare const MUSIC_ASSISTANT_DOCS_URL = "https://music-assistant.io/";
export type ESPHomeCapabilityId = "bluetooth" | "audio" | "connectivity" | "serial";
export type ESPHomeCapabilityStatus = "not-started" | "detected" | "completed";
export interface ESPHomeSetupStatus {
    bluetooth?: "not-started" | "completed";
    audio?: "not-started" | "completed";
    connectivity?: "not-started" | "detected" | "completed";
    serial?: "not-started" | "completed";
}
export interface ESPHomeDeviceEntityRef {
    entity_id: string;
    device_id?: string | null;
    platform?: string;
    disabled_by?: string | null;
}
export interface ESPHomeEntityStateRef {
    state: string;
}
export interface ESPHomeAudioControls {
    supported: boolean;
    sendspinEntityId?: string;
    /** Undefined when the Sendspin switch cannot be switched now, e.g. while offline. */
    sendspinOn?: boolean;
}
export declare const CAPABILITY_ORDER: ESPHomeCapabilityId[];
/** Colors for each setup capability. */
export declare const ESPHOME_CAPABILITY_ACCENTS: Record<ESPHomeCapabilityId, string>;
export declare const ESPHOME_CAPABILITY_ICONS: Record<ESPHomeCapabilityId, string>;
export declare const ESPHOME_CAPABILITY_TITLE_KEYS: Record<ESPHomeCapabilityId, LocalizeKeys>;
/** Switches the device's wizard lists for parts of this checklist. */
export interface ESPHomeWizardSwitches {
    bluetooth?: string;
    sendspin?: string;
    /** On lets anyone on the network stream without a pairing code. */
    sendspinUnpairedAccess?: string;
}
/**
 * Find the switches in the device's wizard. Its pages have no ids yet, so they
 * are matched by title. The Sendspin page lists the Sendspin switch first and
 * the unpaired access switch second.
 */
export declare const getESPHomeWizardSwitches: (wizard: ESPHomeDeviceWizard | undefined) => ESPHomeWizardSwitches;
export declare const deviceHasMediaPlayerEntity: (deviceId: string, entities: Iterable<{
    entity_id: string;
    device_id?: string | null;
}>) => boolean;
/** A wizard switch, if it can be switched now. */
export declare const getESPHomeSwitch: (entityId: string | undefined, states?: Readonly<Record<string, ESPHomeEntityStateRef>>) => {
    entityId: string;
    on: boolean;
} | undefined;
export declare const getESPHomeAudioControls: (deviceId: string, entities: Iterable<ESPHomeDeviceEntityRef>, states?: Readonly<Record<string, ESPHomeEntityStateRef>>, wizardSendspinEntityId?: string) => ESPHomeAudioControls;
/** Whether the wizard's Bluetooth switch is enabled, whatever its state. */
export declare const hasESPHomeBluetoothSwitch: (wizardBluetoothEntityId: string | undefined, entities: Iterable<ESPHomeDeviceEntityRef>) => boolean;
/**
 * Whether the device page should show the setup wizard: the device supports
 * at least one of its parts. Bluetooth only counts with its switch, since
 * without one there is nothing to set up on older Bluetooth proxies. Zigbee
 * has no separate capability bit; the Z-Wave proxy row covers it.
 */
export declare const hasESPHomeSetupCapabilities: (capabilities: ESPHomeDeviceCapabilities | undefined | null, options?: {
    mediaPlayerSupported?: boolean;
    bluetoothSwitch?: boolean;
}) => boolean;
/**
 * Whether Music Assistant is set up. Its integration stays loaded after the
 * entry is deleted, until Home Assistant restarts.
 */
export declare const isMusicAssistantConfigured: (entries: readonly Pick<ConfigEntry, "domain" | "source">[] | undefined) => boolean;
export declare const isESPHomeSerialConfigured: (serialProxies: readonly Pick<ESPHomeSerialProxy, "url">[], ports: readonly Pick<SerialPortUsage, "device" | "consumers">[]) => boolean;
export declare const deriveESPHomeSetupStatus: (capabilities: ESPHomeDeviceCapabilities, options: {
    mediaPlayerSupported: boolean;
    musicAssistantConfigured: boolean;
    /** Undefined when the device has no Bluetooth switch to turn it off. */
    bluetoothEnabled?: boolean;
    sendspinSupported?: boolean;
    /** Undefined when the Sendspin switch cannot be read, e.g. while offline. */
    sendspinEnabled?: boolean;
    serialConfigured?: boolean;
    zwaveFlowInProgress?: boolean;
}) => ESPHomeSetupStatus;
/** The zwave_js discovery flow ESPHome started for this device, keyed by its MAC. */
export declare const findESPHomeZWaveFlow: (flows: readonly DataEntryFlowProgress[], macAddress: string | undefined) => DataEntryFlowProgress | undefined;
export declare const getESPHomeSetupCapabilityIds: (status: ESPHomeSetupStatus) => ESPHomeCapabilityId[];
export declare const countRemainingESPHomeCapabilities: (status: ESPHomeSetupStatus) => number;
export declare const hasStartedNonBluetoothESPHomeSetup: (status: ESPHomeSetupStatus) => boolean;
export type ESPHomeSetupBannerState = "setup" | "continue";
/**
 * Headline for the device-page setup banner.
 * The banner is hidden once nothing is left; finished setup uses the reminder.
 */
export declare const getESPHomeSetupBannerState: (status: ESPHomeSetupStatus) => ESPHomeSetupBannerState;
export declare const isESPHomeSetupDeferred: (data: ESPHomeFrontendUserData | null | undefined, deviceId: string) => boolean;
export declare const withDeferredESPHomeDevice: (data: ESPHomeFrontendUserData | null | undefined, deviceId: string) => ESPHomeFrontendUserData;

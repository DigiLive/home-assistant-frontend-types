import type { ReactiveController, ReactiveControllerHost } from "lit";
import { nothing } from "lit";
import { type ESPHomeDeviceEntityRef } from "../../../../../../data/esphome_setup";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-alert";
import "../../ha-esphome-setup-banner";
import "../../ha-esphome-setup-reminder";
type ESPHomeSetupHost = ReactiveControllerHost & HTMLElement & {
    hass: HomeAssistant;
};
/**
 * ESPHome setup state for the device page, loaded only for ESPHome devices.
 * The page renders the banner and the reminder in different places, so this
 * controller owns the state and renders both.
 */
export declare class ESPHomeSetupController implements ReactiveController {
    private readonly _host;
    private readonly _getEntities;
    private _deviceId?;
    private _capabilities?;
    private _wizard?;
    /** Undefined until a USB usage scan succeeds. Failures keep the previous value. */
    private _serialConfigured?;
    private _serialError?;
    private _userData;
    private _userDataReady;
    private _unsubUserData?;
    private _userDataSubscribed;
    private _userDataSubGeneration;
    private _capabilitiesRequest;
    private _musicAssistantConfigured;
    constructor(_host: ESPHomeSetupHost, _getEntities: () => ESPHomeDeviceEntityRef[]);
    hostConnected(): void;
    hostDisconnected(): void;
    clear(): void;
    refresh(deviceId: string): Promise<void>;
    renderReminder(): typeof nothing | import("lit-html").TemplateResult<1>;
    renderBanner(deviceName: string): import("lit-html").TemplateResult<1>;
    private _state;
    private _clearCapabilities;
    private _unsubscribeUserData;
    private _subscribeUserData;
    private _openDialog;
    private _defer;
}
export {};

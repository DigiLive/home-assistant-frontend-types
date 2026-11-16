import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../components/ha-area-picker";
import "../../components/input/ha-input";
import type { DataEntryFlowStepCreateEntry } from "../../data/data_entry_flow";
import type { ConfigEntry } from "../../data/config_entries";
import type { DeviceRegistryEntry } from "../../data/device/device_registry";
import type { HomeAssistant } from "../../types";
import type { FlowConfig } from "./show-dialog-data-entry-flow";
declare class StepFlowCreateEntry extends LitElement {
    flowConfig: FlowConfig;
    hass: HomeAssistant;
    step: DataEntryFlowStepCreateEntry<ConfigEntry>;
    devices: DeviceRegistryEntry[];
    private _domains;
    navigateToResult: boolean;
    private _deviceUpdate;
    private _deviceEntities;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    protected updated(changedProps: PropertyValues): void;
    private _loadDomains;
    private _flowDone;
    finish(): Promise<void>;
    private _areaPicked;
    private _deviceNameChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "step-flow-create-entry": StepFlowCreateEntry;
    }
}
export {};

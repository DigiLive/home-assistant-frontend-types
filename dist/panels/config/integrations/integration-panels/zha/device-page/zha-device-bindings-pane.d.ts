import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../../components/ha-card";
import "../../../../../../components/ha-spinner";
import type { ZHADevice } from "../../../../../../data/zha";
import type { HomeAssistant } from "../../../../../../types";
import "../zha-device-binding";
import "../zha-group-binding";
export declare class ZHADeviceBindingsPane extends LitElement {
    hass: HomeAssistant;
    device?: ZHADevice;
    private _bindableDevices;
    private _groups;
    private _loaded;
    private _error?;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult | typeof nothing;
    private _fetchBindings;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "zha-device-bindings-pane": ZHADeviceBindingsPane;
    }
}

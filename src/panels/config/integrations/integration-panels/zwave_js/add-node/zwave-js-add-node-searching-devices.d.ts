import "@shoelace-style/shoelace/dist/components/animation/animation";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import { InclusionStrategy } from "../../../../../../data/zwave_js";
import "../../../../../../components/ha-spinner";
import "../../../../../../components/ha-button";
import "../../../../../../components/ha-alert";
export declare class ZWaveJsAddNodeSearchingDevices extends LitElement {
    hass: HomeAssistant;
    smartStart: boolean;
    showSecurityOptions: boolean;
    showAddAnotherDevice: boolean;
    inclusionStrategy?: InclusionStrategy;
    render(): import("lit-html").TemplateResult<1>;
    private _handleSecurityOptions;
    private _handleAddAnotherDevice;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-searching-devices": ZWaveJsAddNodeSearchingDevices;
    }
    interface HASSDomEvents {
        "show-z-wave-security-options": undefined;
        "add-another-z-wave-device": undefined;
    }
}

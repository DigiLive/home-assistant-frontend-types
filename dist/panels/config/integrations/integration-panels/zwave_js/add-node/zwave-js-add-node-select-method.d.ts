import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-icon-next";
import "../../../../../../components/ha-secure-connection-alert";
import "../../../../../../components/item/ha-list-item-button";
import "../../../../../../components/list/ha-list-base";
export declare class ZWaveJsAddNodeSelectMethod extends LitElement {
    hass: HomeAssistant;
    hideQrWebcam: boolean;
    render(): import("lit-html").TemplateResult<1>;
    private _selectMethod;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-select-method": ZWaveJsAddNodeSelectMethod;
    }
    interface HASSDomEvents {
        "z-wave-method-selected": {
            method: "qr_code_webcam" | "qr_code_manual" | "search_device";
        };
    }
}

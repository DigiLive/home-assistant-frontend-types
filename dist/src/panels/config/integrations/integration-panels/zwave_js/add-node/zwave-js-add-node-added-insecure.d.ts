import "@shoelace-style/shoelace/dist/components/animation/animation";
import { LitElement } from "lit";
import type { HomeAssistant } from "../../../../../../types";
import "../../../../../../components/ha-svg-icon";
import "../../../../../../components/ha-alert";
export declare class ZWaveJsAddNodeFinished extends LitElement {
    hass: HomeAssistant;
    deviceName?: string;
    reason?: any;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "zwave-js-add-node-added-insecure": ZWaveJsAddNodeFinished;
    }
}

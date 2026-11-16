import { LitElement, nothing } from "lit";
import { type HASSDomEvent } from "../../../../common/dom/fire_event";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-svg-icon";
import { type ESPHomeSetupStatus } from "../../../../data/esphome_setup";
export declare class HaESPHomeSetupBanner extends LitElement {
    private _i18n?;
    deviceName: string;
    status: ESPHomeSetupStatus;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderPip;
    private _setup;
    private _later;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-esphome-setup-banner": HaESPHomeSetupBanner;
    }
    interface HASSDomEvents {
        "esphome-setup": undefined;
        "esphome-setup-later": undefined;
    }
    interface HTMLElementEventMap {
        "esphome-setup": HASSDomEvent<HASSDomEvents["esphome-setup"]>;
        "esphome-setup-later": HASSDomEvent<HASSDomEvents["esphome-setup-later"]>;
    }
}

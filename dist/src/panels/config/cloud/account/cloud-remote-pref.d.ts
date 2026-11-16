import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-switch";
import "../../../../components/ha-tip";
import "../../../../components/item/ha-list-item-base";
import "../../../../components/list/ha-list-base";
import "../../../../components/input/ha-input-copy";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare class CloudRemotePref extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    cloudStatus?: CloudStatusLoggedIn;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openCertInfo;
    private _toggleChanged;
    private _toggleAllowRemoteEnabledChanged;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-remote-pref": CloudRemotePref;
    }
}

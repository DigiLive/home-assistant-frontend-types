import "@material/mwc-button/mwc-button";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-spinner";
import "../../../components/ha-expansion-panel";
import "../../../components/ha-icon-button";
import "../../../components/ha-radio";
import "../../../components/ha-settings-row";
import "../../../components/ha-textfield";
import type { HomeAssistant } from "../../../types";
export declare class HassioHostname extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _processing;
    private _hostname?;
    protected firstUpdated(): void;
    private _fetchHostInfo;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleChange;
    private _save;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "supervisor-hostname": HassioHostname;
    }
}

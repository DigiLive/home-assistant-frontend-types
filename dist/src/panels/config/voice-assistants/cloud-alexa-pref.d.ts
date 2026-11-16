import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-switch";
import "../../../components/item/ha-row-item";
import "../../../components/voice-assistant-brand-icon";
import type { CloudStatusLoggedIn } from "../../../data/cloud";
import type { ExposeEntitySettings } from "../../../data/expose";
import type { HomeAssistant } from "../../../types";
export declare class CloudAlexaPref extends LitElement {
    hass: HomeAssistant;
    exposedEntities?: Record<string, ExposeEntitySettings>;
    cloudStatus?: CloudStatusLoggedIn;
    private _exposeNew?;
    private _exposedEntitiesCount;
    protected willUpdate(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _exposeNewToggleChanged;
    private _enabledToggleChanged;
    private _reportToggleChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-alexa-pref": CloudAlexaPref;
    }
}

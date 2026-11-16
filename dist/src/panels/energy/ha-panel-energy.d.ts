import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-icon-button-arrow-prev";
import "../../components/ha-menu-button";
import type { HomeAssistant, PanelInfo } from "../../types";
import "../lovelace/hui-root";
declare class PanelEnergy extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    panel?: PanelInfo;
    private _lovelace?;
    private _config;
    route?: {
        path: string;
        prefix: string;
    };
    private _searchParms;
    private _error?;
    willUpdate(changedProps: PropertyValues<this>): void;
    private _setup;
    private _loadSystemData;
    private _loadConfig;
    private _setLovelace;
    protected render(): import("lit-html").TemplateResult<1>;
    private _navigateConfig;
    private _reloadConfig;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-panel-energy": PanelEnergy;
    }
}
declare global {
    interface HASSDomEvents {
        "reload-energy-panel": undefined;
    }
}
export {};

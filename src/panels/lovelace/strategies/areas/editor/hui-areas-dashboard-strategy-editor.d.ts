import { LitElement, nothing } from "lit";
import "../../../../../components/ha-areas-display-editor";
import "../../../../../components/ha-entities-display-editor";
import "../../../../../components/ha-icon-button";
import "../../../../../components/ha-icon-button-prev";
import "../../../../../components/ha-icon";
import type { HomeAssistant } from "../../../../../types";
import type { LovelaceStrategyEditor } from "../../types";
import type { AreasDashboardStrategyConfig } from "../areas-dashboard-strategy";
export declare class HuiAreasDashboardStrategyEditor extends LitElement implements LovelaceStrategyEditor {
    hass?: HomeAssistant;
    private _config?;
    setConfig(config: AreasDashboardStrategyConfig): void;
    private _area?;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _back;
    private _editArea;
    private _handleAreaNavigate;
    private _areasDisplayChanged;
    private _entitiesDisplayChanged;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-areas-dashboard-strategy-editor": HuiAreasDashboardStrategyEditor;
    }
}

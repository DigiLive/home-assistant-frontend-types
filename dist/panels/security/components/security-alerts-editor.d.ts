import { LitElement, type PropertyValues } from "lit";
import type { SecurityAlertEntityConfig } from "../../../data/frontend";
import "../../../components/entity/ha-entity-picker";
import "../../../components/entity/state-badge";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon-button";
import "../../../components/ha-settings-row";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
export declare class SecurityAlertsEditor extends LitElement {
    alertEntities: SecurityAlertEntityConfig[];
    private _states;
    private _registries;
    private _i18n;
    private _entityContext?;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderAlertEntity;
    private _changed;
    private _entityFilter;
    private _getIndex;
    private _removeClicked;
    private _severityChanged;
    private _add;
    private _moved;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "security-alerts-editor": SecurityAlertsEditor;
    }
}

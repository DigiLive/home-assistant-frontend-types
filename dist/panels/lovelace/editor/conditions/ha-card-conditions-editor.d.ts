import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { VisibilityCondition } from "../../common/validate-condition";
import "./ha-card-condition-editor";
import "./types/ha-card-condition-and";
import "./types/ha-card-condition-location";
import "./types/ha-card-condition-not";
import "./types/ha-card-condition-numeric_state-no_entity";
import "./types/ha-card-condition-or";
import "./types/ha-card-condition-screen";
import "./types/ha-card-condition-state-no_entity";
import "./types/ha-card-condition-time";
import "./types/ha-card-condition-user";
export declare class HaCardConditionsEditor extends LitElement {
    hass: HomeAssistant;
    protected _clipboard?: VisibilityCondition;
    conditions: VisibilityCondition[];
    private _entityContext?;
    private get _noEntity();
    private _focusLastConditionOnChange;
    private _rowSortSelected?;
    private _conditionKeys;
    private _nextConditionKey;
    private _getKey;
    protected firstUpdated(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private get _availableConditions();
    private get _canPaste();
    protected render(): import("lit-html").TemplateResult<1>;
    private _move;
    private _conditionMoved;
    private _conditionAdded;
    private _conditionRemoved;
    private _moveUp;
    private _moveDown;
    private _handleDragClick;
    private _handleDragKeydown;
    private _addCondition;
    private _duplicateCondition;
    private _conditionChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-conditions-editor": HaCardConditionsEditor;
    }
}

import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-selector/ha-selector";
import "../../../../../components/ha-settings-row";
import type { PlatformTrigger } from "../../../../../data/automation";
import { type TriggerDescription } from "../../../../../data/trigger";
import type { HomeAssistant } from "../../../../../types";
export declare class HaPlatformTrigger extends LitElement {
    protected _targetExpandGroup: boolean;
    hass: HomeAssistant;
    trigger: PlatformTrigger;
    description?: TriggerDescription;
    disabled: boolean;
    private _checkedKeys;
    private _manifest?;
    private _resolvedTargetEntityCount?;
    static get defaultConfig(): PlatformTrigger;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _targetSelector;
    private _renderField;
    private _generateContext;
    private _dataChanged;
    private _targetChanged;
    private _toggleCheckbox;
    private _checkboxChanged;
    private _localizeValueCallback;
    private _fetchManifest;
    private _updateTargetEntityCount;
    private _setDefaultBehavior;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-trigger-platform": HaPlatformTrigger;
    }
}

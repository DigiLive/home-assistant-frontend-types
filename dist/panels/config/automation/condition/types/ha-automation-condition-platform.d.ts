import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../../components/ha-checkbox";
import "../../../../../components/ha-selector/ha-selector";
import "../../../../../components/ha-settings-row";
import "../../../../../components/ha-svg-icon";
import "../../../../../components/ha-tooltip";
import type { PlatformCondition } from "../../../../../data/automation";
import { type ConditionDescription } from "../../../../../data/condition";
import type { HomeAssistant } from "../../../../../types";
export declare class HaPlatformCondition extends LitElement {
    protected _targetExpandGroup: boolean;
    hass: HomeAssistant;
    condition: PlatformCondition;
    description?: ConditionDescription;
    disabled: boolean;
    private _checkedKeys;
    private _manifest?;
    private _resolvedTargetEntityCount?;
    private _targetHasUnrecordedEntity;
    private _recordingCheckId;
    static get defaultConfig(): PlatformCondition;
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
    private _renderForPrimingInfo;
    private _durationPrimingInfoText;
    private _durationExceedsLookback;
    private _updateDurationPrimingInfo;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-condition-platform": HaPlatformCondition;
    }
}

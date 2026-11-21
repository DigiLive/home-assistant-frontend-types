import "@home-assistant/webawesome/dist/components/divider/divider";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/automation/ha-automation-condition-summary";
import "../../../../components/automation/ha-automation-row-event-chip";
import "../../../../components/automation/ha-automation-row-live-test";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/ha-yaml-editor";
import "../../../config/automation/condition/ha-automation-condition-editor";
import "../../../config/automation/condition/types/ha-automation-condition-device";
import "../../../config/automation/condition/types/ha-automation-condition-numeric_state";
import "../../../config/automation/condition/types/ha-automation-condition-state";
import "../../../config/automation/condition/types/ha-automation-condition-sun";
import "../../../config/automation/condition/types/ha-automation-condition-template";
import "../../../config/automation/condition/types/ha-automation-condition-zone";
import type { HomeAssistant } from "../../../../types";
import type { Condition, VisibilityCondition } from "../../common/validate-condition";
export declare const getConditionClassName: (condition: string, noEntity: boolean) => string;
export declare const SERVER_EDITOR_CONDITIONS: string[];
export declare const isServerEditorCondition: (condition: string) => boolean;
export declare const isFilterCompatibleCondition: (condition: VisibilityCondition) => boolean;
export declare const usesAutomationConditionEditor: (conditionType: string, noEntity: boolean) => boolean;
export declare class HaCardConditionEditor extends LitElement {
    hass: HomeAssistant;
    condition: VisibilityCondition;
    index: number;
    first: boolean;
    last: boolean;
    sortableData?: VisibilityCondition;
    private _entityReg;
    private _conditionDescriptions;
    private _entityContext?;
    private get _noEntity();
    protected _clipboard?: VisibilityCondition;
    _yamlMode: boolean;
    _uiAvailable: boolean;
    _uiWarnings: string[];
    _condition?: Condition;
    private _testingResult?;
    private _liveTestResult;
    private _conditionEvaluator;
    private __observedSource?;
    private __observedEntityId?;
    private __observed?;
    private __clientInvalid;
    private _override?;
    private get _editor();
    private get _usesAutomationEditor();
    private _hideLiveTest;
    expand(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    private _liveTestContext;
    private _updateLiveTest;
    private _setLiveTestResult;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleAction;
    private _timeout?;
    private _testCondition;
    private _duplicateCondition;
    private _copyCondition;
    private _cutCondition;
    private _delete;
    private _onYamlChange;
    private _handleUiModeNotAvailable;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-editor": HaCardConditionEditor;
    }
    interface HASSDomEvents {
        "duplicate-condition": {
            value: VisibilityCondition;
        };
    }
}

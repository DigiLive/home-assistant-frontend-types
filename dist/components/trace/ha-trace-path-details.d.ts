import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { LabelRegistryEntry } from "../../data/label/label_registry";
import type { LogbookEntry } from "../../data/logbook";
import type { TraceExtended } from "../../data/trace";
import "../../panels/config/automation/target/ha-automation-row-targets";
import "../../panels/config/automation/trigger/ha-automation-trigger-references";
import "../../panels/logbook/ha-logbook-renderer";
import type { HomeAssistant } from "../../types";
import "../ha-alert";
import "../ha-code-editor";
import "../ha-icon-button";
import "../ha-tab-group";
import "../ha-tab-group-tab";
import "./hat-logbook-note";
import type { NodeInfo } from "./hat-script-graph";
export declare class HaTracePathDetails extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    trace: TraceExtended;
    logbookEntries: LogbookEntry[];
    selected: NodeInfo;
    renderedNodes: Record<string, any>;
    trackedNodes: Record<string, NodeInfo>;
    private _view;
    _entityReg: EntityRegistryEntry[];
    _labelReg: LabelRegistryEntry[];
    private _manifests?;
    private _triggerDescriptions?;
    private _conditionDescriptions?;
    private _triggerProvider;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _renderNotTriggeredNotice;
    private _renderSelectedTraceInfo;
    private _renderStepHeading;
    private _renderNestedCondition;
    private _renderTriggerReferences;
    private _renderTargets;
    private _getTargetSelector;
    private _renderSelectedConfig;
    private _renderChangedVars;
    private _renderLogbook;
    private _handleTabChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-path-details": HaTracePathDetails;
    }
}

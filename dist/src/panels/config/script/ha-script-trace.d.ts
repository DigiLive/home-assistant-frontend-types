import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-tab-group";
import "../../../components/ha-tab-group-tab";
import "../../../components/trace/ha-trace-blueprint-config";
import "../../../components/trace/ha-trace-config";
import "../../../components/trace/ha-trace-logbook";
import "../../../components/trace/ha-trace-path-details";
import "../../../components/trace/ha-trace-timeline";
import "../../../components/trace/hat-script-graph";
import type { DomainManifestLookup } from "../../../data/integration";
import type { EntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { ScriptEntity } from "../../../data/script";
import "../../../layouts/hass-subpage";
import type { HomeAssistant, Route } from "../../../types";
import "../../../components/ha-trace-picker";
import "../../../components/ha-split-panel";
export declare class HaScriptTrace extends LitElement {
    hass: HomeAssistant;
    scriptId: string;
    scripts: ScriptEntity[];
    isWide: boolean;
    narrow: boolean;
    route: Route;
    _manifests?: DomainManifestLookup;
    _entityRegistry?: EntityRegistryEntry[];
    private _entityId?;
    private _traces?;
    private _runId?;
    private _selected?;
    private _trace?;
    private _logbookEntries?;
    private _view;
    private _splitPosition;
    private _graph?;
    private _runNavigation;
    /**
     * `hass` is replaced on every state update, so comparing it would rebuild
     * every label on every state event. The run already happened, so only the
     * trace and the registries the descriptions read can change the result.
     */
    private _traceLabels;
    protected render(): TemplateResult;
    private _renderPanes;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    willUpdate(changedProps: PropertyValues): void;
    private _setRelatedContext;
    private _pickOlderTrace;
    private _pickNewerTrace;
    private _pickTrace;
    private _pickRun;
    private _pickNode;
    private _splitRepositioned;
    private _storeSplitPosition;
    private _refreshTraces;
    private _loadTraces;
    private _loadTrace;
    private _downloadTrace;
    private _importTrace;
    private _loadLocalStorageTrace;
    private _loadLocalTrace;
    private _handleTabChanged;
    private _timelinePathPicked;
    private _showInfo;
    private _navigateToScript;
    private _handleDropdownSelect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-script-trace": HaScriptTrace;
    }
}

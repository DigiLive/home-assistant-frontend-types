import "@home-assistant/webawesome/dist/components/divider/divider";
import { LitElement, type PropertyValues, type TemplateResult } from "lit";
import "../../../../components/ha-dropdown";
import "../../../../components/ha-dropdown-item";
import "../../../../components/ha-svg-icon";
import "../../../../components/entity/state-badge";
import { type TargetSelector } from "../../../../data/selector";
import { type HassServiceTargetWithExclude } from "../../../../data/target";
export declare class HaAutomationRowTargets extends LitElement {
    target?: HassServiceTargetWithExclude;
    targetRequired: boolean;
    selector?: TargetSelector;
    interactive: boolean;
    size: "s" | "m";
    /**
     * Whether the target expands the groups it names. Overrides what the
     * context provides, for a place that shows targets of different kinds.
     */
    expandGroup?: boolean;
    private _i18n;
    private _registries;
    private _labelRegistry;
    private _configEntryLookup?;
    private _api;
    private _connection;
    private _expandGroup?;
    private _states;
    private _compositeSplits?;
    private _loadingCompositeSplits;
    private _explanation?;
    private _explainRequest;
    private get _resolvedExpandGroup();
    protected willUpdate(changedProps: PropertyValues): void;
    private _hasMissingDevice;
    private _loadCompositeSplits;
    private _countMatchingEntities;
    private _getExclude;
    private _explainableTarget;
    private _explain;
    private _remaining;
    private _excludedEntities;
    private _isExcludedEntity;
    private _renderCount;
    protected render(): TemplateResult<1>[] | TemplateResult<1>;
    private _getLabel;
    private _checkTargetExists;
    private _renderTargetBadge;
    private _renderTarget;
    private _handleTargetClick;
    private _handleTargetKeydown;
    private _handleTargetSelect;
    private _showTargetInfo;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-targets": HaAutomationRowTargets;
    }
}

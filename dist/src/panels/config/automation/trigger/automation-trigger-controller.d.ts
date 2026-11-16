import type { LitElement, ReactiveController } from "lit";
import type { AutomationConfig, SidebarConfig } from "../../../../data/automation";
interface AutomationTriggerControllerOptions {
    /** Read the editor's current configuration, including after an awaited dialog. */
    getConfig: () => AutomationConfig | undefined;
    canEdit: () => boolean;
    /** Apply one complete change through the editor's undo and dirty-state handling. */
    commit: (config: AutomationConfig) => void;
}
/**
 * Coordinates trigger-ID editing.
 *
 * Descendants consume shared options and callbacks through automationTriggerContext.
 * A selection assigns any missing trigger IDs and updates the referencing condition
 * in one commit. Duplicate-ID migration uses the same commit path. Ordinary trigger
 * edits instead pass through cleanupRemovedIds before the editor commits them.
 *
 * The transformation helpers only change configuration. This controller preserves
 * the corresponding row keys so an open sidebar continues to track the edited row.
 */
export declare class AutomationTriggerController implements ReactiveController {
    private _host;
    private _options;
    private _localize?;
    private _provider;
    private _getTriggerIdOptions;
    constructor(_host: LitElement, _options: AutomationTriggerControllerOptions);
    /** Publish options before descendants render, including after undo or redo. */
    hostUpdate(): void;
    checkShowIndices(sidebarConfig: SidebarConfig | undefined): void;
    private _isTriggerConditionSidebarActive;
    /**
     * Prepare an ordinary editor update without committing it. Reconcile keys against
     * the incoming configuration, not the previous one: the user may have reordered
     * or deleted triggers, while cleanup itself only changes condition references.
     */
    cleanupRemovedIds(config: AutomationConfig): AutomationConfig;
    private _selectTriggerIds;
    private _fixDuplicateTriggerIds;
    /**
     * Commit an explicit ID edit directly. Ordinary edits pass through cleanupRemovedIds,
     * which would treat a changed generated ID as a deleted trigger and strip its references.
     */
    private _updateTriggerId;
    private _commit;
}
export {};

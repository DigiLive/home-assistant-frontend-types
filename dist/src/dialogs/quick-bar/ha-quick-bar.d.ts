import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/entity/state-badge";
import "../../components/ha-adaptive-dialog";
import "../../components/ha-app-icon";
import "../../components/ha-combo-box-item";
import "../../components/ha-domain-icon";
import "../../components/ha-icon";
import "../../components/ha-picker-combo-box";
import "../../components/ha-spinner";
import "../../components/ha-svg-icon";
import "../../components/ha-tip";
import type { HomeAssistant } from "../../types";
import "../restart/automation-restart-status";
import { type QuickBarParams } from "./show-dialog-quick-bar";
export declare class QuickBar extends LitElement {
    hass: HomeAssistant;
    private _relatedIdSets?;
    private _open;
    private _loading;
    private _showHint;
    private _selectedSection?;
    private _opened;
    private _comboBox?;
    private get _showEntityId();
    private _configEntryLookup;
    private _addons?;
    private _navigationFilterOptions;
    private _translationsLoaded;
    private _itemSelected;
    private _runningCommandId?;
    showDialog(params: QuickBarParams): Promise<void>;
    private _fetchTranslations;
    private _initialize;
    protected updated(changedProps: PropertyValues): void;
    private _dialogOpened;
    private _showTriggered;
    closeDialog(): boolean;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _getRowRenderer;
    private _renderRow;
    private _getItems;
    private _getItemsMemoized;
    private _getEntitiesMemoized;
    private _getDevicesMemoized;
    private _getAreasMemoized;
    private _generateNavigationCommandsMemoized;
    private _generateActionCommandsMemoized;
    private _createFuseIndex;
    private _fuseIndexes;
    private _filterGroup;
    private _sortBySortingLabel;
    private _sortRelatedByLabel;
    private _navigate;
    private _handleItemSelected;
    private _openShortcutDialog;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-quick-bar": QuickBar;
    }
}

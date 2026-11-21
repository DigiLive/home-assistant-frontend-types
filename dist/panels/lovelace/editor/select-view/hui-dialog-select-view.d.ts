import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-icon";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-list";
import "../../../../components/ha-radio-list-item";
import "../../../../components/ha-select";
import "../../../../components/ha-spinner";
import "../../../../components/ha-dialog";
import type { HomeAssistant } from "../../../../types";
import type { SelectViewDialogParams } from "./show-select-view-dialog";
declare global {
    interface HASSDomEvents {
        "view-selected": {
            view: number;
        };
    }
}
export declare class HuiDialogSelectView extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _dashboards;
    private _urlPath?;
    private _config?;
    private _selectedViewIdx;
    private _loading;
    private _open;
    showDialog(params: SelectViewDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _selectableConfig();
    private _renderViews;
    private _getDashboards;
    private _dashboardChanged;
    private _viewChanged;
    private _selectView;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-select-view": HuiDialogSelectView;
    }
}

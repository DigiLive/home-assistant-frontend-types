import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../layouts/hass-tabs-subpage-data-table";
import type { HomeAssistant, Route } from "../../../types";
declare class HaConfigHardwareAll extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    route: Route;
    private _hardware?;
    private _error?;
    private _loading;
    private _tableSettings;
    private _columns;
    private _data;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _load;
    private _handleRowClicked;
    private _renderHaCodeEditor;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-hardware-all": HaConfigHardwareAll;
    }
}
export {};

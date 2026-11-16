import { LitElement } from "lit";
import "../entity/state-badge";
import "../ha-combo-box-item";
import "../ha-generic-picker";
import "../ha-svg-icon";
export declare class HaMediaPlayerPicker extends LitElement {
    value?: string;
    private _states;
    private _entities;
    private _devices;
    private _areas;
    private _floors;
    private _i18n;
    private _hassConfig;
    private _picker?;
    protected render(): import("lit-html").TemplateResult<1>;
    open(ev?: Event): void;
    private _getPlayerItems;
    private _filterPlayerEntities;
    private _playerRowRenderer;
    private _playerSearchFn;
    private _isMediaPlayerItem;
    private _notFoundPlayerLabel;
    private _valueChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-player-picker": HaMediaPlayerPicker;
    }
}

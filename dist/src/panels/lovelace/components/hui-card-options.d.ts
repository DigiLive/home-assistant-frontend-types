import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import type { HomeAssistant } from "../../../types";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiCardOptions extends LitElement {
    hass?: HomeAssistant;
    lovelace?: Lovelace;
    path?: LovelacePath;
    private _assignedElements?;
    private _huiCards?;
    hidePosition: boolean;
    private _clipboard?;
    getCardSize(): number | Promise<number>;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    protected updated(changedProps: PropertyValues<this>): void;
    private get _cards();
    private get _cardIndex();
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
    private _handleDropdownSelect;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _pasteCard;
    private _deleteCard;
    private _decreaseCardPosiion;
    private _increaseCardPosition;
    private _changeCardPosition;
    private _moveCard;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-options": HuiCardOptions;
    }
}

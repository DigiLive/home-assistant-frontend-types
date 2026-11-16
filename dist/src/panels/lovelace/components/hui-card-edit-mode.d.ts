import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiCardEditMode extends LitElement {
    lovelace: Lovelace;
    path: LovelacePath;
    hiddenOverlay: boolean;
    noEdit: boolean;
    noDuplicate: boolean;
    noMove: boolean;
    private _localize;
    private _clipboard?;
    _hover: boolean;
    _focused: boolean;
    private _cardWrapper;
    private _huiCards?;
    private _touchStarted;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _documentClicked;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _handleOverlayClick;
    private _handleDropdownSelect;
    private _duplicateCard;
    private _editCard;
    private _cutCard;
    private _copyCard;
    private _pasteCard;
    private _deleteCard;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-edit-mode": HuiCardEditMode;
    }
}

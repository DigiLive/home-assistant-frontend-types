import "@home-assistant/webawesome/dist/components/divider/divider";
import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-dropdown";
import "../../../components/ha-dropdown-item";
import "../../../components/ha-icon-button";
import "../../../components/ha-svg-icon";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
export declare class HuiBadgeEditMode extends LitElement {
    lovelace: Lovelace;
    path: LovelacePath;
    hiddenOverlay: boolean;
    private _localize;
    _menuOpened: boolean;
    _hover: boolean;
    _focused: boolean;
    private get _badgeConfig();
    private _touchStarted;
    protected firstUpdated(): void;
    disconnectedCallback(): void;
    private _documentClicked;
    protected render(): TemplateResult;
    private _handleOpened;
    private _handleClosed;
    private _handleOverlayClick;
    private _handleAction;
    private _cutBadge;
    private _copyBadge;
    private _duplicateBadge;
    private _editBadge;
    private _deleteBadge;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-badge-edit-mode": HuiBadgeEditMode;
    }
}

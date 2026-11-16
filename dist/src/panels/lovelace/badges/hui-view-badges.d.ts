import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-ripple";
import "../../../components/ha-sortable";
import "../../../components/ha-svg-icon";
import "../components/hui-badge-edit-mode";
import type { LovelacePath } from "../editor/lovelace-path";
import type { Lovelace } from "../types";
import type { HuiBadge } from "./hui-badge";
export declare class HuiViewBadges extends LitElement {
    lovelace: Lovelace;
    badges: HuiBadge[];
    path: LovelacePath;
    showAddLabel: boolean;
    private _localize;
    _dragging: boolean;
    private _badgeConfigKeys;
    private _checkAllHidden;
    private _badgeVisibilityChanged;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    private _getBadgeKey;
    private _badgeMoved;
    private _badgeAdded;
    private _badgeRemoved;
    private _dragStart;
    private _dragEnd;
    private _addBadge;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-badges": HuiViewBadges;
    }
}

import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { HASSDomEvent } from "../../common/dom/fire_event";
import type { LocalizeKeys } from "../../common/translations/localize";
import "../../components/ha-icon";
import "../../components/ha-svg-icon";
import "../../components/item/ha-list-item-button";
import "../../components/list/ha-grouped-list";
export interface AddToActionListItem {
    name?: string;
    nameKey?: LocalizeKeys;
    description?: string;
    descriptionKey?: LocalizeKeys;
    icon?: string;
    iconPath?: string;
    enabled?: boolean;
}
export interface AddToActionListSection<Item extends AddToActionListItem = AddToActionListItem> {
    title?: string;
    titleKey?: LocalizeKeys;
    actions: readonly Item[];
    empty?: string;
    emptyKey?: LocalizeKeys;
}
export interface AddToActionListActionSelectedDetail<Item extends AddToActionListItem = AddToActionListItem> {
    action: Item;
}
export type AddToActionListActionSelectedEvent<Item extends AddToActionListItem = AddToActionListItem> = HASSDomEvent<AddToActionListActionSelectedDetail<Item>>;
declare class HaAddToActionList extends LitElement {
    private _localize;
    sections: readonly AddToActionListSection[];
    protected render(): TemplateResult | typeof nothing;
    private _renderSection;
    private _renderActionItem;
    private _localizeValue;
    private _actionSelected;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-add-to-action-list": HaAddToActionList;
    }
    interface HASSDomEvents {
        "add-to-list-action-selected": AddToActionListActionSelectedDetail;
    }
}
export {};

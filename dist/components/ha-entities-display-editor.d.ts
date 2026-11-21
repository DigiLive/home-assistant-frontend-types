import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-items-display-editor";
export interface EntitiesDisplayValue {
    hidden?: string[];
    order?: string[];
}
export declare class HaEntitiesDisplayEditor extends LitElement {
    private _entityStates?;
    private _entitiesReg;
    private _config;
    private _connection;
    private _formatters;
    label?: string;
    value?: EntitiesDisplayValue;
    entitiesIds: string[];
    helper?: string;
    expanded: boolean;
    disabled: boolean;
    required: boolean;
    protected render(): TemplateResult;
    private _items;
    private _itemDisplayChanged;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entities-display-editor": HaEntitiesDisplayEditor;
    }
}

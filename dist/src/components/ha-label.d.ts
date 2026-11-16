import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "./ha-tooltip";
/**
 * Returns CSS styles for a label's background & icon/text
 * @param color Label color defined in HEX format
 * @returns CSS styles
 */
export declare const getLabelColorStyle: (labelColor: string | undefined | null) => string;
declare class HaLabel extends LitElement {
    dense: boolean;
    color?: string;
    description?: string;
    private _elementId;
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): TemplateResult;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-label": HaLabel;
    }
}
export {};

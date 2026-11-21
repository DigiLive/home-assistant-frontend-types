import type { TemplateResult } from "lit";
import { LitElement } from "lit";
export declare class HaSettingsRow extends LitElement {
    narrow: boolean;
    slim: boolean;
    threeLine: boolean;
    wrapHeading: boolean;
    empty: boolean;
    private readonly _hasSlotController;
    protected render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-settings-row": HaSettingsRow;
    }
}

import "@home-assistant/webawesome/dist/components/animation/animation";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import "../animation/ha-fade-in";
import "../animation/ha-fade-out";
import "../ha-icon-button";
export declare class HaAutomationRowEventChip extends LitElement {
    variant: "info" | "warning" | "success" | "danger" | "neutral";
    interactive: boolean;
    show: boolean;
    private _hide;
    private _highlight;
    willUpdate(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult | typeof nothing;
    highlight(): void;
    private _handleHideFinish;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-automation-row-event-chip": HaAutomationRowEventChip;
    }
    interface HASSDomEvents {
        "toggle-collapsed": undefined;
        "stop-sort-selection": undefined;
        "copy-row": undefined;
        "cut-row": undefined;
        "delete-row": undefined;
    }
}

import SlTooltip from "@shoelace-style/shoelace/dist/components/tooltip/tooltip.component";
export declare class HaTooltip extends SlTooltip {
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tooltip": HaTooltip;
    }
}

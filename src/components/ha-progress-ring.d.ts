import ProgressRing from "@shoelace-style/shoelace/dist/components/progress-ring/progress-ring.component";
export declare class HaProgressRing extends ProgressRing {
    size?: "tiny" | "small" | "medium" | "large";
    updated(changedProps: any): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-ring": HaProgressRing;
    }
}

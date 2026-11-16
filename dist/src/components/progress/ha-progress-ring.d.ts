import ProgressRing from "@home-assistant/webawesome/dist/components/progress-ring/progress-ring";
import type { CSSResultGroup, PropertyValues } from "lit";
export declare class HaProgressRing extends ProgressRing {
    size?: "tiny" | "small" | "medium" | "large";
    protected willUpdate(changedProps: PropertyValues<this>): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-ring": HaProgressRing;
    }
}

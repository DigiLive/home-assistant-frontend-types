import Spinner from "@shoelace-style/shoelace/dist/components/spinner/spinner.component";
import type { PropertyValues } from "lit";
export declare class HaSpinner extends Spinner {
    size?: "tiny" | "small" | "medium" | "large";
    protected updated(changedProps: PropertyValues): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-spinner": HaSpinner;
    }
}

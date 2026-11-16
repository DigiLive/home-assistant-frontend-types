import { LitElement } from "lit";
declare class HatLogbookNote extends LitElement {
    domain: "automation" | "script";
    private _localize;
    render(): string;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-logbook-note": HatLogbookNote;
    }
}
export {};

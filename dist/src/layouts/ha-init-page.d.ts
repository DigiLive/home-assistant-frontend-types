import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "@material/mwc-button";
import "../components/ha-spinner";
declare class HaInitPage extends LitElement {
    error: boolean;
    migration: boolean;
    private _retryInSeconds;
    private _showProgressIndicatorTimeout?;
    private _retryInterval?;
    protected render(): import("lit-html").TemplateResult<1>;
    disconnectedCallback(): void;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    protected firstUpdated(): void;
    private _retry;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-init-page": HaInitPage;
    }
}
export {};

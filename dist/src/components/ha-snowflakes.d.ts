import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
export declare class HaSnowflakes extends LitElement {
    narrow: boolean;
    private _connection?;
    private _darkMode?;
    private _enabled;
    private _snowflakes;
    private _maxSnowflakes;
    private _labFeatureConnection?;
    private _unsubLabFeature?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private _subscribeLabFeature;
    private _unsubscribeLabFeature;
    private _generateSnowflakes;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static readonly styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-snowflakes": HaSnowflakes;
    }
}

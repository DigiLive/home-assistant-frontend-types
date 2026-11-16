import type { PropertyValues } from "lit";
import { ReactiveElement } from "lit";
declare class HaRelativeTime extends ReactiveElement {
    datetime?: string | Date;
    format: Intl.RelativeTimeFormatStyle;
    capitalize: boolean;
    private _i18n?;
    private _timeout?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected createRenderRoot(): this;
    protected update(changedProps: PropertyValues<this>): void;
    private _clearTimeout;
    private _updateRelative;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-relative-time": HaRelativeTime;
    }
}
export {};

import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-marquee-text";
import type { ClockCardConfig } from "../types";
export declare class HuiClockCardAnalog extends LitElement {
    config?: ClockCardConfig;
    private _locale?;
    private _serverTimeZone?;
    private _dateTimeFormat?;
    private _hourOffsetSec?;
    private _minuteOffsetSec?;
    private _secondOffsetSec?;
    private _date?;
    private _hands;
    private _dateInterval?;
    private _timeZone?;
    private _language?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected updated(changedProps: PropertyValues): void;
    private _restartHandAnimations;
    private _handleVisibilityChange;
    private _initDate;
    private _startDateTick;
    private _stopDateTick;
    private _computeOffsets;
    private _updateDate;
    private _computeClock;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-clock-card-analog": HuiClockCardAnalog;
    }
}

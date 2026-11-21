import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import type { Trace } from "../data/trace";
import "./ha-button";
import "./ha-generic-picker";
declare class HaTracePicker extends LitElement {
    private _i18n;
    private _hassConfig;
    traces: Trace[];
    value?: string;
    private tracePicker?;
    protected render(): import("lit-html").TemplateResult<1>;
    private _openPicker;
    private _getTraces;
    private _renderTracePickerValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-trace-picker": HaTracePicker;
    }
}
export {};

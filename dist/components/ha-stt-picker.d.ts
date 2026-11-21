import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { STTEngine } from "../data/stt";
import "./ha-select";
export declare class HaSTTPicker extends LitElement {
    value?: string;
    label?: string;
    language?: string;
    disabled: boolean;
    required: boolean;
    _engines?: STTEngine[];
    private _localize;
    private _cloudEngineId?;
    private _states;
    private _formatEntityName;
    private _config;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateEngines;
    private _updateEngines;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-stt-picker": HaSTTPicker;
    }
}

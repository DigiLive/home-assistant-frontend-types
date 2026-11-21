import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { TTSVoice } from "../data/tts";
import "./ha-select";
export declare class HaTTSVoicePicker extends LitElement {
    value?: string;
    label?: string;
    engineId?: string;
    language?: string;
    disabled: boolean;
    required: boolean;
    _voices?: TTSVoice[] | null;
    private _localize;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _debouncedUpdateVoices;
    private _updateVoices;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-tts-voice-picker": HaTTSVoicePicker;
    }
}

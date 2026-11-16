import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { AssistPipeline } from "../data/assist_pipeline";
import "./ha-select";
export declare class HaAssistPipelinePicker extends LitElement {
    value?: string;
    label?: string;
    disabled: boolean;
    required: boolean;
    includeLastUsed: boolean;
    _pipelines?: AssistPipeline[];
    _preferredPipeline: string | null;
    private _i18n;
    private _api;
    private get _default();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProperties: PropertyValues<this>): void;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-assist-pipeline-picker": HaAssistPipelinePicker;
    }
}

import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { GenDataTask, GenDataTaskResult } from "../data/ai_task";
import "./chips/ha-assist-chip";
import "./ha-svg-icon";
declare global {
    interface HASSDomEvents {
        suggestion: GenDataTaskResult;
    }
}
export interface SuggestWithAIGenerateTask {
    type: "data";
    task: GenDataTask;
}
export declare class HaSuggestWithAIButton extends LitElement {
    taskType: "data";
    generateTask: () => SuggestWithAIGenerateTask;
    private _localize;
    private _aiTaskLoaded?;
    private _api;
    private _aiPrefs?;
    private _state;
    private _minWidth?;
    private _chip?;
    private _intervalId?;
    protected willUpdate(changedProps: PropertyValues): void;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _suggest;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-suggest-with-ai-button": HaSuggestWithAIButton;
    }
}

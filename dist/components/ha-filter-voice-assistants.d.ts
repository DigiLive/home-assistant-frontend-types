import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "./ha-check-list-item";
import "./ha-expansion-panel";
import "./ha-icon";
import "./ha-icon-button";
import "./ha-label";
import "./ha-list";
import "./voice-assistant-brand-icon";
export declare class HaFilterVoiceAssistants extends LitElement {
    private _localize;
    value: string[];
    narrow: boolean;
    expanded: boolean;
    private _voiceAssistantOptions;
    private _content;
    private _panel;
    protected render(): import("lit-html").TemplateResult<1>;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _expandedChanged;
    private _assistantsSelected;
    private _clearFilter;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-filter-voice-assistants": HaFilterVoiceAssistants;
    }
}

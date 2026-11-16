import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { Agent } from "../data/conversation";
import "./ha-select";
export declare class HaConversationAgentPicker extends LitElement {
    value?: string;
    language?: string;
    label?: string;
    disabled: boolean;
    required: boolean;
    _agents?: Agent[];
    private _configFlow?;
    private _localize;
    private _api;
    private _config;
    private _entities;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _fetchConfigFlow;
    private _debouncedUpdateAgents;
    private _updateAgents;
    private _openConfigFlow;
    static styles: import("lit").CSSResult;
    private _changed;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-conversation-agent-picker": HaConversationAgentPicker;
    }
    interface HASSDomEvents {
        "supported-languages-changed": {
            value: "*" | string[] | undefined;
        };
    }
}

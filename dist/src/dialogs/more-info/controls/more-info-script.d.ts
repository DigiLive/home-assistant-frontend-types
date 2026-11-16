import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-control-button";
import "../../../components/ha-control-button-group";
import "../../../components/ha-markdown";
import "../../../components/ha-service-control";
import type { ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { ScriptEntity } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
import "../components/ha-more-info-state-header";
declare class MoreInfoScript extends LitElement {
    hass: HomeAssistant;
    stateObj?: ScriptEntity;
    entry?: ExtEntityRegistryEntry;
    data?: Record<string, any>;
    private _scriptData;
    private narrow;
    private _unsubMediaQuery?;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _cancelScript;
    private _runScript;
    private _callService;
    private _scriptDataChanged;
    private _canRun;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-script": MoreInfoScript;
    }
}
export {};

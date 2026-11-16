import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement, nothing } from "lit";
import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { LogbookEntry } from "../../data/logbook";
import type { AutomationTraceExtended } from "../../data/trace";
import type { HomeAssistant } from "../../types";
import "./ha-timeline";
export declare class HaAutomationTracer extends LitElement {
    hass: HomeAssistant;
    trace?: AutomationTraceExtended;
    logbookEntries?: LogbookEntry[];
    selectedPath?: string;
    allowPick: boolean;
    _entityReg: EntityRegistryEntry[];
    protected render(): typeof nothing | TemplateResult<1>;
    protected updated(props: PropertyValues<this>): void;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hat-trace-timeline": HaAutomationTracer;
    }
}

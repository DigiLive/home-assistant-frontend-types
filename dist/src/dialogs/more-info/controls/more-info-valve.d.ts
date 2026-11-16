import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import { type ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { ValveEntity } from "../../../data/valve";
import "../../../state-control/valve/ha-state-control-valve-buttons";
import "../../../state-control/valve/ha-state-control-valve-position";
import "../../../state-control/valve/ha-state-control-valve-toggle";
import "../components/valves/ha-more-info-valve-favorite-positions";
import "../components/ha-more-info-state-header";
declare class MoreInfoValve extends LitElement {
    private _formatters;
    private _localize;
    stateObj?: ValveEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _mode?;
    private _setMode;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private get _stateOverride();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-valve": MoreInfoValve;
    }
}
export {};

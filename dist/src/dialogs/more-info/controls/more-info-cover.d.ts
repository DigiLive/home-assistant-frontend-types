import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import { type ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { CoverEntity } from "../../../data/cover";
import "../../../state-control/cover/ha-state-control-cover-buttons";
import "../../../state-control/cover/ha-state-control-cover-position";
import "../../../state-control/cover/ha-state-control-cover-tilt-position";
import "../../../state-control/cover/ha-state-control-cover-toggle";
import "../components/covers/ha-more-info-cover-favorite-positions";
import "../components/ha-more-info-state-header";
declare class MoreInfoCover extends LitElement {
    private _formatters;
    private _localize;
    stateObj?: CoverEntity;
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
        "more-info-cover": MoreInfoCover;
    }
}
export {};

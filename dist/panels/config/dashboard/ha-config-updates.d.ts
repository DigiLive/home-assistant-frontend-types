import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/entity/state-badge";
import "../../../components/ha-alert";
import "../../../components/ha-icon-next";
import "../../../components/ha-spinner";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-base";
import "../../../components/progress/ha-progress-ring";
import type { UpdateEntity } from "../../../data/update";
declare class HaConfigUpdates extends LitElement {
    narrow: boolean;
    updateEntities?: UpdateEntity[];
    private _localize;
    private _devices;
    private _areas;
    private _entities;
    private _formatEntityName;
    private _renderUpdateProgress;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openMoreInfo;
    static get styles(): CSSResultGroup[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-updates": HaConfigUpdates;
    }
}
export {};

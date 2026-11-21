import { LitElement, nothing } from "lit";
import "../../../components/item/ha-list-item-button";
import "../../../components/list/ha-list-base";
import { type RepairsIssue } from "../../../data/repairs";
import type { HomeAssistant } from "../../../types";
declare class HaConfigRepairs extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    repairsIssues?: RepairsIssue[];
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _openShowMoreDialog;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-repairs": HaConfigRepairs;
    }
}
export {};

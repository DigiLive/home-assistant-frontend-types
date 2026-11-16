import { LitElement, nothing } from "lit";
import "../../../components/ha-select";
import type { RemoteEntity } from "../../../data/remote";
declare class MoreInfoRemote extends LitElement {
    stateObj?: RemoteEntity;
    private _localize;
    private _formatters;
    private _api;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleActivityChanged;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-remote": MoreInfoRemote;
    }
}
export {};

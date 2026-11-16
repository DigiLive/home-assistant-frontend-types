import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-assist-chat";
import "../../../components/ha-spinner";
import "../../../components/ha-alert";
import type { AssistPipeline } from "../../../data/assist_pipeline";
declare class MoreInfoConversation extends LitElement {
    stateObj?: HassEntity;
    _pipeline?: AssistPipeline;
    private _errorLoadAssist?;
    private _localize;
    private _api;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    private _getPipeline;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-conversation": MoreInfoConversation;
    }
}
export {};

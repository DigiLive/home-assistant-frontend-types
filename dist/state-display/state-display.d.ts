import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement } from "lit";
import "../panels/lovelace/components/hui-timestamp-display";
export declare const STATE_DISPLAY_SPECIAL_CONTENT: readonly ["remaining_time", "install_status"];
export declare const STATE_DISPLAY_SPECIAL_CONTENT_DOMAINS: Record<string, (typeof STATE_DISPLAY_SPECIAL_CONTENT)[number][]>;
export declare const HIDDEN_ZERO_ATTRIBUTES_DOMAINS: Record<string, string[]>;
type StateContent = string | string[];
export declare const DEFAULT_STATE_CONTENT_DOMAINS: Record<string, StateContent>;
export declare const stateContentHasTimestamp: (entityId?: string, stateObj?: HassEntity, content?: StateContent) => boolean;
declare class StateDisplay extends LitElement {
    stateObj: HassEntity;
    content?: StateContent;
    name?: string;
    timeFormat?: string;
    timestampTooltip: boolean;
    dashUnavailable?: boolean;
    private _formatters?;
    private _i18n?;
    protected createRenderRoot(): this;
    private _normalizeContent;
    private get _content();
    private _computeContent;
    protected render(): any;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-display": StateDisplay;
    }
}
export {};

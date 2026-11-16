import type { ContextType } from "@lit/context";
import type { HassEntity } from "home-assistant-js-websocket";
import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import { configContext, connectionContext, entitiesContext } from "../data/context";
import "./ha-icon";
import "./ha-svg-icon";
export declare class HaStateIcon extends LitElement {
    stateObj?: HassEntity;
    private _formatters;
    stateValue?: string;
    stateTitle: boolean;
    icon?: string;
    protected _config?: ContextType<typeof configContext>;
    protected _connection?: ContextType<typeof connectionContext>;
    protected _entities?: ContextType<typeof entitiesContext>;
    private get _overrideIcon();
    private _iconTask;
    protected willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-state-icon": HaStateIcon;
    }
}

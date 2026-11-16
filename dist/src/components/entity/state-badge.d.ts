import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../ha-state-icon";
export declare class StateBadge extends LitElement {
    stateObj?: HassEntity;
    overrideIcon?: string;
    overrideImage?: string;
    /**
     * Cannot be a boolean attribute because undefined is treated different than
     * false. When it is undefined, state is still colored for light entities.
     * @deprecated use `color` instead
     */
    stateColor?: boolean;
    color?: string;
    icon: boolean;
    private _connection?;
    private _brandsAccessToken?;
    private _iconStyle;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private get _color();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    willUpdate(changedProps: PropertyValues): void;
    private _resolveImageUrl;
    protected getClass(): Map<string, boolean>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "state-badge": StateBadge;
    }
}

import { LitElement } from "lit";
import "../ha-state-icon";
export declare const SELECTED_MARKER_SCALE = 1.25;
export declare const FLOATING_LIFT: number;
export declare const floatingMarkerFootprint: (markerSize: number, selected: boolean) => {
    size: [number, number];
    anchor: [number, number];
};
/**
 * @csspart marker - The framed avatar.
 * @csspart picture - The entity picture inside the frame.
 */
declare class HaEntityMarker extends LitElement {
    entityId?: string;
    private _stateObj?;
    entityName?: string;
    entityUnit?: string;
    entityPicture?: string;
    entityColor?: string;
    showIcon: boolean;
    selected: boolean;
    floating: boolean;
    protected render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _handleKeydown;
    private _badgeTap;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-entity-marker": HaEntityMarker;
    }
}
export {};

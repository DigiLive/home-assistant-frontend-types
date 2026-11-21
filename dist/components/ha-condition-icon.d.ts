import { LitElement, nothing } from "lit";
import "./ha-icon";
import "./ha-svg-icon";
export declare const CONDITION_ICONS: {
    device: string;
    and: string;
    or: string;
    not: string;
    state: string;
    numeric_state: string;
    sun: string;
    template: string;
    time: string;
    trigger: string;
    zone: string;
};
export declare class HaConditionIcon extends LitElement {
    condition?: string;
    icon?: string;
    private _config?;
    private _connection?;
    private _iconTask;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _renderFallback;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-condition-icon": HaConditionIcon;
    }
}

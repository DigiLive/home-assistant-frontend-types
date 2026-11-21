import type { HassConfig } from "home-assistant-js-websocket";
import type { TemplateResult } from "lit";
import { LitElement } from "lit";
import type { LocalizeFunc } from "../../../common/translations/localize";
import "../../../components/ha-alert";
import "../cards/hui-error-card";
export declare const createEntityNotFoundWarning: (localize: LocalizeFunc, config: HassConfig) => string;
export declare class HuiWarning extends LitElement {
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-warning": HuiWarning;
    }
}

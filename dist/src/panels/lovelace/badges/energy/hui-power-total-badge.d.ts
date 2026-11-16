import { LitElement, nothing } from "lit";
import "../../../../components/ha-badge";
import "../../../../components/ha-svg-icon";
import type { LovelaceBadge } from "../../types";
import type { PowerTotalBadgeConfig } from "../types";
export declare class HuiPowerTotalBadge extends LitElement implements LovelaceBadge {
    private _states;
    private _i18n?;
    private _config?;
    private _data?;
    constructor();
    setConfig(config: PowerTotalBadgeConfig): void;
    private _getCurrentPower;
    private _computeTotalPower;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-power-total-badge": HuiPowerTotalBadge;
    }
}

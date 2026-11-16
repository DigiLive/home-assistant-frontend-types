import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { VisibilityCondition } from "../../common/validate-condition";
type VisibilityState = "visible" | "hidden" | "unknown" | "invalid";
/**
 * @element ha-visibility-status
 *
 * @summary
 * Alert banner for the live visibility result of a condition set.
 *
 * @attr {"visible"|"hidden"|"unknown"|"invalid"} state - Computed visibility state
 */
export declare class HaVisibilityStatus extends LitElement {
    hass: HomeAssistant;
    conditions: VisibilityCondition[];
    private _entityContext?;
    state: VisibilityState;
    private _conditionEvaluator;
    private __observedSource?;
    private __observedEntityId?;
    private __observed?;
    private __clientInvalid;
    private _override?;
    protected willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
    private _context;
    private _evaluate;
    private _applyResult;
    static styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-visibility-status": HaVisibilityStatus;
    }
}
export {};

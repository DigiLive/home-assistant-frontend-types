import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../../components/ha-alert";
import "../../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../../types";
import { type LocationCondition } from "../../../common/validate-condition";
/**
 * Convert `locations` (zone names) to a zone target. `active_zone` matches
 * the person state like `locations` did, so the condition behaves the same.
 */
export declare function migrateLocationCondition(condition: LocationCondition, hass: HomeAssistant): LocationCondition;
export declare class HaCardConditionLocation extends LitElement {
    hass: HomeAssistant;
    condition: LocationCondition;
    disabled: boolean;
    private _data?;
    private _migrated;
    private _zoneStates?;
    static get defaultConfig(): LocationCondition;
    protected static validateUIConfig(condition: LocationCondition, hass: HomeAssistant): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _zonesChanged;
    private _schema;
    private _formData;
    /** Selected passive zones, which never match `active_zone`. */
    private _passiveZones;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
    private _computeHelperCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-card-condition-location": HaCardConditionLocation;
    }
}

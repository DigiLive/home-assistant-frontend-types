import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import "../../../../components/entity/ha-statistic-picker";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tooltip";
import "../../../../components/radio/ha-radio-group";
import "../../../../components/radio/ha-radio-option";
import type { PowerConfig } from "../../../../data/energy";
import type { HomeAssistant } from "../../../../types";
import type { PowerType } from "./power-config";
declare global {
    interface HASSDomEvents {
        "power-config-changed": {
            powerType: PowerType;
            powerConfig: PowerConfig;
        };
    }
}
export declare class HaEnergyPowerConfig extends LitElement {
    hass: HomeAssistant;
    powerType: PowerType;
    powerConfig: PowerConfig;
    excludeList?: string[];
    disabled: boolean;
    /** Entity id of the power sensor generated for the saved config, if any. */
    helperEntityId?: string;
    /**
     * Base key for localization lookups.
     * Should include keys for: sensor_type, sensor_type_para, type_none, type_standard,
     * type_inverted, type_two_sensors, power, power_helper, type_inverted_description,
     * power_from, power_to, helper_sensor_note, helper_sensor_in_use
     */
    localizeBaseKey: string;
    private _powerUnits?;
    protected willUpdate(changedProps: PropertyValues<this>): Promise<void>;
    private get _requiredError();
    protected render(): TemplateResult;
    private _renderHelperSensorNote;
    private _renderHelperSensorInUse;
    private _showHelperSensor;
    private _handlePowerTypeChanged;
    private _standardPowerChanged;
    private _invertedPowerChanged;
    private _fromPowerChanged;
    private _toPowerChanged;
    static readonly styles: CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-energy-power-config": HaEnergyPowerConfig;
    }
}

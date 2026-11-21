import type { DeviceConsumptionEnergyPreference } from "../../../data/energy";
import type { HomeAssistant } from "../../../types";
export declare function shouldShowFloorsAndAreas(devices: DeviceConsumptionEnergyPreference[], hass: HomeAssistant, getEntityId: (device: DeviceConsumptionEnergyPreference) => string | undefined): boolean;

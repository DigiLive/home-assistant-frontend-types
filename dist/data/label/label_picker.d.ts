import type { HaDevicePickerDeviceFilterFunc } from "../../components/device/ha-device-picker";
import type { PickerComboBoxItem } from "../../components/ha-picker-combo-box";
import type { FuseWeightedKey } from "../../resources/fuseMultiTerm";
import type { HomeAssistant } from "../../types";
import type { HaEntityPickerEntityFilterFunc } from "../entity/entity";
import type { LabelRegistryEntry } from "./label_registry";
export declare const labelComboBoxKeys: FuseWeightedKey[];
export interface LabelComboBoxItem extends PickerComboBoxItem {
    color?: string;
}
export declare const getLabels: (hassStates: HomeAssistant["states"], hassAreas: HomeAssistant["areas"], hassDevices: HomeAssistant["devices"], hassEntities: HomeAssistant["entities"], labels?: LabelRegistryEntry[], includeDomains?: string[], excludeDomains?: string[], includeDeviceClasses?: string[], deviceFilter?: HaDevicePickerDeviceFilterFunc, entityFilter?: HaEntityPickerEntityFilterFunc, excludeLabels?: string[], idPrefix?: string) => LabelComboBoxItem[];

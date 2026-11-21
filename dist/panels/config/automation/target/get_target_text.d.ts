import type { LocalizeFunc } from "../../../../common/translations/localize";
import type { LabelRegistryEntry } from "../../../../data/label/label_registry";
import type { HomeAssistant, HomeAssistantRegistries } from "../../../../types";
export declare const getTargetText: (registries: HomeAssistantRegistries, states: HomeAssistant["states"], localize: LocalizeFunc, targetType: "floor" | "area" | "device" | "entity" | "label", targetId: string, getLabel?: (id: string) => LabelRegistryEntry | undefined) => string;

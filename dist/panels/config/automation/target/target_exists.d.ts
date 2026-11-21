import type { LabelRegistryEntry } from "../../../../data/label/label_registry";
import type { TargetType } from "../../../../data/target";
import type { HomeAssistant, HomeAssistantRegistries } from "../../../../types";
/**
 * Check whether a target exists and is part of the target tree. Entities need
 * a registry entry and disabled devices are left out, like in the tree.
 */
export declare const targetExists: (registries: HomeAssistantRegistries, states: HomeAssistant["states"], labels: LabelRegistryEntry[] | undefined, targetType: TargetType, targetId: string) => boolean;

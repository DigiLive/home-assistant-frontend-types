import type { TemplateResult } from "lit";
import type { ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { HomeAssistant } from "../../../types";
export declare const getDeleteConfirmationText: (hass: HomeAssistant, entry: ExtEntityRegistryEntry, name: string | undefined) => Promise<string | TemplateResult>;

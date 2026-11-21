import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { LovelaceStrategyConfig } from "../../../data/lovelace/config/strategy";
import type { HomeAssistant } from "../../../types";
import type { SuggestCardDialogParams } from "./card-editor/show-suggest-card-dialog";
export type AddToViewCardDialogParams = Pick<SuggestCardDialogParams, "lovelaceConfig" | "saveConfig" | "path" | "yaml">;
export interface AddEntitiesToViewOptions {
    cardConfig?: LovelaceCardConfig[];
    sectionConfig?: LovelaceSectionConfig;
    entities?: string[];
    sectionStrategy?: LovelaceStrategyConfig;
    showCardDialog?: (params: AddToViewCardDialogParams) => void;
}
export declare const addEntitiesToLovelaceView: (element: HTMLElement, hass: HomeAssistant, options: AddEntitiesToViewOptions) => Promise<void>;

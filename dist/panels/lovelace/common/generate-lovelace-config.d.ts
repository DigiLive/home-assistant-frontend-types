import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../../common/translations/localize";
import type { AreasDisplayValue } from "../../../components/ha-areas-display-editor";
import type { EnergyPreferences } from "../../../data/energy";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { LovelaceSectionConfig } from "../../../data/lovelace/config/section";
import type { LovelaceViewConfig } from "../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../types";
import type { EntitiesCardConfig } from "../cards/types";
import type { EntityConfig } from "../entity-rows/types";
export declare const computeSection: (entityIds: string[], sectionOptions?: Partial<LovelaceSectionConfig>) => LovelaceSectionConfig;
interface ComputeCardsOptions {
    renderFooterEntities?: boolean;
    entityName?: EntityConfig["name"];
}
export declare const computeCards: (hass: HomeAssistant, entityIds: string[], entityCardOptions: Partial<EntitiesCardConfig>, options?: ComputeCardsOptions) => LovelaceCardConfig[];
export declare const generateViewConfig: (hass: HomeAssistant, path: string, title: string | undefined, icon: string | undefined, show_icon_and_title: boolean | undefined, entities: HassEntities) => LovelaceViewConfig;
export declare const generateDefaultViewConfig: (hass: HomeAssistant, localize: LocalizeFunc, energyPrefs?: EnergyPreferences, areasPrefs?: AreasDisplayValue, hideEntitiesWithoutAreas?: boolean, hideEnergy?: boolean) => LovelaceViewConfig;
export {};

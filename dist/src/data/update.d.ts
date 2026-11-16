import type { HassEntities, HassEntityAttributeBase, HassEntityBase } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
import type { EntitySources } from "./entity/entity_sources";
import type { FrontendLocaleData } from "./translation";
export declare enum UpdateEntityFeature {
    INSTALL = 1,
    SPECIFIC_VERSION = 2,
    PROGRESS = 4,
    BACKUP = 8,
    RELEASE_NOTES = 16
}
interface UpdateEntityAttributes extends HassEntityAttributeBase {
    auto_update: boolean | null;
    display_precision: number;
    installed_version: string | null;
    in_progress: boolean;
    latest_version: string | null;
    release_summary: string | null;
    release_url: string | null;
    skipped_version: string | null;
    title: string | null;
    update_percentage: number | null;
}
export interface UpdateEntity extends HassEntityBase {
    attributes: UpdateEntityAttributes;
}
export declare const updateUsesProgress: (entity: UpdateEntity) => boolean;
export declare const updateAvailable: (entity: UpdateEntity, showSkipped?: boolean) => boolean;
export declare const updateCanInstall: (entity: UpdateEntity, showSkipped?: boolean) => boolean;
export declare const updateCanNotInstall: (entity: UpdateEntity, showSkipped?: boolean) => boolean;
export declare const latestVersionIsSkipped: (entity: UpdateEntity) => boolean;
export declare const updateButtonIsDisabled: (entity: UpdateEntity) => boolean;
export declare const updateIsInstalling: (entity: UpdateEntity) => boolean;
export declare const updateReleaseNotes: (hass: Pick<HomeAssistant, "callWS">, entityId: string) => Promise<string>;
export declare const isSystemUpdate: (entity: UpdateEntity) => boolean;
export declare const filterUpdateEntities: (entities: HassEntities, formatEntityName: HomeAssistant["formatEntityName"], language?: string) => UpdateEntity[];
export declare const filterUpdateEntitiesParameterized: (entities: HassEntities, formatEntityName: HomeAssistant["formatEntityName"], showSkipped?: boolean, showNotInstallable?: boolean) => UpdateEntity[];
export declare const installUpdates: (hass: HomeAssistant, entityIds: string[], notifyOnError?: boolean) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const checkForEntityUpdates: (element: HTMLElement, hass: HomeAssistant) => Promise<void>;
export declare const computeUpdateStateDisplay: (stateObj: UpdateEntity, localize: LocalizeFunc, locale: FrontendLocaleData, formatEntityState: HomeAssistant["formatEntityState"]) => string;
export type UpdateType = "addon" | "home_assistant" | "home_assistant_os" | "generic";
export declare const getUpdateType: (stateObj: UpdateEntity, entitySources: EntitySources) => UpdateType;
export {};

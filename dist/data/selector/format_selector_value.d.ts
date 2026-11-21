import type { HassEntities } from "home-assistant-js-websocket";
import type { LocalizeFunc } from "../../common/translations/localize";
import type { HomeAssistantFormatters } from "../../types";
import type { AreaRegistryEntry } from "../area/area_registry";
import type { DeviceRegistryEntry } from "../device/device_registry";
import type { FloorRegistryEntry } from "../floor_registry";
import type { Selector } from "../selector";
import type { FrontendLocaleData } from "../translation";
export interface FormatSelectorValueOptions {
    locale: FrontendLocaleData;
    localize: LocalizeFunc;
    states: HassEntities;
    devices: Record<string, DeviceRegistryEntry>;
    areas: Record<string, AreaRegistryEntry>;
    floors: Record<string, FloorRegistryEntry>;
    formatEntityName: HomeAssistantFormatters["formatEntityName"];
}
export declare const formatSelectorValue: (options: FormatSelectorValueOptions, value: any, selector?: Selector) => any;

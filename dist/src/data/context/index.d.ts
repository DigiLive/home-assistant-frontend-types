import type { HassConfig } from "home-assistant-js-websocket";
import { type HASSDomEvent } from "../../common/dom/fire_event";
import type { HomeAssistantApi, HomeAssistantConfig, HomeAssistantConnection, HomeAssistantFormatters, HomeAssistantInternationalization, HomeAssistantRegistries, HomeAssistantUI } from "../../types";
import type { RelatedIdSets } from "../../common/search/related-context";
import type { ConditionDescriptions } from "../condition";
import type { ConfigEntry } from "../config_entries";
import type { EntityRegistryEntry } from "../entity/entity_registry";
import type { DomainManifestLookup } from "../integration";
import type { LabelRegistryEntry } from "../label/label_registry";
import type { ItemType } from "../search";
import type { TriggerDescriptions } from "../trigger";
/**
 * Entity, device, area, and floor registries
 */
export declare const registriesContext: {
    __context__: HomeAssistantRegistries;
};
/**
 * Live map of all entity states, keyed by entity ID.
 */
export declare const statesContext: {
    __context__: import("home-assistant-js-websocket").HassEntities;
};
/**
 * Provides the map of all available Home Assistant services, keyed by domain.
 */
export declare const servicesContext: {
    __context__: import("home-assistant-js-websocket").HassServices;
};
/**
 * i18n state: active language, locale settings, the `localize` function, translation metadata, and the
 * `loadBackendTranslation` / `loadFragmentTranslation` loaders.
 */
export declare const internationalizationContext: {
    __context__: HomeAssistantInternationalization;
};
/**
 * HTTP and WebSocket API surface: `callService`, `callApi`,
 * `callApiRaw`, `callWS`, `sendWS`, `fetchWithAuth`, and `hassUrl`.
 */
export declare const apiContext: {
    __context__: HomeAssistantApi;
};
/**
 * WebSocket connection state: `connection`, `connected`, and `debugConnection`.
 */
export declare const connectionContext: {
    __context__: HomeAssistantConnection;
};
/**
 * UI preferences and global UI state: themes, selected theme,
 * panels, sidebar mode, kiosk mode, shortcuts, vibration, and
 * `suspendWhenHidden`.
 */
export declare const uiContext: {
    __context__: HomeAssistantUI;
};
/**
 * HA core configuration together with user session data:
 * `auth`, `config` (core HA config), `user`, `userData`, and `systemData`.
 */
export declare const configContext: {
    __context__: HomeAssistantConfig;
};
/**
 * Entity formatting functions: `formatEntityState`, `formatEntityStateToParts`,
 * `formatEntityAttributeValue`, `formatEntityAttributeValueToParts`,
 * `formatEntityAttributeName`, and `formatEntityName`.
 */
export declare const formattersContext: {
    __context__: HomeAssistantFormatters;
};
/**
 * Map of all entities in the entity registry, keyed by entity ID.
 */
export declare const entitiesContext: {
    __context__: Record<string, import("../entity/entity_registry").EntityRegistryDisplayEntry>;
};
/**
 * Map of all devices in the device registry, keyed by device ID.
 */
export declare const devicesContext: {
    __context__: Record<string, import("../device/device_registry").DeviceRegistryEntry>;
};
/**
 * Map of all areas in the area registry, keyed by area ID.
 */
export declare const areasContext: {
    __context__: Record<string, import("../area/area_registry").AreaRegistryEntry>;
};
/**
 * Map of all floors in the floor registry, keyed by floor ID.
 */
export declare const floorsContext: {
    __context__: Record<string, import("../floor_registry").FloorRegistryEntry>;
};
/**
 * Whether the main Home Assistant viewport is using the narrow layout.
 */
export declare const narrowViewportContext: {
    __context__: boolean;
};
/**
 * Whether the user prefers reduced motion.
 */
export declare const reducedMotionContext: {
    __context__: boolean;
};
/**
 * The token that brand image URLs carry, `undefined` until it is fetched.
 * Consume it to re-render brand images when it arrives or rotates; the
 * helpers in `util/brands-url` read the token themselves.
 */
export declare const brandsAccessTokenContext: {
    __context__: string;
};
/**
 * Lazy contexts are not subscribed to by default. They are only subscribed to when a provider is consumed with at least one consumer.
 */
/**
 * Lazy loaded labels registry, keyed by label ID.
 */
export declare const labelsContext: {
    __context__: LabelRegistryEntry[];
};
/**
 * Lazy loaded entity registry array
 */
export declare const fullEntitiesContext: {
    __context__: EntityRegistryEntry[];
};
/**
 * Lazy loaded config entries array
 */
export declare const configEntriesContext: {
    __context__: ConfigEntry[];
};
/**
 * Lazy loaded integration manifests, keyed by domain.
 */
export declare const manifestsContext: {
    __context__: DomainManifestLookup;
};
/**
 * Lazy loaded trigger platform descriptions, keyed by trigger key.
 */
export declare const triggerDescriptionsContext: {
    __context__: TriggerDescriptions;
};
/**
 * Lazy loaded condition platform descriptions, keyed by condition key.
 */
export declare const conditionDescriptionsContext: {
    __context__: ConditionDescriptions;
};
/** @deprecated Use `connectionContext` instead. */
export declare const connectionSingleContext: {
    __context__: import("home-assistant-js-websocket").Connection;
};
/** @deprecated Use `internationalizationContext` instead. */
export declare const localizeContext: {
    __context__: import("../../common/translations/localize").LocalizeFunc;
};
/** @deprecated Use `internationalizationContext` instead. */
export declare const localeContext: {
    __context__: import("../translation").FrontendLocaleData;
};
/** @deprecated Use `configContext` instead. */
export declare const configSingleContext: {
    __context__: HassConfig;
};
/** @deprecated Use `uiContext` instead. */
export declare const themesContext: {
    __context__: import("../ws-themes").Themes;
};
/** @deprecated Use `uiContext` instead. */
export declare const selectedThemeContext: {
    __context__: import("../../types").ThemeSettings;
};
/** @deprecated Use `configContext` instead. */
export declare const userContext: {
    __context__: import("../../types").CurrentUser;
};
/** @deprecated Use `configContext` instead. */
export declare const userDataContext: {
    __context__: import("../frontend").CoreFrontendUserData;
};
/** @deprecated Use `uiContext` instead. */
export declare const panelsContext: {
    __context__: import("../../types").Panels;
};
/** @deprecated Use `configContext` instead. */
export declare const authContext: {
    __context__: import("home-assistant-js-websocket").Auth & {
        external?: import("../../external_app/external_messaging").ExternalMessaging;
    };
};
export interface RelatedContextItem {
    itemType: ItemType;
    itemId: string;
}
/**
 * Resolved related entities/devices/areas for the current page context.
 * Set by `RelatedContextProvider` when a page fires `hass-related-context`.
 * Cleared on navigation.
 */
export declare const relatedContext: {
    __context__: RelatedIdSets;
};
declare global {
    interface HASSDomEvents {
        "hass-related-context": RelatedContextItem | undefined;
    }
    interface HTMLElementEventMap {
        "hass-related-context": HASSDomEvent<HASSDomEvents["hass-related-context"]>;
    }
}
/**
 * Set the related context to an entity (or clear it when no entity), so nearby
 * pickers float relevant entities.
 * @param node - The node to fire the event on.
 * @param context - The context to set, or undefined to clear.
 */
export declare const fireRelatedContext: (node: HTMLElement, context: RelatedContextItem | undefined) => void;
/**
 * Set the related context to an entity (or clear it when no entity), so nearby
 * pickers float relevant entities. Fired by editors.
 * @param node - The node to fire the event on.
 * @param entityId - The entity to set, or undefined to clear.
 */
export declare const fireEntityRelatedContext: (node: HTMLElement, entityId: string | undefined) => void;

import type { HassEntity } from "home-assistant-js-websocket";
import type { DurationUnits } from "../common/datetime/normalize_duration";
import type { EntityNameItem } from "../common/entity/compute_entity_name_display";
import type { ActionRelatedContext, UiAction } from "../panels/lovelace/components/hui-action-editor";
import type { HomeAssistant } from "../types";
import { type DeviceRegistryEntry } from "./device/device_registry";
import type { EntityRegistryDisplayEntry, EntityRegistryEntry } from "./entity/entity_registry";
import type { EntitySources } from "./entity/entity_sources";
import type { HassServiceTargetWithExclude } from "./target";
export type ThresholdMode = "crossed" | "changed" | "is";
export type Selector = ActionSelector | AddonSelector | AppSelector | AreaSelector | AreasDisplaySelector | AttributeSelector | AutomationBehaviorSelector | BooleanSelector | ButtonToggleSelector | ChooseSelector | ColorRGBSelector | ColorTempSelector | ConditionSelector | ConversationAgentSelector | ConfigEntrySelector | ConstantSelector | CountrySelector | DateSelector | DateTimeSelector | DeviceSelector | FloorSelector | LegacyDeviceSelector | DeviceClassSelector | DurationSelector | EntitySelector | EntityNameSelector | LegacyEntitySelector | FileSelector | IconSelector | LabelSelector | LanguageSelector | LocationSelector | MediaSelector | NavigationSelector | NumberSelector | NumericThresholdSelector | ObjectSelector | PeriodSelector | AssistPipelineSelector | QRCodeSelector | SelectSelector | SelectorSelector | StateClassSelector | StateSelector | StatisticSelector | StringSelector | STTSelector | TargetSelector | TemplateSelector | ThemeSelector | TimeSelector | TimezoneSelector | TriggerSelector | TTSSelector | TTSVoiceSelector | SerialPortSelector | UiActionSelector | UiClockDateFormatSelector | UiColorSelector | UiStateContentSelector | UiTimeFormatSelector | UnitOfMeasurementSelector | BackupLocationSelector;
type KeysOfUnion<T> = T extends T ? keyof T : never;
export type SelectorType = KeysOfUnion<Selector>;
type UnionMemberWithKey<U, K extends PropertyKey> = U extends unknown ? K extends keyof U ? U : never : never;
export type SelectorForType<T extends SelectorType> = UnionMemberWithKey<Selector, T>;
export interface ActionSelector {
    action: {
        optionsInSidebar?: boolean;
    } | null;
}
export interface AddonSelector {
    addon: AppSelector["app"];
}
export interface AppSelector {
    app: {
        name?: string;
        slug?: string;
    } | null;
}
export interface AreaSelector {
    area: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
        reorder?: boolean;
    } | null;
}
export interface AreasDisplaySelector {
    areas_display: {} | null;
}
export interface AttributeSelector {
    attribute: {
        entity_id?: string | string[];
        hide_attributes?: readonly string[];
    } | null;
}
export interface BooleanSelector {
    boolean: {} | null;
}
export type AutomationBehaviorTriggerMode = "first" | "all" | "each";
export type AutomationBehaviorConditionMode = "all" | "any";
export type AutomationBehavior = AutomationBehaviorTriggerMode | AutomationBehaviorConditionMode;
export interface AutomationBehaviorSelector {
    automation_behavior: {
        mode: "trigger" | "condition";
        translation_key?: string;
    } | null;
}
export interface ButtonToggleSelector {
    button_toggle: {
        options: readonly string[] | readonly SelectOption[];
        translation_key?: string;
        sort?: boolean;
    } | null;
}
export interface ChooseSelector {
    choose: {
        choices: Record<string, {
            selector: Selector;
        }>;
        translation_key?: string;
    };
}
export interface ColorRGBSelector {
    color_rgb: {} | null;
}
export interface ColorTempSelector {
    color_temp: {
        unit?: "kelvin" | "mired";
        min?: number;
        max?: number;
        min_mireds?: number;
        max_mireds?: number;
    } | null;
}
export interface ConditionSelector {
    condition: {
        optionsInSidebar?: boolean;
    } | null;
}
export interface ConversationAgentSelector {
    conversation_agent: {
        language?: string;
    } | null;
}
export interface ConfigEntrySelector {
    config_entry: {
        integration?: string;
    } | null;
}
export interface ConstantSelector {
    constant: {
        value: string | number | boolean;
        label?: string;
        translation_key?: string;
    } | null;
}
export interface CountrySelector {
    country: {
        countries: string[];
        no_sort?: boolean;
    } | null;
}
export interface DateSelector {
    date: {} | null;
}
export interface DateTimeSelector {
    datetime: {} | null;
}
interface DeviceSelectorFilter {
    integration?: string;
    manufacturer?: string;
    model?: string;
    model_id?: string;
}
export interface DeviceSelector {
    device: {
        filter?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        multiple?: boolean;
    } | null;
}
export interface FloorSelector {
    floor: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        multiple?: boolean;
    } | null;
}
export interface LegacyDeviceSelector {
    device: DeviceSelector["device"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: DeviceSelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        manufacturer?: DeviceSelectorFilter["manufacturer"];
        /**
         * @deprecated Use filter instead
         */
        model?: DeviceSelectorFilter["model"];
    };
}
export type DurationSelectorMode = "positive" | "signed" | "offset";
export interface DurationSelector {
    duration: {
        enable_day?: boolean;
        enable_millisecond?: boolean;
        allow_negative?: boolean;
        enable_second?: boolean;
        mode?: DurationSelectorMode;
    } | null;
}
export declare const getDurationSelectorMode: (config: DurationSelector["duration"]) => DurationSelectorMode;
export declare const getDurationSelectorUnits: (config: DurationSelector["duration"]) => DurationUnits;
export interface EntitySelectorFilter {
    integration?: string;
    domain?: string | readonly string[];
    device_class?: string | readonly string[];
    supported_features?: number | [number];
    unit_of_measurement?: string | readonly string[];
}
interface EntitySelectorEntityFilter extends EntitySelectorFilter {
    device?: DeviceSelectorFilter;
}
export interface EntitySelectorExtraOption {
    id: string;
    primary: string;
    secondary?: string;
    icon?: string;
    icon_path?: string;
    entity_id?: string;
    hide_clear?: boolean;
}
export interface EntitySelector {
    entity: {
        multiple?: boolean;
        include_entities?: string[];
        exclude_entities?: string[];
        filter?: EntitySelectorEntityFilter | readonly EntitySelectorEntityFilter[];
        reorder?: boolean;
        extra_options?: EntitySelectorExtraOption[];
    } | null;
}
export interface LegacyEntitySelector {
    entity: EntitySelector["entity"] & {
        /**
         * @deprecated Use filter instead
         */
        integration?: EntitySelectorFilter["integration"];
        /**
         * @deprecated Use filter instead
         */
        domain?: EntitySelectorFilter["domain"];
        /**
         * @deprecated Use filter instead
         */
        device_class?: EntitySelectorFilter["device_class"];
    };
}
export interface StatisticSelector {
    statistic: {
        device_class?: string;
        multiple?: boolean;
    };
}
export interface FileSelector {
    file: {
        accept: string;
    } | null;
}
export interface IconSelector {
    icon: {
        placeholder?: string;
        fallbackPath?: string;
    } | null;
}
export interface LabelSelector {
    label: {
        multiple?: boolean;
    };
}
export interface LanguageSelector {
    language: {
        languages?: string[];
        native_name?: boolean;
        no_sort?: boolean;
    } | null;
}
export interface TimezoneSelector {
    timezone: {} | null;
}
export interface LocationSelector {
    location: {
        radius?: boolean;
        radius_readonly?: boolean;
        icon?: string;
        /** Name whose initials the marker shows when there is no icon */
        name?: string;
        /** Marker and radius color; defaults to the theme's zone color */
        color?: string;
    } | null;
}
export interface LocationSelectorValue {
    latitude: number;
    longitude: number;
    radius?: number;
}
export interface MediaSelector {
    media: {
        accept?: string[];
        image_upload?: boolean;
        hide_content_type?: boolean;
        content_id_helper?: string;
        multiple?: boolean;
    } | null;
}
export interface MediaSelectorValue {
    entity_id?: string;
    media_content_id?: string;
    media_content_type?: string;
    metadata?: {
        title?: string;
        thumbnail?: string | null;
        media_class?: string;
        children_media_class?: string | null;
        navigateIds?: {
            media_content_type: string;
            media_content_id: string;
        }[];
        browse_entity_id?: string;
    };
}
export interface NavigationSelector {
    navigation: ActionRelatedContext | null;
}
export interface NumberSelector {
    number: {
        min?: number;
        max?: number;
        step?: number | "any";
        mode?: "box" | "slider";
        unit_of_measurement?: string;
        slider_ticks?: boolean;
        translation_key?: string;
        validation_message?: string;
    } | null;
}
export interface NumericThresholdSelector {
    numeric_threshold: {
        mode?: ThresholdMode;
        unit_of_measurement?: readonly string[];
        number?: NumberSelector["number"];
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
    } | null;
}
interface ObjectSelectorField {
    selector: Selector;
    label?: string;
    description?: string;
    required?: boolean;
    default?: unknown;
}
export interface ObjectSelector {
    object?: {
        label_field?: string;
        description_field?: string;
        translation_key?: string;
        fields?: Record<string, ObjectSelectorField>;
        multiple?: boolean;
    } | null;
}
export type PeriodKey = "today" | "yesterday" | "tomorrow" | "this_week" | "last_week" | "next_week" | "this_month" | "last_month" | "next_month" | "this_year" | "last_year" | "next_7d" | "next_30d" | "none";
export interface PeriodSelector {
    period: {
        options: readonly PeriodKey[];
    } | null;
}
export interface AssistPipelineSelector {
    assist_pipeline: {
        include_last_used?: boolean;
    } | null;
}
interface SelectBoxOptionImage {
    src: string;
    src_dark?: string;
    flip_rtl?: boolean;
}
export interface SelectOption {
    value: string;
    label: string;
    description?: string;
    image?: string | SelectBoxOptionImage;
    disabled?: boolean;
}
export interface SelectSelector {
    select: {
        multiple?: boolean;
        custom_value?: boolean;
        mode?: "list" | "dropdown" | "box";
        options: readonly string[] | readonly SelectOption[];
        translation_key?: string;
        sort?: boolean;
        reorder?: boolean;
        box_max_columns?: number;
    } | null;
}
export interface DeviceClassSelector {
    device_class: {
        domain: string;
        multiple?: boolean;
    } | null;
}
export interface SelectorSelector {
    selector: {} | null;
}
export interface SerialPortSelector {
    serial_port: {
        extra_recommended_domains?: string[];
    } | null;
}
export interface StateClassSelector {
    state_class: {
        multiple?: boolean;
        state_classes?: string[];
    } | null;
}
export interface StateSelector {
    state: {
        extra_options?: {
            label: string;
            value: any;
        }[];
        entity_id?: string | string[];
        attribute?: string;
        hide_states?: string[];
        multiple?: boolean;
    } | null;
}
export interface BackupLocationSelector {
    backup_location: {} | null;
}
export interface QRCodeSelector {
    qr_code: {
        data: string;
        scale?: number;
        error_correction_level?: "low" | "medium" | "quartile" | "high";
        center_image?: string;
    } | null;
}
export interface StringSelector {
    text: {
        multiline?: boolean;
        type?: "number" | "text" | "search" | "tel" | "url" | "email" | "password" | "date" | "month" | "week" | "time" | "datetime-local" | "color";
        prefix?: string;
        suffix?: string;
        placeholder?: string;
        autocomplete?: string;
        multiple?: true;
        pattern?: string;
        validation_message?: string;
    } | null;
}
export interface STTSelector {
    stt: {
        language?: string;
    } | null;
}
export interface TargetSelector {
    target: {
        entity?: EntitySelectorFilter | readonly EntitySelectorFilter[];
        device?: DeviceSelectorFilter | readonly DeviceSelectorFilter[];
        primary_entities_only?: boolean;
    } | null;
}
export interface TemplateSelector {
    template: {
        preview?: boolean;
    } | null;
}
export interface ThemeSelector {
    theme: {
        include_default?: boolean;
    } | null;
}
export interface TimeSelector {
    time: {
        no_second?: boolean;
    } | null;
}
export interface TriggerSelector {
    trigger: {} | null;
}
export interface TTSSelector {
    tts: {
        language?: string;
    } | null;
}
export interface TTSVoiceSelector {
    tts_voice: {
        engineId?: string;
        language?: string;
    } | null;
}
export interface UiActionSelector {
    ui_action: {
        actions?: UiAction[];
        default_action?: UiAction;
    } | null;
}
export interface UiClockDateFormatSelector {
    ui_clock_date_format: {} | null;
}
export interface UiColorExtraOption {
    value: string;
    label: string;
    icon?: string;
    display_color?: string;
}
export interface UiColorSelector {
    ui_color: {
        default_color?: string;
        include_none?: boolean;
        include_state?: boolean;
        extra_options?: UiColorExtraOption[];
    } | null;
}
export interface UiStateContentSelector {
    ui_state_content: {
        entity_id?: string;
        allow_name?: boolean;
        allow_context?: boolean;
    } | null;
}
export interface UiTimeFormatSelector {
    ui_time_format: {} | null;
}
export interface UnitOfMeasurementSelectorContext {
    filter_device_class?: string;
    filter_state_class?: string;
}
export interface UnitOfMeasurementSelector {
    unit_of_measurement: {
        device_classes?: string | string[] | null;
        state_classes?: string | string[] | null;
        context?: UnitOfMeasurementSelectorContext;
    } | null;
}
export interface EntityNameSelector {
    entity_name: {
        entity_id?: string;
        default_name?: EntityNameItem | EntityNameItem[] | string;
        allow_custom?: boolean;
    } | null;
}
/**
 * Resolve the context of a selector config, which maps a context key to the
 * name of another field, to the current values of those fields.
 */
export declare const resolveSelectorContext: (selector: Selector, data: Record<string, unknown> | undefined) => Record<string, unknown> | undefined;
export type TargetHass = Pick<HomeAssistant, "states" | "entities" | "devices">;
export type TargetRegistries = Pick<HomeAssistant, "states" | "entities" | "devices" | "areas">;
export declare const expandLabelTarget: (hass: TargetHass, labelId: string, areas: HomeAssistant["areas"], devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], targetSelector: TargetSelector) => {
    areas: string[];
    devices: string[];
    entities: string[];
};
export declare const expandFloorTarget: (hass: TargetHass, floorId: string, areas: HomeAssistant["areas"], targetSelector: TargetSelector) => {
    areas: string[];
};
export declare const expandAreaTarget: (hass: TargetHass, areaId: string, devices: HomeAssistant["devices"], entities: HomeAssistant["entities"], targetSelector: TargetSelector) => {
    devices: string[];
    entities: string[];
};
export declare const expandDeviceTarget: (hass: TargetHass, deviceId: string, entities: HomeAssistant["entities"], targetSelector: TargetSelector) => {
    entities: string[];
};
export declare const areaMeetsTargetSelector: (hass: TargetHass, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areaId: string, targetSelector: TargetSelector) => boolean;
export declare const deviceMeetsTargetSelector: (states: HomeAssistant["states"], entityRegistry: EntityRegistryDisplayEntry[] | EntityRegistryEntry[], device: DeviceRegistryEntry, targetSelector: TargetSelector) => boolean;
export declare const entityMeetsTargetSelector: (entity: HassEntity | undefined, targetSelector: TargetSelector, entitySources?: EntitySources, entities?: HomeAssistant["entities"], devices?: HomeAssistant["devices"]) => boolean;
export declare const filterTargetForSelector: (target: HassServiceTargetWithExclude, targetSelector: TargetSelector, registries: TargetRegistries) => HassServiceTargetWithExclude;
interface FieldWithDefault {
    selector?: object;
    required?: boolean;
    default?: unknown;
}
export declare const fillFieldDefaults: (values: Record<string, unknown>, fields: [string, FieldWithDefault][], loadDefaults: boolean, skipDefault?: (field: FieldWithDefault) => boolean) => {
    values: Record<string, unknown>;
    changed: boolean;
};
export declare const filterSelectorDevices: (filterDevice: DeviceSelectorFilter, device: DeviceRegistryEntry, deviceIntegrationLookup?: Record<string, Set<string>> | undefined) => boolean;
export declare const filterSelectorEntities: (filterEntity: EntitySelectorEntityFilter, entity: HassEntity, entitySources?: EntitySources, entityRegistry?: HomeAssistant["entities"], devices?: HomeAssistant["devices"], deviceIntegrationLookup?: Record<string, Set<string>>) => boolean;
export declare const handleLegacyEntitySelector: (selector: LegacyEntitySelector | EntitySelector) => EntitySelector;
export declare const handleLegacyDeviceSelector: (selector: LegacyDeviceSelector | DeviceSelector) => DeviceSelector;
export declare const computeCreateDomains: (selector: EntitySelector | TargetSelector) => undefined | string[];
export declare const resolveEntityIDs: (hass: TargetHass, targetPickerValue: HassServiceTargetWithExclude, entities: HomeAssistant["entities"], devices: HomeAssistant["devices"], areas: HomeAssistant["areas"], targetSelector?: TargetSelector) => string[];
export {};

import type { LocalizeKeys } from "../../common/translations/localize";
import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
import { type SceneEntities } from "../../data/scene";
import type { SingleHassServiceTarget } from "../../data/target";
import type { HomeAssistant, TranslationDict } from "../../types";
/** Add to action keys are the keys of the translation dictionary for the add to action options. */
type AddToActionOptions = TranslationDict["ui"]["dialogs"]["more_info_control"]["add_to"]["action_options"];
export type AddToActionKey = Extract<keyof AddToActionOptions, string>;
export type AddToAutomationScriptActionKey = Exclude<AddToActionKey, "scene">;
/** Fully-qualified localize key for an add to action option label. */
type AddToActionOptionLabelKey = LocalizeKeys & `ui.dialogs.more_info_control.add_to.action_options.${AddToActionKey}`;
interface BaseEntityAddToAction {
    /** Whether the action is enabled and can be selected. */
    enabled: boolean;
    /** Translated label of the action option */
    name?: string;
    /** Fully-qualified localize key for the action option label */
    nameKey?: AddToActionOptionLabelKey;
    /** Optional translated description of the action */
    description?: string;
    /** MDI icon name (e.g., "mdi:car") */
    icon: string;
}
export interface DefaultEntityAddToAction extends BaseEntityAddToAction {
    /** Type of action handled in the frontend */
    type: "default";
    /** Stable key used to resolve the action handler */
    key: AddToAutomationScriptActionKey;
}
export interface ExternalEntityAddToAction extends BaseEntityAddToAction {
    /** Type of action. External is handled by external apps instead of in the frontend */
    type: "external";
    /** Opaque payload for external action handling */
    payload?: string;
}
export type EntityAddToAction = DefaultEntityAddToAction | ExternalEntityAddToAction;
export type EntityAddToActions = EntityAddToAction[];
export declare const getDefaultAddToActions: () => EntityAddToActions;
export declare const createAddToSceneEntities: (entityIds: string[]) => SceneEntities;
export declare const filterAddToSceneEntityIds: (entityIds: string[], entityRegistry: readonly EntityRegistryEntry[], states: HomeAssistant["states"]) => string[];
/** Handler for adding a target to an automation/script. */
export declare function addToActionHandler(key: AddToAutomationScriptActionKey, target: SingleHassServiceTarget): Promise<boolean>;
export {};

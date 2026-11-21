import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { SingleHassServiceTarget } from "../../../data/target";
import type { HomeAssistant } from "../../../types";
export declare const PASTE_VALUE = "__paste__";
export declare const ADD_AUTOMATION_ELEMENT_QUERY_PARAM = "add_automation_element";
export declare const ADD_AUTOMATION_ELEMENT_ENTITY_TARGET_PARAM = "target_entity_id";
export declare const ADD_AUTOMATION_ELEMENT_DEVICE_TARGET_PARAM = "target_device_id";
export declare const ADD_AUTOMATION_ELEMENT_AREA_TARGET_PARAM = "target_area_id";
/** Parameters for the add automation element dialog. */
export interface AddAutomationElementDialogParams {
    type: "trigger" | "condition" | "action";
    add: (key: string, target?: HassServiceTarget) => void;
    clipboardItem: string | undefined;
    clipboardPasteToastBottomOffset?: number;
    replacingItemKey?: string;
}
/** Get the target from the query parameters. */
export declare const getAddAutomationElementTargetFromQuery: (states: HomeAssistant["states"], devices: HomeAssistant["devices"], areas: HomeAssistant["areas"], type: AddAutomationElementDialogParams["type"]) => SingleHassServiceTarget | undefined;
/** Show the add automation element dialog. */
export declare const showAddAutomationElementDialog: (element: HTMLElement, dialogParams: AddAutomationElementDialogParams) => void;

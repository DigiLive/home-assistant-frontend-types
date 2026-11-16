/** Constants to be used in the frontend. */
/** Domains that have a state card. */
export declare const DOMAINS_WITH_CARD: string[];
export declare const SENSOR_ENTITIES: string[];
export declare const ASSIST_ENTITIES: string[];
/** Domains that render an input element instead of a text value when displayed in a row.
 *  Those rows should then not show a cursor pointer when hovered (which would normally
 *  be the default) unless the element itself enforces it (e.g. a button). Also those elements
 *  should not act as a click target to open the more info dialog (the row name and state icon
 *  still do of course) as the click should instead e.g. activate the input field  or toggle
 *  the button that this row shows.
 */
export declare const DOMAINS_INPUT_ROW: string[];
/** States that we consider "off". */
export declare const STATES_OFF: string[];
/** Binary States */
export declare const BINARY_STATE_ON = "on";
export declare const BINARY_STATE_OFF = "off";
/** Domains where we allow toggle in Lovelace.
 *  This is not strictly a list of what is possible to toggle, but the list of
 *  domains where toggle is considered the primary default behavior.
 *  Entities card uses this to determine which entities are controlled by the
 *  header toggle.
 *  Some cards use this to decide the default tap action.
 *  Use canToggleDomain/canToggleState for determining if toggling is possible.
 */
export declare const DOMAINS_TOGGLE: Set<string>;
/** Domains that have a dynamic entity image / picture. */
export declare const DOMAINS_WITH_DYNAMIC_PICTURE: Set<string>;
/** Domains that use a timestamp for state. */
declare const TIMESTAMP_STATE_DOMAINS_LIST: readonly ["ai_task", "button", "conversation", "event", "image", "infrared", "input_button", "notify", "radio_frequency", "scene", "stt", "tag", "tts", "wake_word", "datetime"];
export type TimestampStateDomain = (typeof TIMESTAMP_STATE_DOMAINS_LIST)[number];
export declare const TIMESTAMP_STATE_DOMAINS: Set<string>;
/** Temperature units. */
export declare const UNIT_C = "\u00B0C";
export declare const UNIT_F = "\u00B0F";
/** Length units. */
export declare const UNIT_IN = "in";
export declare const UNIT_KM = "km";
export declare const UNIT_MM = "mm";
/** Pressure units. */
export declare const UNIT_HPA = "hPa";
export declare const UNIT_INHG = "inHg";
/** Entity ID of the default view. */
export declare const DEFAULT_VIEW_ENTITY_ID = "group.default_view";
/** String to visually separate labels on UI */
export declare const STRINGS_SEPARATOR_DOT = " \u00B7 ";
export {};

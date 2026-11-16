import type { CompletionContext, CompletionResult } from "@codemirror/autocomplete";
import type { EditorView, Tooltip } from "@codemirror/view";
import "../components/ha-code-editor-jinja-hover";
import "../components/ha-code-editor-jinja-arg-hover";
/**
 * Semantic completion type for a string argument in a Jinja function call.
 * Add new values here as completion sources are implemented.
 */
export type JinjaArgType = "entity_id" | "area_id" | "device_id" | "floor_id" | "label_id" | "integration" | "attribute";
/**
 * For every HA function that has at least one typed string argument, maps
 * the function name to a Map of (zero-based arg index → JinjaArgType).
 *
 * Built by scanning snippet placeholders so it stays in sync automatically
 * when new functions are added to HA_FUNCTION_DEFS.
 */
export declare const JINJA_FUNCTION_ARG_TYPES: Map<string, Map<number, JinjaArgType>>;
/**
 * A single CodeMirror CompletionSource covering all Jinja2 completions
 * (standard + HA-specific) with a strict Jinja-context guard.
 *
 * Replaces jinjaCompletionSource() entirely. The built-in source has a
 * word-match fallback that fires on plain YAML text ("Text" nodes are not
 * excluded by its guard), causing completions to appear outside {{ }}/{% %}.
 * This source uses isInsideJinja() to prevent that.
 */
export declare function haJinjaCompletionSource(context: CompletionContext): CompletionResult | null;
/**
 * Minimal HA data passed from ha-code-editor into haJinjaHoverSource so the
 * hover tooltip can resolve entity / device / area friendly names without
 * importing the full HomeAssistant type into this resource file.
 */
export interface HassArgHoverContext {
    /** Live entity states keyed by entity_id. */
    states: Record<string, {
        state: string;
        attributes: Record<string, unknown>;
    }>;
    /** Device registry keyed by device_id. */
    devices: Record<string, {
        name: string | null;
        name_by_user: string | null;
        area_id?: string | null;
    }>;
    /** Area registry keyed by area_id. */
    areas: Record<string, {
        name: string;
        floor_id?: string | null;
    }>;
    /** Floor registry keyed by floor_id. */
    floors: Record<string, {
        name: string;
    }>;
    /** Entity registry (display entries) keyed by entity_id. */
    entities: Record<string, {
        device_id?: string;
        area_id?: string;
    }>;
    /** Label registry entries keyed by label_id. */
    labels: Record<string, {
        name: string;
        description?: string | null;
    }>;
    /** Returns a localised, formatted entity state string for the given entity_id. */
    formatEntityState(entityId: string): string;
    /** Returns the friendly name of an entity (from attributes or registry). */
    formatEntityName(entityId: string): string | undefined;
    /** Returns a localised attribute name for the given entity + attribute key. */
    formatAttributeName(entityId: string, attribute: string): string;
    /** Returns a localised, formatted attribute value for the given entity + attribute key. */
    formatAttributeValue(entityId: string, attribute: string): string;
    /** Returns a translated label for a well-known UI key, e.g. "State". */
    localize(key: string): string;
}
/**
 * CodeMirror hoverTooltip source for Jinja2 + HA constructs.
 *
 * Detects the word under the pointer, determines context from the syntax tree
 * (filter / tag / expression), looks up the matching Completion, and returns
 * a tooltip with detail + info if available.
 *
 * When the cursor is on a string-literal argument of a known HA Jinja function
 * (or a `states["…"]` subscript), and `hassContext` is provided, shows the
 * entity/device/area friendly name instead.
 *
 * @param docBaseUrl    Optional base URL for documentation links.
 * @param hassContext   Optional HA registry data for argument-value tooltips.
 */
export declare function haJinjaHoverSource(view: EditorView, pos: number, docBaseUrl?: string, hassContext?: HassArgHoverContext): Tooltip | null;

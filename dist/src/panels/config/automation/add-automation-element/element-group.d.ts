import type { AutomationElementGroupCollection } from "../../../../data/automation";
/**
 * Find the key of the group an element belongs to, independent of how it was
 * reached (category, target or search). The group may not be rendered, for
 * example when the integration behind it is not set up.
 */
export declare const findElementGroupKey: (type: "trigger" | "condition" | "action", collections: AutomationElementGroupCollection[], key: string) => string;

import type { Connection } from "home-assistant-js-websocket";
import type { AutomationElementGroupCollection } from "./automation";
import type { Selector, TargetSelector } from "./selector";
export declare const CONDITION_COLLECTIONS: AutomationElementGroupCollection[];
export declare const CONDITION_BUILDING_BLOCKS_GROUP: {
    and: {};
    or: {};
    not: {};
};
export declare const CONDITION_BUILDING_BLOCKS: string[];
export declare const COLLAPSIBLE_CONDITION_ELEMENTS: string[];
export interface ConditionDescription {
    target?: TargetSelector["target"];
    fields: Record<string, {
        example?: string | boolean | number;
        default?: unknown;
        required?: boolean;
        selector?: Selector;
        context?: Record<string, string>;
    }>;
}
export type ConditionDescriptions = Record<string, ConditionDescription>;
export declare const subscribeConditions: (connection: Connection, callback: (conditions: ConditionDescriptions) => void) => Promise<() => Promise<void>>;
export declare const getConditionDomain: (condition: string) => string;
export declare const getConditionObjectId: (condition: string) => string;

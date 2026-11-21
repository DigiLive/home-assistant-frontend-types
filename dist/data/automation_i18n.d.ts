import type { HomeAssistant } from "../types";
import type { Condition, Trigger } from "./automation";
import type { EntityRegistryEntry } from "./entity/entity_registry";
export interface DescribeOptions {
    ignoreAlias?: boolean;
}
export declare const describeTrigger: (trigger: Trigger, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], options?: DescribeOptions) => string;
export declare const describeCondition: (condition: Condition, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], options?: DescribeOptions) => string;

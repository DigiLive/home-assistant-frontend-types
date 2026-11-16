import type { HomeAssistant } from "../types";
import { type DescribeOptions } from "./automation_i18n";
import type { EntityRegistryEntry } from "./entity/entity_registry";
import type { DomainManifestLookup } from "./integration";
import type { ActionType, ActionTypes } from "./script";
export declare const describeAction: <T extends ActionType>(hass: HomeAssistant, entityRegistry: EntityRegistryEntry[], action: ActionTypes[T], actionType?: T, options?: DescribeOptions, manifests?: DomainManifestLookup) => string;

import type { HomeAssistant } from "../types";
import type { EntityRegistryEntry } from "./entity/entity_registry";
import type { DomainManifestLookup } from "./integration";
import type { TraceExtended } from "./trace";
/**
 * Accessible names for every step of a trace, keyed by node path. Called from
 * the trace panels, which own `hass`; memoize on everything but `hass`, which
 * is replaced on every state update.
 */
export declare const buildTraceLabels: (trace: TraceExtended, hass: HomeAssistant, entityRegistry: EntityRegistryEntry[] | undefined, manifests?: DomainManifestLookup) => Record<string, string>;

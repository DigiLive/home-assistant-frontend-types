import type { EntityRegistryEntry } from "../../data/entity/entity_registry";
import type { TraceId } from "../../data/trace";
import type { HomeAssistant } from "../../types";
export declare const computeChildTraceName: (hass: HomeAssistant, entityReg: EntityRegistryEntry[], childId: TraceId) => string | undefined;
export declare const renderChildTraceLink: (hass: HomeAssistant, entityReg: EntityRegistryEntry[], childId: TraceId) => import("lit-html").TemplateResult<1>;
export declare const childTraceLinkStyles: import("lit").CSSResult;

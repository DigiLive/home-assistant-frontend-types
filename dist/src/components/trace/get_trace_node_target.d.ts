import type { HassServiceTarget } from "home-assistant-js-websocket";
import type { TraceNodeType } from "../../data/trace-tree";
/**
 * Get the target to show for a trace step, based on its config.
 */
export declare const getTraceNodeTarget: (config: any, type?: TraceNodeType) => HassServiceTarget | undefined;

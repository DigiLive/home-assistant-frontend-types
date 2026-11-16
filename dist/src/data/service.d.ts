import type { Context, HomeAssistant, ServiceCallRequest } from "../types";
import type { Action } from "./script";
export declare const callExecuteScript: (hass: HomeAssistant, sequence: Action | Action[]) => Promise<{
    context: Context;
    response: Record<string, any> | null;
}>;
export declare const serviceCallWillDisconnect: (domain: string, service: string, serviceData?: Record<string, any>) => boolean;
export declare const getServiceCallEntityIds: (serviceData?: ServiceCallRequest["serviceData"], target?: ServiceCallRequest["target"]) => string[];

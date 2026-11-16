import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
import type { DataEntryFlowStep } from "./data_entry_flow";
export interface RepairsIssue {
    domain: string;
    issue_domain: string | null;
    issue_id: string;
    is_fixable: boolean;
    severity: "error" | "warning" | "critical";
    breaks_in_ha_version: string | null;
    ignored: boolean;
    created: string;
    dismissed_version: string | null;
    learn_more_url: string | null;
    translation_key: string | null;
    translation_placeholders: Record<string, string> | null;
}
export declare const severitySort: {
    critical: number;
    error: number;
    warning: number;
};
export declare const fetchRepairsIssues: (conn: Connection) => Promise<{
    issues: RepairsIssue[];
}>;
export declare const fetchRepairsIssueData: (conn: Connection, domain: string, issue_id: string) => Promise<{
    issue_data: Record<string, any> | null;
}>;
export declare const ignoreRepairsIssue: (hass: HomeAssistant, issue: RepairsIssue, ignore: boolean) => Promise<undefined>;
export declare const createRepairsFlow: (hass: HomeAssistant, handler: string, issue_id: string) => Promise<DataEntryFlowStep>;
export declare const fetchRepairsFlow: (hass: HomeAssistant, flowId: string) => Promise<DataEntryFlowStep>;
export declare const handleRepairsFlowStep: (hass: HomeAssistant, flowId: string, data: Record<string, any>) => Promise<DataEntryFlowStep>;
export declare const deleteRepairsFlow: (hass: HomeAssistant, flowId: string) => Promise<unknown>;
export declare const subscribeRepairsIssueRegistry: (conn: Connection, onChange: (repairs: {
    issues: RepairsIssue[];
}) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;

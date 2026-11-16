import type { Connection } from "home-assistant-js-websocket";
import type { HomeAssistant } from "../types";
export interface LabPreviewFeature {
    preview_feature: string;
    domain: string;
    enabled: boolean;
    is_built_in: boolean;
    feedback_url: string | null;
    learn_more_url: string | null;
    report_issue_url: string | null;
}
export interface LabPreviewFeaturesResponse {
    features: LabPreviewFeature[];
}
/**
 * Fetch all lab features
 * @param hass - The Home Assistant instance
 * @returns A promise to fetch the lab features
 */
export declare const fetchLabFeatures: (hass: HomeAssistant) => Promise<LabPreviewFeature[]>;
/**
 * Update a specific lab feature
 * @param hass - The Home Assistant instance
 * @param domain - The domain of the lab feature
 * @param preview_feature - The preview feature of the lab feature
 * @param enabled - Whether the lab feature is enabled
 * @param create_backup - Whether to create a backup of the lab feature
 * @returns A promise to update the lab feature
 */
export declare const labsUpdatePreviewFeature: (hass: HomeAssistant, domain: string, preview_feature: string, enabled: boolean, create_backup?: boolean) => Promise<void>;
/**
 * Subscribe to a collection of lab features
 * @param conn - The connection to the Home Assistant instance
 * @param onChange - The function to call when the lab features change
 * @returns The unsubscribe function
 */
export declare const subscribeLabFeatures: (conn: Connection, onChange: (features: LabPreviewFeature[]) => void) => import("home-assistant-js-websocket").UnsubscribeFunc;
/**
 * Subscribe to a specific lab feature
 * @param conn - The connection to the Home Assistant instance
 * @param domain - The domain of the lab feature
 * @param previewFeature - The preview feature identifier
 * @param onChange - The function to call when the lab feature changes
 * @returns A promise that resolves to the unsubscribe function
 */
export declare const subscribeLabFeature: (conn: Connection, domain: string, previewFeature: string, onChange: (feature: LabPreviewFeature) => void) => Promise<() => void>;

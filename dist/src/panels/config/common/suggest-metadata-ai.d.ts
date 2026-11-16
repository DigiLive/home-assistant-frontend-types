import type { GenDataTaskResult } from "../../../data/ai_task";
import type { HomeAssistant } from "../../../types";
import type { SuggestWithAIGenerateTask } from "../../../components/ha-suggest-with-ai-button";
export interface MetadataSuggestionResult {
    name?: string;
    description?: string;
    category?: string;
    labels?: string[];
    floor?: string;
}
export type MetadataSuggestionDomain = "automation" | "script" | "scene" | "area";
export interface MetadataSuggestionInclude {
    name: boolean;
    description?: boolean;
    categories?: boolean;
    labels?: boolean;
    floor?: boolean;
}
export declare const SUGGESTION_INCLUDE_DEFAULT: MetadataSuggestionInclude;
/**
 * Generates an AI task for suggesting metadata based on their configuration.
 *
 * @param connection - Home Assistant connection
 * @param language - User's language preference
 * @param domain - The domain to suggest metadata for
 * @param config - The configuration to suggest metadata for
 * @param inspirations - Existing entries to use as inspiration
 * @param include - The metadata fields to include in the suggestion
 * @returns Promise resolving to the AI task structure
 */
export declare function generateMetadataSuggestionTask<T>(connection: HomeAssistant["connection"], language: HomeAssistant["language"], domain: MetadataSuggestionDomain, config: T, inspirations?: string[], include?: MetadataSuggestionInclude): Promise<SuggestWithAIGenerateTask>;
/**
 * Processes the result of an AI task for suggesting metadata
 * based on their configuration.
 *
 * @param connection - Home Assistant connection
 * @param domain - The domain of the ${domain}
 * @param result - The result of the AI task
 * @param include - The metadata fields to include in the suggestion
 * @returns Promise resolving to the processed metadata suggestion
 */
export declare function processMetadataSuggestion(connection: HomeAssistant["connection"], domain: MetadataSuggestionDomain, result: GenDataTaskResult<MetadataSuggestionResult>, include?: MetadataSuggestionInclude): Promise<MetadataSuggestionResult>;

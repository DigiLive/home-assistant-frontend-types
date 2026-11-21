import type { HomeAssistant } from "../../../types";
import type { MetadataSuggestionDomain } from "./suggest-metadata-ai";
export declare const buildEntityMetadataInspirations: (connection: HomeAssistant["connection"], states: HomeAssistant["states"], formatEntityName: HomeAssistant["formatEntityName"], domain: MetadataSuggestionDomain) => Promise<string[]>;
export declare const buildAreaMetadataInspirations: (connection: HomeAssistant["connection"]) => Promise<string[]>;

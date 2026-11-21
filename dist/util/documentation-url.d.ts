import type { HomeAssistantConfig } from "../types";
export declare const DOCUMENTATION_URL = "https://www.home-assistant.io";
export declare const SECURE_CONNECTION_DOCUMENTATION_PATH = "/docs/configuration/securing/#remote-access";
export declare const documentationUrl: ({ config }: Pick<HomeAssistantConfig, "config">, path: string) => string;
export declare const documentationUrlForVersion: (version: string, path: string) => string;

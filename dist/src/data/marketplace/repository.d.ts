import type { HomeAssistant } from "../../types";
type CallWS = Pick<HomeAssistant, "callWS">;
export type RepositoryType = "integration" | "plugin" | "template" | "theme";
export interface RepositoryBase {
    authors: string[];
    available_version: string;
    can_install: boolean;
    category: RepositoryType;
    config_flow: boolean;
    custom: boolean;
    description: string;
    domain: string | null;
    downloads: number;
    file_name: string;
    full_name: string;
    hide: boolean;
    homeassistant: string | null;
    id: string;
    installed_version: string;
    installed: boolean;
    last_updated: string | number;
    local_path: string;
    name: string;
    new: boolean;
    pending_upgrade: boolean;
    stars: number;
    status: "pending-restart" | "pending-upgrade" | "new" | "installed" | "default";
    topics: string[];
}
export interface RepositoryInfo extends RepositoryBase {
    additional_info: string;
    beta: boolean;
    default_branch: string;
    issues: number;
    releases: string[];
    ref: string;
    replaces_built_in: boolean;
    selected_tag: string | null;
    update_entity_id: string | null;
    version_or_commit: "version" | "commit";
}
export interface MarketplaceRelease {
    tag: string;
    name: string;
    published_at: string;
    prerelease: boolean;
}
export declare const fetchMarketplaceRepositories: (hass: CallWS) => Promise<RepositoryBase[]>;
export declare const fetchMarketplaceRepository: (hass: CallWS, repositoryId: string) => Promise<RepositoryInfo>;
export declare const fetchMarketplaceRepositoryReleases: (hass: CallWS, repositoryId: string) => Promise<MarketplaceRelease[]>;
export declare const installMarketplaceRepository: (hass: CallWS, repositoryId: string, version?: string, options?: {
    confirmReplaceBuiltIn?: boolean;
}) => Promise<null>;
export declare const uninstallMarketplaceRepository: (hass: CallWS, repositoryId: string) => Promise<null>;
export declare const setMarketplaceRepositoryBeta: (hass: CallWS, repositoryId: string, showBeta: boolean) => Promise<null>;
export declare const refreshMarketplaceRepository: (hass: CallWS, repositoryId: string) => Promise<null>;
export declare const addMarketplaceRepository: (hass: CallWS, repository: string, category: RepositoryType) => Promise<null>;
export declare const detectMarketplaceRepository: (hass: CallWS, repository: string) => Promise<{
    categories: RepositoryType[];
}>;
export declare const removeMarketplaceRepository: (hass: CallWS, repositoryId: string) => Promise<null>;
export declare const dismissNewMarketplaceRepositories: (hass: CallWS, categories: RepositoryType[]) => Promise<null>;
export declare const dismissNewMarketplaceRepository: (hass: CallWS, repositoryId: string) => Promise<null>;
export {};

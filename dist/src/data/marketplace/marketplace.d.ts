import type { HASSDomEvent } from "../../common/dom/fire_event";
import type { RepositoryBase, RepositoryType } from "./repository";
declare global {
    interface HASSDomEvents {
        "marketplace-refresh": undefined;
    }
    interface GlobalEventHandlersEventMap {
        "marketplace-refresh": HASSDomEvent<HASSDomEvents["marketplace-refresh"]>;
    }
}
export interface MarketplaceInfo {
    categories: RepositoryType[];
    disabled_reason: string | null;
    github_connected: boolean;
    has_pending_tasks: boolean;
    lovelace_mode: "yaml" | "storage";
    stage: "startup" | "waiting" | "running" | "setup" | null;
    startup: boolean;
    version: string;
    warning_accepted: boolean;
}
export interface MarketplaceData {
    repositories: RepositoryBase[];
    info: MarketplaceInfo;
}

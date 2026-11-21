import type { LocalizeFunc } from "../../common/translations/localize";
import type { HomeAssistant } from "../../types";
import { MarketplaceDispatchEvent } from "./common";
import type { MarketplaceInfo } from "./marketplace";
export declare const ERROR_GITHUB_NOT_CONNECTED = "github_not_connected";
export declare const ERROR_NOT_LOADED = "not_loaded";
export declare const ERROR_GITHUB_RATE_LIMITED = "github_rate_limited";
export declare const ERROR_WARNING_NOT_ACCEPTED = "warning_not_accepted";
export declare const isWebSocketError: (err: unknown, code: string) => boolean;
export declare const websocketErrorMessage: (err: unknown, localize: LocalizeFunc) => string | undefined;
export declare const marketplaceErrorMessage: (err: unknown, localize: LocalizeFunc) => string;
export declare const fetchMarketplaceInfo: (hass: Pick<HomeAssistant, "callWS">) => Promise<MarketplaceInfo>;
export declare const acceptMarketplaceWarning: (hass: Pick<HomeAssistant, "callWS">) => Promise<null>;
export declare const connectMarketplaceGitHub: (hass: Pick<HomeAssistant, "callWS">) => Promise<{
    flow_id: string;
}>;
export declare const subscribeMarketplaceChanges: (hass: Pick<HomeAssistant, "connection">, signal: MarketplaceDispatchEvent, callback: () => void) => Promise<() => Promise<void>>;
export interface MarketplaceInstallProgress {
    repository: string;
    progress: number | false;
}
export declare const subscribeMarketplaceInstallProgress: (hass: Pick<HomeAssistant, "connection">, callback: (progress: MarketplaceInstallProgress) => void) => Promise<() => Promise<void>>;

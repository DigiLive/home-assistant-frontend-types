import type { LocalizeFunc } from "../../../common/translations/localize";
import type { HomeAssistant } from "../../../types";
import type { MarketplaceInfo } from "../../../data/marketplace/marketplace";
export type MarketplaceApi = Pick<HomeAssistant, "callApi" | "callWS">;
export declare const showConnectGitHubFlow: (element: HTMLElement, api: MarketplaceApi, localize: LocalizeFunc) => Promise<boolean>;
export declare const ensureGitHubConnected: (element: HTMLElement, api: MarketplaceApi, localize: LocalizeFunc, info: MarketplaceInfo) => boolean;
export declare const handleGitHubNotConnected: (element: HTMLElement, api: MarketplaceApi, localize: LocalizeFunc, err: unknown) => boolean;
export declare const handleGitHubRateLimited: (element: HTMLElement, api: MarketplaceApi, localize: LocalizeFunc, err: unknown) => boolean;

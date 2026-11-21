import type { HomeAssistant } from "../types";
export interface BrandsOptions {
    domain: string;
    type: "icon" | "logo" | "icon@2x" | "logo@2x";
    darkOptimized?: boolean;
}
export interface HardwareBrandsOptions {
    category: string;
    model?: string;
    manufacturer: string;
    darkOptimized?: boolean;
}
export declare const fetchAndScheduleBrandsAccessToken: (hass: HomeAssistant) => Promise<boolean>;
export declare const fetchBrandsAccessToken: (hass: HomeAssistant) => Promise<void>;
export declare const subscribeBrandsAccessToken: (listener: (token: string | undefined) => void) => (() => void);
export declare const scheduleBrandsTokenRefresh: (hass: HomeAssistant) => void;
export declare const clearBrandsTokenRefresh: () => void;
export declare const brandsUrl: (options: BrandsOptions, hassUrl?: string) => string;
export declare const marketplaceBrandsUrl: (options: BrandsOptions, hassUrl?: string) => string;
export declare const hardwareBrandsUrl: (options: HardwareBrandsOptions, hassUrl?: string) => string;
export declare const addBrandsAuth: (url: string, hassUrl?: string) => string;
export declare const extractDomainFromBrandUrl: (url: string) => string;
export declare const isBrandUrl: (thumbnail: string | "") => boolean;

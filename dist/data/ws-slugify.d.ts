import type { HomeAssistantApi } from "../types";
export declare const fetchSlug: (api: HomeAssistantApi, text: string) => Promise<{
    slug: string;
}>;

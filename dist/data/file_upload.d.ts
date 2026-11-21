import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
export declare const uploadFile: (fetchWithAuth: HomeAssistant["fetchWithAuth"], localize: LocalizeFunc, file: File) => Promise<any>;
export declare const removeFile: (callApi: HomeAssistant["callApi"], file_id: string) => Promise<unknown>;

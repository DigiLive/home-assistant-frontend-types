import type { LocalizeFunc } from "../common/translations/localize";
import type { HomeAssistant } from "../types";
interface Image {
    filesize: number;
    name: string;
    uploaded_at: string;
    content_type: string;
    id: string;
}
export declare const URL_PREFIX = "/api/image/serve/";
export declare const MEDIA_PREFIX = "media-source://image_upload";
export interface ImageMutableParams {
    name: string;
}
export declare const getIdFromUrl: (url: string) => string | undefined;
export declare const generateImageThumbnailUrl: (mediaId: string, size?: number, original?: boolean) => string;
export declare const fetchImages: (hass: HomeAssistant) => Promise<Image[]>;
export declare const createImage: (fetchWithAuth: HomeAssistant["fetchWithAuth"], localize: LocalizeFunc, file: File) => Promise<Image>;
export declare const updateImage: (hass: HomeAssistant, id: string, updates: Partial<ImageMutableParams>) => Promise<Image>;
export declare const deleteImage: (callWS: HomeAssistant["callWS"], id: string) => Promise<unknown>;
export declare const getImageData: (hassUrl: HomeAssistant["hassUrl"], url: string) => Promise<Blob>;
export {};

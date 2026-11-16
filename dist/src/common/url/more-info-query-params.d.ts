import { type MoreInfoView } from "../../dialogs/more-info/more-info-view";
import type { SearchParamsSource } from "./query-params";
export interface MoreInfoUrlData {
    entityId?: string;
    view?: MoreInfoView;
}
export interface CreateMoreInfoUrlData {
    entityId: string;
    view: MoreInfoView;
}
export declare const decodeMoreInfoUrl: (search: SearchParamsSource) => MoreInfoUrlData;
export declare const createMoreInfoUrl: (base: string, data: CreateMoreInfoUrlData) => string;
export declare const removeMoreInfoUrl: (base: string) => string;

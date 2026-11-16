import type { MarketplaceData } from "../../../data/marketplace/marketplace";
export interface MarketplaceCustomRepositoriesDialogParams {
    marketplace: MarketplaceData;
}
export declare const showMarketplaceCustomRepositoriesDialog: (element: HTMLElement, dialogParams: MarketplaceCustomRepositoriesDialogParams) => void;

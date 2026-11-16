import type { MarketplaceData } from "../../../data/marketplace/marketplace";
import type { RepositoryInfo } from "../../../data/marketplace/repository";
export interface MarketplaceInstallDialogParams {
    marketplace: MarketplaceData;
    repositoryId: string;
    repository?: RepositoryInfo;
    chooseVersion?: boolean;
    reinstall?: boolean;
}
export declare const showMarketplaceInstallDialog: (element: HTMLElement, dialogParams: MarketplaceInstallDialogParams) => void;

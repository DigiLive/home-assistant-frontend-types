import type { ConfigEntry } from "../../../data/config_entries";
import type { RepositoryBase } from "../../../data/marketplace/repository";
export interface MarketplaceInUseDialogParams {
    repository: RepositoryBase;
    entries: ConfigEntry[];
    deleteAndUninstall: () => Promise<void>;
}
export declare const showMarketplaceInUseDialog: (element: HTMLElement, dialogParams: MarketplaceInUseDialogParams) => void;

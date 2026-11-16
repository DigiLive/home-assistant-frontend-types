import type { LocalizeFunc } from "../../../common/translations/localize";
import type { RepositoryBase, RepositoryInfo } from "../../../data/marketplace/repository";
import type { HaMarketplaceDashboard } from "../dashboards/ha-marketplace-dashboard";
import type { HaMarketplaceRepositoryDashboard } from "../dashboards/ha-marketplace-repository-dashboard";
import type { MarketplaceApi } from "../tools/connect-github";
export interface MarketplaceRepositoryMenuItem {
    value: string;
    path: string;
    label: string;
    action: () => void;
    variant?: "danger";
}
export type MarketplaceRepositoryMenuEntry = MarketplaceRepositoryMenuItem | {
    divider: true;
};
export declare const renderRepositoryMenuEntry: (entry: MarketplaceRepositoryMenuEntry) => import("lit-html").TemplateResult<1>;
type MarketplaceDashboardElement = HaMarketplaceRepositoryDashboard | HaMarketplaceDashboard;
export declare const repositoryMenuItems: (element: MarketplaceDashboardElement, api: MarketplaceApi, repository: RepositoryBase | RepositoryInfo, localize: LocalizeFunc) => MarketplaceRepositoryMenuEntry[];
export {};

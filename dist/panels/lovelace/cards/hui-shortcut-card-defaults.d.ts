import type { NavigationPathInfo } from "../../../data/compute-navigation-path-info";
import type { ActionConfig } from "../../../data/lovelace/config/action";
import type { ServiceInfo } from "../../../data/compute-service-info";
import type { LocalizeFunc } from "../../../common/translations/localize";
export declare const getShortcutCardDefaults: (localize: LocalizeFunc, action: ActionConfig | undefined, navInfo: NavigationPathInfo, serviceInfo: ServiceInfo) => NavigationPathInfo;

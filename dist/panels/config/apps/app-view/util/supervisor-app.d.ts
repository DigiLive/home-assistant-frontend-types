import type { HassioAddonDetails } from "../../../../../data/hassio/addon";
import type { SupervisorArch } from "../../../../../data/supervisor/supervisor";
export declare const addonArchIsSupported: import("memoize-one").MemoizedFn<(supported_archs: SupervisorArch[], addon_archs: SupervisorArch[]) => boolean>;
export declare const extractChangelog: (addon: HassioAddonDetails, content: string) => string;

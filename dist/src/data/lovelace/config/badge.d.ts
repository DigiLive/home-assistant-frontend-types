import type { VisibilityCondition } from "../../../panels/lovelace/common/validate-condition";
export interface LovelaceBadgeConfig {
    type: string;
    [key: string]: any;
    visibility?: VisibilityCondition[];
    disabled?: boolean;
}
export declare const ensureBadgeConfig: (config: Partial<LovelaceBadgeConfig> | string) => LovelaceBadgeConfig;

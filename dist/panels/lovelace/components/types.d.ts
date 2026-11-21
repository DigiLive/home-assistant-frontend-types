import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { VisibilityCondition } from "../common/validate-condition";
import type { LovelaceElementConfig } from "../elements/types";
export interface ConditionalBaseConfig extends LovelaceCardConfig {
    card: LovelaceCardConfig | LovelaceElementConfig;
    conditions: VisibilityCondition[];
}
export declare const TIMESTAMP_RENDERING_FORMATS: readonly ["relative", "total", "date", "time", "datetime"];
export type TimestampRenderingFormat = (typeof TIMESTAMP_RENDERING_FORMATS)[number] | {
    type: (typeof TIMESTAMP_RENDERING_FORMATS)[number];
    style?: "short" | "long";
};
export declare const timeFormatConfigStruct: import("superstruct").Struct<"date" | "datetime" | "relative" | "time" | "total" | {
    type: "date" | "datetime" | "relative" | "time" | "total";
    style: "long" | "short";
}, null>;

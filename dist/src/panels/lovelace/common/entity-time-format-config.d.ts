import type { TimestampRenderingFormat } from "../components/types";
interface LegacyTimeFormatConfig {
    type?: string;
    time_format?: TimestampRenderingFormat;
    /** @deprecated use `time_format` instead */
    format?: TimestampRenderingFormat;
}
export declare const migrateTimeFormatConfig: <T extends LegacyTimeFormatConfig>(config: T) => T;
export {};

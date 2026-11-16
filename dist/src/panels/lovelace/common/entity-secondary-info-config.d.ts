interface LegacySecondaryInfoConfig {
    type?: string;
    secondary_info?: string | string[];
}
export declare const migrateSecondaryInfoConfig: <T extends LegacySecondaryInfoConfig>(config: T) => T;
export {};

interface LegacyStateColorConfig {
    type?: string;
    color?: string;
    state_color?: boolean;
}
export declare const migrateStateColorConfig: <T extends LegacyStateColorConfig>(config: T) => T;
export declare const applyDefaultColor: <T extends {
    type?: string;
    color?: string;
}>(config: T, color: string | undefined) => T;
export {};

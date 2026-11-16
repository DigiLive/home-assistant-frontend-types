export interface CustomShortcutItem {
    type: "custom";
    path: string;
    label?: string;
    icon?: string;
    color?: string;
}
export interface SummaryShortcutItem {
    type: "summary";
    key: string;
    hidden?: boolean;
}
export type ShortcutItem = CustomShortcutItem | SummaryShortcutItem;
export declare const DEFAULT_SUMMARY_KEYS: readonly ["light", "climate", "security", "media_players", "maintenance", "weather", "energy"];
export type DefaultSummaryKey = (typeof DEFAULT_SUMMARY_KEYS)[number];
export declare function resolveShortcutItems(saved: ShortcutItem[] | undefined): ShortcutItem[];

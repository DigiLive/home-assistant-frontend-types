import type { LocalizeFunc } from "../../../common/translations/localize";
import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
import type { Lovelace } from "../types";
import type { LovelacePath } from "./lovelace-path";
interface ClipboardItemConfigs {
    card: LovelaceCardConfig;
    badge: LovelaceBadgeConfig;
}
export type ClipboardItemType = keyof ClipboardItemConfigs;
export interface ClipboardActionParams<K extends ClipboardItemType> {
    type: K;
    path: LovelacePath;
    config: ClipboardItemConfigs[K];
    setClipboard: (config: ClipboardItemConfigs[K]) => void;
}
export declare function performCopy<K extends ClipboardItemType>(localize: LocalizeFunc, lovelace: Lovelace, { type, config, setClipboard }: ClipboardActionParams<K>): void;
export interface PasteParams<K extends ClipboardItemType> {
    type: K;
    path: LovelacePath;
    config: ClipboardItemConfigs[K];
    replace?: boolean;
}
export declare function performPaste<K extends ClipboardItemType>(localize: LocalizeFunc, lovelace: Lovelace, { type, path, config, replace }: PasteParams<K>): Promise<void>;
export declare function performCut<K extends ClipboardItemType>(localize: LocalizeFunc, lovelace: Lovelace, { type, path, config, setClipboard }: ClipboardActionParams<K>): Promise<void>;
export {};

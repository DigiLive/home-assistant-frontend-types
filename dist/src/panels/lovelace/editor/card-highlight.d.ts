import type { LovelaceBadgeConfig } from "../../../data/lovelace/config/badge";
import type { LovelaceCardConfig } from "../../../data/lovelace/config/card";
type PastedItem = LovelaceCardConfig | LovelaceBadgeConfig;
export declare const setCardHighlight: (item: PastedItem) => void;
export declare const clearCardHighlight: () => void;
export declare const takeCardHighlight: (item: PastedItem | undefined) => boolean;
export {};

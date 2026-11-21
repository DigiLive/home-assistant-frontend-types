import type { HomeAssistant } from "../../types";
export type QuickBarSection = "entity" | "device" | "area" | "navigate" | "command";
export interface QuickBarParams {
    entityFilter?: string;
    mode?: QuickBarSection;
    showHint?: boolean;
}
/** Non-admin users cannot scope the bar to command, device, or area (those sections are admin-only). */
export declare const effectiveQuickBarMode: (user: HomeAssistant["user"], mode?: QuickBarSection) => QuickBarSection | undefined;
export declare const loadQuickBar: () => Promise<typeof import("./ha-quick-bar")>;
export declare const showQuickBar: (element: HTMLElement, dialogParams: QuickBarParams) => void;
export declare const closeQuickBar: () => void;

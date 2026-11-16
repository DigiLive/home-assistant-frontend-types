import type { CustomPanelConfig } from "../../data/panel_custom";
export declare const getUrl: (panelConfig: CustomPanelConfig) => {
    type: "module" | "js";
    url: string;
};
export declare const loadCustomPanel: (panelConfig: CustomPanelConfig) => Promise<unknown>;

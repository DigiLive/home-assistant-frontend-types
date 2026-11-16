export interface DebugSafeArea {
    top: number;
    right: number;
    bottom: number;
    left: number;
    highlight: boolean;
}
export declare const DEBUG_SAFE_AREA_TOOL_STORAGE_KEY = "debugSafeAreaTool";
export declare const DEBUG_SAFE_AREA_STORAGE_KEY = "debugSafeArea";
export declare const applyDebugSafeArea: (config?: DebugSafeArea) => void;

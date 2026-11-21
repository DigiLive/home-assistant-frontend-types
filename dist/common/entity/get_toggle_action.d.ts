interface SpecialToggleAction {
    on: string;
    off?: string;
    feature?: number[];
}
export declare const SPECIAL_TOGGLE_ACTIONS: Record<string, SpecialToggleAction>;
export declare const getToggleAction: (domain: string, onOff: boolean) => string;
export {};

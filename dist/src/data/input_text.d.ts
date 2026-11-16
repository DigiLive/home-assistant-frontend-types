import type { HomeAssistant } from "../types";
export interface InputText {
    id: string;
    name: string;
    icon?: string;
    initial?: string;
    min?: number;
    max?: number;
    pattern?: string;
    mode?: "text" | "password";
    unit_of_measurement?: string;
}
export interface InputTextMutableParams {
    name: string;
    icon: string;
    initial: string;
    min: number;
    max: number;
    pattern: string;
    mode: "text" | "password";
}
export declare const setValue: (callService: HomeAssistant["callService"], entity: string, value: string) => Promise<import("../types").ServiceCallResponse<any>>;
export declare const fetchInputText: (hass: HomeAssistant) => Promise<InputText[]>;
export declare const createInputText: (hass: HomeAssistant, values: InputTextMutableParams) => Promise<InputText>;
export declare const updateInputText: (hass: HomeAssistant, id: string, updates: Partial<InputTextMutableParams>) => Promise<InputText>;
export declare const deleteInputText: (hass: HomeAssistant, id: string) => Promise<unknown>;

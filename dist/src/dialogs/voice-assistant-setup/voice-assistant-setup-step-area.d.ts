import { LitElement } from "lit";
import type { HomeAssistant } from "../../types";
import "../../components/ha-area-picker";
export declare class HaVoiceAssistantSetupStepArea extends LitElement {
    hass: HomeAssistant;
    deviceId: string;
    protected render(): import("lit-html").TemplateResult<1>;
    private _setArea;
    private _nextStep;
    static styles: (import("lit").CSSResult | import("lit").CSSResult[])[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-voice-assistant-setup-step-area": HaVoiceAssistantSetupStepArea;
    }
}

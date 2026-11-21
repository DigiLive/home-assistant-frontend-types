import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
export declare class VoiceAssistantBrandicon extends LitElement {
    private _ui;
    private _config;
    private _brandsAccessToken?;
    voiceAssistantId: string;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "voice-assistant-brand-icon": VoiceAssistantBrandicon;
    }
}

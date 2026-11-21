import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-language-picker";
import "../../../../components/ha-select";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-textarea";
import "../../../../components/ha-tip";
import "../../../../components/item/ha-list-item-base";
import "../../../../components/list/ha-list-base";
import "../../../../components/voice-assistant-brand-icon";
import type { CloudStatusLoggedIn } from "../../../../data/cloud";
import type { CloudTTSInfo } from "../../../../data/cloud/tts";
import "../../../../layouts/hass-subpage";
import type { HomeAssistant } from "../../../../types";
export declare const getCloudTtsSupportedVoices: (language: string, info: CloudTTSInfo | undefined) => {
    voiceId: string;
    voiceName: string;
}[];
export declare class CloudTTSPref extends LitElement {
    hass: HomeAssistant;
    cloudStatus?: CloudStatusLoggedIn;
    narrow: boolean;
    private savingPreferences;
    private ttsInfo?;
    private _loadingExample;
    private _messageInput?;
    private _message;
    private _target;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private getLanguages;
    private getSupportedVoices;
    private _getTargetOptions;
    private _copyVoiceId;
    private _handleTargetChanged;
    private _playExample;
    private _createAutomation;
    private _playBrowser;
    private _handleLanguageChange;
    private _handleVoiceChange;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "cloud-tts-pref": CloudTTSPref;
    }
}

import type { HassEntity } from "home-assistant-js-websocket";
import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-control-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-icon-button";
import "../../../../components/ha-select";
import "../../../../components/input/ha-input";
import type { HomeAssistant } from "../../../../types";
declare class MoreInfoSirenAdvancedControls extends LitElement {
    hass: HomeAssistant;
    _stateObj?: HassEntity;
    private _open;
    _tone?: string;
    _volume?: number;
    _duration?: number;
    showDialog({ stateObj }: {
        stateObj: HassEntity;
    }): void;
    closeDialog(): void;
    private _dialogClosed;
    render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleToneChange;
    private _handleVolumeChange;
    private _handleDurationChange;
    private _turnOn;
    private _turnOff;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-siren-advanced-controls": MoreInfoSirenAdvancedControls;
    }
}
export {};

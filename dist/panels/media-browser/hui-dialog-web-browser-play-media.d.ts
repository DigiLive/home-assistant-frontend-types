import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../components/ha-dialog";
import "../../components/ha-hls-player";
import type { HomeAssistant } from "../../types";
import type { WebBrowserPlayMediaDialogParams } from "./show-media-player-dialog";
export declare class HuiDialogWebBrowserPlayMedia extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _img?;
    showDialog(params: WebBrowserPlayMediaDialogParams): void;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-web-browser-play-media": HuiDialogWebBrowserPlayMedia;
    }
}

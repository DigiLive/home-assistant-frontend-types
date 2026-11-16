import { LitElement, nothing } from "lit";
import "./ha-alert";
import "./ha-button";
import "./ha-dropdown";
import "./ha-dropdown-item";
import "./ha-secure-connection-alert";
import "./ha-spinner";
import "./input/ha-input";
declare class HaQrScanner extends LitElement {
    private _localize;
    private _config;
    description?: string;
    alternativeOptionLabel?: string;
    validate?: (value: string) => string | undefined;
    private _cameras?;
    private _loading;
    private _error?;
    private _warning?;
    private _selectedCamera?;
    private _qrScanner?;
    private _qrNotFoundCount;
    private _removeListener?;
    private _video?;
    private _canvasContainer?;
    private _manualInput?;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private get _nativeBarcodeScanner();
    private _loadQrScanner;
    private _listCameras;
    private _qrCodeError;
    private _qrCodeScanned;
    private _manualKeyup;
    private _manualPaste;
    private _manualSubmit;
    private _handleDropdownSelect;
    private _openExternalScanner;
    private _closeExternalScanner;
    private _notifyExternalScanner;
    private _reportError;
    private _reportWarning;
    private _retry;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HASSDomEvents {
        "qr-code-scanned": {
            value: string;
        };
        "qr-code-closed": undefined;
        "qr-code-more-options": undefined;
    }
    interface HTMLElementTagNameMap {
        "ha-qr-scanner": HaQrScanner;
    }
}
export {};

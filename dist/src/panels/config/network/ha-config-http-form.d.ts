import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-button";
import "../../../components/ha-card";
import "../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../types";
declare class HaConfigHttpForm extends LitElement {
    hass: HomeAssistant;
    private _stable?;
    private _config?;
    private _error?;
    private _fieldErrors;
    private _saving;
    private _showNoChanges;
    private _activeConfigType?;
    private _default?;
    private _revertedPending?;
    private _lastLoginAttemptsThreshold?;
    private _form?;
    private _firstAlert?;
    private _onConfigResolved;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _fetchConfig;
    private _formData;
    private _reviewReverted;
    private _computeLabel;
    private _computeHelper;
    private _valueChanged;
    private _newAddressUrl;
    private _showNewAddress;
    private _save;
    private _handleSaveError;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-config-http-form": HaConfigHttpForm;
    }
}
export {};

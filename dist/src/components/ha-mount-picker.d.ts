import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import { SupervisorMountUsage } from "../data/supervisor/mounts";
import "./ha-alert";
import "./ha-select";
declare class HaMountPicker extends LitElement {
    label?: string;
    value?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    usage?: SupervisorMountUsage;
    private _mounts?;
    private _error?;
    private _i18n;
    private _config;
    private _api;
    protected firstUpdated(): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _filterMounts;
    private _getMounts;
    private _mountChanged;
    private _setValue;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-mount-picker": HaMountPicker;
    }
}
export {};

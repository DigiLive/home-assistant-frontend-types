import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../ha-code-editor";
import "../ha-input-helper-text";
import "../ha-alert";
import type { TemplateSelector } from "../../data/selector";
export declare class HaTemplateSelector extends LitElement {
    private _localize;
    private _config;
    private _connection;
    selector: TemplateSelector;
    value?: string;
    label?: string;
    helper?: string;
    placeholder?: any;
    disabled: boolean;
    required: boolean;
    private warn;
    private _test;
    private _error?;
    private _errorLevel?;
    private _templateResult?;
    private _unsubRenderTemplate?;
    private _debounceError;
    disconnectedCallback(): void;
    connectedCallback(): void;
    protected updated(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _testToggle;
    private _subscribeTemplate;
    private _unsubscribeTemplate;
    private _handleChange;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-selector-template": HaTemplateSelector;
    }
}

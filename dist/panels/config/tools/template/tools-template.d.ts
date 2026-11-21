import type { CSSResultGroup } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-card";
import "../../../../components/ha-code-editor";
import "../../../../components/ha-expansion-panel";
import "../../../../components/ha-label";
import "../../../../components/ha-spinner";
import "../../../../components/ha-split-panel";
import "../../../../components/ha-svg-icon";
import "../../../../components/ha-tip";
import type { HomeAssistant } from "../../../../types";
declare class HaPanelDevTemplate extends LitElement {
    hass: HomeAssistant;
    narrow: boolean;
    private _error?;
    private _errorLevel?;
    private _rendering;
    private _templateResult?;
    private _unsubRenderTemplate?;
    private _splitPosition;
    private _splitOrientation;
    private _template;
    private _inited;
    private _subscribeRequestId;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected firstUpdated(): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _renderOrientationToggle;
    private _editorToolbarItems;
    private _renderEditorCard;
    private _renderResultCard;
    private _splitRepositioned;
    private _toggleOrientation;
    private _storeSplitPosition;
    static get styles(): CSSResultGroup;
    private _debounceRender;
    private _templateChanged;
    private _subscribeTemplate;
    private _unsubscribeTemplate;
    private _storeTemplate;
    private _restoreDemo;
    private _clear;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-template": HaPanelDevTemplate;
    }
}
export {};

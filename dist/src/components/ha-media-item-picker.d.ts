import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import type { MediaSelector, MediaSelectorValue } from "../data/selector";
import type { HomeAssistant } from "../types";
import "./ha-alert";
import "./ha-form/ha-form";
import "./media-player/ha-media-browser-thumbnail";
import "./ha-picture-upload";
export declare class HaMediaItemPicker extends LitElement {
    hass: HomeAssistant;
    selector: MediaSelector;
    value?: MediaSelectorValue;
    label?: string;
    helper?: string;
    disabled: boolean;
    required: boolean;
    multiple: boolean;
    context?: {
        filter_entity?: string | string[];
    };
    private _contextEntities;
    private get _hasAccept();
    willUpdate(changedProps: PropertyValues<this>): void;
    protected render(): import("lit-html").TemplateResult<1>;
    private _computeLabelCallback;
    private _computeHelperCallback;
    private _entityChanged;
    private _pickMedia;
    private _getActiveEntityId;
    private _handleKeyDown;
    private _pictureUploadMediaPicked;
    private _clearValue;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-media-item-picker": HaMediaItemPicker;
    }
}

import "@home-assistant/webawesome/dist/components/popover/popover";
import type { ContextType } from "@lit/context";
import "cally";
import type { HassConfig } from "home-assistant-js-websocket/dist/types";
import type { PropertyValues, TemplateResult } from "lit";
import { LitElement } from "lit";
import { internationalizationContext } from "../../data/context";
import "../ha-bottom-sheet";
import "../ha-icon-button";
import "../ha-icon-button-next";
import "../ha-icon-button-prev";
import "../ha-textarea";
import "./date-range-picker";
export type DateRangePickerRanges = Record<string, [Date, Date]>;
export declare const haDateRangePickerStyles: import("lit").CSSResult;
export declare class HaDateRangePicker extends LitElement {
    protected _i18n: ContextType<typeof internationalizationContext>;
    protected _hassConfig: HassConfig;
    startDate: Date;
    endDate: Date;
    ranges?: DateRangePickerRanges | false;
    private _ranges?;
    timePicker: boolean;
    backdrop: boolean;
    disabled: boolean;
    minimal: boolean;
    extendedPresets: boolean;
    popoverPlacement: "bottom" | "top" | "left" | "right" | "top-start" | "top-end" | "right-start" | "right-end" | "bottom-start" | "bottom-end" | "left-start" | "left-end";
    private _opened;
    private _pickerWrapperOpen;
    private _openedNarrow;
    private _popoverWidth;
    private _containerElement?;
    private _textareaElement?;
    private _narrow;
    private _unsubscribeTinyKeys?;
    connectedCallback(): void;
    protected willUpdate(changedProps: PropertyValues): void;
    open(): void;
    protected render(): TemplateResult;
    /**
     * The control that opens the picker. It has to carry `id="field"`, which the
     * popover anchors to.
     */
    protected _renderField(): TemplateResult<1>;
    protected _formatRange(separator: string): string;
    private _renderPicker;
    private _hidePicker;
    disconnectedCallback(): void;
    private _handleResize;
    private _dialogOpened;
    private _handlePopoverHide;
    protected _handleNext(ev: MouseEvent): void;
    protected _handlePrev(ev: MouseEvent): void;
    private _shift;
    private _closePicker;
    protected _openPicker(ev?: Event): void;
    protected _handleKeydown(ev: KeyboardEvent): void;
    private _handleEscClose;
    private _setTextareaFocusStyle;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-date-range-picker": HaDateRangePicker;
    }
}

import type { PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-switch";
import "../../../../components/item/ha-row-item";
import type { LovelaceCardConfig } from "../../../../data/lovelace/config/card";
import { type LovelaceSectionConfig } from "../../../../data/lovelace/config/section";
import type { HomeAssistant } from "../../../../types";
export declare class HuiCardLayoutEditor extends LitElement {
    hass: HomeAssistant;
    config: LovelaceCardConfig;
    sectionConfig: LovelaceSectionConfig;
    private _defaultGridOptions?;
    private _customSize;
    private _contentRows?;
    private _preciseMode;
    private _cardElement?;
    private _mergedOptions;
    private _computeCardGridSize;
    private _recommendedSize;
    private _isDefault;
    private _configGridOptions;
    render(): import("lit-html").TemplateResult<1>;
    private _widthText;
    private _heightText;
    private _sizeText;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    private _updateDefaultGridOptions;
    private _updateContentRows;
    protected updated(changedProps: PropertyValues<this>): void;
    protected willUpdate(changedProps: PropertyValues<this>): void;
    private _recommendedSizeChanged;
    private _gridSizeChanged;
    private _fullWidthChanged;
    private _autoHeightChanged;
    private _preciseModeChanged;
    private _updateGridOptions;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-layout-editor": HuiCardLayoutEditor;
    }
}

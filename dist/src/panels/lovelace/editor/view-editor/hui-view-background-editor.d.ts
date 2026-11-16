import { LitElement, nothing } from "lit";
import type { PropertyValues } from "lit";
import "../../../../components/ha-form/ha-form";
import type { LovelaceDashboardBackgroundConfig } from "../../../../data/lovelace/config/view";
import type { HomeAssistant } from "../../../../types";
export interface BackgroundConfigTarget {
    background?: LovelaceDashboardBackgroundConfig;
}
export declare class HuiViewBackgroundEditor extends LitElement {
    hass: HomeAssistant;
    config?: BackgroundConfigTarget;
    private _resolvedImage?;
    private _localizeValueCallback;
    private _schema;
    protected updated(changedProps: PropertyValues<this>): void;
    private _currentBackgroundImage;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _backgroundData;
    private _valueChanged;
    private _computeLabelCallback;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-view-background-editor": HuiViewBackgroundEditor;
    }
    interface HASSDomEvents {
        "background-config-changed": {
            config: BackgroundConfigTarget;
        };
    }
}

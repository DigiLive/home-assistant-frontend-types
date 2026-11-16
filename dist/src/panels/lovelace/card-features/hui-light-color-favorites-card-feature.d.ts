import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { HomeAssistant } from "../../../types";
import type { LovelaceCardFeature } from "../types";
import type { LightColorFavoritesCardFeatureConfig, LovelaceCardFeatureContext } from "./types";
import "../../../dialogs/more-info/components/lights/ha-favorite-color-button";
import { getMoreInfoHintCardFeatureEditor } from "./get-more-info-hint-card-feature-editor";
export declare const supportsLightColorFavoritesCardFeature: (hass: HomeAssistant, context: LovelaceCardFeatureContext) => boolean;
declare class HuiLightColorFavoritesCardFeature extends LitElement implements LovelaceCardFeature {
    context?: LovelaceCardFeatureContext;
    private _stateObj?;
    private _localize;
    private _api;
    private _connection?;
    private _config?;
    private _entry?;
    private _favoriteColors;
    private _unsubEntityRegistry?;
    private _resizeController;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private _unsubscribeEntityRegistry;
    private _subscribeEntityEntry;
    private get _maxVisible();
    protected updated(changedProps: PropertyValues): void;
    static getStubConfig(): LightColorFavoritesCardFeatureConfig;
    static getConfigElement: typeof getMoreInfoHintCardFeatureEditor;
    setConfig(config: LightColorFavoritesCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _handleColorAction;
    static get styles(): import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-light-color-favorites-card-feature": HuiLightColorFavoritesCardFeature;
    }
}
export {};

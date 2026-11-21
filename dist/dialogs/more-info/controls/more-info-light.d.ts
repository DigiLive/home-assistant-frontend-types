import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import { type HASSDomEvent } from "../../../common/dom/fire_event";
import "../../../components/ha-attribute-icon";
import "../../../components/ha-control-select-menu";
import "../../../components/ha-icon-button-group";
import "../../../components/ha-icon-button-toggle";
import { type ExtEntityRegistryEntry } from "../../../data/entity/entity_registry";
import type { LightEntity } from "../../../data/light";
import "../../../state-control/ha-state-control-toggle";
import "../../../state-control/light/ha-state-control-light-brightness";
import "../components/ha-more-info-control-select-container";
import "../components/ha-more-info-state-header";
import "../components/lights/ha-more-info-light-favorite-colors";
import "../components/lights/light-color-rgb-picker";
import "../components/lights/light-color-temp-picker";
type MainControl = "brightness" | "color_temp" | "color";
declare class MoreInfoLight extends LitElement {
    private _localize;
    private _formatters;
    private _api;
    stateObj?: LightEntity;
    entry?: ExtEntityRegistryEntry | null;
    editMode?: boolean;
    private _effect?;
    private _mainControl;
    private _renderEffectIcon;
    protected updated(changedProps: PropertyValues<this>): void;
    private _setMainControl;
    private _resetMainControl;
    connectedCallback(): void;
    private _changeMainControl;
    private get _stateOverride();
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _toggle;
    private _setWhite;
    private _handleEffect;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-light": MoreInfoLight;
    }
    interface HASSDomEvents {
        "light-main-control-changed": {
            control: MainControl;
        };
    }
    interface HTMLElementEventMap {
        "light-main-control-changed": HASSDomEvent<HASSDomEvents["light-main-control-changed"]>;
    }
}
export {};

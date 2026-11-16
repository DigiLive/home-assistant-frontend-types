import type { CSSResultGroup, TemplateResult, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../../components/buttons/ha-call-service-button";
import "../../../../components/ha-alert";
import "../../../../components/ha-button";
import "../../../../components/ha-card";
import "../../../../components/ha-spinner";
import type { HomeAssistant, Route } from "../../../../types";
export declare class ToolsYamlConfig extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    narrow: boolean;
    route: Route;
    private _validating;
    private _reloadableItems;
    private _validateResult?;
    disconnectedCallback(): void;
    protected updated(changedProperties: PropertyValues<this>): void;
    protected render(): TemplateResult;
    private _validateConfig;
    private _restart;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "tools-yaml-config": ToolsYamlConfig;
    }
}

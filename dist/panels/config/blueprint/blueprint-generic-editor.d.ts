import type { CSSResultGroup, PropertyValues } from "lit";
import { LitElement } from "lit";
import "../../../components/ha-blueprint-picker";
import "../../../components/ha-card";
import "../../../components/ha-spinner";
import "../../../components/ha-markdown";
import "../../../components/ha-selector/ha-selector";
import "../../../components/ha-settings-row";
import type { BlueprintAutomationConfig } from "../../../data/automation";
import type { BlueprintOrError, Blueprints } from "../../../data/blueprint";
import type { BlueprintScriptConfig } from "../../../data/script";
import type { HomeAssistant } from "../../../types";
export declare abstract class HaBlueprintGenericEditor extends LitElement {
    hass: HomeAssistant;
    isWide: boolean;
    disabled: boolean;
    narrow: boolean;
    protected _blueprints?: Blueprints;
    protected firstUpdated(changedProps: PropertyValues<this>): void;
    protected get _blueprint(): BlueprintOrError | undefined;
    private _inputValues;
    private _hiddenInputs;
    private get _metadataInput();
    private get _values();
    private get _hidden();
    protected abstract get _config(): BlueprintAutomationConfig | BlueprintScriptConfig;
    protected renderCard(): import("lit-html").TemplateResult<1>;
    private _renderSection;
    private _renderSettingRow;
    protected abstract _getBlueprints(): any;
    private _blueprintChanged;
    private _inputChanged;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "blueprint-generic-editor": HaBlueprintGenericEditor;
    }
}

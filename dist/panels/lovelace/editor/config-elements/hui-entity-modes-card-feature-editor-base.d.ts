import type { HassEntity } from "home-assistant-js-websocket";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-form/ha-form";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export interface EntityModesCardFeatureEditorDescriptor<TConfig extends LovelaceCardFeatureConfig> {
    /** Matches `config.type` from the parent feature; used to narrow `setConfig` without assertions. */
    featureType: TConfig["type"];
    /** Used for `ui.panel.lovelace.editor.features.types.<id>.*` label keys. */
    i18nFeatureId: string;
    /**
     * Optional override for style list keys only (defaults to `i18nFeatureId`).
     * climate-hvac-modes intentionally uses climate-preset-modes for style_list.
     */
    styleListI18nFeatureId?: string;
    /** Config key for the reorderable multiselect (for example `fan_modes`). */
    modeField: keyof TConfig & string;
    defaultStyle: "dropdown" | "icons";
    /** Modes shown in the multiselect and used when enabling customize without a prior selection. */
    getAvailableModesOrdered: (stateObj: HassEntity | undefined) => string[];
    getModeLabel: (hass: HomeAssistant, stateObj: HassEntity | undefined, mode: string) => string;
}
export declare abstract class HuiEntityModesCardFeatureEditorBase<TConfig extends LovelaceCardFeatureConfig> extends LitElement implements LovelaceCardFeatureEditor {
    protected abstract readonly descriptor: EntityModesCardFeatureEditorDescriptor<TConfig>;
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: LovelaceCardFeatureConfig): void;
    private _schema;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _valueChanged;
    private _computeLabelCallback;
}

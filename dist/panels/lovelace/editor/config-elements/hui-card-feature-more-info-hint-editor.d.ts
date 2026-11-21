import { LitElement, nothing } from "lit";
import "../../../../components/ha-alert";
import type { HomeAssistant } from "../../../../types";
import type { LovelaceCardFeatureConfig, LovelaceCardFeatureContext } from "../../card-features/types";
import type { LovelaceCardFeatureEditor } from "../../types";
export declare class HuiCardFeatureMoreInfoHintEditor extends LitElement implements LovelaceCardFeatureEditor {
    hass?: HomeAssistant;
    context?: LovelaceCardFeatureContext;
    private _config?;
    setConfig(config: LovelaceCardFeatureConfig): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-card-feature-more-info-hint-editor": HuiCardFeatureMoreInfoHintEditor;
    }
}

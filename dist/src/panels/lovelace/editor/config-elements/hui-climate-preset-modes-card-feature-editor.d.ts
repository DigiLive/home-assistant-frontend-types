import type { ClimatePresetModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiClimatePresetModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<ClimatePresetModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<ClimatePresetModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-preset-modes-card-feature-editor": HuiClimatePresetModesCardFeatureEditor;
    }
}

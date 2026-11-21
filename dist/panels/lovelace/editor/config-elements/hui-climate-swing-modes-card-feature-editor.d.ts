import type { ClimateSwingModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiClimateSwingModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<ClimateSwingModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<ClimateSwingModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-modes-card-feature-editor": HuiClimateSwingModesCardFeatureEditor;
    }
}

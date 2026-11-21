import type { ClimateSwingHorizontalModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiClimateSwingHorizontalModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<ClimateSwingHorizontalModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<ClimateSwingHorizontalModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-swing-horizontal-modes-card-feature-editor": HuiClimateSwingHorizontalModesCardFeatureEditor;
    }
}

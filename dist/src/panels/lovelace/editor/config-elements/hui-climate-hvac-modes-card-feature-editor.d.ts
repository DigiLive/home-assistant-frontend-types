import type { ClimateHvacModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiClimateHvacModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<ClimateHvacModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<ClimateHvacModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-hvac-modes-card-feature-editor": HuiClimateHvacModesCardFeatureEditor;
    }
}

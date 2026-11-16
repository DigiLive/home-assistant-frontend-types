import type { WaterHeaterOperationModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiWaterHeaterOperationModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<WaterHeaterOperationModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<WaterHeaterOperationModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-water-heater-operation-modes-card-feature-editor": HuiWaterHeaterOperationModesCardFeatureEditor;
    }
}

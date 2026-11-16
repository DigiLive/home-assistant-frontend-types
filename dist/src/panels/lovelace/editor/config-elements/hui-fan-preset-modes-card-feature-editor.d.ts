import type { FanPresetModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiFanPresetModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<FanPresetModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<FanPresetModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-fan-preset-modes-card-feature-editor": HuiFanPresetModesCardFeatureEditor;
    }
}

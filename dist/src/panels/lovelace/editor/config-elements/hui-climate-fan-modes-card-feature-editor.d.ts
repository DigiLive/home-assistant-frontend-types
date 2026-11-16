import type { ClimateFanModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiClimateFanModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<ClimateFanModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<ClimateFanModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-climate-fan-modes-card-feature-editor": HuiClimateFanModesCardFeatureEditor;
    }
}

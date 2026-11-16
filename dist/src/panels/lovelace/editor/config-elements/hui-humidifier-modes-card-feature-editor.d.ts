import type { HumidifierModesCardFeatureConfig } from "../../card-features/types";
import type { EntityModesCardFeatureEditorDescriptor } from "./hui-entity-modes-card-feature-editor-base";
import { HuiEntityModesCardFeatureEditorBase } from "./hui-entity-modes-card-feature-editor-base";
export declare class HuiHumidifierModesCardFeatureEditor extends HuiEntityModesCardFeatureEditorBase<HumidifierModesCardFeatureConfig> {
    protected readonly descriptor: EntityModesCardFeatureEditorDescriptor<HumidifierModesCardFeatureConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-humidifier-modes-card-feature-editor": HuiHumidifierModesCardFeatureEditor;
    }
}

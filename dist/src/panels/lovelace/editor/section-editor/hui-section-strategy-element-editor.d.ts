import type { LovelaceStrategyConfig } from "../../../../data/lovelace/config/strategy";
import type { LovelaceStrategyEditor } from "../../strategies/types";
import { HuiTypedElementEditor } from "../hui-typed-element-editor";
export declare class HuiSectionStrategyElementEditor extends HuiTypedElementEditor<LovelaceStrategyConfig> {
    static styles: import("lit").CSSResultGroup[];
    protected getConfigElement(): Promise<LovelaceStrategyEditor | undefined>;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-section-strategy-element-editor": HuiSectionStrategyElementEditor;
    }
}

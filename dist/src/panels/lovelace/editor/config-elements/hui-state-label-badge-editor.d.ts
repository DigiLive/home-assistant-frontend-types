import type { StateLabelBadgeConfig } from "../../badges/types";
import { HuiEntityBadgeEditor } from "./hui-entity-badge-editor";
export declare class HuiStateLabelBadgeEditor extends HuiEntityBadgeEditor {
    setConfig(config: StateLabelBadgeConfig): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-state-label-badge-editor": HuiStateLabelBadgeEditor;
    }
}

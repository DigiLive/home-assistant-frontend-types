import SplitPanel from "@home-assistant/webawesome/dist/components/split-panel/split-panel";
import type { CSSResultGroup } from "lit";
export declare class HaSplitPanel extends SplitPanel {
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-split-panel": HaSplitPanel;
    }
}

import TabGroup from "@shoelace-style/shoelace/dist/components/tab-group/tab-group.component";
import "@shoelace-style/shoelace/dist/components/tab/tab";
export declare class HaSlTabGroup extends TabGroup {
    private _dragScrollController;
    setAriaLabels(): void;
    getAllPanels(): any[];
    protected handleClick(event: MouseEvent): void;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        "sl-tab-group": HaSlTabGroup;
    }
}

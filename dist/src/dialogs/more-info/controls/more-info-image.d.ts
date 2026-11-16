import { LitElement, nothing } from "lit";
import type { ImageEntity } from "../../../data/image";
declare class MoreInfoImage extends LitElement {
    private _connection?;
    private _formatEntityName?;
    stateObj?: ImageEntity;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "more-info-image": MoreInfoImage;
    }
}
export {};

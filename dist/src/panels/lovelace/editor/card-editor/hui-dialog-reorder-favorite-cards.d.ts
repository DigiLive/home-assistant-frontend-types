import type { CSSResultGroup } from "lit";
import { LitElement, nothing } from "lit";
import "../../../../components/ha-button";
import "../../../../components/ha-dialog";
import "../../../../components/ha-dialog-footer";
import "../../../../components/ha-sortable";
import "../../../../components/ha-svg-icon";
import type { HomeAssistant } from "../../../../types";
import type { ReorderFavoriteCardsDialogParams } from "./show-reorder-favorite-cards-dialog";
export declare class HuiDialogReorderFavoriteCards extends LitElement {
    hass: HomeAssistant;
    private _params?;
    private _open;
    private _favorites;
    showDialog(params: ReorderFavoriteCardsDialogParams): Promise<void>;
    closeDialog(): void;
    private _dialogClosed;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _moved;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-dialog-reorder-favorite-cards": HuiDialogReorderFavoriteCards;
    }
}

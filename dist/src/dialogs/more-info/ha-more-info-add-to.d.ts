import { LitElement } from "lit";
import "../../components/ha-alert";
import "../../components/ha-spinner";
import "../add-to/ha-add-to-action-list";
export declare class HaMoreInfoAddTo extends LitElement {
    private _config?;
    private _localize;
    entityId: string;
    private _defaultActions;
    private _externalActions;
    private _loading;
    private _loadActions;
    private _actionSelected;
    protected firstUpdated(): Promise<void>;
    protected render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-more-info-add-to": HaMoreInfoAddTo;
    }
    interface HASSDomEvents {
        "add-to-action-selected": undefined;
    }
}

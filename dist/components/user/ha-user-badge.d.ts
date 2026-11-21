import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import type { User } from "../../data/user";
import type { CurrentUser } from "../../types";
declare class UserBadge extends LitElement {
    user?: User | CurrentUser;
    private _connection?;
    private _states?;
    private _personEntityId?;
    private _personState?;
    willUpdate(changedProps: PropertyValues): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    private _updatePersonEntityId;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-user-badge": UserBadge;
    }
}
export {};

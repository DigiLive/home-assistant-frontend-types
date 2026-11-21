import type { CSSResultGroup, PropertyValues, TemplateResult } from "lit";
import { nothing } from "lit";
import { HaButton } from "../ha-button";
import "../ha-svg-icon";
export interface ChipFocusOptions extends FocusOptions {
    trailing?: boolean;
}
export declare class HaChipBase extends HaButton {
    label: string;
    disabled: boolean;
    removable: boolean;
    removeOnly: boolean;
    softDisabled: boolean;
    alwaysFocusable: boolean;
    hasIcon: boolean;
    tabIndex: number;
    referrerPolicy: HTMLAnchorElement["referrerPolicy"];
    ariaLabelRemove: string | null;
    private _primary?;
    private _remove?;
    private _trailingFocused;
    private _hasTrailingIcon;
    private _chipLocalize;
    variant: HaButton["variant"];
    appearance: HaButton["appearance"];
    size: HaButton["size"];
    protected get pressed(): boolean | undefined;
    get focusable(): boolean;
    constructor();
    focus(options?: ChipFocusOptions): void;
    click(): void;
    blur(): void;
    protected updated(changed: PropertyValues<this>): void;
    render(): TemplateResult<1>;
    private _renderPrimaryAction;
    protected renderPrimaryContent(): TemplateResult<1>;
    protected renderLeadingIcon(): TemplateResult | typeof nothing;
    private get _ariaDisabled();
    protected handlePrimaryClick(event: MouseEvent): void;
    private _iconChanged;
    private _blockDisabledClick;
    private _handleRemove;
    private _adjacentChip;
    private _handleRemoveFocus;
    private _handleRemoveBlur;
    private _handleKeyDown;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HASSDomEvents {
        remove: undefined;
        "update-focus": undefined;
    }
}

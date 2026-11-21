import type { TemplateResult } from "lit";
import { HaListBase } from "./ha-list-base";
/**
 * @element ha-list-nav
 * @extends {HaListBase}
 *
 * @summary
 * Navigation list. Wraps the list in a `<nav>` landmark. Items should be
 * `<ha-list-item-button>` with an `href`. Use `aria-label` to name the landmark.
 *
 * @csspart nav - The `<nav>` wrapper.
 * @csspart base - The inner `<div role="list">`.
 */
export declare class HaListNav extends HaListBase {
    protected readonly hostRole = "";
    ariaLabel: string | null;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-list-nav": HaListNav;
    }
}

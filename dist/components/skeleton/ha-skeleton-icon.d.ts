import type { CSSResultGroup } from "lit";
import { HaSkeleton } from "./ha-skeleton";
/**
 * Placeholder for an icon. Follows `ha-svg-icon`'s `--mdc-icon-size`
 * (24px by default), including inherited size overrides.
 */
export declare class HaSkeletonIcon extends HaSkeleton {
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-skeleton-icon": HaSkeletonIcon;
    }
}

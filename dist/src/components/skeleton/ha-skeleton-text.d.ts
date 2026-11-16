import type { CSSResultGroup } from "lit";
import { HaSkeleton } from "./ha-skeleton";
/**
 * Placeholder for a line of text, matching the tile secondary text skeleton.
 * Its height follows the surrounding font size. Set `width` in CSS to fit the
 * expected text.
 *
 * @cssprop --ha-skeleton-text-width - The width of the placeholder. Defaults to `140px`.
 */
export declare class HaSkeletonText extends HaSkeleton {
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-skeleton-text": HaSkeletonText;
    }
}

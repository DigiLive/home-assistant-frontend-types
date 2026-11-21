import WaSkeleton from "@home-assistant/webawesome/dist/components/skeleton/skeleton";
import type { CSSResultGroup } from "lit";
/**
 * Placeholder shown while content loads. Sized by its container unless a
 * more specific variant such as `ha-skeleton-text` or `ha-skeleton-icon` is used.
 *
 * @cssprop --ha-skeleton-color - The fill color. Defaults to `var(--ha-color-fill-neutral-normal-resting)`.
 * @cssprop --ha-skeleton-sheen-color - The sheen color when `effect="sheen"`. Defaults to `var(--ha-color-fill-neutral-loud-resting)`.
 * @cssprop --ha-skeleton-border-radius - The corner radius. Defaults to `var(--ha-border-radius-sm)`.
 */
export declare class HaSkeleton extends WaSkeleton {
    effect: WaSkeleton["effect"];
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-skeleton": HaSkeleton;
    }
}

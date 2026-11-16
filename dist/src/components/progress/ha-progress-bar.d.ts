import ProgressBar from "@home-assistant/webawesome/dist/components/progress-bar/progress-bar";
import type { CSSResultGroup } from "lit";
/**
 * Home Assistant progress bar component
 *
 * @element ha-progress-bar
 * @extends {ProgressBar}
 *
 * @summary
 * A stylable progress bar component based on webawesome progress bar.
 * Supports regular, indeterminate, and loading states with Home Assistant theming.
 *
 * @cssprop --ha-progress-bar-indicator-color - Color of the filled progress indicator.
 * @cssprop --ha-progress-bar-indicator-background - Background of the filled progress indicator. Overrides `--ha-progress-bar-indicator-color` when set (accepts any CSS background value, e.g. gradients).
 * @cssprop --ha-progress-bar-track-color - Color of the progress track.
 * @cssprop --ha-progress-bar-track-height - Height of the progress track. Defaults to `16px`.
 * @cssprop --ha-progress-bar-border-radius - Border radius of the progress bar. Defaults to `var(--ha-border-radius-pill)`.
 * @cssprop --ha-progress-bar-animation-duration - Animation duration for indeterminate/loading highlight. Defaults to `2.5s`.
 * @cssprop --ha-progress-bar-indicator-highlight-image - Image shown at the progress indicator tip (accepts any CSS `background-image` value). Hidden during indeterminate state.
 * @cssprop --ha-progress-bar-indicator-highlight-width - Width of the indicator highlight element. Defaults to `calc(var(--track-height) * 2)`.
 * @cssprop --ha-progress-bar-indicator-highlight-height - Height of the indicator highlight element. Defaults to `calc(var(--track-height) * 2)`.
 *
 * @attr {boolean} loading - Shows the loading highlight animation on top of the indicator.
 * @attr {boolean} indeterminate - Shows indeterminate progress animation (inherited from ProgressBar).
 */
export declare class HaProgressBar extends ProgressBar {
    loading: boolean;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-progress-bar": HaProgressBar;
    }
}

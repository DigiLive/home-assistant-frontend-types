import type { TemplateResult } from "lit";
/**
 * Removes the launch screen with a CSS fade-out transition.
 *
 * @param instant - Removes the launch screen without animation. Used when the
 * external app covers the frontend with its own splash screen until the
 * `frontend/loaded` event, where the animation would play invisibly underneath.
 * @returns Whether this call initiated the removal (false when the removal
 * was already initiated, e.g. while the fade-out is still running).
 */
export declare const removeLaunchScreen: (instant?: boolean) => boolean;
export declare const renderLaunchScreenContent: (content: TemplateResult, attribution: string) => void;
/**
 * Switches the launch screen OHF logo to the variant matching the applied
 * theme. The `<picture>` element initially picks a variant based on the system
 * color scheme, which can differ from the theme the frontend ends up applying.
 */
export declare const updateLaunchScreenLogo: (darkMode: boolean) => void;
export declare const updateLaunchScreenAttribution: (attribution: string) => void;

import type { CSSResultGroup, TemplateResult } from "lit";
import { LitElement } from "lit";
import type { Analytics, AnalyticsPreferences } from "../data/analytics";
import "./ha-switch";
import "./ha-tooltip";
import "./item/ha-row-item";
declare global {
    interface HASSDomEvents {
        "analytics-preferences-changed": {
            preferences: AnalyticsPreferences;
        };
    }
}
export declare class HaAnalytics extends LitElement {
    analytics?: Analytics;
    translationKeyPanel: "page-onboarding" | "config";
    private _localize;
    protected render(): TemplateResult;
    private _handleRowClick;
    static get styles(): CSSResultGroup;
}
declare global {
    interface HTMLElementTagNameMap {
        "ha-analytics": HaAnalytics;
    }
}

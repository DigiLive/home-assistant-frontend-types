import type { PropertyValues } from "lit";
import { LitElement, nothing } from "lit";
import "../../../components/ha-alert";
import "../../../components/ha-card";
import "../../../components/ha-markdown";
import "../../../components/ha-ripple";
import type { LovelaceCard, LovelaceCardEditor } from "../types";
import type { MarkdownCardConfig } from "./types";
export declare class HuiMarkdownCard extends LitElement implements LovelaceCard {
    static getConfigElement(): Promise<LovelaceCardEditor>;
    static getStubConfig(): MarkdownCardConfig;
    preview: boolean;
    private _connection?;
    private _user?;
    private _themes;
    private _config?;
    private _error?;
    private _errorLevel?;
    private _templateResult?;
    private _unsubRenderTemplate?;
    private _subscribedTo?;
    getCardSize(): number;
    private get _interactive();
    setConfig(config: MarkdownCardConfig): void;
    connectedCallback(): void;
    private _computeCacheKey;
    disconnectedCallback(): void;
    protected willUpdate(_changedProperties: PropertyValues<this>): void;
    protected render(): typeof nothing | import("lit-html").TemplateResult<1>;
    protected updated(changedProps: PropertyValues): void;
    private _tryConnect;
    private _tryDisconnect;
    private _handleAction;
    private _handleFocus;
    private _handleBlur;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        "hui-markdown-card": HuiMarkdownCard;
    }
}

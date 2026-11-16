import { ReactiveElement } from "lit";
import type { LovelaceViewConfig } from "../../../../data/lovelace/config/view";
import type { LovelaceStrategyDependency } from "../types";
export interface IframeViewStrategyConfig {
    type: "iframe";
    url: string;
    title?: string;
}
export declare class IframeViewStrategy extends ReactiveElement {
    static registryDependencies: readonly LovelaceStrategyDependency[];
    static generate(config: IframeViewStrategyConfig): Promise<LovelaceViewConfig>;
}
declare global {
    interface HTMLElementTagNameMap {
        "iframe-view-strategy": IframeViewStrategy;
    }
}
